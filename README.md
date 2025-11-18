# Portfolio Website

A modern, responsive portfolio website for showcasing your skills, projects, and experience as a Software Engineer and Flutter Developer.

## 🚀 Features

- **Modular Structure**: Clean and organized file structure for easy maintenance
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Eye-catching animations and transitions
- **Easy to Customize**: Simple data files to update your information
- **Project Showcase**: Dedicated pages for displaying all your projects
- **Contact Form**: Built-in contact form for visitor inquiries
- **Modern Design**: Clean, professional design with gradient accents

## 📁 Project Structure

```
myPortfolio/
│
├── index.html              # Main homepage
├── projects.html           # All projects page
├── README.md              # This file
│
├── css/                   # Stylesheets
│   ├── style.css         # Main styles
│   ├── responsive.css    # Responsive design rules
│   └── projects-page.css # Projects page specific styles
│
├── js/                    # JavaScript files
│   ├── main.js           # Main JavaScript functionality
│   └── projects-page.js  # Projects page functionality
│
├── data/                  # Data files (update these with your info)
│   ├── personal.js       # Personal information
│   ├── skills.js         # Skills and expertise
│   ├── projects.js       # Projects data
│   └── experience.js     # Work experience
│
└── projects/              # Individual project pages
    └── project-template.html  # Template for project details
```

## 🎨 Sections

1. **Home**: Hero section with your name, title, and call-to-action buttons
2. **About Me**: Personal information, bio, and statistics
3. **Skills & Expertise**: Categorized skills with proficiency levels
4. **Projects**: Featured projects with live demos and GitHub links
5. **Experience**: Timeline of your work history
6. **Contact**: Contact form and contact information

## 🛠️ Setup & Customization

### 1. Update Personal Information
Edit `data/personal.js` and update:
- Name, title, description
- Contact information (email, phone)
- Social media links
- Location and experience
- Profile image path

### 2. Add Your Skills
Edit `data/skills.js`:
- Update skill categories
- Add/remove skills
- Adjust proficiency levels (0-100)

### 3. Add Your Projects
Edit `data/projects.js`:
- Add project details (title, description, tags)
- Include image paths
- Add GitHub and demo links
- Set `featured: true` for projects to show on homepage
- Assign categories for filtering

### 4. Update Work Experience
Edit `data/experience.js`:
- Add your work history
- Include position, company, duration
- Add detailed descriptions

### 5. Add Project Images
- Create an `images/` folder in the root directory
- Add your project screenshots and profile photo
- Update the image paths in the data files

### 6. Customize Colors (Optional)
Edit `css/style.css` and modify the CSS variables:
```css
:root {
    --primary-color: #6c63ff;
    --secondary-color: #4CAF50;
    /* ... other colors */
}
```

## 🌐 Deployment

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings → Pages
4. Select the main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name/`

### Option 2: Netlify
1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop your portfolio folder
3. Your site will be live instantly with a custom URL

### Option 3: Vercel
1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click

## 📱 Responsive Breakpoints

- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Adding New Projects

To add a new detailed project page:

1. Copy `projects/project-template.html`
2. Rename it (e.g., `my-awesome-project.html`)
3. Update the content with your project details
4. Add the link in `data/projects.js`

## 🔧 Contact Form Integration

The contact form currently shows an alert. To make it functional, integrate with:

### EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Add this script in `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
3. Update the form submission in `js/main.js`

### FormSpree
1. Sign up at [FormSpree](https://formspree.io/)
2. Update the form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📧 Support

If you have questions or need help, feel free to reach out!

---

**Made with ❤️ by [Your Name]**

Happy Coding! 🚀
