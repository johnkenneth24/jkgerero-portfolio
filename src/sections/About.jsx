import React from 'react';
import Icon from '@mdi/react';
import { mdiCodeTags, mdiRocketLaunch, mdiLightbulbOn, mdiAccountGroup } from '@mdi/js';

export default function AboutMe() {
    const highlights = [
        {
            icon: mdiCodeTags,
            title: "Full-Stack Development",
            description: "Building interactive web applications with modern JavaScript and PHP"
        },
        {
            icon: mdiRocketLaunch,
            title: "Continuous Learning",
            description: "Deepening expertise in frameworks, backend systems, and UI/UX design"
        },
        {
            icon: mdiLightbulbOn,
            title: "Project Experimentation",
            description: "Creating chat apps, practice projects, and exploring new technologies"
        },
        {
            icon: mdiAccountGroup,
            title: "Open to Collaborate",
            description: "Ready to work on beginner and intermediate projects with fellow developers"
        }
    ];

    return (
        <section className="min-h-screen bg-slate-950 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
                </div>

                {/* Three Column Layout */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {/* First Column - Image */}
                    <div className="flex justify-center items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal-500 rounded-full blur-3xl opacity-20"></div>
                            <img
                                src="/images/ken.jpg"
                                alt="Profile"
                                className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-teal-500/30 shadow-2xl shadow-teal-500/20"
                            />
                        </div>
                    </div>

                    {/* Second Column - About Me Description */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Hi! I'm <span className="text-teal-400">John Kenneth</span>
                            </h3>
                            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-4">
                                A budding web developer passionate about creating useful and interactive applications. I love building small projects and experimenting with different technologies to bring ideas to life.
                            </p>
                            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                                Currently, I'm focused on improving my full-stack development skills, diving deeper into JavaScript and PHP frameworks, and enhancing my UI/UX design abilities.
                            </p>
                        </div>

                    </div>

                    {/* Third Column - Highlights */}
                    <div className="flex flex-col gap-4">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="bg-slate-900 rounded-xl p-4 border border-slate-800 hover:bg-slate-800 hover:border-teal-500/50 transition-all duration-300 flex gap-3 items-center"
                            >
                                <Icon path={item.icon} size={1.5} className="text-teal-400 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-semibold mb-1 text-sm">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-400 text-xs">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}