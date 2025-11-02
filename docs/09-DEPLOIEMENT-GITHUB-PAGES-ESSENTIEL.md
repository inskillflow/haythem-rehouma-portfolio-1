# Déploiement GitHub Pages - L'Essentiel
## Guide Ultra-Rapide en 5 Étapes

---

## Prérequis

- Compte GitHub créé
- Git installé
- Projet prêt avec `index.html` à la racine

---

## Les 5 Étapes Essentielles

### Étape 1: Configuration Git (une seule fois)

```bash
git config --global user.name "inskillflow"
git config --global user.email "formationselasticaws@gmail.com"
```

### Étape 2: Initialiser et Commiter

```bash
cd C:\00-projetsGA\Github-pages

git init
git add .
git commit -m "Initial commit"
git branch -M main
```

### Étape 3: Créer le Repository sur GitHub

1. Allez sur: https://github.com/new
2. Repository name: `haythem-rehouma-portfolio-1`
3. Public
4. Create repository

### Étape 4: Push vers GitHub

```bash
# Remplacez USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/inskillflow/haythem-rehouma-portfolio-1.git
git push -u origin main
```

Authentification requise:
- Username: `inskillflow`
- Password: [Personal Access Token de GitHub]

**Créer un token:** https://github.com/settings/tokens

### Étape 5: Activer GitHub Pages

1. Allez sur votre repo: `https://github.com/inskillflow/haythem-rehouma-portfolio-1`
2. Settings → Pages
3. Source: `main` branch
4. Folder: `/ (root)`
5. Save

**Attendez 1-2 minutes**

Votre site sera disponible à:
```
https://inskillflow.github.io/haythem-rehouma-portfolio-1/
```

---

## Mises à Jour Rapides

```bash
# Après chaque modification:
git add .
git commit -m "Description du changement"
git push
```

Le site se met à jour automatiquement en 1-2 minutes.

---

## Vérification Rapide

- [ ] index.html à la racine
- [ ] Chemins relatifs (pas `/css/` mais `css/`)
- [ ] Repository Public
- [ ] GitHub Pages activé

---

## Problèmes Courants

**404 Not Found:**
- Vérifiez que `index.html` est à la racine
- Attendez 2-3 minutes après activation

**CSS ne charge pas:**
```html
<!-- Bon -->
<link href="css/styles.css">

<!-- Mauvais -->
<link href="/css/styles.css">
```

**Authentification GitHub:**
- Créez un Personal Access Token
- Ne commitez JAMAIS le token dans votre code

---

## Guide Détaillé

Pour plus d'informations, consultez:
[04-GUIDE-DEPLOIEMENT-GITHUB-PAGES.md](04-GUIDE-DEPLOIEMENT-GITHUB-PAGES.md)

---

© 2024 Haythem REHOUMA - Powered by inskillflow

**Guide express pour déploiement rapide**

