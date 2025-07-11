# Future JD Law Firm Website

A professional law firm website built with Framer and deployed on Cloudflare Workers.

## Structure

- `page.html` - Main homepage
- `about/` - About page
- `cases/` - Case studies and examples
- `practice-areas/` - Legal practice areas
- `team/` - Team members
- `contact/` - Contact information
- `faqs/` - Frequently asked questions
- `404/` - 404 error page

## Deployment Options

### Option 1: Cloudflare Pages (Recommended)

1. Push to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/futurejd-landing.git
   git push -u origin main
   ```

2. Deploy on Cloudflare Pages:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages
   - Create new project
   - Connect your GitHub repository
   - Build settings: Leave empty (static site)
   - Publish directory: `/` (root)
   - Deploy

### Option 2: Cloudflare Workers

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

3. Deploy:
   ```bash
   wrangler deploy
   ```

## Local Development

To test locally:

1. Install a local server:
   ```bash
   npm install -g serve
   ```

2. Run the server:
   ```bash
   serve .
   ```

3. Open http://localhost:3000

## Custom Domain

After deployment, you can add a custom domain in the Cloudflare dashboard.

## Features

- Responsive design
- SEO optimized
- Fast loading with Cloudflare CDN
- Professional law firm branding
- Contact forms and information
- Practice area pages
- Case study examples 