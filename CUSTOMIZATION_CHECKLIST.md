# Portfolio Website - Customization Checklist

Use this checklist to personalize your portfolio before launch.

## 🔴 Critical (Must Do Before Launch)

### Personal Information
- [x] ~~Update name~~ (Already correct: "Mohamed Amine El Ouechrine")
- [x] ~~Update email address~~ (Done: elouechrinemohamed@gmail.com)
- [x] ~~Update LinkedIn URL~~ (Done)
- [x] ~~Update GitHub URL~~ (Done: github.com/amine-elouechrine)
- [ ] Replace domain placeholders:
  - [ ] `index.html` - line 16, 21 (og:url, canonical)
  - [ ] `about.html` - similar lines
  - [ ] All project pages - canonical URLs
  - [ ] `sitemap.xml` - all URLs (5 locations)
  - [ ] `robots.txt` - line 8

### Contact Form
- [x] ~~Contact form~~ (Removed - using direct contact links instead)

### CV/Resume
- [ ] Export your CV as PDF
- [ ] Rename to: `Mohamed_Amine_CV.pdf`
- [ ] Place in `cv/` folder
- [ ] Ensure file size < 2MB
- [ ] Test download link works

## 🟡 High Priority (Important for Good Impression)

### Images

**Profile Photo:**
- [ ] Take/select professional photo
- [ ] Crop to 400×400px square
- [ ] Optimize to WebP format (< 50KB)
- [ ] Save as: `assets/images/profile.webp`
- [ ] Update `about.html` around line 99-104

**Project Screenshots:**
- [ ] ARM Test Bench:
  - [ ] Main hero image: `assets/images/projects/arm-testbench-hero.webp` (1200×675px)
  - [ ] Replace placeholder in `projects/arm-testbench.html` line ~60
  - [ ] Optional: Additional screenshots
- [ ] NachOS:
  - [ ] Hero image: `assets/images/projects/nachos-hero.webp`
  - [ ] Update `projects/nachos.html`
- [ ] MOCA Analyzer:
  - [ ] Hero image: `assets/images/projects/moca-analyzer-hero.webp`
  - [ ] Update `projects/moca-analyzer.html`

**Certification Badge:**
- [ ] Download ANSSI SecNumAcadémie badge
- [ ] Save as: `assets/images/certifications/anssi-badge.png`
- [ ] Update `index.html` line 206-207
- [ ] Update `about.html` certification section

**Social Preview Image:**
- [ ] Create 1200×630px preview image for social sharing
- [ ] Save as: `assets/images/og-preview.jpg`
- [ ] Update `index.html` line 17

### Content Review
- [ ] Review all project descriptions for accuracy
- [ ] Update dates in timeline (`about.html`)
- [ ] Verify all skills listed are current
- [ ] Check for typos (run through spell checker)
- [ ] Review bio text in `about.html`

## 🟢 Medium Priority (Nice to Have)

### Structured Data (SEO)
- [ ] Update JSON-LD in `index.html` (bottom of file):
  - [ ] URL
  - [ ] Profile image path
  - [ ] LinkedIn URL
  - [ ] GitHub URL

### Favicon
- [ ] (Optional) Create custom 32×32px icon
- [ ] Convert to .ico format
- [ ] Save as: `assets/images/favicon.ico`
- [ ] The SVG favicon is already set up and works great!

### Analytics (Optional but Recommended)
- [ ] Create Google Analytics 4 account
- [ ] Get Measurement ID (G-XXXXXXXXXX)
- [ ] Add tracking code to all pages (before `</head>`)
  - [ ] `index.html`
  - [ ] `about.html`
  - [ ] All 3 project pages

### Additional Projects
- [ ] If you have more than 3 projects, add them:
  - [ ] Create new HTML file in `projects/` folder
  - [ ] Use existing project template
  - [ ] Add project card to `index.html`
  - [ ] Update project navigation links

## ⚪ Low Priority (Future Enhancements)

### Custom Domain
- [ ] Purchase domain (amineelouechrine.com)
- [ ] Configure DNS settings
- [ ] Update all URL references
- [ ] Enable HTTPS in GitHub Pages

### Blog Section
- [ ] Create `blog/` folder
- [ ] Add blog post template
- [ ] Update navigation to include blog link
- [ ] Write first post about a technical topic

### Testimonials
- [ ] Collect recommendations from professors/colleagues
- [ ] Create testimonials section
- [ ] Add to about page or homepage

### Portfolio PDF
- [ ] Create PDF version of portfolio
- [ ] Include in downloads section

---

## Quick Reference: Files to Update

| File | What to Update | Priority |
|------|----------------|----------|
| `index.html` | Email, social links, Formspree ID, domain | 🔴 Critical |
| `about.html` | Profile photo, timeline dates, social links | 🔴 Critical |
| `cv/Mohamed_Amine_CV.pdf` | Upload your CV | 🔴 Critical |
| `assets/images/profile.webp` | Your photo | 🟡 High |
| `assets/images/projects/*.webp` | Project screenshots | 🟡 High |
| `sitemap.xml` | All URL references | 🔴 Critical |
| `robots.txt` | Domain URL | 🔴 Critical |
| All project pages | Review content accuracy | 🟡 High |

---

## Testing Checklist (After Customization)

- [ ] Open `index.html` locally - all sections display correctly
- [ ] Click all navigation links - work properly
- [ ] Test on mobile size (F12 → responsive mode)
- [ ] Validate HTML: https://validator.w3.org/
- [ ] Test form submission
- [ ] Download CV link works
- [ ] All social links go to correct profiles
- [ ] Images load correctly (no broken images)
- [ ] Check browser console (F12) - no errors

---

## Pre-Deployment Checklist

Before pushing to GitHub:

- [ ] All critical items above completed
- [ ] No placeholder text remaining
- [ ] All images optimized (WebP < 150KB)
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Mobile responsive verified
- [ ] All links tested
- [ ] Spell check completed
- [ ] Git commit message prepared

---

## Post-Deployment Checklist

After site is live:

- [ ] Test live URL loads correctly
- [ ] Run Lighthouse audit (95+ score target)
- [ ] Test contact form on live site
- [ ] Share with 2-3 friends for feedback
- [ ] Add to LinkedIn profile
- [ ] Update GitHub profile README
- [ ] Submit sitemap to Google Search Console

---

**Estimated Time:**
- Critical items: 1-2 hours
- High priority: 2-3 hours
- Total to launch: 3-5 hours

**Most time will be spent on:**
1. Gathering/creating images (45-90 minutes)
2. Setting up Formspree and testing (15 minutes)
3. CV preparation and upload (15 minutes)
4. Final testing and review (30 minutes)

**You've got this! 🚀**
