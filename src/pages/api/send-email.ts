// API Route: /api/send-email.ts
// Place this file in your project at: src/pages/api/send-email.ts
// No TypeScript types needed - pure JavaScript style

import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Simple handler function
export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { to, name, phone, model, issue } = req.body;

    // Validate required fields
    if (!to || !name || !phone || !model || !issue) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('[Email] Sending booking emails for:', name);

    // Send admin email
    const adminEmailResult = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: to,
      subject: `New iPhone Repair Booking from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="margin: 0; font-size: 28px;">New Booking Received ✨</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">FixurDevice</p>
          </div>
          
          <div style="background: #f5f5f5; padding: 20px; margin: 0;">
            <h3 style="color: #333; margin-top: 0; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">Customer Information</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #333;">${name}</td>
              </tr>
              <tr style="background: white;">
                <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0; color: #333;"><a href="tel:${phone}" style="color: #06b6d4; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Device:</strong></td>
                <td style="padding: 8px 0; color: #333;">${model}</td>
              </tr>
            </table>
            
            <h3 style="color: #333; margin: 20px 0 10px 0; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">Issue Description</h3>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #06b6d4; color: #666;">
              ${issue.replace(/\n/g, '<br/>')}
            </div>
          </div>
          
          <div style="background: #e8f4f8; padding: 20px; border-left: 4px solid #0891b2;">
            <h3 style="color: #0891b2; margin-top: 0;">📋 Next Steps</h3>
            <ol style="color: #333;">
              <li>Review the customer's issue and device model</li>
              <li>Call <strong>${phone}</strong> to confirm the booking</li>
              <li>Arrange pickup or visit time</li>
              <li>Provide free diagnosis and quotation</li>
            </ol>
          </div>
          
          <div style="background: white; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; margin: 0; font-size: 12px;">
              <strong>FixurDevice - Premium iPhone Service Center</strong><br/>
              Bangalore<br/>
              <a href="tel:9343584460" style="color: #06b6d4; text-decoration: none;">+91 9663360775</a> | 
              <a href="mailto:fixurdevice.in@gmail.com" style="color: #06b6d4; text-decoration: none;">fixurdevice.in@gmail.com</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log('[Email] Admin email sent:', adminEmailResult);

    // Send customer confirmation email
    const customerEmailResult = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: to,
      subject: '✅ Your iPhone Repair Booking Confirmed - FixurDevice',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="margin: 0; font-size: 28px;">Booking Confirmed! 🎉</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">FixurDevice</p>
          </div>
          
          <div style="background: #f9fafb; padding: 30px 20px;">
            <p style="color: #333; font-size: 16px; margin-bottom: 20px;">Hi <strong>${name}</strong>,</p>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Thank you for booking with <strong>FixurDevice</strong>! We've received your iPhone repair request and will contact you shortly to confirm the details.
            </p>
            
            <div style="background: white; border-left: 4px solid #06b6d4; padding: 20px; border-radius: 4px; margin: 20px 0;">
              <h3 style="color: #0891b2; margin-top: 0;">📱 Your Booking Details</h3>
              <table style="width: 100%; color: #333;">
                <tr>
                  <td style="padding: 8px 0;"><strong>Device:</strong></td>
                  <td style="padding: 8px 0; text-align: right;">${model}</td>
                </tr>
                <tr style="background: #f5f5f5;">
                  <td style="padding: 8px 0;"><strong>Phone:</strong></td>
                  <td style="padding: 8px 0; text-align: right;"><a href="tel:${phone}" style="color: #06b6d4; text-decoration: none;">${phone}</a></td>
                </tr>
              </table>
            </div>
            
            <div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 20px; border-radius: 4px; margin: 20px 0;">
              <h3 style="color: #15803d; margin-top: 0;">✓ What Happens Next?</h3>
              <p style="color: #333; margin: 0 0 15px 0;">We will contact you within <strong>30 minutes</strong> to:</p>
              <ul style="color: #333; margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 8px;">Confirm your booking</li>
                <li style="margin-bottom: 8px;">Provide free diagnosis</li>
                <li style="margin-bottom: 8px;">Give you a quotation</li>
                <li>Arrange pickup or appointment</li>
              </ul>
            </div>
            
            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 4px; margin: 20px 0;">
              <p style="color: #92400e; margin: 0;"><strong>💡 Tip:</strong> Keep your phone nearby so we can reach you!</p>
            </div>
          </div>
          
          <div style="background: white; padding: 30px 20px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; margin: 0 0 15px 0; font-size: 14px;">
              <strong>FixurDevice - Premium iPhone Service</strong><br/>
              Bangalore
            </p>
            <p style="color: #666; margin: 0; font-size: 13px;">
              <a href="tel:9343584460" style="color: #06b6d4; text-decoration: none; margin-right: 15px;">📞 +91 9663360775</a>
              <a href="https://wa.me/919663360775" style="color: #06b6d4; text-decoration: none;">📱 WhatsApp</a>
            </p>
            <p style="color: #999; margin: 15px 0 0 0; font-size: 12px;">Available 24/7 for Emergencies</p>
          </div>
        </div>
      `,
    });

    console.log('[Email] Customer email sent:', customerEmailResult);

    // Check if either email had an error
    if (adminEmailResult.error || customerEmailResult.error) {
      console.error('[Email] Error sending emails:', {
        adminError: adminEmailResult.error,
        customerError: customerEmailResult.error,
      });

      return res.status(400).json({
        success: false,
        error: 'Failed to send one or more emails',
      });
    }

    // Success!
    console.log('[Email] Both emails sent successfully');
    return res.status(200).json({
      success: true,
      message: 'Emails sent successfully',
    });
  } catch (error: any) {
    console.error('[Email] Server error:', error);
    return res.status(500).json({
      success: false,
      error: error?.message || 'Failed to send email. Please try again later.',
    });
  }
}