# 🚀 Quick Start Guide

Guide rapide pour lancer le portfolio de **Haythem REHOUMA**.

## ⚡ Démarrage Rapide (5 minutes)

### 1. Vérifier les fichiers

Assurez-vous d'avoir tous ces fichiers :

```
✅ index.html
✅ css/styles.css
✅ js/script.js
✅ assets/images/haythem-rehouma.jpg
✅ assets/images/haythem-rehouma-1.JPG
```

### 2. Lancer le serveur local

Choisissez une méthode :

#### Option A : Python (Recommandé)
```bash
python -m http.server 8000
```

#### Option B : Node.js
```bash
npx http-server -p 8000
```

#### Option C : VS Code Live Server
1. Installez l'extension "Live Server"
2. Clic droit sur `index.html` → "Open with Live Server"

### 3. Ouvrir dans le navigateur

Visitez : **http://localhost:8000**

---

## 🎨 Personnalisation Rapide

### Changer les couleurs
Éditez les variables CSS dans `css/styles.css` (lignes 14-20) :

```css
:root {
    --primary-color: #0066ff;      /* Bleu principal */
    --secondary-color: #7c3aed;    /* Violet */
    --accent-color: #06b6d4;       /* Cyan */
}
```

### Changer le contenu
Éditez `index.html` et cherchez :
- **Nom** : "Haythem REHOUMA"
- **Email** : "haythem.rehouma@inskillflow.com"
- **Description** : Section "hero-description"
- **Statistiques** : Attributs `data-target`

### Changer la photo
Remplacez le fichier :
```
assets/images/haythem-rehouma.jpg
```
Ou modifiez les références dans `index.html`.

---

## 🤖 Tester le Chatbot

1. Lancez le site
2. Cliquez sur le bouton circulaire bleu en bas à droite
3. Essayez ces questions :
   - "What are your specialties?"
   - "Tell me about copilot"
   - "Are you available?"

---

## 📤 Déploiement sur GitHub Pages

### 1. Créer un dépôt GitHub
```bash
git init
git add .
git commit -m "Initial commit - Portfolio Haythem REHOUMA"
```

### 2. Pousser vers GitHub
```bash
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
git branch -M main
git push -u origin main
```

### 3. Activer GitHub Pages
1. Allez dans Settings → Pages
2. Source : Branch `main`
3. Cliquez sur "Save"
4. Votre site sera disponible à : `https://VOTRE-USERNAME.github.io/VOTRE-REPO/`

---

## 🚀 Déploiement sur Netlify (Encore plus simple!)

### Méthode Drag & Drop
1. Allez sur [netlify.com](https://netlify.com)
2. Créez un compte gratuit
3. Glissez-déposez votre dossier de projet
4. Votre site est en ligne en 30 secondes ! 🎉

---

## 🐛 Résolution de problèmes

### Le site ne charge pas les styles
- Vérifiez que `styles.css` est au même niveau que `index.html`
- Vérifiez les chemins dans le navigateur (F12 → Console)

### L'image ne s'affiche pas
- Vérifiez que le fichier existe : `assets/images/haythem-rehouma.jpg`
- Vérifiez les permissions du fichier
- Essayez d'ouvrir l'image directement : `http://localhost:8000/assets/images/haythem-rehouma.jpg`

### Le chatbot ne fonctionne pas
- Ouvrez la console (F12)
- Vérifiez qu'il n'y a pas d'erreurs JavaScript
- Assurez-vous que `script.js` est chargé

### Erreur CORS (Cross-Origin)
- N'ouvrez PAS le fichier directement avec `file://`
- Utilisez toujours un serveur local (`http://localhost`)

---

## 📝 Checklist avant mise en ligne

- [ ] Remplacé les informations personnelles
- [ ] Remplacé la photo de profil
- [ ] Mis à jour les liens sociaux (LinkedIn, GitHub, Twitter)
- [ ] Mis à jour l'email de contact
- [ ] Testé le chatbot
- [ ] Testé le formulaire de contact
- [ ] Vérifié sur mobile (mode responsive)
- [ ] Optimisé les images (compression)
- [ ] Testé tous les liens
- [ ] Vérifié l'orthographe

---

## 🆘 Besoin d'aide ?

- 📧 Email : haythem.rehouma@inskillflow.com
- 📖 Documentation complète : Voir `README.md`
- 🔒 Licence : Voir `LICENSE.md`

---

© 2024 **Haythem REHOUMA** - Powered by **inskillflow**

**Made with ❤️ for the AI development community**

