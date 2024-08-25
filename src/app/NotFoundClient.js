"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function NotFoundClient() {
    useEffect(() => {
        gsap.fromTo(
            ['.notfound-title', '.notfound-message', '.notfound-link'],
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.5,
                ease: 'power2.out'
            }
        );
    }, []);

    return (
        <>
            <Header />
            <div className="min-h-screen flex flex-col items-center justify-center bg-cream">
                <h1 className="notfound-title flex justify-center font-yipes text-xl lg:text-2xl font-bold">404</h1>
                <p className="notfound-message text-lg lg:text-xl mb-8">Oups ! Page non trouvée</p>
                <Link href="/" className="notfound-link font-bold text-2xs lg:text-xs underline hover:opacity-70 transition">Retourner à l'accueil</Link>
            </div>
            <Footer />
        </>
    );
}
