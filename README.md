# Haythem REHOUMA - AI Developer Portfolio

A modern, elegant portfolio website showcasing expertise in AI development, prompt engineering, and GitHub Copilot integration.

**Powered by inskillflow** - © 2024 All rights reserved.

## Features

- **Modern Design**: Sleek, dark-themed UI with gradient accents and smooth animations
- **Responsive**: Fully responsive design that works beautifully on all devices
- **Interactive Chatbot**: 
  - Animated circular toggle button with pulse effect
  - Rule-based Q&A system (no real AI needed)
  - 10+ predefined questions with detailed answers
  - Keyword matching for natural conversations
  - Typing indicator animation
  - Smart question suggestions
  - Auto-notification after 5 seconds
- **Interactive Elements**: 
  - Animated statistics counters
  - Scroll-reveal animations
  - Parallax effects
  - Interactive project cards with 3D tilt
  - Custom cursor trail effect (desktop)
  - Smooth scrolling navigation
- **Performance Optimized**: 
  - Lazy loading images
  - Debounced scroll events
  - Efficient animations using CSS transforms
- **Accessibility**: Semantic HTML and keyboard navigation support

## Sections

1. **Hero**: Eye-catching introduction with animated statistics
2. **About**: Detailed background and qualifications
3. **Expertise**: Core competencies in AI and prompt engineering
4. **Tech Stack**: Technologies and tools proficiency
5. **Projects**: Portfolio of notable projects with detailed descriptions
6. **Contact**: Contact form and social links

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties, flexbox, and grid
- **JavaScript (ES6+)**: Interactive features and animations
- **Font Awesome 6.4.0**: Icon library
- **Google Fonts (Inter)**: Clean, modern typography
- **Unsplash**: High-quality images

## Getting Started

### Local Development

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Open with a local server**
   
   Option A - Using Python:
   ```bash
   python -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

   Option B - Using Node.js (with http-server):
   ```bash
   npx http-server -p 8000
   ```
   Then visit: `http://localhost:8000`

   Option C - Using VS Code Live Server:
   - Install the "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

3. **View the portfolio**
   Open your browser and navigate to the local server URL

### Deployment Options

#### GitHub Pages

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. Go to repository Settings > Pages
4. Select "main" branch as source
5. Your site will be published at `https://<username>.github.io/<repository-name>/`

#### Netlify

1. Create a free account at [netlify.com](https://netlify.com)
2. Drag and drop the project folder to Netlify dashboard
3. Your site will be live instantly with a custom URL

#### Vercel

1. Create a free account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in the project directory
4. Follow the prompts to deploy

## Customization Guide

### Personal Information

Edit `index.html` to update:

- **Name**: Search for "Haythem REHOUMA" and replace with your name
- **Initials**: Update "HR" in the logo to your initials
- **Title/Specialty**: Update the hero subtitle and descriptions
- **Stats**: Modify the `data-target` attributes in the stats section
- **About Section**: Update your background, education, and certifications
- **Projects**: Replace project details, images, and links
- **Contact Info**: Update email (currently: haythem.rehouma@inskillflow.com), LinkedIn, GitHub, and social media links

### Colors and Branding

Edit `styles.css` at the top (CSS variables):

```css
:root {
    --primary-color: #0066ff;      /* Main brand color */
    --secondary-color: #7c3aed;    /* Secondary accent */
    --accent-color: #06b6d4;       /* Highlights */
    /* ... more variables */
}
```

### Images

The portfolio uses two personal profile photos:
- `assets/images/haythem-rehouma.jpg` - Used in Hero section (main landing)
- `assets/images/haythem-rehouma-1.JPG` - Used in About section (professional portrait)

To use your own images:
1. Replace these files with your own photos
2. Keep the same filenames, or update references in `index.html`
3. Recommended dimensions: At least 800x800px for best quality
4. Formats supported: JPG, PNG, WebP
5. Tip: Use different poses/styles for visual variety

For project images, replace Unsplash URLs in `index.html` with your own:
- **Project Images**: Screenshots or representative images of your work

Recommended image sources for projects:
- [Unsplash](https://unsplash.com) - Free high-quality images
- [Pexels](https://pexels.com) - Free stock photos
- Your own screenshots and graphics

### Adding/Removing Sections

1. Locate the section in `index.html`
2. Copy or remove the entire `<section>` block
3. Update the navigation links in the navbar accordingly
4. Adjust CSS in `styles.css` if needed

### Customizing the Chatbot

The chatbot uses a rule-based system with predefined questions and answers. To customize:

1. **Add new Q&A pairs** in `script.js`:
   ```javascript
   const chatbotKnowledge = {
       yourTopic: {
           question: "Your question here?",
           answer: "Your detailed answer with <strong>HTML formatting</strong>."
       }
   }
   ```

2. **Add keywords for better matching**:
   ```javascript
   const keywordMapping = {
       'keyword': 'yourTopic',
       'another-keyword': 'yourTopic'
   }
   ```

3. **Add suggestion buttons** in `index.html`:
   ```html
   <button class="suggestion-btn" data-question="yourTopic">Your Question Text</button>
   ```

4. **Customize chatbot appearance**:
   - Colors: Edit CSS variables in `styles.css`
   - Position: Adjust `.chatbot-container` bottom/right values
   - Size: Modify `.chatbot-widget` width/height properties

### Form Integration

To make the contact form functional:

1. **Using Formspree**:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Using Netlify Forms**:
   Add `netlify` attribute to the form:
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

3. **Using your own backend**:
   Update the form submission handler in `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

- Optimize images before uploading (use WebP format for better compression)
- Consider using a CDN for faster asset delivery
- Enable Gzip compression on your server
- Minify CSS and JavaScript for production

## Optional Enhancements

### Add Google Analytics

In `index.html`, add before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

### Add Favicon

Create a `favicon.ico` and add to `<head>`:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### Add Open Graph Meta Tags

For better social media sharing, add to `<head>`:

```html
<meta property="og:title" content="David Thompson - AI Developer">
<meta property="og:description" content="AI Developer specializing in Prompt Engineering">
<meta property="og:image" content="URL_TO_YOUR_IMAGE">
<meta property="og:url" content="YOUR_WEBSITE_URL">
<meta name="twitter:card" content="summary_large_image">
```

## File Structure

```
portfolio/
│
├── index.html                    # Main HTML file
│
├── css/                          # Stylesheets directory
│   └── styles.css                # Main stylesheet
│
├── js/                           # JavaScript directory
│   └── script.js                 # Main JavaScript file
│
├── assets/                       # Static assets directory
│   ├── README.md                 # Assets documentation
│   └── images/
│       ├── haythem-rehouma.jpg   # Profile photo (Hero)
│       └── haythem-rehouma-1.JPG # Profile photo (About)
│
├── README.md                     # Main documentation
├── LICENSE.md                    # Copyright & license information
├── .gitignore                    # Git ignore rules
├── QUICKSTART.md                 # Quick start guide
│
├── GUIDE-ETUDIANT-PRINCIPAL.md         # Main student guide
├── GUIDE-DEPLOIEMENT-GITHUB-PAGES.md   # GitHub Pages deployment guide
└── GUIDE-DEPLOIEMENT-VERCEL.md         # Vercel deployment guide
```

## Credits

- **Design & Development**: Portfolio template for AI developers
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Fonts**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Images**: [Unsplash](https://unsplash.com/)

## License

This project is open source and available for personal and commercial use.

## Support

For questions or issues:
- Open an issue on GitHub
- Contact via email: haythem.rehouma@inskillflow.com

---

**Built with care for the AI development community** 🚀

© 2024 **Haythem REHOUMA** - Powered by **inskillflow**

Made by developers, for developers.

