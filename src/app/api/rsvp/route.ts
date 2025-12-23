import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 requests per minute per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { ok: false, message: 'Zu viele Anfragen. Bitte versuche es später erneut.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check (anti-spam)
    if (body.website) {
      // Silently accept but don't send email
      return NextResponse.json({ ok: true });
    }

    // Server-side validation
    const { firstName, lastName, email, guests, attendance } = body;

    if (!firstName || !lastName || !email || !attendance) {
      return NextResponse.json(
        { ok: false, message: 'Bitte fülle alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, message: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    // Configure Nodemailer with Bluewin SMTP
    const transporter = nodemailer.createTransport({
      host: "smtpauths.bluewin.ch",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Map attendance values to German labels
    const attendanceLabels: Record<string, string> = {
      'both': 'Apéro und Feier',
      'aperitif-only': 'Nur Apéro',
      'decline': 'Absage',
    };

    // Map dietary values to German labels
    const dietaryLabels: Record<string, string> = {
      '': 'Keine Einschränkungen',
      'vegetarian': 'Vegetarisch',
      'vegan': 'Vegan',
      'gluten-free': 'Glutenfrei',
      'other': 'Andere',
    };

    // Format email content
    const emailContent = `
Neue RSVP Anmeldung

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PERSÖNLICHE DATEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Vorname:               ${firstName}
Nachname:              ${lastName}
E-Mail:                ${email}
Telefon:               ${body.phone || 'Nicht angegeben'}

ANMELDEINFORMATIONEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Teilnahme:             ${attendanceLabels[attendance] || attendance}
Anzahl Gäste:          ${guests || '1'}
Essenswünsche:         ${dietaryLabels[body.dietary || ''] || body.dietary || 'Keine Einschränkungen'}

${body.message ? `BESONDERE WÜNSCHE / ANMERKUNGEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${body.message}

` : ''}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Diese Nachricht wurde automatisch über das Hochzeitswebsite-Formular gesendet.
Gesendet am: ${new Date().toLocaleString('de-CH', { timeZone: 'Europe/Zurich' })}
    `.trim();

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'melanie.landolf@hotmail.ch',
      replyTo: email,
      subject: `RSVP Anmeldung – ${firstName} ${lastName}`,
      text: emailContent,
    });

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error('RSVP submission error:', error);
    return NextResponse.json(
      { ok: false, message: 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.' },
      { status: 500 }
    );
  }
}
