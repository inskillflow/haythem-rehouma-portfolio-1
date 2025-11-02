# Guide Visuel - Diagrammes des Workflows de Déploiement
## Comprendre les Processus avec Mermaid

---

> **Note importante:** Ce document rassemble tous les diagrammes visuels pour comprendre comment le code passe du développement local à la production en ligne.

---

## Principe Fondamental

**TOUS LES WORKFLOWS PASSENT PAR GITHUB!**

Que vous déployiez sur GitHub Pages ou Vercel, le code doit toujours être poussé vers GitHub en premier.

---

## Workflow Global: Local → GitHub → Déploiement

```mermaid
graph TB
    Start([Début du Projet]) --> Local[Code Local sur PC]
    Local -->|Développement| Files[Fichiers HTML/CSS/JS]
    Files -->|git init| GitLocal[Git Repository Local]
    GitLocal -->|git add & commit| Commits[Commits Sauvegardés]
    Commits -->|git push| GitHub[GitHub Repository]
    
    GitHub -->|Option 1| GP[GitHub Pages]
    GitHub -->|Option 2| Vercel[Vercel Platform]
    
    GP -->|Build & Deploy| SiteGP[username.github.io]
    Vercel -->|Build & Deploy| SiteV[projet.vercel.app]
    
    SiteGP -->|HTTPS| Users[Utilisateurs]
    SiteV -->|HTTPS| Users
    
    style Start fill:#90EE90
    style GitHub fill:#4078c0,color:#fff,stroke-width:4px
    style GP fill:#6cc644,color:#fff
    style Vercel fill:#000,color:#fff
    style Users fill:#00d4ff
```

---

## 1. Workflow GitHub Pages

### Architecture Complète

```mermaid
graph TB
    subgraph Local["1. Environnement Local"]
        A1[index.html]
        A2[css/styles.css]
        A3[js/script.js]
        A4[assets/images/]
    end
    
    subgraph Git["2. Git Local"]
        B1[Staging Area]
        B2[Commits]
        B3[Branch: main]
    end
    
    subgraph GitHub["3. GitHub.com"]
        C1[Remote Repository]
        C2[Code Versionné]
    end
    
    subgraph Pages["4. GitHub Pages"]
        D1[Activation Settings]
        D2[Build Automatique]
        D3[CDN GitHub]
        D4[Site Déployé]
    end
    
    A1 --> B1
    A2 --> B1
    A3 --> B1
    A4 --> B1
    B1 -->|git add| B2
    B2 -->|git commit| B3
    B3 -->|git push| C1
    C1 --> C2
    C2 -->|Détection| D1
    D1 --> D2
    D2 --> D3
    D3 --> D4
    D4 -->|HTTPS| E[Utilisateurs Finaux]
    
    style Local fill:#fff3cd
    style Git fill:#e8f4f8
    style GitHub fill:#4078c0,color:#fff
    style Pages fill:#6cc644,color:#fff
```

### Séquence Temporelle

```mermaid
sequenceDiagram
    autonumber
    participant Dev as Développeur
    participant Local as Git Local
    participant GH as GitHub
    participant Pages as GitHub Pages
    participant User as Visiteurs
    
    Dev->>Local: Créer/Modifier fichiers
    Dev->>Local: git add .
    Dev->>Local: git commit -m "message"
    Dev->>GH: git push origin main
    Note over GH: Code sauvegardé
    
    Dev->>GH: Activer GitHub Pages<br/>(Settings → Pages)
    GH->>Pages: Déclenche le build
    Pages->>Pages: Build le site
    Pages->>Pages: Deploy sur CDN
    Pages-->>User: Site accessible
    Note over User: https://username.github.io/repo/
    
    Dev->>Dev: Modification du code
    Dev->>GH: git push
    GH-->>Pages: Auto-détection
    Pages->>Pages: Rebuild & Redeploy
    Pages-->>User: Site mis à jour
```

### Cycle de Mise à Jour Continu

```mermaid
graph LR
    A[Modifier Code] --> B[Tester Local]
    B --> C[git add .]
    C --> D[git commit]
    D --> E[git push]
    E --> F[GitHub]
    F -->|Auto| G[GitHub Pages]
    G -->|1-2 min| H[Site Mis à Jour]
    H -.->|Nouvelle modif| A
    
    style A fill:#fff3cd,stroke:#333
    style F fill:#4078c0,stroke:#333,stroke-width:2px,color:#fff
    style G fill:#6cc644,stroke:#333,stroke-width:2px,color:#fff
    style H fill:#d4edda,stroke:#333
```

---

## 2. Workflow Vercel

### Architecture avec GitHub au Centre

```mermaid
graph TB
    subgraph Dev["1. Développement"]
        A[Code Local]
        B[Tests]
    end
    
    subgraph Git["2. Gestion de Version"]
        C[git add & commit]
        D[git push]
    end
    
    subgraph GitHub["3. GitHub (HUB CENTRAL)"]
        E[Repository]
        F[Branch main]
    end
    
    subgraph Vercel["4. Vercel Platform"]
        G[Détection Webhook]
        H[Clone depuis GitHub]
        I[Build Process]
        J[Optimisations]
    end
    
    subgraph CDN["5. Edge Network"]
        K[Serveurs Globaux]
        L[Cache Intelligent]
    end
    
    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F -->|Webhook| G
    G --> H
    H --> I
    I --> J
    J --> K
    K --> L
    L -->|HTTPS| M[Utilisateurs Mondiaux]
    
    style Dev fill:#fff3cd
    style Git fill:#e8f4f8
    style GitHub fill:#4078c0,color:#fff
    style Vercel fill:#000,color:#fff
    style CDN fill:#0070f3,color:#fff
```

### Séquence Détaillée CI/CD

```mermaid
sequenceDiagram
    autonumber
    participant Dev as Développeur
    participant Local as Git Local
    participant GH as GitHub
    participant Vercel as Vercel
    participant CDN as Edge Network
    participant User as Utilisateurs
    
    Note over Dev,GH: ÉTAPE 1: Push vers GitHub
    Dev->>Local: Code & Test
    Dev->>Local: git add & commit
    Dev->>GH: git push origin main
    Note over GH: Code centralisé sur GitHub
    
    Note over GH,Vercel: ÉTAPE 2: Vercel Import
    Dev->>Vercel: Import repo depuis GitHub
    Vercel->>GH: Connexion au repository
    Note over Vercel: Webhook configuré automatiquement
    
    Note over Vercel,CDN: ÉTAPE 3: Premier Deploy
    Vercel->>GH: Clone le code
    Vercel->>Vercel: Build automatique
    Vercel->>CDN: Deploy sur Edge
    CDN-->>User: Site accessible
    Note over User: https://projet.vercel.app
    
    Note over Dev,User: ÉTAPE 4: Mises à Jour Automatiques
    Dev->>Dev: Nouvelle modification
    Dev->>GH: git push
    GH-->>Vercel: Webhook déclenché
    Vercel->>GH: Clone le nouveau code
    Vercel->>Vercel: Rebuild
    Vercel->>CDN: Redeploy
    CDN-->>User: Site à jour (10-30 sec)
```

### Comparaison: GitHub Pages vs Vercel

```mermaid
graph TB
    A[Code Local]
    A -->|git push| B[GitHub Repository]
    
    subgraph Option1["GitHub Pages - Déploiement Interne"]
        C1[Activation Pages<br/>Settings → Pages]
        D1[Build par GitHub]
        E1[CDN GitHub]
        F1[username.github.io]
        G1[Temps: 30-300 sec]
    end
    
    subgraph Option2["Vercel - Déploiement Externe"]
        C2[Import depuis GitHub<br/>Connexion Vercel]
        D2[Build par Vercel]
        E2[Edge Network 70+ régions]
        F2[projet.vercel.app]
        G2[Temps: 10-30 sec]
    end
    
    B -->|Méthode 1| C1
    C1 --> D1
    D1 --> E1
    E1 --> F1
    F1 --> G1
    
    B -->|Méthode 2| C2
    C2 -->|Clone| D2
    D2 --> E2
    E2 --> F2
    F2 --> G2
    
    style B fill:#4078c0,color:#fff,stroke-width:4px
    style Option1 fill:#6cc644,color:#000
    style Option2 fill:#000,color:#fff
```

### Workflow de Développement Professionnel

```mermaid
flowchart TD
    Start([Nouveau Projet]) --> Init[Initialiser Git Local]
    Init --> Code[Développer Features]
    Code --> Test1{Tests Locaux OK?}
    Test1 -->|Non| Code
    Test1 -->|Oui| Commit[git commit]
    Commit --> Push[git push origin main]
    Push --> GH[GitHub Repository]
    
    GH --> Choice{Plateforme?}
    
    Choice -->|GitHub Pages| ActGP[Activer Pages]
    ActGP --> BuildGP[GitHub Build]
    BuildGP --> DeployGP[github.io]
    
    Choice -->|Vercel| ImportV[Import sur Vercel]
    ImportV --> BuildV[Vercel Build]
    BuildV --> DeployV[vercel.app]
    
    DeployGP --> TestProd{Tests Prod?}
    DeployV --> TestProd
    
    TestProd -->|Bugs| Fix[Corrections]
    Fix --> Code
    TestProd -->|OK| Prod([Site en Production])
    
    Prod -.-> Update[Mises à Jour]
    Update --> Code
    
    style Start fill:#90EE90
    style GH fill:#4078c0,color:#fff
    style BuildGP fill:#6cc644,color:#fff
    style BuildV fill:#000,color:#fff
    style Prod fill:#FFD700
```

---

## 3. Points Clés à Comprendre

### GitHub est Toujours au Centre

```mermaid
graph TD
    A[Votre Ordinateur]
    B[GitHub<br/>HUB CENTRAL]
    C[GitHub Pages]
    D[Vercel]
    E[Autres Services]
    
    A -->|git push| B
    B -->|Option 1| C
    B -->|Option 2| D
    B -->|Option 3+| E
    
    style B fill:#4078c0,color:#fff,stroke-width:5px
    style C fill:#6cc644,color:#fff
    style D fill:#000,color:#fff
```

**Pourquoi GitHub au centre?**

1. Contrôle de version
2. Sauvegarde du code
3. Collaboration possible
4. Historique complet
5. Point unique de vérité
6. Compatible avec tous les services de déploiement

---

## 4. Workflows par Niveau

### Débutant: GitHub Pages

```mermaid
graph LR
    A[Coder] --> B[git push GitHub]
    B --> C[Activer Pages]
    C --> D[Site En Ligne]
    
    style A fill:#fff3cd
    style B fill:#4078c0,color:#fff
    style D fill:#90EE90
```

**Simple, gratuit, parfait pour apprendre!**

### Intermédiaire: Vercel

```mermaid
graph LR
    A[Coder] --> B[git push GitHub]
    B --> C[Import Vercel]
    C --> D[Build Auto]
    D --> E[Site Pro]
    
    style A fill:#fff3cd
    style B fill:#4078c0,color:#fff
    style C fill:#000,color:#fff
    style E fill:#00d4ff
```

**Rapide, professionnel, avec analytics!**

### Avancé: Les Deux!

```mermaid
graph TD
    A[Code Local] -->|git push| B[GitHub]
    B -->|Staging| C[GitHub Pages]
    B -->|Production| D[Vercel]
    
    C --> E[Tests sur github.io]
    D --> F[Production sur vercel.app]
    
    style B fill:#4078c0,color:#fff,stroke-width:3px
    style C fill:#6cc644,color:#fff
    style D fill:#000,color:#fff
```

**Utilisez GitHub Pages pour tester, Vercel pour la prod!**

---

## 5. Cycle de Vie Complet d'un Projet

```mermaid
stateDiagram-v2
    [*] --> Développement
    
    Développement --> Tests: Code prêt
    Tests --> Développement: Bugs trouvés
    Tests --> Git: Tests OK
    
    Git --> GitHub: git push
    
    state GitHub {
        [*] --> Repository
        Repository --> Branches
        Branches --> PullRequests
    }
    
    GitHub --> Choix
    
    state Choix <<choice>>
    Choix --> GitHubPages: Déploiement Simple
    Choix --> Vercel: Déploiement Pro
    
    GitHubPages --> Production
    Vercel --> Production
    
    Production --> Maintenance
    Maintenance --> Développement: Nouvelles features
    Maintenance --> [*]: Projet terminé
```

---

## 6. Comparaison Temps de Déploiement

```mermaid
gantt
    title Temps de Déploiement Comparé
    dateFormat X
    axisFormat %S sec
    
    section GitHub Pages
    git push           :0, 2s
    Détection          :2s, 5s
    Build              :5s, 60s
    Deploy             :60s, 30s
    Site en ligne      :milestone, 90s
    
    section Vercel
    git push           :0, 2s
    Webhook            :2s, 1s
    Build              :3s, 15s
    Deploy Edge        :18s, 10s
    Site en ligne      :milestone, 28s
```

**Vercel est 3x plus rapide!**

---

## 7. Architecture Réseau

### GitHub Pages - Infrastructure GitHub

```mermaid
graph LR
    A[Votre Code] -->|push| B[GitHub Servers]
    B --> C[Build Process]
    C --> D[GitHub CDN]
    D --> E[US]
    D --> F[Europe]
    D --> G[Asie]
    
    style B fill:#4078c0,color:#fff
    style D fill:#6cc644,color:#fff
```

### Vercel - Edge Network Global

```mermaid
graph TB
    A[Votre Code] -->|push| B[GitHub]
    B -->|webhook| C[Vercel Build]
    
    C --> D[Edge Network]
    D --> E1[SF - USA]
    D --> E2[IAD - USA]
    D --> E3[CDG - Paris]
    D --> E4[LHR - London]
    D --> E5[FRA - Frankfurt]
    D --> E6[SYD - Sydney]
    D --> E7[HKG - Hong Kong]
    D --> E8[SIN - Singapore]
    D --> E9[BOM - Mumbai]
    D --> E10[GRU - São Paulo]
    
    E1 & E2 & E3 & E4 & E5 & E6 & E7 & E8 & E9 & E10 --> F[70+ Régions]
    
    style B fill:#4078c0,color:#fff
    style C fill:#000,color:#fff
    style D fill:#0070f3,color:#fff
```

**Vercel: Latence ultra-faible partout dans le monde!**

---

## 8. Workflow avec Branches (Avancé)

```mermaid
gitGraph
    commit id: "Initial commit"
    commit id: "Add base structure"
    
    branch develop
    checkout develop
    commit id: "New feature start"
    commit id: "Feature complete"
    
    checkout main
    merge develop id: "Merge feature"
    
    commit id: "Hotfix production"
    
    branch feature-chatbot
    checkout feature-chatbot
    commit id: "Add chatbot"
    commit id: "Chatbot tests"
    
    checkout main
    merge feature-chatbot id: "Release v1.1"
    
    commit id: "Deploy to production"
```

**Chaque merge vers `main` déclenche un déploiement automatique!**

---

## 9. Processus de Preview (Vercel Uniquement)

```mermaid
graph TB
    A[Feature Branch] -->|git push| B[GitHub]
    B --> C{Branch Type?}
    
    C -->|main| D[Production Deploy]
    C -->|feature/*| E[Preview Deploy]
    
    D --> F[projet.vercel.app]
    E --> G[projet-abc123.vercel.app]
    
    G -->|Tests OK| H[Merge to main]
    H --> D
    
    style B fill:#4078c0,color:#fff
    style D fill:#000,color:#fff
    style E fill:#666,color:#fff
    style F fill:#00d4ff
    style G fill:#ffa500
```

**Chaque Pull Request a sa propre URL de preview!**

---

## 10. Récapitulatif Visuel

### Les 3 Étapes Essentielles

```mermaid
graph LR
    subgraph Etape1["ÉTAPE 1: Local"]
        A1[Développer]
        A2[Tester]
        A3[Commiter]
    end
    
    subgraph Etape2["ÉTAPE 2: GitHub"]
        B1[git push]
        B2[Code sauvegardé]
        B3[Versionné]
    end
    
    subgraph Etape3["ÉTAPE 3: Déploiement"]
        C1[GitHub Pages<br/>OU<br/>Vercel]
        C2[Build]
        C3[Site en ligne]
    end
    
    A1 --> A2
    A2 --> A3
    A3 --> B1
    B1 --> B2
    B2 --> B3
    B3 --> C1
    C1 --> C2
    C2 --> C3
    
    style Etape1 fill:#fff3cd
    style Etape2 fill:#4078c0,color:#fff
    style Etape3 fill:#6cc644,color:#fff
```

---

## Comment Lire les Diagrammes

### Symboles Mermaid

- **Rectangles** : Processus ou étapes
- **Losanges** : Décisions (choix)
- **Flèches pleines (→)** : Flux principal
- **Flèches pointillées (-.->)** : Flux alternatif
- **Couleurs** :
  - Bleu (#4078c0) = GitHub
  - Vert (#6cc644) = GitHub Pages
  - Noir (#000) = Vercel
  - Jaune (#fff3cd) = Local

### Types de Diagrammes

1. **graph TB/LR** : Diagrammes de flux (Top-Bottom / Left-Right)
2. **sequenceDiagram** : Séquences temporelles
3. **flowchart** : Organigrammes avec décisions
4. **gitGraph** : Historique Git visuel
5. **stateDiagram** : États du projet

---

## Utilisation dans l'Enseignement

### Pour les Professeurs

Ces diagrammes peuvent être:
- Projetés en classe
- Imprimés pour les étudiants
- Utilisés dans les présentations
- Référencés dans les exercices

### Pour les Étudiants

- Dessinez les workflows à la main
- Identifiez chaque étape
- Comprenez le rôle de GitHub
- Visualisez où se trouve votre code à chaque instant

---

## Ressources Mermaid

### Documentation
- [Mermaid Documentation](https://mermaid.js.org/)
- [Mermaid Live Editor](https://mermaid.live/)
- [Mermaid Cheat Sheet](https://jojozhuang.github.io/tutorial/mermaid-cheat-sheet/)

### Outils
- [VS Code Mermaid Extension](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid)
- [Mermaid Chart](https://www.mermaidchart.com/)

---

© 2024 **Haythem REHOUMA** - Powered by **inskillflow**

**Diagrammes pédagogiques pour visualiser les workflows de déploiement**

---

**Retour à:** [README des Guides](README.md) | [00-START-HERE](00-START-HERE.md)

