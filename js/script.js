/*!
 * Portfolio Website - JavaScript
 * © 2024 Haythem REHOUMA
 * Powered by inskillflow
 * All Rights Reserved
 * 
 * https://inskillflow.com
 */

// ========================================
// Navigation
// ========================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile navigation toggle
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinkItems.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ========================================
// Animated Counter for Stats
// ========================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('%') ? '' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Intersection Observer for counters
const statNumbers = document.querySelectorAll('.stat-number');
let countersAnimated = false;

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            countersAnimated = true;
        }
    });
}, { threshold: 0.5 });

if (statNumbers.length > 0) {
    counterObserver.observe(statNumbers[0].parentElement.parentElement);
}

// ========================================
// Scroll Reveal Animations
// ========================================

const revealElements = document.querySelectorAll('.expertise-card, .project-card, .about-text, .about-image');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('reveal', 'active');
            }, index * 100);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    element.classList.add('reveal');
    revealObserver.observe(element);
});

// ========================================
// Smooth Scrolling for Internal Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Parallax Effect for Hero Background
// ========================================

const gradientOrbs = document.querySelectorAll('.gradient-orb');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    gradientOrbs.forEach((orb, index) => {
        const speed = 0.3 + (index * 0.1);
        orb.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// ========================================
// Contact Form Handling
// ========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success message
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// ========================================
// Notification System
// ========================================

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Cursor Trail Effect (Optional Enhancement)
// ========================================

class CursorTrail {
    constructor() {
        this.dots = [];
        this.mouse = { x: 0, y: 0 };
        this.init();
    }

    init() {
        // Create cursor dots
        for (let i = 0; i < 5; i++) {
            const dot = document.createElement('div');
            dot.className = 'cursor-dot';
            dot.style.cssText = `
                position: fixed;
                width: ${8 - i * 1.5}px;
                height: ${8 - i * 1.5}px;
                background: rgba(0, 102, 255, ${0.5 - i * 0.08});
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: all 0.1s ease;
            `;
            document.body.appendChild(dot);
            this.dots.push({
                element: dot,
                x: 0,
                y: 0
            });
        }

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        // Animate dots
        this.animate();
    }

    animate() {
        let x = this.mouse.x;
        let y = this.mouse.y;

        this.dots.forEach((dot, index) => {
            dot.x += (x - dot.x) * 0.3;
            dot.y += (y - dot.y) * 0.3;

            dot.element.style.left = dot.x + 'px';
            dot.element.style.top = dot.y + 'px';

            x = dot.x;
            y = dot.y;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize cursor trail on desktop only
if (window.innerWidth > 1024) {
    new CursorTrail();
}

// ========================================
// Typing Effect for Hero Title (Optional)
// ========================================

class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.text = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.isDeleting = false;
        this.type();
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullText = this.words[current];

        if (this.isDeleting) {
            this.text = fullText.substring(0, this.text.length - 1);
        } else {
            this.text = fullText.substring(0, this.text.length + 1);
        }

        this.element.innerHTML = this.text;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.text === fullText) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.text === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing effect for a dynamic element if needed
// Example: const typeElement = document.querySelector('.type-text');
// if (typeElement) {
//     new TypeWriter(typeElement, ['Prompt Engineer', 'AI Developer', 'Copilot Expert'], 2000);
// }

// ========================================
// Project Card Tilt Effect
// ========================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========================================
// Loading Animation
// ========================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// Theme Toggle (Optional Feature)
// ========================================

// You can add a theme toggle button if desired
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
}

// ========================================
// Performance Optimizations
// ========================================

// Lazy load images
const images = document.querySelectorAll('img[src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.src; // Trigger load
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Debounce scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Use debounced scroll handler
window.addEventListener('scroll', debounce(() => {
    activateNavLink();
}, 10));

// ========================================
// Chatbot
// ========================================

const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWidget = document.getElementById('chatbotWidget');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotSuggestions = document.getElementById('chatbotSuggestions');
const chatbotBadge = document.querySelector('.chatbot-badge');

// Predefined questions and answers database
const chatbotKnowledge = {
    expertise: {
        question: "What are your main specialties?",
        answer: "I specialize in three main areas: <strong>Prompt Engineering</strong> - designing sophisticated prompts for LLMs, <strong>GitHub Copilot Integration</strong> - implementing AI-assisted development workflows, and <strong>AI System Architecture</strong> - building scalable RAG systems and production ML pipelines. I've helped over 50 enterprise clients increase their development efficiency by up to 300%."
    },
    copilot: {
        question: "Tell me about your Copilot experience",
        answer: "I'm a <strong>GitHub Copilot Expert</strong> with extensive experience in enterprise deployment and custom extension development. I've trained over 5,000 developers on best practices for AI-assisted development and created training programs that help teams maximize their productivity. My work includes building custom Copilot integrations that maintain security compliance while boosting team efficiency by 250%."
    },
    projects: {
        question: "What kind of projects have you worked on?",
        answer: "I've completed over <strong>150 AI projects</strong> including: Enterprise Copilot platforms for Fortune 500 companies, open-source prompt libraries with 10K+ GitHub stars, intelligent RAG systems handling 100K+ documents, AI-powered code review bots, and security tools that prevent prompt injection attacks with 99.5% accuracy. Each project focuses on practical, production-ready solutions."
    },
    availability: {
        question: "Are you available for new projects?",
        answer: "Yes! I'm currently available for new projects and consulting opportunities. I work with both startups and enterprise clients on AI implementation, prompt engineering, and Copilot integration. Whether you need short-term consulting or long-term collaboration, I'd love to discuss how I can help. Feel free to reach out via the <a href='#contact' style='color: #06b6d4; text-decoration: underline;'>contact form</a>."
    },
    consulting: {
        question: "Do you offer consulting services?",
        answer: "Absolutely! I offer <strong>strategic AI consulting</strong> including: AI roadmap development, prompt engineering workshops, GitHub Copilot team training, system architecture reviews, and security audits. I help organizations develop comprehensive strategies for AI adoption and provide hands-on guidance throughout implementation. Sessions can be customized to your team's specific needs."
    },
    training: {
        question: "Do you provide training programs?",
        answer: "Yes! I offer comprehensive <strong>training programs</strong> covering: Advanced prompt engineering techniques, GitHub Copilot best practices, AI-assisted development workflows, RAG system implementation, and AI safety & security. Programs can be delivered as workshops, online courses, or custom training tailored to your organization. I've successfully trained over 5,000 developers globally."
    },
    technologies: {
        question: "What technologies do you work with?",
        answer: "I work with cutting-edge AI technologies including: <strong>OpenAI GPT-4, Claude, LangChain, Hugging Face</strong> for AI/ML; <strong>GitHub Copilot, VS Code, Cursor</strong> for development tools; <strong>Python, TypeScript, JavaScript, React, Node.js</strong> for programming; and <strong>Pinecone, Weaviate, ChromaDB</strong> for vector databases. I also have expertise in Docker, Kubernetes, and cloud platforms like AWS and Azure."
    },
    pricing: {
        question: "What are your rates?",
        answer: "My rates vary depending on project scope, duration, and complexity. I offer flexible engagement models including hourly consulting, project-based pricing, and retainer agreements. For enterprise training programs, I provide custom quotes based on team size and training duration. Let's discuss your specific needs - <a href='#contact' style='color: #06b6d4; text-decoration: underline;'>contact me</a> for a detailed quote."
    },
    contact: {
        question: "How can I contact you?",
        answer: "You can reach me through multiple channels: Email at <strong>haythem.rehouma@inskillflow.com</strong>, connect on <strong>LinkedIn</strong>, check out my work on <strong>GitHub</strong>, or use the <a href='#contact' style='color: #06b6d4; text-decoration: underline;'>contact form</a> on this page. I typically respond within 24 hours. For urgent inquiries, email is the fastest way to reach me."
    },
    background: {
        question: "What's your background?",
        answer: "I have over <strong>7 years of experience</strong> in AI and software development with an M.S. in Computer Science (AI Specialization). I'm certified as a GitHub Copilot Expert and AWS ML Certified, and I'm recognized as a Top 1% AI Contributor on GitHub. My work focuses on bridging the gap between cutting-edge AI research and practical, production-ready solutions."
    }
};

// Keywords mapping for better matching
const keywordMapping = {
    'specialty': 'expertise',
    'specialties': 'expertise',
    'specialize': 'expertise',
    'expert': 'expertise',
    'skills': 'expertise',
    'copilot': 'copilot',
    'github': 'copilot',
    'ai-assisted': 'copilot',
    'project': 'projects',
    'work': 'projects',
    'portfolio': 'projects',
    'available': 'availability',
    'hire': 'availability',
    'freelance': 'availability',
    'consulting': 'consulting',
    'consultant': 'consulting',
    'advice': 'consulting',
    'training': 'training',
    'workshop': 'training',
    'course': 'training',
    'teach': 'training',
    'technology': 'technologies',
    'tech': 'technologies',
    'stack': 'technologies',
    'tools': 'technologies',
    'price': 'pricing',
    'cost': 'pricing',
    'rate': 'pricing',
    'pricing': 'pricing',
    'contact': 'contact',
    'reach': 'contact',
    'email': 'contact',
    'background': 'background',
    'experience': 'background',
    'education': 'background',
    'bio': 'background'
};

// Toggle chatbot
chatbotToggle.addEventListener('click', () => {
    chatbotWidget.classList.toggle('active');
    if (chatbotWidget.classList.contains('active')) {
        chatbotBadge.style.display = 'none';
        chatbotInput.focus();
    }
});

chatbotClose.addEventListener('click', () => {
    chatbotWidget.classList.remove('active');
});

// Scroll to bottom of messages
function scrollToBottom() {
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Add message to chat
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = isUser ? 'user-message' : 'bot-message';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = isUser ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerHTML = `<p>${message}</p>`;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    chatbotMessages.appendChild(messageDiv);
    
    setTimeout(scrollToBottom, 100);
}

// Show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'bot-message typing-indicator-message';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;
    chatbotMessages.appendChild(typingDiv);
    scrollToBottom();
    return typingDiv;
}

// Remove typing indicator
function removeTypingIndicator(indicator) {
    if (indicator && indicator.parentNode) {
        indicator.remove();
    }
}

// Find best matching answer
function findAnswer(userMessage) {
    const message = userMessage.toLowerCase().trim();
    
    // Check for exact question match
    for (const [key, data] of Object.entries(chatbotKnowledge)) {
        if (message.includes(data.question.toLowerCase())) {
            return data.answer;
        }
    }
    
    // Check for keyword match
    for (const [keyword, topic] of Object.entries(keywordMapping)) {
        if (message.includes(keyword)) {
            return chatbotKnowledge[topic].answer;
        }
    }
    
    // Default response with suggestions
    return "I'm not sure I understand that question. Please choose from the suggested questions below, or try asking about my expertise, projects, Copilot experience, availability, consulting services, or training programs.";
}

// Handle user message
function handleUserMessage(message) {
    if (!message.trim()) return;
    
    // Add user message
    addMessage(message, true);
    chatbotInput.value = '';
    
    // Show typing indicator
    const typing = showTypingIndicator();
    
    // Simulate thinking time
    setTimeout(() => {
        removeTypingIndicator(typing);
        const answer = findAnswer(message);
        addMessage(answer, false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

// Send button click
chatbotSend.addEventListener('click', () => {
    handleUserMessage(chatbotInput.value);
});

// Enter key to send
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserMessage(chatbotInput.value);
    }
});

// Suggestion buttons
document.querySelectorAll('.suggestion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const question = btn.getAttribute('data-question');
        const data = chatbotKnowledge[question];
        
        if (data) {
            addMessage(data.question, true);
            
            // Show typing indicator
            const typing = showTypingIndicator();
            
            setTimeout(() => {
                removeTypingIndicator(typing);
                addMessage(data.answer, false);
            }, 1000 + Math.random() * 1000);
        }
    });
});

// Auto-show chatbot after 5 seconds (first visit)
if (!sessionStorage.getItem('chatbotShown')) {
    setTimeout(() => {
        if (!chatbotWidget.classList.contains('active')) {
            chatbotBadge.style.display = 'flex';
            // Animate the badge
            chatbotBadge.style.animation = 'bounce-badge 0.5s ease-in-out 3';
        }
        sessionStorage.setItem('chatbotShown', 'true');
    }, 5000);
}

// ========================================
// Console Message
// ========================================

console.log('%c👋 Hello, fellow developer!', 'font-size: 20px; font-weight: bold; color: #0066ff;');
console.log('%cInterested in the code? Check out my GitHub!', 'font-size: 14px; color: #a0a0b8;');
console.log('%chttps://github.com/haythem-rehouma', 'font-size: 12px; color: #06b6d4;');
console.log('%c© 2024 Haythem REHOUMA - Powered by inskillflow', 'font-size: 11px; color: #7c3aed; font-weight: bold;');

// ========================================
// Analytics (Placeholder)
// ========================================

// Add your analytics tracking here
// Example: Google Analytics, Plausible, etc.

function trackEvent(category, action, label) {
    // Implement your tracking solution
    console.log('Event tracked:', { category, action, label });
}

// Track project views
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Projects', 'View', link.closest('.project-card').querySelector('h3').textContent);
    });
});

// Track contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        trackEvent('Contact', 'Submit', 'Contact Form');
    });
}

// ========================================
// Easter Egg - Konami Code
// ========================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join('') === konamiPattern.join('')) {
        showNotification('🎮 Konami Code Activated! You found the easter egg!', 'success');
        document.body.style.animation = 'rainbow 3s ease infinite';
    }
});

// Add rainbow animation
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

