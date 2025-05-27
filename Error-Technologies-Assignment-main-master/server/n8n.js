import axios from 'axios';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Configuration for n8n
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || 'http://localhost:5678/webhook/lead-capture';

/**
 * Forwards lead data to n8n
 * @param {Object} leadData - The lead data to forward
 * @returns {Promise<void>}
 */
export const forwardToN8n = async (leadData) => {
  try {
    // If N8N_WEBHOOK_URL is set, send data to n8n
    if (N8N_WEBHOOK_URL) {
      await axios.post(N8N_WEBHOOK_URL, leadData);
      console.log('Lead data forwarded to n8n successfully');
    } else {
      // Fallback if n8n is not configured - send email directly
      await sendEmailNotification(leadData);
    }
  } catch (error) {
    console.error('Error forwarding data to n8n:', error);
    // Fallback to direct email notification if n8n forwarding fails
    await sendEmailNotification(leadData);
  }
};

/**
 * Sends email notification when n8n is not available
 * @param {Object} leadData - The lead data
 * @returns {Promise<void>}
 */
const sendEmailNotification = async (leadData) => {
  // Only attempt to send email if SMTP settings are configured
  if (!process.env.SMTP_HOST) {
    console.log('SMTP not configured, skipping email notification');
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const { name, email, company, message } = leadData;
    
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@leadgenpro.com',
      to: process.env.EMAIL_TO || 'sales@leadgenpro.com',
      subject: 'New Lead Submission',
      html: `
        <h2>New Lead Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message || 'Not provided'}</p>
      `
    });
    
    console.log('Email notification sent successfully');
  } catch (error) {
    console.error('Error sending email notification:', error);
    throw new Error('Failed to send email notification');
  }
};