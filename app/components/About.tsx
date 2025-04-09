import React from 'react';
import Image from 'next/image';
import ProfileImage from "../assets/me.jpg"
import { FaLink, FaGithub, FaLinkedin, FaGit } from "react-icons/fa";

const About: React.FC = () => {
    return (
        <div className="bg-[#F8FAFC] dark:bg-[#151B28] rounded-lg p-4 h-full transition-colors">
            <div className="flex flex-col h-full">
                <div className="flex flex-col md:flex-row gap-6 mt-8">
                    <div className="flex-shrink-0">
                        <Image
                            src={ProfileImage}
                            alt="Daniel's profile picture"
                            className="rounded-full w-20 h-20 md:w-24 md:h-24 object-cover ring-2 ring-blue-500/20"
                            priority
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-col h-full">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                    Daniel Munier
                                </h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">@danielmunier</p>
                            </div>

                            <div className="flex-1 bg-gray-50 dark:bg-[#1E2330] rounded-lg p-4 mb-8 mt-4">
                                <div className="space-y-3">
                                    <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, architecto odio, fugit odit voluptate quaerat non eum unde repudiandae corrupti iusto ipsam. Maxime, voluptas suscipit et nam beatae accusamus soluta.
                                    </p>

                                </div>
                            </div>

                            <div className="mt-auto">
                                <div className="flex items-center space-x-4">

                                    <a
                                        href="https://github.com/danielmunier"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                        aria-label="GitHub Profile"
                                    >
                                        <FaGithub className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/daniel-munier"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                                        aria-label="LinkedIn Profile"
                                    >
                                        <FaLinkedin className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;