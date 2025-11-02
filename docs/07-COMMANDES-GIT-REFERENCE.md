# Référence Complète des Commandes Git
## Portfolio Haythem REHOUMA - Configuration et Déploiement

---

> **Guide pratique** avec toutes les commandes Git utilisées pour ce projet, dans l'ordre d'exécution.

---

## Commandes Utilisées pour Ce Projet

### 1⃣ Configuration Initiale Git

#### Configurer votre identité Git

```bash
# Configurer votre nom d'utilisateur
git config --global user.name "inskillflow"

# Configurer votre email
git config --global user.email "formationselasticaws@gmail.com"
```

#### Vérifier la configuration

```bash
# Afficher toute la configuration Git
git config --list

# Afficher uniquement le nom
git config user.name

# Afficher uniquement l'email
git config user.email
```

**Résultat attendu:**
```
user.name=inskillflow
user.email=formationselasticaws@gmail.com
```

---

### 2⃣ Initialisation du Repository

#### Vérifier si Git est déjà initialisé

```bash
git status
```

**Si erreur "fatal: not a git repository"** → Git n'est pas initialisé, continuez.

#### Initialiser le repository

```bash
# Initialiser Git dans le dossier actuel
git init
```

**Résultat attendu:**
```
Initialized empty Git repository in C:/00-projetsGA/Github-pages/.git/
```

---

### 3⃣ Ajout des Fichiers

#### Ajouter tous les fichiers au staging

```bash
# Ajouter TOUS les fichiers
git add .

# OU ajouter des fichiers spécifiques
git add index.html
git add css/styles.css
```

#### Vérifier les fichiers ajoutés

```bash
git status
```

**Résultat attendu:**
```
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   .gitignore
	new file:   README.md
	new file:   assets/README.md
	new file:   assets/images/haythem-rehouma-1.JPG
	new file:   assets/images/haythem-rehouma.jpg
	new file:   css/styles.css
	new file:   docs/00-START-HERE.md
	new file:   docs/01-QUICKSTART.md
	new file:   docs/02-GUIDE-ETUDIANT-PRINCIPAL.md
	new file:   docs/03-RESUME-STRUCTURE-PROJET.md
	new file:   docs/04-GUIDE-DEPLOIEMENT-GITHUB-PAGES.md
	new file:   docs/05-GUIDE-DEPLOIEMENT-VERCEL.md
	new file:   docs/06-LICENSE.md
	new file:   docs/README.md
	new file:   index.html
	new file:   js/script.js
```

---

### 4⃣ Premier Commit

#### Créer le commit initial

```bash
git commit -m "Initial commit: Portfolio Haythem REHOUMA - AI Developer & Prompt Engineer | Powered by inskillflow"
```

**Résultat attendu:**
```
[master (root-commit) 1a5a683] Initial commit: Portfolio Haythem REHOUMA - AI Developer & Prompt Engineer | Powered by inskillflow
 16 files changed, 7039 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 ...
```

---

### 5⃣ Gestion des Branches

#### Renommer la branche master en main

```bash
# Renommer la branche actuelle en "main"
git branch -M main
```

**Pourquoi?** Le standard moderne est d'utiliser `main` au lieu de `master`.

#### Vérifier les branches

```bash
# Voir toutes les branches
git branch

# Voir la branche actuelle
git branch --show-current
```

---

### 6⃣ Configuration du Remote (GitHub)

#### Ajouter le remote GitHub

```bash
# Ajouter le lien vers votre repository GitHub
git remote add origin https://github.com/inskillflow/haythem-rehouma-portfolio-1.git
```

#### Vérifier le remote

```bash
git remote -v
```

**Résultat attendu:**
```
origin	https://github.com/inskillflow/haythem-rehouma-portfolio-1.git (fetch)
origin	https://github.com/inskillflow/haythem-rehouma-portfolio-1.git (push)
```

#### Modifier le remote (si nécessaire)

```bash
# Changer l'URL du remote
git remote set-url origin https://github.com/NOUVEAU-USERNAME/NOUVEAU-REPO.git

# Supprimer un remote
git remote remove origin
```

---

### 7⃣ Push vers GitHub

#### Premier push (avec authentification)

```bash
# Push et créer la branche main sur GitHub
git push -u origin main
```

**Vous devrez vous authentifier:**

**Option A: Personal Access Token**
- Username: `inskillflow`
- Password: `[Votre token GitHub]`

**Option B: GitHub CLI**
```bash
gh auth login
git push -u origin main
```

#### Pushs suivants (plus simple)

```bash
# Après le premier push, utilisez simplement:
git push
```

---

## Workflow Quotidien (Mises à Jour)

### Après avoir modifié des fichiers

```bash
# 1. Voir ce qui a changé
git status

# 2. Voir les différences détaillées
git diff

# 3. Ajouter les modifications
git add .

# 4. Commiter avec un message descriptif
git commit -m "Description des changements"

# 5. Pousser vers GitHub
git push
```

### Exemple Concret

```bash
# Vous avez modifié la couleur du thème
git status
git add css/styles.css
git commit -m "style: Changement du thème en bleu foncé"
git push
```

---

## Commandes Git Essentielles

### Consultation

```bash
# Statut actuel
git status

# Historique des commits
git log

# Historique compact
git log --oneline

# Historique avec graphique
git log --oneline --graph --all

# Voir les différences
git diff

# Voir les fichiers dans le dernier commit
git show --name-only
```

### Annulation

```bash
# Annuler les modifications d'un fichier (pas encore staged)
git checkout -- index.html

# Retirer un fichier du staging
git reset HEAD index.html

# Annuler le dernier commit (garder les changements)
git reset --soft HEAD~1

# Annuler le dernier commit (perdre les changements)  DANGEREUX
git reset --hard HEAD~1
```

### Branches

```bash
# Créer une nouvelle branche
git branch nouvelle-feature

# Changer de branche
git checkout nouvelle-feature

# Créer ET changer de branche
git checkout -b nouvelle-feature

# Fusionner une branche dans main
git checkout main
git merge nouvelle-feature

# Supprimer une branche
git branch -d nouvelle-feature
```

### Remote

```bash
# Voir les remotes
git remote -v

# Ajouter un remote
git remote add origin URL

# Changer l'URL du remote
git remote set-url origin NOUVELLE-URL

# Récupérer les changements du remote
git fetch

# Récupérer ET fusionner
git pull
```

---

## Commandes pour les Étudiants

### Scénario 1: Créer un Nouveau Projet

```bash
# 1. Créer le dossier
mkdir mon-projet
cd mon-projet

# 2. Initialiser Git
git init

# 3. Créer des fichiers
echo "# Mon Projet" > README.md

# 4. Ajouter et commiter
git add .
git commit -m "Initial commit"

# 5. Créer le repo sur github.com, puis:
git remote add origin https://github.com/USERNAME/mon-projet.git
git branch -M main
git push -u origin main
```

### Scénario 2: Cloner un Projet Existant

```bash
# 1. Cloner
git clone https://github.com/inskillflow/haythem-rehouma-portfolio-1.git

# 2. Entrer dans le dossier
cd haythem-rehouma-portfolio-1

# 3. Voir l'état
git status

# 4. Modifier des fichiers...

# 5. Commiter et pousser
git add .
git commit -m "Mes modifications"
git push
```

### Scénario 3: Corriger une Erreur

```bash
# Vous avez commité par erreur

# Option 1: Modifier le dernier commit
git commit --amend -m "Nouveau message corrigé"

# Option 2: Annuler le dernier commit (garder les changements)
git reset --soft HEAD~1
# Puis re-commiter correctement
git add .
git commit -m "Message correct"
```

---

## Authentification GitHub

### Méthode 1: Personal Access Token (PAT)

#### Créer un Token

1. Allez sur: https://github.com/settings/tokens
2. **Generate new token** → **Generate new token (classic)**
3. **Note:** `Portfolio Deployment`
4. **Expiration:** 90 days
5. **Scopes:**  `repo` (toutes les sous-options)
6. **Generate token**
7. **COPIEZ LE TOKEN IMMÉDIATEMENT!**

#### Utiliser le Token

```bash
git push

# Lors de l'authentification:
Username: inskillflow
Password: [collez votre token]
```

#### Sauvegarder le Token (pour ne pas le retaper)

```bash
# Windows (Credential Manager)
git config --global credential.helper manager

# macOS (Keychain)
git config --global credential.helper osxkeychain

# Linux (Store)
git config --global credential.helper store
```

### Méthode 2: GitHub CLI (Recommandé)

```bash
# Installer GitHub CLI
winget install GitHub.cli

# Authentification
gh auth login

# Suivre les instructions:
# - GitHub.com
# - HTTPS
# - Yes (authenticate Git)
# - Login with a web browser
# - Coller le code affiché
```

---

## Dépannage

### Problème: "fatal: not a git repository"

**Solution:**
```bash
git init
```

### Problème: "Author identity unknown"

**Solution:**
```bash
git config user.name "Votre Nom"
git config user.email "votre@email.com"
```

### Problème: "remote origin already exists"

**Solution:**
```bash
# Supprimer le remote existant
git remote remove origin

# Ajouter le nouveau
git remote add origin URL
```

### Problème: "failed to push some refs"

**Solution:**
```bash
# Récupérer les changements du remote d'abord
git pull --rebase

# Puis re-push
git push
```

### Problème: Conflit lors du merge

**Solution:**
```bash
# 1. Voir les fichiers en conflit
git status

# 2. Ouvrir les fichiers et résoudre les conflits
# Chercher les marqueurs <<<<<, =====, >>>>>

# 3. Marquer comme résolu
git add fichier-resolu.txt

# 4. Finaliser le merge
git commit -m "Résolution des conflits"
```

---

## Bonnes Pratiques

### Messages de Commit

** Mauvais:**
```bash
git commit -m "update"
git commit -m "fix"
git commit -m "changes"
```

** Bon:**
```bash
git commit -m "feat: Ajout du chatbot interactif"
git commit -m "fix: Correction du bug du responsive sur mobile"
git commit -m "style: Changement des couleurs du thème"
git commit -m "docs: Mise à jour du README avec nouvelles instructions"
git commit -m "refactor: Réorganisation du CSS en modules"
```

### Convention de Commit

```
type: description courte (max 50 caractères)

[corps optionnel avec plus de détails]

Types courants:
- feat: Nouvelle fonctionnalité
- fix: Correction de bug
- docs: Documentation
- style: Changements de style (CSS)
- refactor: Refactorisation du code
- test: Ajout de tests
- chore: Maintenance (dépendances, etc.)
```

### Fréquence des Commits

 **Commitez souvent:**
- Après chaque fonctionnalité terminée
- Après chaque correction de bug
- À la fin de chaque session de travail
- Avant de changer de branche

 **Évitez:**
- Commit unique avec 100+ fichiers
- Commits sans message descriptif
- Commits de code cassé (non testé)

---

## Résumé - Commandes Utilisées pour Ce Projet

```bash
# Configuration
git config --global user.name "inskillflow"
git config --global user.email "formationselasticaws@gmail.com"
git config --list

# Initialisation
git init
git add .
git status

# Commit
git commit -m "Initial commit: Portfolio Haythem REHOUMA - AI Developer & Prompt Engineer | Powered by inskillflow"

# Branch
git branch -M main

# Remote
git remote add origin https://github.com/inskillflow/haythem-rehouma-portfolio-1.git
git remote -v

# Push (À FAIRE)
git push -u origin main
```

---

## Checklist Git pour Ce Projet

### Configuration 
- [x] `git config user.name`
- [x] `git config user.email`
- [x] Vérification avec `git config --list`

### Repository Local 
- [x] `git init`
- [x] `git add .`
- [x] `git commit -m "..."`
- [x] `git branch -M main`

### Remote GitHub 
- [x] `git remote add origin`
- [x] Vérification avec `git remote -v`

### Push vers GitHub ⏳
- [ ] Créer le repo sur github.com
- [ ] `git push -u origin main`
- [ ] Vérifier sur github.com que tout est là

### GitHub Pages ⏳
- [ ] Settings → Pages
- [ ] Source: main branch
- [ ] Attendre le déploiement
- [ ] Visiter l'URL du site

---

## Ressources Complémentaires

### Documentation Officielle
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [Git Book (Gratuit)](https://git-scm.com/book/fr/v2)

### Tutoriels Interactifs
- [Learn Git Branching](https://learngitbranching.js.org/)
- [Git Immersion](http://gitimmersion.com/)
- [GitHub Learning Lab](https://lab.github.com/)

### Aide-Mémoire
- [Git Cheat Sheet (PDF)](https://education.github.com/git-cheat-sheet-education.pdf)
- [Visual Git Cheat Sheet](https://ndpsoftware.com/git-cheatsheet.html)

---

## Support

**Pour les Étudiants:**
- Consultez d'abord ce guide
- Recherchez sur [Stack Overflow](https://stackoverflow.com/questions/tagged/git)
- Demandez au professeur

**Contact Professeur:**
-  Email: haythem.rehouma@inskillflow.com
-  LinkedIn: [linkedin.com/in/haythemrehouma](https://www.linkedin.com/in/haythemrehouma/)

---

© 2024 **Haythem REHOUMA** - Powered by **inskillflow**

**Référence Git complète pour le cours de développement web**

---

**Prochaine étape:** [04-GUIDE-DEPLOIEMENT-GITHUB-PAGES.md](04-GUIDE-DEPLOIEMENT-GITHUB-PAGES.md)

**Commencez par:** [00-START-HERE.md](00-START-HERE.md)

