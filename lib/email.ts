import { Resend } from 'resend';
import { SITE_CONFIG } from './constants';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadNotification(lead: any) {
    if (!process.env.RESEND_API_KEY) {
        console.warn("RESEND_API_KEY is missing, skipping email.");
        return;
    }

    try {
        await resend.emails.send({
            from: 'Agence Web <onboarding@resend.dev>', // Use your verified domain in prod
            to: [SITE_CONFIG.contactEmail], // Send to admin
            subject: `🎯 Nouveau Lead : ${lead.prenom} ${lead.nom}`,
            html: `
        <h1>Nouveau Lead Reçu</h1>
        <p><strong>Nom:</strong> ${lead.prenom} ${lead.nom}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Entreprise:</strong> ${lead.entreprise || 'Non renseigné'}</p>
        <p><strong>Service:</strong> ${lead.typeService}</p>
        <p><strong>Budget:</strong> ${lead.budget}</p>
        <p><strong>Message:</strong> ${lead.message}</p>
      `,
        });

        // Optional: Send confirmation to user
        await resend.emails.send({
            from: 'Agence Web <onboarding@resend.dev>',
            to: [lead.email],
            subject: `✅ Votre demande chez ${SITE_CONFIG.name}`,
            html: `
            <h1>Merci ${lead.prenom} !</h1>
            <p>Nous avons bien reçu votre demande de projet.</p>
            <p>Notre équipe va l'analyser et revenir vers vous sous 24h.</p>
            <br/>
            <p>L'équipe ${SITE_CONFIG.name}</p>
        `
        });

    } catch (error) {
        console.error("Failed to send email:", error);
    }
}
