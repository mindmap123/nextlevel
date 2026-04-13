import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Lead } from '@/lib/models';
import { ILead } from '@/types';
import { sendLeadNotification } from '@/lib/email';

export async function POST(req: Request) {
    try {
        await connectDB();
        const body: ILead = await req.json();

        // Basic validation
        if (!body.email || !body.prenom || !body.nom) {
            return NextResponse.json(
                { error: 'Email, First Name, and Last Name are required.' },
                { status: 400 }
            );
        }

        // Check if lead exists
        const existingLead = await Lead.findOne({ email: body.email });
        if (existingLead) {
            // Update existing lead with new request details or just return error?
            // Usually, just update or log new inquiry. Let's update.
            existingLead.status = 'nouveau'; // Reset status if they inquire again
            existingLead.lastInquiryDate = new Date();
            existingLead.message = body.message || existingLead.message;
            await existingLead.save();

            return NextResponse.json({ success: true, lead: existingLead, type: 'updated' });
        }

        const newLead = await Lead.create(body);

        // Trigger email notification
        await sendLeadNotification(newLead);

        return NextResponse.json({ success: true, lead: newLead, type: 'created' }, { status: 201 });
    } catch (error) {
        console.error('Error creating lead:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectDB();
        const leads = await Lead.find({}).sort({ dateCreation: -1 });
        return NextResponse.json(leads);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
    }
}
