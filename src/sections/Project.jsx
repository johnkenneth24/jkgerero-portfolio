import React from 'react';
import Icon from '@mdi/react';
import { 
    mdiGithub, 
    mdiOpenInNew, 
    mdiReact, 
    mdiVuejs, 
    mdiLaravel,
    mdiLanguagePhp,
    mdiLanguageJavascript,
    mdiTailwind
} from '@mdi/js';

export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce application with cart management, user authentication, and payment integration.",
            image: "/images/image-sample.jpg",
            tags: ["Laravel", "Vue.js", "Tailwind CSS"],
            icons: [mdiLaravel, mdiVuejs, mdiTailwind],
            github: "https://github.com/johnkenneth24",
            demo: "#",
            featured: true
        },
        {
            title: "Chat Application",
            description: "Real-time chat app with WebSocket integration, user presence, and message notifications.",
            image: "/images/image-sample.jpg",
            tags: ["PHP", "JavaScript", "WebSocket"],
            icons: [mdiLanguagePhp, mdiLanguageJavascript],
            github: "https://github.com/johnkenneth24",
            demo: "#",
            featured: false
        },
        {
            title: "Portfolio Website",
            description: "Modern and responsive portfolio showcasing projects, skills, and professional experience.",
            image: "/images/image-sample.jpg",
            tags: ["React", "Tailwind CSS"],
            icons: [mdiReact, mdiTailwind],
            github: "https://github.com/johnkenneth24",
            demo: "#",
            featured: true
        },
    ];

    return (
        <section className="min-h-screen bg-slate-950 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
                    <p className="text-slate-300 mt-6 text-lg max-w-2xl mx-auto">
                        A collection of projects I've built while learning and experimenting with different technologies
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-slate-900/50 backdrop-blur rounded-2xl overflow-hidden border border-slate-800/50 hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20"
                        >
                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        Featured
                                    </span>
                                </div>
                            )}

                            {/* Project Image */}
                            <div className="relative overflow-hidden h-48 bg-slate-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Stack Icons */}
                                <div className="flex gap-2 mb-4">
                                    {project.icons.map((icon, iconIndex) => (
                                        <div
                                            key={iconIndex}
                                            className="bg-slate-800/50 p-2 rounded-lg border border-slate-700/50"
                                        >
                                            <Icon 
                                                path={icon} 
                                                size={0.8} 
                                                className="text-teal-400" 
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="text-xs bg-slate-800/50 text-slate-300 px-3 py-1 rounded-full border border-slate-700/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
                                    >
                                        <Icon path={mdiGithub} size={0.7} />
                                        Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
                                    >
                                        <Icon path={mdiOpenInNew} size={0.7} />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/johnkenneth24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-teal-500/50 hover:border-teal-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30"
                    >
                        <Icon path={mdiGithub} size={1} />
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}