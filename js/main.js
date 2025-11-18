// Main JavaScript for Portfolio

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Load Personal Data
if (typeof personalData !== 'undefined') {
    // Home Section - New Enhanced Layout
    const userName = document.getElementById('userName');
    if (userName) userName.textContent = personalData.name;
    
    const userTitle = document.getElementById('userTitle');
    if (userTitle) userTitle.textContent = personalData.title;
    
    const userLocation = document.getElementById('userLocation');
    if (userLocation) userLocation.textContent = personalData.location;
    
    const badgeLocation = document.getElementById('badgeLocation');
    if (badgeLocation) badgeLocation.textContent = personalData.location || 'Pakistan';
    
    // Hero Profile Image
    const heroProfileImage = document.getElementById('heroProfileImage');
    if (heroProfileImage) {
        if (personalData.profileImage) {
            heroProfileImage.src = personalData.profileImage;
            heroProfileImage.alt = personalData.name;
        } else {
            const initials = personalData.name.split(' ').map(n => n[0]).join('').toUpperCase();
            heroProfileImage.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Ccircle fill='%23A855F7' cx='80' cy='80' r='80'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='50' fill='white'%3E${initials}%3C/text%3E%3C/svg%3E`;
        }
    }
    
    // Hero Stats
    const statsProjects = document.getElementById('statsProjects');
    if (statsProjects) statsProjects.textContent = personalData.stats?.projects + '+' || '15+';
    
    const statsClients = document.getElementById('statsClients');
    if (statsClients) statsClients.textContent = personalData.stats?.clients + '+' || '8+';
    
    const statsYears = document.getElementById('statsYears');
    if (statsYears) statsYears.textContent = personalData.stats?.years + '+' || '3+';
    
    // Hero Description
    const heroDescription = document.getElementById('heroDescription');
    if (heroDescription) heroDescription.textContent = personalData.description;
    
    const heroDetailedDescription = document.getElementById('heroDetailedDescription');
    if (heroDetailedDescription) heroDetailedDescription.textContent = personalData.about;
    
    // Hero Contact Info
    const heroEmail = document.getElementById('heroEmail');
    if (heroEmail) {
        heroEmail.textContent = personalData.email;
        heroEmail.href = `mailto:${personalData.email}`;
    }
    
    const heroPhone = document.getElementById('heroPhone');
    if (heroPhone) {
        heroPhone.textContent = personalData.phone;
        heroPhone.href = `tel:${personalData.phone}`;
    }
    
    const userDescription = document.getElementById('userDescription');
    if (userDescription) userDescription.textContent = personalData.description;
    
    // Social Links
    if (personalData.github) {
        document.getElementById('githubLink').href = personalData.github;
    }
    if (personalData.linkedin) {
        document.getElementById('linkedinLink').href = personalData.linkedin;
    }
    if (personalData.email) {
        document.getElementById('emailLink').href = `mailto:${personalData.email}`;
    }
    
    // Download Resume Buttons
    const downloadResumeBtns = document.querySelectorAll('#downloadResume, #aboutDownloadCV');
    downloadResumeBtns.forEach(btn => {
        if (btn && personalData.resumeLink) {
            btn.href = personalData.resumeLink;
            btn.download = `${personalData.name.replace(/\s+/g, '_')}_Resume.pdf`;
        } else if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Resume will be available soon! Please check back later or contact me directly.');
            });
        }
    });
    
    // About Section - Profile Image
    const aboutProfileImage = document.getElementById('aboutProfileImage');
    if (aboutProfileImage) {
        if (personalData.profileImage) {
            aboutProfileImage.src = personalData.profileImage;
            aboutProfileImage.alt = personalData.name;
        } else {
            const initials = personalData.name.split(' ').map(n => n[0]).join('').toUpperCase();
            aboutProfileImage.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%232563EB' width='300' height='300' rx='150'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='100' fill='white'%3E${initials}%3C/text%3E%3C/svg%3E`;
        }
    }
    
    // About Section - Info
    if (personalData.about) {
        document.getElementById('aboutDescription').textContent = personalData.about;
    }
    const aboutName = document.getElementById('aboutName');
    if (aboutName) aboutName.textContent = personalData.name;
    
    const aboutAge = document.getElementById('aboutAge');
    if (aboutAge && personalData.age) aboutAge.textContent = `${personalData.age} Years`;
    
    const aboutCitizenship = document.getElementById('aboutCitizenship');
    if (aboutCitizenship) aboutCitizenship.textContent = personalData.citizenship || personalData.location || 'Pakistan';
    
    const aboutEmail = document.getElementById('aboutEmail');
    if (aboutEmail) aboutEmail.textContent = personalData.email || 'your.email@example.com';
    
    const aboutJob = document.getElementById('aboutJob');
    if (aboutJob) aboutJob.textContent = personalData.title || 'Software Engineer';
    
    // Footer
    document.getElementById('footerName').textContent = personalData.name;
    
    const footerEmail = document.getElementById('footerEmail');
    if (footerEmail && personalData.email) {
        footerEmail.href = `mailto:${personalData.email}`;
    }
    
    const footerPhone = document.getElementById('footerPhone');
    if (footerPhone && personalData.phone) {
        footerPhone.href = `tel:${personalData.phone}`;
    }
    
    const footerWhatsapp = document.getElementById('footerWhatsapp');
    if (footerWhatsapp && personalData.phone) {
        const cleanPhone = personalData.phone.replace(/\D/g, '');
        footerWhatsapp.href = `https://wa.me/${cleanPhone}`;
    }
}

// Load Skills with Icon Blocks
if (typeof skillsData !== 'undefined') {
    const skillsContainer = document.getElementById('skillsContainer');
    const filtersContainer = document.getElementById('skillsFilters');
    
    // Skill icons and categories mapping
    const skillIcons = {
        'Flutter': 'fab fa-flutter',
        'Dart': 'fas fa-code',
        'React': 'fab fa-react',
        'React Native': 'fab fa-react',
        'Next.js': 'fas fa-forward',
        'TypeScript': 'fas fa-code',
        'JavaScript': 'fab fa-js',
        'HTML5': 'fab fa-html5',
        'CSS3': 'fab fa-css3-alt',
        'Tailwind CSS': 'fas fa-wind',
        'Firebase': 'fas fa-fire',
        'Supabase': 'fas fa-database',
        'MongoDB': 'fas fa-database',
        'PostgreSQL': 'fas fa-database',
        'MySQL': 'fas fa-database',
        'Node.js': 'fab fa-node-js',
        'Express': 'fas fa-server',
        'Git': 'fab fa-git-alt',
        'GitHub': 'fab fa-github',
        'Docker': 'fab fa-docker',
        'AWS': 'fab fa-aws',
        'REST API': 'fas fa-plug',
        'GraphQL': 'fas fa-project-diagram',
        'Redux': 'fas fa-store',
        'Figma': 'fab fa-figma',
        'Adobe XD': 'fas fa-pen-nib',
        'Python': 'fab fa-python',
        'Java': 'fab fa-java',
        'C++': 'fas fa-code',
        'Default': 'fas fa-code'
    };
    
    // Category type mapping for styling
    const skillCategories = {
        'Flutter': 'app',
        'Dart': 'app',
        'React Native': 'app',
        'React': 'web',
        'Next.js': 'web',
        'JavaScript': 'web',
        'TypeScript': 'web',
        'HTML5': 'web',
        'CSS3': 'web',
        'Tailwind CSS': 'web',
        'Node.js': 'web',
        'Firebase': 'tool',
        'Supabase': 'tool',
        'MongoDB': 'tool',
        'PostgreSQL': 'tool',
        'REST API': 'tool',
        'GraphQL': 'tool',
        'Git': 'tool',
        'GitHub': 'tool',
        'Docker': 'tool',
        'AWS': 'tool',
        'Figma': 'tool'
    };
    
    // Build filter tabs based on categories
    const categoryNames = skillsData.map(c => c.category);
    const tabs = ['All', ...categoryNames];
    if (filtersContainer) {
        tabs.forEach((tab, idx) => {
            const btn = document.createElement('button');
            btn.className = 'skills-filter-btn' + (idx === 0 ? ' active' : '');
            btn.textContent = tab;
            btn.dataset.filter = tab.toLowerCase();
            filtersContainer.appendChild(btn);
        });
    }

    skillsData.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        categoryDiv.setAttribute('data-category', category.category.toLowerCase());
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = `<i class="fas fa-layer-group"></i> ${category.category}`;
        categoryDiv.appendChild(categoryTitle);
        
        const skillsGrid = document.createElement('div');
        skillsGrid.className = 'skills-grid';
        
        category.skills.forEach(skill => {
            const skillCard = document.createElement('div');
            const categoryType = skillCategories[skill.name] || 'tool';
            skillCard.className = `skill-card skill-card-${categoryType}`;
            
            const icon = skillIcons[skill.name] || skillIcons['Default'];
            
            skillCard.innerHTML = `
                <div class="skill-icon">
                    <i class="${icon}"></i>
                </div>
                <h4 class="skill-name">${skill.name}</h4>
            `;
            
            skillsGrid.appendChild(skillCard);
        });
        
        categoryDiv.appendChild(skillsGrid);
        skillsContainer.appendChild(categoryDiv);
    });

    // Filter behavior
    if (filtersContainer) {
        filtersContainer.addEventListener('click', (e) => {
            const target = e.target.closest('.skills-filter-btn');
            if (!target) return;
            const filter = target.dataset.filter;
            // Set active tab
            filtersContainer.querySelectorAll('.skills-filter-btn').forEach(b => b.classList.remove('active'));
            target.classList.add('active');
            // Show/hide
            document.querySelectorAll('.skill-category').forEach(cat => {
                const name = cat.getAttribute('data-category');
                if (filter === 'all' || filter === name) {
                    cat.style.display = '';
                } else {
                    cat.style.display = 'none';
                }
            });
        });
    }
}

// Load Projects (Featured - max 6)
if (typeof projectsData !== 'undefined') {
    const projectsGrid = document.getElementById('projectsGrid');
    const featuredProjects = projectsData.filter(p => p.featured).slice(0, 6);
    
    if (featuredProjects.length === 0) {
        featuredProjects.push(...projectsData.slice(0, 6));
    }
    
    featuredProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Load Experience
if (typeof experienceData !== 'undefined') {
    const experienceTimeline = document.getElementById('experienceTimeline');
    
    experienceData.forEach(exp => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3>${exp.position}</h3>
                <h4>${exp.company}</h4>
                <div class="timeline-date">
                    <i class="fas fa-calendar"></i>
                    <span>${exp.duration}</span>
                </div>
                <p>${exp.description}</p>
            </div>
        `;
        
        experienceTimeline.appendChild(timelineItem);
    });
}

// Helper Function to Create Project Card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    if (project.category) {
        card.setAttribute('data-category', project.category.toLowerCase());
    }
    
    const imageUrl = project.image || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad${Math.random()}' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad${Math.random()})' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Poppins, sans-serif' font-size='28' font-weight='600' fill='white'%3E${project.title.split(' ')[0]}%3C/text%3E%3C/svg%3E`;
    
    const tagsHtml = project.tags ? project.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '';
    
    const linksHtml = `
        ${project.github ? `<a href="${project.github}" class="project-link" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-github"></i> Code</a>` : ''}
        ${project.demo ? `<a href="${project.demo}" class="project-link" target="_blank" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
    `;
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${imageUrl}" alt="${project.title}">
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description.substring(0, 120)}${project.description.length > 120 ? '...' : ''}</p>
            <div class="project-tags">${tagsHtml}</div>
            <div class="project-links">${linksHtml}</div>
        </div>
    `;
    
    // Add click event to open project detail page
    if (project.detailPage) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.open(project.detailPage, '_blank');
        });
    }
    
    return card;
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you can add your form submission logic
    // For now, we'll just show an alert
    alert(`Thank you for your message, ${data.name}! I'll get back to you soon.`);
    contactForm.reset();
    
    // You can integrate with services like:
    // - FormSpree
    // - EmailJS
    // - Your own backend API
});

// Scroll to Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Set Current Year in Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .stat-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => observer.observe(el));
};

// Run animations when DOM is loaded
document.addEventListener('DOMContentLoaded', animateOnScroll);
