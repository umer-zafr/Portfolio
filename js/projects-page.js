// Projects Page JavaScript

// Load all projects
if (typeof projectsData !== 'undefined') {
    const allProjectsGrid = document.getElementById('allProjectsGrid');
    
    projectsData.forEach(project => {
        const projectCard = createProjectCard(project);
        allProjectsGrid.appendChild(projectCard);
    });
}

// Helper Function to Create Project Card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    if (project.category) {
        card.setAttribute('data-category', project.category.toLowerCase());
    }
    
    const imageUrl = project.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%236c63ff" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="60" fill="white"%3EProject%3C/text%3E%3C/svg%3E';
    
    const tagsHtml = project.tags ? project.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '';
    
    const linksHtml = `
        ${project.github ? `<a href="${project.github}" class="project-link" target="_blank"><i class="fab fa-github"></i> Code</a>` : ''}
        ${project.demo ? `<a href="${project.demo}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
    `;
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${imageUrl}" alt="${project.title}">
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">${tagsHtml}</div>
            <div class="project-links">${linksHtml}</div>
        </div>
    `;
    
    return card;
}

// Filter Projects
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
                card.classList.remove('hide');
            } else {
                const category = card.getAttribute('data-category');
                if (category === filterValue) {
                    card.style.display = 'block';
                    card.classList.remove('hide');
                } else {
                    card.style.display = 'none';
                    card.classList.add('hide');
                }
            }
        });
        
        // Show empty state if no projects match
        const visibleCards = document.querySelectorAll('.project-card:not(.hide)');
        const projectsGrid = document.getElementById('allProjectsGrid');
        const existingEmptyState = document.querySelector('.empty-state');
        
        if (visibleCards.length === 0 && !existingEmptyState) {
            const emptyState = document.createElement('div');
            emptyState.className = 'empty-state';
            emptyState.innerHTML = `
                <i class="fas fa-folder-open"></i>
                <h3>No Projects Found</h3>
                <p>No projects match the selected filter.</p>
            `;
            projectsGrid.appendChild(emptyState);
        } else if (visibleCards.length > 0 && existingEmptyState) {
            existingEmptyState.remove();
        }
    });
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Load Personal Data for Footer
if (typeof personalData !== 'undefined') {
    document.getElementById('footerName').textContent = personalData.name;
}

// Set Current Year in Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scroll to top when back button is clicked
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card');
    
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
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});
