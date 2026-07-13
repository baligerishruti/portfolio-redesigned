# Portfolio Deployment Guide

## Option 1: Vercel (Recommended - Easiest for Next.js)

### Step 1: Push Code to GitHub
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio commit"

# Create a GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"
4. Select your portfolio repository
5. Click "Deploy"

**That's it!** Your site will be live at a URL like `portfolio-abc123.vercel.app`

### Step 3: Custom Domain (Optional)
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain (e.g., yourname.com)
3. Update DNS records in your domain registrar

---

## Option 2: Netlify

### Step 1: Connect Repository
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select your Git provider (GitHub, GitLab, Bitbucket)
4. Choose your portfolio repository
5. Click "Deploy site"

### Build Settings
- Build command: `npm run build`
- Publish directory: `.next`

---

## Option 3: AWS Amplify

### Deploy via AWS Amplify Console
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Select your Git provider
4. Connect your repository
5. Accept build settings and deploy

---

## Option 4: Docker + Heroku / Railway / Render

### Create Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Deploy to Render.com
1. Go to [render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Deploy (free tier available)

---

## Option 5: Self-Hosted (VPS)

### Requirements
- VPS (DigitalOcean, Linode, AWS EC2, etc.)
- Node.js 18+ installed
- PM2 or systemd for process management

### Steps
```bash
# SSH into your server
ssh root@your_server_ip

# Clone your repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install

# Build for production
npm run build

# Start with PM2
npm install -g pm2
pm2 start "npm start" --name "portfolio"
pm2 startup
pm2 save
```

---

## Comparison Table

| Platform | Cost | Difficulty | Cold Starts | Custom Domain |
|----------|------|-----------|------------|---------------|
| **Vercel** | Free/Paid | Very Easy | None | Yes |
| **Netlify** | Free/Paid | Very Easy | None | Yes |
| **AWS Amplify** | Free tier | Medium | None | Yes |
| **Render** | Free/Paid | Easy | Possible | Yes |
| **Heroku** | Paid only | Medium | Yes | Yes |
| **Self-Hosted** | $5-50/mo | Hard | No | Yes |

---

## Quick Start: Vercel (Recommended)

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Deploy
```bash
cd d:\tutorials\portfolio
vercel
```

### 3. Follow the prompts
- Confirm project settings
- Wait for deployment
- Get your live URL!

---

## Environment Variables (If Needed)

If your project uses environment variables, create a `.env.local` file:
```
NEXT_PUBLIC_SITE_URL=your-domain.com
```

Deploy as usual—most platforms read `.env.local` automatically.

---

## After Deployment

### Update Social Links
Edit social links in:
- `src/components/Contact.tsx` - Update LinkedIn, GitHub URLs
- `src/components/Navbar.tsx` - Update email address

### Custom Domain Setup
1. Buy a domain from GoDaddy, Namecheap, or Google Domains
2. Update DNS records to point to your hosting platform
3. Enable HTTPS (automatic with Vercel/Netlify)

### Monitoring
- Check deployment status in your platform's dashboard
- Set up error tracking (Sentry.io)
- Monitor performance (Web Vitals)

---

## Need Help?

- **Vercel**: https://vercel.com/docs
- **Netlify**: https://docs.netlify.com
- **AWS Amplify**: https://aws.amazon.com/amplify/
- **Next.js Deployment**: https://nextjs.org/docs/deployment

Good luck! 🚀
