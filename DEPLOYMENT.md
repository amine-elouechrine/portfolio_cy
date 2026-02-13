# Deployment & Launch Guide
## Getting Your Portfolio Live on the Internet

This guide walks you through deploying your portfolio website using GitHub Pages (100% free).

---

## 🚀 Quick Deploy (5 Minutes)

### Prerequisites
- GitHub account ([sign up here](https://github.com/join) if needed)
- Git installed on your computer

### Step 1: Initialize Git Repository

```bash
cd /home/amine/portfolio

# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio commit - ready for launch"
```

### Step 2: Create GitHub Repository

**Option A: Via Website**
1. Go to https://github.com/new
2. Repository name: `portfolio` (or `your-username.github.io` for custom URL)
3. Description: "Personal portfolio - Cybersecurity & Embedded Systems Engineer"
4. Keep it **Public**
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

**Option B: Via GitHub CLI** (if installed)
```bash
gh repo create portfolio --public --source=. --remote=origin --push
```

### Step 3: Push Code to GitHub

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push code
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under "Source":
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes

✅ **Your site is now live at:**
```
https://YOUR_USERNAME.github.io/portfolio/
```

---

## 🎯 Custom Domain Setup (Optional)

Want `amineelouechrine.com` instead of `username.github.io/portfolio`?

### Step 1: Purchase a Domain

**Recommended Registrars:**
- **Namecheap** - ~€10/year - https://www.namecheap.com
- **Google Domains** - ~€12/year - https://domains.google
- **OVH** - ~€8/year - https://www.ovh.com

**Domain Suggestions:**
- `amineelouechrine.com`
- `amineelouechrine.dev`
- `ma-elouechrine.com`

### Step 2: Configure DNS

In your domain registrar's DNS settings, add these records:

**A Records** (point to GitHub Pages):
```
Type: A     Name: @     Value: 185.199.108.153
Type: A     Name: @     Value: 185.199.109.153
Type: A     Name: @     Value: 185.199.110.153
Type: A     Name: @     Value: 185.199.111.153
```

**CNAME Record** (for www subdomain):
```
Type: CNAME     Name: www     Value: YOUR_USERNAME.github.io
```

### Step 3: Configure Custom Domain in GitHub

1. In your GitHub repository
2. Go to **Settings** → **Pages**
3. Under "Custom domain", enter: `yourdomain.com`
4. Click **Save**
5. Wait for DNS check (can take up to 48 hours, usually 15 minutes)

### Step 4: Create CNAME File

Create a file named `CNAME` (no extension) in your repository root:

```bash
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### Step 5: Enable HTTPS

1. GitHub Settings → Pages
2. Check **"Enforce HTTPS"** (may take a few minutes to become available)
3. ✅ Your site now has SSL certificate!

---

## 📝 Pre-Launch Checklist

### Content Review
- [ ] **Personal Info Updated:** Name, email, links
- [ ] **CV Uploaded:** `cv/Mohamed_Amine_CV.pdf` exists
- [ ] **Projects Reviewed:** All technical details accurate
- [ ] **About Page:** Bio reflects current status
- [ ] **Contact Form:** Formspree ID configured

### Technical Checks
- [ ] **All Links Work:** Test every button and link
- [ ] **Images Load:** No broken image icons
- [ ] **Mobile Responsive:** Test on phone or Chrome DevTools
- [ ] **Cross-Browser:** Test on Chrome, Firefox, Safari
- [ ] **Forms Submit:** Test contact form sends email
- [ ] **Console Clean:** No JavaScript errors (F12 → Console)

### SEO & Performance
- [ ] **Meta Tags:** Verified on all pages
- [ ] **Lighthouse Audit:** Run test (F12 → Lighthouse)
  - Performance: 90+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+
- [ ] **HTML Validation:** https://validator.w3.org/
- [ ] **Page Titles:** Unique and descriptive for each page

### Accessibility
- [ ] **Alt Text:** All images have descriptive alt attributes
- [ ] **Keyboard Navigation:** Can tab through all links
- [ ] **Color Contrast:** Text readable on all backgrounds
- [ ] **Screen Reader:** Test with voiceover/NVDA

---

## 🧪 Testing Your Live Site

### Run Lighthouse Audit

1. Open your live site in Chrome
2. Press `F12` to open DevTools
3. Click **Lighthouse** tab (may need to click >> to find it)
4. Select all categories
5. Click **Analyze page load**
6. Aim for 90+ scores in all categories

### Test on Multiple Devices

**Desktop Browsers:**
- ✅ Chrome
- ✅ Firefox
- ✅ Safari (if on Mac)
- ✅ Edge

**Mobile:**
- ✅ iPhone (Safari)
- ✅ Android (Chrome)

**Chrome DevTools Responsive Mode:**
```
F12 → Toggle device toolbar (Ctrl+Shift+M)
Test: iPhone 12, iPad, Desktop
```

### Check Page Speed
Visit: https://pagespeed.web.dev/
- Enter your URL
- Review mobile and desktop scores
- Fix any critical issues

---

## 🔄 Updating Your Site

When you want to make changes:

```bash
# 1. Edit your files locally
# 2. Test locally (open index.html in browser)

# 3. Commit changes
git add .
git commit -m "Update project descriptions"

# 4. Push to GitHub
git push

# 5. Wait 30-60 seconds, refresh your live site
```

**Pro Tip:** GitHub Pages automatically rebuilds your site on every push!

---

## 🎨 Optional Enhancements

### Add Google Analytics

1. Create account: https://analytics.google.com
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add this code before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Create Sitemap

Create `sitemap.xml` in root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2026-02-13</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/about.html</loc>
    <lastmod>2026-02-13</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/projects/arm-testbench.html</loc>
    <lastmod>2026-02-13</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- Add other project pages -->
</urlset>
```

### Submit to Google Search Console

1. Visit: https://search.google.com/search-console
2. Add property: Your website URL
3. Verify ownership (HTML file method)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`
5. Wait 1-2 weeks to appear in Google search

---

## 🛠️ Troubleshooting

### Site Not Updating After Push

**Solution:**
1. Check GitHub Actions tab for build errors
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try incognito/private browsing mode
4. Wait 2-3 minutes for propagation

### Images Not Loading

**Solution:**
1. Check file paths are correct (case-sensitive!)
2. Verify images exist in `assets/images/`
3. Check browser console (F12) for 404 errors
4. Ensure images pushed to GitHub (`git add assets/images/`)

### Custom Domain Not Working

**Solution:**
1. Wait longer (DNS takes up to 48 hours)
2. Check DNS configuration is correct
3. Use https://dnschecker.org to verify propagation
4. Ensure CNAME file exists in repository root

### Form Not Sending Emails

**Solution:**
1. Verify Formspree form ID is correct
2. Check spam folder for test emails
3. Try alternative: Web3Forms (https://web3forms.com)

---

## 📊 Post-Launch Tasks

### Share Your Portfolio

- [ ] Add to LinkedIn profile (Contact info → Website)
- [ ] Update GitHub profile README
- [ ] Share on Twitter/X with #100DaysOfCode
- [ ] Add to Ensimag alumni network
- [ ] Include in email signature

### Monitor Performance

**Week 1:**
- Check Google Analytics daily
- Monitor contact form submissions
- Note any bug reports from friends

**Monthly:**
- Review analytics (traffic sources, popular pages)
- Update projects section with new work
- Add blog posts or articles (if applicable)

### SEO Optimization

**Ongoing:**
- Update content regularly (signals freshness to Google)
- Add internal links between pages
- Share on technical communities (Reddit, HN)
- Get backlinks (LinkedIn, GitHub profile, etc.)

---

## 🎉 You're Live!

Congratulations! Your portfolio is now live and accessible worldwide.

### Next Steps:
1. ✅ Share URL with friends for feedback
2. ✅ Add to job applications
3. ✅ Update regularly with new projects
4. ✅ Monitor analytics weekly

**Your Portfolio URL:**
```
🌐 https://YOUR_USERNAME.github.io/portfolio/
```

**Good luck with your alternance search! 🚀**

---

## 💬 Need Help?

If you encounter issues:
1. Check GitHub Pages documentation: https://pages.github.com/
2. Search GitHub Community Forum
3. Open an issue on the repository

**Happy hosting! 🎊**
