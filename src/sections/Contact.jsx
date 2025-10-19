import Icon from '@mdi/react';
import { mdiEmail, mdiPhone, mdiGithub, mdiLinkedin } from '@mdi/js';

function Contact() {
    return (
        <section
            id="contact"
            className="bg-slate-900 text-white py-16 px-6 md:px-12 flex flex-col items-center"
        >
            {/* Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
                Contact Me
            </h2>
            <p className="text-slate-300 max-w-xl text-center mb-12">
                I’d love to connect! Feel free to reach out for collaborations, projects, or just a friendly chat.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
                {/* Email */}
                <div className="bg-slate-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1 transition-all">
                    <Icon path={mdiEmail} size={2} className="text-teal-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-slate-400">jk@example.com</p>
                </div>

                {/* Phone */}
                <div className="bg-slate-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1 transition-all">
                    <Icon path={mdiPhone} size={2} className="text-teal-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-slate-400">+63 912 345 6789</p>
                </div>

                {/* GitHub */}
                <div className="bg-slate-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1 transition-all">
                    <Icon path={mdiGithub} size={2} className="text-teal-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-1">GitHub</h3>
                    <a
                        href="https://github.com/johnkenneth24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:underline"
                    >
                        github.com/johnkenneth24
                    </a>
                </div>

                {/* LinkedIn */}
                <div className="bg-slate-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1 transition-all">
                    <Icon path={mdiLinkedin} size={2} className="text-teal-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                    <a
                        href="https://linkedin.com/in/johndoe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:underline"
                    >
                        linkedin.com/in/jk
                    </a>
                </div>
            </div>

            {/* Footer Note */}
            <p className="text-slate-500 text-sm mt-12">
                © {new Date().getFullYear()} John Kenneth Gerero. All rights reserved.
            </p>
        </section>
    );
}

export default Contact;
