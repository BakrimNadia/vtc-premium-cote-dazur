import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  formType: "contact" | "reservation";
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  departure?: string;
  destination?: string;
  date?: string;
  time?: string;
  details?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.formType) {
      return NextResponse.json(
        { success: false, message: "Type de formulaire manquant." },
        { status: 400 }
      );
    }

    if (body.formType === "contact") {
      if (!body.name || !body.email || !body.message) {
        return NextResponse.json(
          { success: false, message: "Veuillez remplir les champs obligatoires." },
          { status: 400 }
        );
      }
    }

    if (body.formType === "reservation") {
      if (!body.name || !body.phone || !body.departure || !body.destination || !body.date || !body.time) {
        return NextResponse.json(
          { success: false, message: "Veuillez remplir les champs obligatoires de réservation." },
          { status: 400 }
        );
      }
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const subject =
      body.formType === "contact"
        ? `Nouveau message contact - ${body.name}`
        : `Nouvelle demande de réservation - ${body.name}`;

    const html =
      body.formType === "contact"
        ? `
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${body.name ?? ""}</p>
          <p><strong>Téléphone :</strong> ${body.phone ?? ""}</p>
          <p><strong>Email :</strong> ${body.email ?? ""}</p>
          <p><strong>Message :</strong></p>
          <p>${(body.message ?? "").replace(/\n/g, "<br />")}</p>
        `
        : `
          <h2>Nouvelle demande de réservation</h2>
          <p><strong>Nom :</strong> ${body.name ?? ""}</p>
          <p><strong>Téléphone :</strong> ${body.phone ?? ""}</p>
          <p><strong>Lieu de départ :</strong> ${body.departure ?? ""}</p>
          <p><strong>Destination :</strong> ${body.destination ?? ""}</p>
          <p><strong>Date :</strong> ${body.date ?? ""}</p>
          <p><strong>Heure :</strong> ${body.time ?? ""}</p>
          <p><strong>Informations complémentaires :</strong></p>
          <p>${(body.details ?? "").replace(/\n/g, "<br />")}</p>
        `;

    await transporter.sendMail({
      from: `"Site VTC Premium" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: body.email || process.env.GMAIL_USER,
      subject,
      html,
    });

    return NextResponse.json({
      success: true,
      message: "Votre demande a bien été envoyée.",
    });
  } catch (error) {
    console.error("Erreur API contact:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue lors de l'envoi.",
      },
      { status: 500 }
    );
  }
}