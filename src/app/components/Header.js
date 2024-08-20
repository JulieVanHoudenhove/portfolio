"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = ({ background }) => {
    const [activeSection, setActiveSection] = useState('');
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
                    currentSection = section.getAttribute('id');
                }
            });

            setActiveSection(currentSection);
        };

        // Update currentPath on path change
        setCurrentPath(window.location.pathname);

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call initially to set the correct active section

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentPath]);

    return (
        <header className={`fixed w-full z-40 ${background === 'blue-pattern' ? 'bg-blue-pattern' : 'bg-cream'}`}>
            <nav className={`flex justify-between items-center px-20 py-12 ${background === 'blue-pattern' ? 'text-white' : 'text-black'}`}>
                <Link className="font-yipes px-6 py-1 text-md" href="/">Julie</Link>
                <ul className="text-xs flex gap-8">
                    <li>
                        <Link className='px-6 py-1 flex items-center min-h-14 transition hover:opacity-70' href="/#a_propos">
                            À propos
                            {activeSection === 'a_propos' ? (
                                <Image src={`/images/menu_star${background === 'blue-pattern' ? '_white' : ''}.svg`} alt="Actif" height={48} width={42} />
                            ) : (
                                <div className="h-12 w-[42px]"></div>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link className='px-6 py-1 flex items-center min-h-14 transition hover:opacity-70' href="/#projets">
                            Projets
                            {(activeSection === 'projets' || currentPath.startsWith('/projets')) ? (
                                <Image src={`/images/menu_star${background === 'blue-pattern' ? '_white' : ''}.svg`} alt="Actif" height={48} width={42} />
                            ) : (
                                <div className="h-12 w-[42px]"></div>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link className='px-6 py-1 flex items-center min-h-14 transition hover:opacity-70' href="/#competences">
                            Compétences
                            {activeSection === 'competences' ? (
                                <Image src={`/images/menu_star${background === 'blue-pattern' ? '_white' : ''}.svg`} alt="Actif" height={48} width={42} />
                            ) : (
                                <div className="h-12 w-[42px]"></div>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link className='px-6 py-1 flex items-center min-h-14 transition hover:opacity-70' href="/#contact">
                            Contact
                            {activeSection === 'contact' ? (
                                <Image src={`/images/menu_star${background === 'blue-pattern' ? '_white' : ''}.svg`} alt="Actif" height={48} width={42} />
                            ) : (
                                <div className="h-12 w-[42px]"></div>
                            )}
                        </Link>
                    </li>
                </ul>
                <ul className="flex gap-10">
                    <li><Link href="https://github.com/JulieVanHoudenhove" target="_blank"><Image className='hover:opacity-70 transition' src={`../images/github${background === 'blue-pattern' ? '_white' : ''}.svg`} alt="Logo GitHub" height={32} width={32} /></Link></li>
                    <li><Link href="https://www.linkedin.com/in/julie-van-houdenhove/" target="_blank"><Image className='hover:opacity-70 transition' src={`../images/linkedin${background === 'blue-pattern' ? '_white' : ''}.svg`} alt="Logo LinkedIn" height={32} width={32} /></Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
