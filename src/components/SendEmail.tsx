'use server';

import { Resend } from 'resend';

interface SendEmailProps {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}

const SendEmail = async ({ formData }: SendEmailProps) => {
  console.log("API KEY", process.env.NEXT_PUBLIC_RESEND_API_KEY);
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      //Create a resend account and put the profile email here
      to: 'diadiery3@gmail.com',
      subject: formData?.subject,
      html: `<p>De la part de : ${formData?.name} - ${formData?.email}<br>${formData?.message}</p>`
    });
    console.log('Response de l’envoi de l’email!', response);
  } catch (error) {
    console.error('Erreur lors de l’envoi de l’email:', error);
    throw new Error('Erreur lors de l’envoi de l’email.');
  }
};

export default SendEmail;
