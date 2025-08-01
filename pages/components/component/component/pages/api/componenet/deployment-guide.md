# Rotech Data Consult - Next.js Deployment Guide

## 🚀 Quick Start

### 1. Create Your Next.js Project

```bash
# Create new Next.js project
npx create-next-app@latest rotech-website --typescript --tailwind --eslint --app

# Navigate to project
cd rotech-website

# Install additional dependencies
npm install @headlessui/react @heroicons/react framer-motion react-hook-form nodemailer @types/nodemailer
```

### 2. Replace Default Files

Copy all the component files I've provided into your project:

```
rotech-website/
├── pages/
│   ├── index.js                 # Homepage
│   └── api/
│       └── booking.js           # Contact form API
├── components/
│   ├── Header.js               # Navigation
│   ├── Hero.js                 # Hero section
│   ├── Courses.js              # Courses section
│   ├── BookingForm.js          # Booking form
│   └── [other components...]   # Add remaining sections
├── styles/
│   └── globals.css             # Global styles
├── tailwind.config.js          # Tailwind configuration
├── package.json                # Dependencies
└── .env.local                  # Environment variables
```

### 3. Update Global CSS

Replace `styles/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
}

@layer components {
  .section-padding {
    @apply py-20 px-4 sm:px-6 lg:px-8;
  }
  
  .container-max {
    @apply max-w-7xl mx-auto;
  }
  
  .btn-primary {
    @apply bg-primary-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 transform hover:scale-105;
  }
  
  .card-hover {
    @apply transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl;
  }
}
```

## 🔧 Vercel Deployment

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# ? Set up and deploy "rotech-website"? [Y/n] y
# ? Which scope do you want to deploy to? [Your Account]
# ? Link to existing project? [y/N] n
# ? What's your project's name? rotech-data-consult
# ? In which directory is your code located? ./
```

### Option 2: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: Rotech Data Consult website"
git branch -M main
git remote add origin https://github.com/yourusername/rotech-website.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repository
   - Vercel will automatically detect Next.js settings

3. **Configure Environment Variables:**
   In Vercel dashboard, go to Settings > Environment Variables and add:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=noreply@rotechconsult.com
   ADMIN_EMAIL=info@rotechconsult.com
   NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
   ```

## 📧 Email Setup

### Gmail Setup (Recommended for testing):

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password:**
   - Go to Google Account settings
   - Security > 2-Step Verification > App passwords
   - Generate password for "Mail"
   - Use this password in `SMTP_PASS`

### Production Email Services:
- **SendGrid** (recommended for production)
- **Mailgun**
- **Amazon SES**
- **Resend** (modern alternative)

## 🌐 Custom Domain Setup

1. **Buy domain** (e.g., rotechconsult.com)
2. **In Vercel Dashboard:**
   - Go to your project
   - Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

## 📱 Additional Components Needed

You'll need to create these remaining components:

```javascript
// components/Stats.js - Statistics section
// components/Services.js - Consulting services
// components/Team.js - Staff profiles
// components/Blog.js - Blog posts
// components/Research.js - Research papers
// components/Careers.js - Job listings
// components/Community.js - Community features
// components/Videos.js - YouTube integration
// components/Testimonials.js - Client reviews
// components/Contact.js - Contact information
// components/Footer.js - Website footer
```

## 🚀 Performance Optimization

### Image Optimization:
```javascript
// Use Next.js Image component
import Image from 'next/image'

<Image
  src="/team-member.jpg"
  alt="Team member"
  width={400}
  height={400}
  className="rounded-full"
/>
```

### SEO Optimization:
```javascript
// In each page/component
import Head from 'next/head'

<Head>
  <title>Courses - Rotech Data Consult</title>
  <meta name="description" content="Learn data analysis with our expert-led courses" />
</Head>
```

## 📊 Analytics Setup

Add to `pages/_app.js`:
```javascript
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Google Analytics
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export function pageview(url) {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}
```

## 🔒 Security Best Practices

1. **Environment Variables:** Never commit `.env.local` to Git
2. **API Rate Limiting:** Add rate limiting to contact form
3. **Input Validation:** Validate all form inputs
4. **CORS:** Configure proper CORS headers
5. **CSP Headers:** Add Content Security Policy

## 📈 Monitoring & Maintenance

1. **Vercel Analytics:** Enable in project settings
2. **Error Tracking:** Consider Sentry integration
3. **Uptime Monitoring:** Use services like UptimeRobot
4. **Performance:** Monitor Core Web Vitals

## 🎯 Launch Checklist

- [ ] All components created and styled
- [ ] Contact form working with email
- [ ] Mobile responsive design tested
- [ ] SEO meta tags added
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Analytics tracking setup
- [ ] Error pages customized (404, 500)
- [ ] Sitemap generated
- [ ] Social media meta tags added

## 🚨 Common Issues & Solutions

### Build Errors:
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Environment Variables Not Working:
- Ensure variables start with `NEXT_PUBLIC_` for client-side
- Restart development server after adding variables
- Check Vercel dashboard environment variables

### Email Not Sending:
- Verify SMTP credentials
- Check Gmail app password setup
- Test with a different email service

Your website will be live at: `https://your-project-name.vercel.app`

Ready to deploy? Let me know if you need help with any specific component!