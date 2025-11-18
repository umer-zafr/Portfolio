// Theme Toggle Functionality

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Apply the saved theme on page load
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    updateThemeIcon(true);
}

// Theme toggle button click handler
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update icon with animation
    updateThemeIcon(isDarkMode);
    
    // Add click animation
    themeToggleBtn.style.transform = 'scale(0.9) rotate(180deg)';
    setTimeout(() => {
        themeToggleBtn.style.transform = 'scale(1) rotate(0deg)';
    }, 300);
});

// Update theme icon
function updateThemeIcon(isDarkMode) {
    if (isDarkMode) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Add keyboard shortcut (Ctrl/Cmd + Shift + D)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        themeToggleBtn.click();
    }
});

// Smooth transition on initial load
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
});

// Optional: Auto-detect system preference on first visit
if (!localStorage.getItem('theme')) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
        localStorage.setItem('theme', 'dark');
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            document.body.classList.add('dark-mode');
            updateThemeIcon(true);
        } else {
            document.body.classList.remove('dark-mode');
            updateThemeIcon(false);
        }
    }
});

// Add tooltip on hover (optional enhancement)
themeToggleBtn.setAttribute('title', 'Toggle Dark Mode (Ctrl+Shift+D)');

// Animate button on page load
setTimeout(() => {
    themeToggleBtn.style.animation = 'fadeIn 0.5s ease';
}, 500);
