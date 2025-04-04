//Data structure for the portfolio projects
const categories = [
  "Featured",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Branding",
  "Photography"
];

const projects = [
  {
    id: "1",
    title: "E-Commerce Platform Redesign",
    description: "A complete overhaul of an e-commerce platform focusing on user experience and conversion optimization. The project involved redesigning the interface, improving navigation, and implementing a new checkout process that resulted in a 32% increase in conversion rates.",
    thumbnail: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2340&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2340&auto=format&fit=crop",
    category: "Web Development",
    tags: ["React", "Node.js", "UI/UX", "E-commerce"],
    year: 2024,
    featured: true,
    videoUrl: "https://player.vimeo.com/external/417802360.sd.mp4?s=d6b8c7b55afceb0db0f3ebca9021ab972fcafd50&profile_id=165&oauth2_token_id=57447761"
  },
 
  {
    id: "4",
    title: "Sustainable Fashion Brand Identity",
    description: "Complete brand identity for a sustainable fashion brand committed to ethical production and environmental responsibility. The project included logo design, color palette, typography, packaging design, and brand guidelines.",
    thumbnail: "https://images.unsplash.com/photo-1613013261832-a5d86dba9421?q=80&w=3871&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1613013261832-a5d86dba9421?q=80&w=3871&auto=format&fit=crop",
    category: "Branding",
    tags: ["Branding", "Logo Design", "Sustainable", "Fashion"],
    year: 2022
  },
 
  {
    id: "6",
    title: "Health & Wellness Tracking Platform",
    description: "A comprehensive web platform for tracking health metrics, fitness activities, nutrition, and mental wellness. The project included custom data visualization components and integration with popular fitness devices and apps.",
    thumbnail: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2363&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2363&auto=format&fit=crop",
    category: "Web Development",
    tags: ["Web Development", "Health Tech", "Data Visualization", "React"],
    year: 2024,
    featured: true
  },
  {
    id: "7",
    title: "Augmented Reality Shopping Experience",
    description: "An augmented reality mobile app that allows users to visualize products in their own environment before purchasing. The app includes real-time product rendering, accurate size scaling, and integration with e-commerce platforms.",
    thumbnail: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=1974&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=1974&auto=format&fit=crop",
    category: "Mobile Apps",
    tags: ["AR/VR", "E-commerce", "Mobile Development", "Innovation"],
    year: 2025
  },
  {
    id: "8",
    title: "Financial Dashboard UI Design",
    description: "A sophisticated UI design for a financial dashboard that simplifies complex data and provides actionable insights. The design focuses on clarity, hierarchy, and accessibility, with careful consideration for color coding and information density.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    category: "UI/UX Design",
    tags: ["UI/UX", "Dashboard", "Financial", "Data Visualization"],
    year: 2024
  },
  {
    id: "9",
    title: "Rentease Startup Branding",
    description: "Brand identity for an innovative tech startup disrupting the AI industry. The project included logo design, visual identity system, website design, marketing materials, and brand guidelines focusing on a modern, cutting-edge aesthetic.",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2340&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2340&auto=format&fit=crop",
    category: "Branding",
    tags: ["Branding", "Tech", "Startup", "Visual Identity"],
    year: 2023
  },
  {
    id: "10",
    title: "Urban Exploration Photo Essay",
    description: "A photo essay documenting the hidden corners and forgotten spaces of major urban centers. The series explores themes of decay, renewal, and the passage of time in city environments, with a focus on composition and atmospheric lighting.",
    thumbnail: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2340&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2340&auto=format&fit=crop",
    category: "Photography",
    tags: ["Photography", "Urban", "Documentary", "Photo Essay"],
    year: 2020
  }
];

// Helper functions
function getProjectsByCategory(category) {
  if (category === "Featured") {
    return projects.filter(project => project.featured);
  }
  return projects.filter(project => project.category === category);
}

function getProjectById(id) {
  return projects.find(project => project.id === id);
}

function getFeaturedProject() {
  return projects.find(project => project.featured) || projects[0];
}
