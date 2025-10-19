import '../styles/Hero.css';
import Icon from '@mdi/react';
import { mdiGithub, mdiInstagram, mdiLinkedin, mdiLanguageHtml5, mdiLanguageCss3, mdiLaravel, mdiTailwind, mdiBootstrap, mdiReact, mdiVuejs } from '@mdi/js';

const name = "Hi, I'M KEN GERERO";

function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-slate-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Left Column - Image with Tech Stack */}
                    <div className="flex justify-center items-center md:justify-end order-2 md:order-1">
                        <div className="relative flex items-center hero-container">
                            {/* Tech Stack Icons */}
                            <div className="hidden md:flex flex-col gap-4 items-center mr-8">
                                <Icon path={mdiLaravel} size={2} className='icon-stacks aspect-square bg-teal-900 p-1 text-white rounded-md hover:scale-110 transition-transform' />
                                <Icon path={mdiReact} size={2} className='icon-stacks aspect-square bg-teal-900 p-1 text-white rounded-md hover:scale-110 transition-transform' />
                                <Icon path={mdiVuejs} size={2} className='icon-stacks aspect-square bg-teal-900 p-1 text-white rounded-md hover:scale-110 transition-transform' />
                                <Icon path={mdiLanguageHtml5} size={2} className='icon-stacks aspect-square bg-teal-900 p-1 text-white rounded-md hover:scale-110 transition-transform' />
                                <Icon path={mdiLanguageCss3} size={2} className='icon-stacks aspect-square bg-teal-900 p-1 text-white rounded-md hover:scale-110 transition-transform' />
                                <Icon path={mdiTailwind} size={2} className='icon-stacks aspect-square bg-teal-900 p-1 text-white rounded-md hover:scale-110 transition-transform' />
                                <Icon path={mdiBootstrap} size={2} className='icon-stacks aspect-square bg-teal-900 p-1 text-white rounded-md hover:scale-110 transition-transform' />
                            </div>

                            {/* Hero Image */}
                            <div className="hero-img-border aspect-square">
                                <img
                                    src="/images/hero-image.png"
                                    alt="John Kenneth Gero"
                                    className="w-64 sm:w-72 md:w-80 lg:w-[420px] max-w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* Mobile Tech Stack - Below Image */}
                        <div className="md:hidden flex justify-center gap-3 mt-6 flex-wrap max-w-xs mx-auto">
                            <Icon path={mdiLaravel} size={1.5} className='aspect-square bg-teal-900 p-1 text-white rounded-md' />
                            <Icon path={mdiReact} size={1.5} className='aspect-square bg-teal-900 p-1 text-white rounded-md' />
                            <Icon path={mdiVuejs} size={1.5} className='aspect-square bg-teal-900 p-1 text-white rounded-md' />
                            <Icon path={mdiLanguageHtml5} size={1.5} className='aspect-square bg-teal-900 p-1 text-white rounded-md' />
                            <Icon path={mdiLanguageCss3} size={1.5} className='aspect-square bg-teal-900 p-1 text-white rounded-md' />
                            <Icon path={mdiTailwind} size={1.5} className='aspect-square bg-teal-900 p-1 text-white rounded-md' />
                            <Icon path={mdiBootstrap} size={1.5} className='aspect-square bg-teal-900 p-1 text-white rounded-md' />
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className='hero-text text-center md:text-start order-1 md:order-2'>
                        {/* Social Icons */}
                        <div className="hero-icon mb-8 md:mb-10 flex gap-5 justify-center md:justify-start">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-teal-700 hover:text-teal-900 transition-colors'>
                                <Icon path={mdiInstagram} size={1.5} />
                            </a>
                            <a href="https://github.com/johnkenneth24" target="_blank" rel="noopener noreferrer" className='text-teal-700 hover:text-teal-900 transition-colors'>
                                <Icon path={mdiGithub} size={1.5} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-teal-700 hover:text-teal-900 transition-colors'>
                                <Icon path={mdiLinkedin} size={1.5} />
                            </a>
                        </div>

                        {/* Name with Wave Animation */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 wave-text text-teal-900">
                            {name.split("").map((char, index) => (
                                <span
                                    key={index}
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                    className={char === " " ? "space" : ""}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                            I'm a passionate front-end developer learning ReactJS. I love
                            building clean, responsive, and modern websites.
                        </p>

                        {/* CTA Button */}
                        <button className="px-6 py-4 bg-teal-800 hover:bg-teal-900 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto md:mx-0">
                            <Icon path={mdiGithub} size={1} /> 
                            VIEW MY WORK 
                            <Icon path={mdiGithub} size={1} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;