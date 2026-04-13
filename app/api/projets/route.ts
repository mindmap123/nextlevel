import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Projet } from '@/lib/models';

export async function GET(req: Request) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const leadId = searchParams.get('leadId');

        const query = leadId ? { leadId } : {};
        const projets = await Projet.find(query).populate('leadId').sort({ dateDebut: -1 });

        return NextResponse.json(projets);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();
        const project = await Projet.create(body);
        return NextResponse.json(project, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
    }
}
