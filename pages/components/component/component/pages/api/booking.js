import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, phone, company, service, message } = req.body

  // Basic validation
  if (!name || !email || !phone || !service) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    // Configure nodemailer transporter
    // You'll need to set these environment variables
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const serviceNames = {
      'training': 'Individual Training',
      'consulting': 'Business Consulting',
      'team-training': 'Team Training',
      'bi-setup': 'BI Implementation',
      'data-audit': 'Data Audit',
      'monitoring-evaluation': 'Monitoring & Evaluation'
    }

    // Email to you (notification)
    const adminEmail = {
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New Consultation Request - ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${serviceNames[service] || service}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No additional message'}</p>
        
        <hr>
        <p><em>Submitted from Rotech Data Consult website</em></p>
      `,
    }

    // Email to client (confirmation)
    const clientEmail = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for your consultation request - Rotech Data Consult',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #7B2CBF, #5A189A); padding: 40px; text-align: center;">
            <h1 style="color: white; margin: 0;">Rotech Data Consult</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Monitor. Analyze. Thrive.</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <h2 style="color: #7B2CBF;">Thank you, ${name}!</h2>
            
            <p>We've received your consultation request for <strong>${serviceNames[service] || service}</strong>.</p>
            
            <p>Our team will review your request and contact you within 24 hours to schedule your free consultation.</p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #7B2CBF; margin-top: 0;">What happens next?</h3>
              <ul style="color: #6c757d;">
                <li>Our expert will call you to understand your specific needs</li>
                <li>We'll schedule a convenient time for your consultation</li>
                <li>Receive a customized proposal for your project</li>
              </ul>
            </div>
            
            <p>In the meantime, feel free to explore our <a href="https://youtube.com/@rotechdataconsult" style="color: #7B2CBF;">YouTube channel</a> for free resources and tutorials.</p>
            
            <p>Best regards,<br>
            <strong>The Rotech Team</strong></p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #6c757d; font-size: 14px;">
            <p>Rotech Data Consult | Abuja, Nigeria</p>
            <p>Email: rotechdataconsult@gmail.com | WhatsApp: +234-902-761-5382</p>
          </div>
        </div>
      `,
    }

    // Send emails
    await transporter.sendMail(adminEmail)
    await transporter.sendMail(clientEmail)

    res.status(200).json({ message: 'Consultation request submitted successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ message: 'Failed to send email' })
  }
}

// Alternative: If you don't want to use nodemailer, you can integrate with services like:
// - EmailJS (client-side)
// - SendGrid
// - Mailgun
// - Resend
// - Or even a simple webhook to Zapier/Make.com

/*
// Example with a simpler approach - just log to console for development
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, phone, company, service, message } = req.body

  // Log the submission (in production, you'd save to database or send email)
  console.log('New consultation request:', {
    name, email, phone, company, service, message,
    timestamp: new Date().toISOString()
  })

  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1000))

  res.status(200).json({ message: 'Consultation request submitted successfully' })
}
*/