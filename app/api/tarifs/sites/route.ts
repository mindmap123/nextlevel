import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Tarif } from '@/lib/models';

export async function GET() {
    try {
        await connectDB();
        // Fetch only website tariffs for this route, or generic if needed.
        // The prompt specified 'tarifs_sites' in schema, but we used a 'type' field in a single collection.
        const tarifs = await Tarif.find({ type: 'site' }).sort({ ordre: 1 });
        return NextResponse.json(tarifs);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
