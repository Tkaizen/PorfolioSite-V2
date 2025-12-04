



const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
    // Load saved preference: 'light' or 'dark'
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
        document.body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-mode');
        if (isLight) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

}
const projects = [
    {
        title: "Pixel Weather App",
        description: "Location-based weather application using OpenWeatherMap API..",
        tags: ["React Native", "API Integration"]
    },
    {
        title: "AZUREA Car Rental ",
        description: "Car rental website with booking system and admin panel.",
        tags: ["React Expo, mongoDB, Node.js"]
    },
    {
        title: "Sunrise Cafe",
        description: "A chill and relaxing cafe website with menu and reservation features.",
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Coming Soon!Coming Soon!",
        description: "Coming Soon!.",
        tags: ["Coming Soon!"]
    },
    {
        title: "Coming Soon!",
        description: "SComing Soon!",
        tags: ["Coming Soon!"]
    },
    {
        title: "Coming Soon!",
        description: "Coming Soon!",
        tags: ["Coming Soon!"]
    },
    {
        title: "Coming Soon!",
        description: "Coming Soon!",
        tags: ["Coming Soon!"]
    },
    {
        title: "Coming Soon!",
        description: "Coming Soon!",
        tags: ["Coming Soon!"]
    },
    {
        title: "Coming Soon!",
        description: "Coming Soon!.",
        tags: ["Coming Soon!"]
    },
    {
        title: "Coming Soon!",
        description: "Coming Soon!",
        tags: ["Coming Soon!"]
    }
];

const projectGrid = document.getElementById('project-grid');

function renderProjects() {
    if (!projectGrid) return;

    projectGrid.innerHTML = projects.map(project => `
        <article class="card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <ul>
                ${project.tags.map(tag => `<li>${tag}</li>`).join('')}
            </ul>
        </article>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);
