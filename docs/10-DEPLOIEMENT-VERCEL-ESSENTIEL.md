# Déploiement Vercel - L'Essentiel
## Guide Ultra-Rapide en 3 Méthodes

---

## Prérequis

- Code sur GitHub (voir [Guide 09](09-DEPLOIEMENT-GITHUB-PAGES-ESSENTIEL.md))
- Compte Vercel (gratuit)

---

## Méthode 1: Import depuis GitHub (Recommandé)

**Temps: 2 minutes**

### Étapes

1. Allez sur: https://vercel.com
2. Sign Up → Continue with GitHub
3. Add New → Project
4. Import votre repo: `haythem-rehouma-portfolio-1`
5. Deploy (tout laisser par défaut)

**URL instant:**
```
https://haythem-rehouma-portfolio-1.vercel.app
```

**Avantage:** Déploiement automatique à chaque `git push`!

---

## Méthode 2: Vercel CLI (Développeurs)

**Temps: 3 minutes**

### Étapes

```bash
# 1. Installer Vercel
npm install -g vercel

# 2. Se connecter
vercel login

# 3. Déployer
cd C:\00-projetsGA\Github-pages
vercel

# Répondre aux questions:
# - Setup: Y
# - Project name: haythem-rehouma-portfolio-1
# - Directory: ./

# 4. Production
vercel --prod
```

**URL instant:**
```
https://haythem-rehouma-portfolio-1.vercel.app
```

---

## Méthode 3: Drag & Drop (Prototype)

**Temps: 1 minute**

1. Allez sur: https://vercel.com/new
2. Glissez votre dossier de projet
3. Deploy

**Limitation:** Pas de déploiement automatique

---

## Mises à Jour

### Avec Import GitHub (Méthode 1)

```bash
git add .
git commit -m "Update"
git push
```

Vercel redéploie automatiquement en 10-30 secondes!

### Avec CLI (Méthode 2)

```bash
vercel --prod
```

---

## Comparaison Rapide

| Critère | GitHub Pages | Vercel |
|---------|--------------|--------|
| Vitesse | 30-300 sec | 10-30 sec |
| Limite | Illimité | 100 GB/mois |
| Analytics | Non | Oui |
| Preview URLs | Non | Oui |

**Pour apprendre:** GitHub Pages  
**Pour production:** Vercel

---

## Configuration Essentielle

### Fichier vercel.json (optionnel)

```json
{
  "version": 2,
  "name": "haythem-rehouma-portfolio-1"
}
```

### Domaine Personnalisé

1. Projet Vercel → Settings → Domains
2. Add Domain: `votre-domaine.com`
3. Configurer DNS chez votre registrar

**Registrars recommandés:**
- Vercel Domains (intégration directe)
- Namecheap ($10/an)
- Hostinger ($12/an)
- Cloudflare (au coût)

---

## Workflow Simplifié

```
Code Local
    ↓
git push → GitHub
    ↓
Vercel (auto-détection)
    ↓
Site en ligne (10-30 sec)
```

---

## Checklist Rapide

- [ ] Code sur GitHub
- [ ] Compte Vercel créé
- [ ] Repository importé sur Vercel
- [ ] Site déployé avec succès
- [ ] URL partagée

---

## Problèmes Courants

**Build Failed:**
- Vérifiez que `index.html` est à la racine
- Vérifiez les chemins relatifs

**Site ne se met pas à jour:**
```bash
vercel --prod --force
```

**404 Error:**
Créez `vercel.json`:
```json
{
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

---

## Commandes Essentielles

```bash
# Déployer
vercel

# Déployer en production
vercel --prod

# Forcer le rebuild
vercel --prod --force

# Lister les déploiements
vercel ls

# Voir les logs
vercel logs
```

---

## URLs Importantes

- Dashboard: https://vercel.com/dashboard
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

---

## Guide Détaillé

Pour configuration avancée, domaines, environnements, etc.:
[05-GUIDE-DEPLOIEMENT-VERCEL.md](05-GUIDE-DEPLOIEMENT-VERCEL.md)

---

© 2024 Haythem REHOUMA - Powered by inskillflow

**Guide express pour déploiement ultra-rapide sur Vercel**

