# EmailJS Setup Instructions

Follow these steps to set up the contact form to send emails directly to your inbox:

## 1. Create EmailJS Account

1. Go to [https://emailjs.com](https://emailjs.com)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. **Copy the Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Portfolio Contact from {{from_name}}

Hello Mirza,

You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key

1. Go to **Account** in the EmailJS dashboard
2. Find your **Public Key** (e.g., `abcDEF123xyz`)

## 5. Update Environment Variables

1. Open `.env.local` in your project
2. Replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcDEF123xyz
```

## 6. Restart Development Server

```bash
npm run dev
```

## 7. Test the Form

- Fill out the contact form on your website
- Check your email inbox for the message
- You should receive emails directly without any mail client opening!

## 🎉 Done!

Your contact form now sends emails directly to your inbox. When users submit the form, you'll receive a professionally formatted email with their contact information and message.

### Email Limits (Free Plan)
- 200 emails per month
- Upgrade for higher limits if needed

### Troubleshooting
- Make sure all environment variables are correct
- Check EmailJS dashboard for error logs
- Verify your email service is properly connected 