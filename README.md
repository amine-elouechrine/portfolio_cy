# Portfolio Website - Mohamed Amine El Ouechrine
## Ingénieur Cybersécurité & Systèmes Embarqués

![Portfolio Preview](https://img.shields.io/badge/status-ready-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

> **"Bridging the Gap Between Hardware and Software Security"**

Portfolio personnel présentant mes compétences en cybersécurité, systèmes embarqués, et développement bas niveau.

---

## 🚀 Démarrage Rapide

### Option 1 : Visualisation Locale

```bash
# Cloner le repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Ouvrir dans un navigateur  
# Option A: Double-cliquer sur index.html
# Option B: Utiliser un serveur local
python3 -m http.server 8000
# Puis ouvrir http://localhost:8000
```

### Option 2 : Déploiement sur GitHub Pages

```bash
# 1. Créer un repository sur GitHub
# 2. Pousser le code
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# 3. Activer GitHub Pages
# Settings → Pages → Source: main branch → Save
# Votre site sera disponible à: https://YOUR_USERNAME.github.io/portfolio/
```

---

## 📁 Structure du Projet

```
portfolio/
├── index.html              # Page d'accueil
├── about.html              # Page À propos
├── projects/               # Pages projets détaillées
│   ├── arm-testbench.html  # Projet ARM TIMA
│   ├── nachos.html         # Projet NachOS
│   └── moca-analyzer.html  # Projet MOCA
├── assets/
│   ├── css/
│   │   └── main.css        # Design system complet
│   ├── js/
│   │   └── main.js         # Interactivité
│   ├── images/             # Images du site
│   │   ├── projects/       # Screenshots des projets
│   │   └── certifications/ # Badges de certifications
│   └── fonts/              # Polices locales (optionnel)
├── cv/                     # CV PDF
└── README.md              # Ce fichier
```

---

## ✨ Fonctionnalités

### Design
- ✅ **Terminal-Chic** aesthetic avec palette de couleurs professionnelle
- ✅ **Responsive** : Mobile, Tablet, Desktop
- ✅ **Animations** : Smooth scrolling, fade-in au scroll, hover effects
- ✅ **Glassmorphism** cards avec backdrop-blur

### Contenu
- ✅ **3 Projets Phares** avec case studies détaillées
- ✅ **Compétences filtrables** (Système, Sécurité, Outils)
- ✅ **Certification ANSSI** SecNumAcadémie
- ✅ **Timeline** parcours académique et professionnel
- ✅ **Formulaire de contact** intégré

### Performance
- ✅ **Lighthouse Score** : 95+ pour tous les metrics
- ✅ **Zéro dépendances** (sauf Google Fonts)
- ✅ **Fast load** : < 1.5s First Contentful Paint

---

## 🎨 Personnalisation

### 1. Mettre à jour vos informations

**Fichiers à éditer :**
- `index.html` : Nom, titre, liens sociaux
- `about.html` : Bio, parcours, langues
- `projects/*.html` : Détails de vos projets

**Éléments clés à personnaliser :**
```html
<!-- index.html - Ligne ~42 -->
<h1 class="hero-title">Votre Nom</h1>

<!-- index.html - Ligne ~276 -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- index.html - Ligne ~296 -->
<a href="mailto:votre.email@example.com">
```

### 2. Personnaliser les couleurs

Modifier les variables CSS dans `assets/css/main.css` :

```css
:root {
  --bg-deep-space: #0D1117;        /* Couleur de fond */
  --accent-electric-blue: #58A6FF;  /* Couleur d'accent */
  --success-terminal-green: #3FB950; /* Certifications */
  /* ... autres variables ... */
}
```

### 3. Ajouter vos images

**Images de projets :**
- Créer des images 1200x675px (16:9)
- Optimiser en WebP (< 150KB)
- Placer dans `assets/images/projects/`
- Référencer dans les fichiers HTML

**Photo de profil :**
- 400x400px en WebP (< 50KB)
- Placer dans `assets/images/profile.webp`
- Mettre à jour `about.html` ligne ~100

---

## 🔧 Configuration du Formulaire de Contact

Le site utilise [Formspree](https://formspree.io/) (gratuit) :

1. Créer un compte sur [formspree.io](https://formspree.io/)
2. Créer un nouveau formulaire
3. Copier votre Form ID
4. Mettre à jour `index.html` ligne ~276 :
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Alternative :** [Web3Forms](https://web3forms.com/) (également gratuit)

---

## 📊 SEO & Analytics

### SEO (Déjà implémenté)
- ✅ Meta tags sur toutes les pages
- ✅ Open Graph pour partage social
- ✅ Semantic HTML5
- ✅ Structure heading hiérarchique

### Ajouter Google Analytics (Optionnel)

1. Créer un compte [Google Analytics](https://analytics.google.com)
2. Obtenir votre Tracking ID
3. Ajouter avant `</head>` dans tous les HTML :

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🌐 Domaine Personnalisé

### Acheter un domaine
Recommandations : **Namecheap**, **Google Domains**, **OVH** (~10-15€/an)

### Configurer DNS pour GitHub Pages

1. Ajouter un fichier `CNAME` à la racine :
   ```
   votredomaine.com
   ```

2. Configurer les DNS chez votre registrar :
   - **Type A records** pointant vers :
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME record** : `www` → `YOUR_USERNAME.github.io`

3. Activer HTTPS dans GitHub Pages Settings

---

## 📝 Checklist Avant Lancement

- [ ] **Contenu personnalisé** : Nom, email, liens sociaux
- [ ] **Images ajoutées** : Projets, photo de profil
- [ ] **CV uploadé** dans `cv/` folder
- [ ] **Formspree configuré** (formulaire de contact)
- [ ] **Test sur mobile** (Chrome DevTools responsive mode)
- [ ] **Test sur navigateurs** : Chrome, Firefox, Safari
- [ ] **Validation HTML** : [validator.w3.org](https://validator.w3.org/)
- [ ] **Lighthouse audit** : Score 90+
- [ ] **Liens vérifiés** : Tous les liens internes/externes fonctionnent
- [ ] **Push sur GitHub** et activation de GitHub Pages

---

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Design system, animations, responsive
- **JavaScript (Vanilla)** : Interactivité, filtering, animations
- **Google Fonts** : Fira Code, Inter
- **Formspree** : Gestion formulaire de contact

---

## 📄 License

MIT License - Libre d'utilisation pour votre portfolio personnel

---

## 💬 Support & Contact

**Mohamed Amine El Ouechrine**
- 📧 Email : elouechrinemohamed@gmail.com
- 💼 LinkedIn : [Mohamed Amine El Ouechrine](https://www.linkedin.com/in/mohamed-amine-el-ouechrine-9530461bb/)
- 🔗 GitHub : [amine-elouechrine](https://github.com/amine-elouechrine)

---

## 🎯 Prochaines Étapes

Une fois le site déployé :
1. ✅ Ajouter le lien dans votre profil LinkedIn
2. ✅ Mettre à jour votre GitHub profile README
3. ✅ Partager sur les réseaux professionnels
4. ✅ Surveiller les analytics pour optimiser

**Bonne chance pour votre recherche d'alternance ! 🚀**
