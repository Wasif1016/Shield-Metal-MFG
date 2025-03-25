import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter with updated configuration
const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com", // Updated host
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email content with improved formatting
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.COMPANY_EMAIL,
      subject: `New Contact Form Submission - Shield Metal`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <h2 style="color: #1f2937; margin-bottom: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Name:</strong>
              <p style="margin: 5px 0; color: #4b5563;">${name}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Email:</strong>
              <p style="margin: 5px 0; color: #4b5563;">${email}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Phone:</strong>
              <p style="margin: 5px 0; color: #4b5563;">${phone}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Message:</strong>
              <p style="margin: 5px 0; color: #4b5563; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px; text-align: center;">
            This message was sent from the Shield Metal website contact form.
          </p>
        </div>
      `,
    };

    // Send email with error logging
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Nodemailer error:', emailError);
      throw emailError;
    }

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
} 