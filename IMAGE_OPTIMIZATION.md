# Image Optimization Guide
## Preparing Assets for Your Portfolio Website

This guide will help you prepare and optimize images for your portfolio website to ensure fast loading times and professional quality.

---

## 📸 Image Requirements by Type

### Project Hero Images
- **Format:** WebP (or JPG fallback)
- **Dimensions:** 1200px × 675px (16:9 aspect ratio)
- **Max File Size:** 150 KB
- **Quality:** 75-85%
- **Naming:** `project-name-hero.webp`

### Project Screenshots
- **Format:** WebP or PNG (for transparency)
- **Dimensions:** 800-1200px width (maintain aspect ratio)
- **Max File Size:** 100 KB
- **Quality:** 75-85%
- **Naming:** `project-name-screenshot-01.webp`

### Profile Photo
- **Format:** WebP or JPG
- **Dimensions:** 400px × 400px (square)
- **Max File Size:** 50 KB
- **Quality:** 70-80%
- **Naming:** `profile.webp`

### Certification Badges
- **Format:** PNG or SVG (SVG preferred)
- **Dimensions:** Original size (usually 200-400px)
- **Max File Size:** 30 KB
- **Naming:** `anssi-secnum-badge.png`

### Icons
- **Format:** SVG
- **Dimensions:** 24×24px or 32×32px
- **Max File Size:** 5 KB
- **Naming:** `icon-name.svg`

---

## 🛠️ Optimization Tools

### Option 1: Online Tools (Easy, No Installation)

**[Squoosh.app](https://squoosh.app/)** - Google's image optimizer
1. Visit https://squoosh.app/
2. Drag & drop your image
3. Select WebP format on the right panel
4. Adjust quality slider to 75-85%
5. Download optimized image

**[TinyPNG](https://tinypng.com/)** - PNG/JPG compression
- Upload up to 20 images at once
- Automatic smart compression
- Great for quick batch processing

### Option 2: Command Line Tools (Advanced)

#### Install ImageMagick and WebP Tools

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install webp imagemagick

# macOS (with Homebrew)
brew install webp imagemagick
```

#### Optimization Commands

**Convert and Resize Images to WebP:**
```bash
# Convert single image
cwebp -q 80 input.jpg -o output.webp

# Batch convert all JPGs in current directory
for file in *.jpg; do
    cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
```

**Resize Images:**
```bash
# Resize to 1200px width (maintain aspect ratio)
convert input.jpg -resize 1200x output.jpg

# Resize and convert to WebP
convert input.jpg -resize 1200x -quality 80 output.webp

# Create square crop (for profile photo)
convert input.jpg -resize 400x400^ -gravity center -extent 400x400 profile.jpg
```

**Optimize PNG files:**
```bash
# Install optipng
sudo apt install optipng

# Optimize PNG
optipng -o5 input.png
```

**Batch Process Project Screenshots:**
```bash
# Resize all images to max width 1200px and convert to WebP
for file in *.{jpg,png}; do
    convert "$file" -resize 1200x -quality 80 "${file%.*}.webp"
done
```

---

## 📂 Organizing Your Assets

### Recommended Directory Structure

```
assets/images/
├── projects/
│   ├── arm-testbench-hero.webp
│   ├── arm-testbench-screenshot-01.webp
│   ├── arm-testbench-screenshot-02.webp
│   ├── nachos-hero.webp
│   ├── nachos-screenshot-01.webp
│   ├── moca-hero.webp
│   └── moca-screenshot-01.webp
├── certifications/
│   ├── anssi-secnum-badge.png
│   └── ensimag-logo.svg
├── profile.webp
└── favicon.ico
```

---

## ✅ Image Optimization Checklist

### Before Upload:
- [ ] Image resized to appropriate dimensions
- [ ] converted to WebP for best compression
- [ ] File size under recommended max
- [ ] Descriptive filename (lowercase, hyphens)
- [ ] Image looks sharp at target size
- [ ] No personal/sensitive information visible

### After Upload:
- [ ] Image displays correctly on website
- [ ] Loads quickly (< 1 second)
- [ ] Looks good on mobile devices
- [ ] Alt text added for accessibility

---

## 🎨 Image Editing Tips

### Taking Screenshots of Projects

**For Code/Terminal:**
- Use high-contrast themes
- Font size: 14-16px for readability
- Clean up desktop/tabs before screenshot
- Use tools like [Carbon](https://carbon.now.sh/) for beautiful code snippets

**For Applications:**
- Clean UI (hide unnecessary toolbars)
- Show the most impressive/visual part
- Include context (what problem does it solve?)

### Profile Photo Tips
- Professional attire
- Neutral background or subtle blur
- Good lighting (natural light preferred)
- Smile! (approachable)
- Face should fill ~60% of frame
- High resolution (at least 800×800px before cropping)

---

## 🚀 Quick Workflow Example

Let's say you have a project screenshot `my_project.png` at 3000×2000px (2.5 MB):

### Step-by-Step:

1. **Resize and Convert:**
   ```bash
   convert my_project.png -resize 1200x -quality 80 arm-testbench-hero.webp
   ```

2. **Check file size:**
   ```bash
   ls -lh arm-testbench-hero.webp
   # Should be < 150 KB
   ```

3. **If still too large, reduce quality:**
   ```bash
   cwebp -q 75 my_project.png -o arm-testbench-hero.webp
   ```

4. **Move to correct directory:**
   ```bash
   mv arm-testbench-hero.webp assets/images/projects/
   ```

5. **Update HTML:**
   ```html
   <img src="assets/images/projects/arm-testbench-hero.webp" 
        alt="ARM Test Bench Setup at TIMA Lab">
   ```

---

## 📊 Testing Image Performance

### Google PageSpeed Insights
1. Visit https://pagespeed.web.dev/
2. Enter your website URL
3. Check "Properly size images" recommendation
4. Aim for 90+ score

### Manual Check
```bash
# Check all images over 100KB
find assets/images -type f -size +100k -exec ls -lh {} \;
```

---

## 🎯 Best Practices Summary

1. **Always use WebP** for photos/screenshots (90% smaller than PNG)
2. **Use SVG** for logos/icons (infinitely scalable)
3. **Resize before compressing** (don't serve 4K images for 800px display)
4. **Lazy loading** (already implemented in the portfolio code)
5. **Descriptive filenames** (good for SEO and organization)
6. **Test on mobile** (images should load in < 3 seconds on 3G)

---

## 📞 Need Help?

If images still aren't optimized:
- Share your image and I can help optimize it
- Consider using a CDN like Cloudinary (free tier available)
- Check browser DevTools Network tab to see actual sizes

**Happy optimizing! 🚀**
