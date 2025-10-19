import React from 'react';
import Icon from '@mdi/react';
import { 
    mdiLanguageHtml5, 
    mdiLanguageCss3, 
    mdiLanguageJavascript, 
    mdiLanguagePhp,
    mdiReact, 
    mdiVuejs, 
    mdiLaravel, 
    mdiTailwind, 
    mdiBootstrap,
    mdiGit,
    mdiGithub,
    mdiDatabase,
    mdiApi,
    mdiNodejs
} from '@mdi/js';

export default function Skills() {
    const skillCategories = [
        {
            category: "Frontend",
            skills: [
                { name: "HTML5", icon: mdiLanguageHtml5 },
                { name: "CSS3", icon: mdiLanguageCss3 },
                { name: "JavaScript", icon: mdiLanguageJavascript },
                { name: "React", icon: mdiReact },
                { name: "Vue.js", icon: mdiVuejs },
                { name: "Tailwind CSS", icon: mdiTailwind },
                { name: "Bootstrap", icon: mdiBootstrap }
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "PHP", icon: mdiLanguagePhp },
                { name: "Laravel", icon: mdiLaravel },
                { name: "Node.js", icon: mdiNodejs },
                { name: "MySQL", icon: mdiDatabase },
                { name: "REST API", icon: mdiApi },
                { name: "Git", icon: mdiGit },
                { name: "GitHub", icon: mdiGithub }
            ]
        }
    ];

    return (
        <section className="min-h-screen bg-slate-900 py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My Skills
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div> 
                </div>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            {/* Category Title */}
                            <h3 className="text-3xl font-bold text-teal-400 mb-8 text-center md:text-center">
                                {category.category}
                            </h3>

                            {/* Skills Grid - Keyboard Style */}
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="group bg-slate-950/50 backdrop-blur rounded-xl p-3 border border-slate-800/50 hover:border-teal-500/80 hover:bg-slate-800/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/30 aspect-square"
                                    >
                                        <Icon 
                                            path={skill.icon} 
                                            size={1.2} 
                                            className="text-teal-400 group-hover:text-teal-300 transition-colors" 
                                        />
                                        <span className="text-white/90 group-hover:text-white font-medium text-xs text-center transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}