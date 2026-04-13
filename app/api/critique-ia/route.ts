import { NextResponse } from 'next/server';
import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(req: Request) {
    try {
        const { url } = await req.json();

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        const systemPrompt = `Tu es un expert en optimisation de conversion web (CRO) et UX/UI.
    Ton but est d'analyser le site web fourni et de générer une critique constructive et sévère mais professionnelle.
    
    Réponds UNIQUEMENT avec un objet JSON valide suivant cette structure (sans markdown, juste le JSON) :
    {
      "score": number, // 0 à 100
      "problemes": ["string", "string", "string"], // 3 points faibles majeurs
      "recommandations": ["string", "string", "string"], // 3 actions concrètes
      "resume": "string" // Analyse globale en 2 phrases
    }
    
    Concentre-toi sur : vitesse (supposée), clarté des CTA, design "premium", confiance, et hiérarchie visuelle.
    Le site à analyser est : ${url}`;

        const { text } = await generateText({
            model: openai('gpt-4o'), // Or similar high-intelligence model
            system: systemPrompt,
            prompt: `Analyse ce site: ${url}`,
            temperature: 0.7,
        });

        // Clean markdown code blocks if present
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();

        let analysis;
        try {
            analysis = JSON.parse(cleanedText);
        } catch (e) {
            console.error("Failed to parse AI JSON:", text);
            return NextResponse.json({ error: "AI response format error" }, { status: 500 });
        }

        return NextResponse.json(analysis);

    } catch (error) {
        console.error('AI Critique Error:', error);
        return NextResponse.json({ error: 'Failed to generate critique' }, { status: 500 });
    }
}
