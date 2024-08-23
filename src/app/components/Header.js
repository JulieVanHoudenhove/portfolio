"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = ({ background }) => {
    const [activeSection, setActiveSection] = useState('');
    const [currentPath, setCurrentPath] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

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

        setCurrentPath(window.location.pathname);

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentPath]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (
            menuRef.current && !menuRef.current.contains(event.target) &&
            buttonRef.current && !buttonRef.current.contains(event.target)
        ) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className={`fixed w-full z-40 ${background === 'blue-pattern' ? 'bg-blue-pattern' : 'bg-cream'}`}>
            <nav className={`flex justify-between items-center px-6 md:px-20 py-6 md:py-12 ${background === 'blue-pattern' ? 'text-white' : 'text-black'}`}>
                <Link className="font-yipes text-md" href="/">Julie</Link>
                <div className="lg:hidden">
                    <button ref={buttonRef} onClick={toggleMenu} className="focus:outline-none">
                        <Image
                            src={isMenuOpen
                                ? `/images/menu_close${background === 'blue-pattern' ? '_white' : ''}.svg`
                                : `/images/menu_burger${background === 'blue-pattern' ? '_white' : ''}.svg`}
                            alt="Menu"
                            height={32}
                            width={32}
                        />
                    </button>
                </div>
                <ul ref={menuRef} className={`flex-col lg:flex-row justify-center items-center gap-8 lg:flex ${isMenuOpen ? 'flex' : 'hidden'} lg:static absolute top-full left-0 right-0 ${background === 'blue-pattern' ? 'text-white bg-blue-pattern' : 'text-black bg-cream'} lg:bg-transparent p-6 lg:p-0`}>
                    <li>
                        <Link className='px-6 py-1 flex items-center min-h-14 transition hover:opacity-70' href="/#a_propos" onClick={() => setIsMenuOpen(false)}>
                            À propos
                            {activeSection === 'a_propos' ? (
                                <Image src={`/images/menu_star${background === 'blue-pattern' ? '_white' : ''}.svg`} alt="Actif" height={48} width={42} />
                            ) : (
                                <div className="h-12 w-[42px]"></div>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link className='px-6 py-1 flex items-center min-h-14 transition hover:opacity-70' href="/#projets" onClick={() => setIsMenuOpen(false)}>
                            Projets
                            {(activeSection === 'projets' || currentPath.startsWith('/projets')) ? (
                                <Image src={`/images/menu_star${background === 'blue-pattern' ? '_white' : ''}.svg`} alt="Actif" height={48} width={42} />
                            ) : (
                                <div className="h-12 w-[42px]"></div>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link className='px-6 py-1 flex items-center min-h-14 transition hover:opacity-70' href="/#competences" onClick={() => setIsMenuOpen(false)}>
                            Compétences
                            {activeSection === 'competences' ? (
                                <Image src={`/images/menu_star${background === 'blue-pattern' ? '_white' : ''}.svg`} alt="Actif" height={48} width={42} />
                            ) : (
                                <div className="h-12 w-[42px]"></div>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link className='px-6 py-1 flex items-center min-h-14 transition hover:opacity-70' href="/#contact" onClick={() => setIsMenuOpen(false)}>
                            Contact
                            {activeSection === 'contact' ? (
                                <Image src={`/images/menu_star${background === 'blue-pattern' ? '_white' : ''}.svg`} alt="Actif" height={48} width={42} />
                            ) : (
                                <div className="h-12 w-[42px]"></div>
                            )}
                        </Link>
                    </li>
                </ul>
                <ul className="hidden xl:flex gap-10">
                    <li><Link href="https://github.com/JulieVanHoudenhove" target="_blank"><Image className='hover:opacity-70 transition' src={`../images/github${background === 'blue-pattern' ? '_white' : ''}.svg`} alt="Logo GitHub" height={32} width={32} /></Link></li>
                    <li><Link href="https://www.linkedin.com/in/julie-van-houdenhove/" target="_blank"><Image className='hover:opacity-70 transition' src={`../images/linkedin${background === 'blue-pattern' ? '_white' : ''}.svg`} alt="Logo LinkedIn" height={32} width={32} /></Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
