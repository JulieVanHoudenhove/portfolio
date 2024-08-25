"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function PlanDuSiteClient({ firstStaticPages, secondStaticPages, dynamicPages }) {
    useEffect(() => {
        gsap.fromTo(
            ['.page-title', '.page-list li'],
            { opacity: 0, y: -20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3,
                ease: 'power2.out'
            }
        );
    }, []);

    return (
        <>
            <Header />
            <main className="bg-cream lg:pt-[152px]">
                <h1 className="page-title flex justify-center font-yipes text-xl lg:text-2xl font-bold pb-16 pt-40 lg:py-40">Plan du site</h1>
                <ul className="page-list px-32 pb-16 lg:pb-32 text-2xs lg:text-xs">
                    {firstStaticPages.map((page, index) => (
                        <li className="list-disc underline font-bold hover:opacity-70" key={index}>
                            <a href={page.loc}>{page.name}</a>
                        </li>
                    ))}
                    {dynamicPages.map((page, index) => (
                        <li className="list-disc mx-5 underline font-bold hover:opacity-70" key={index}>
                            <a href={page.loc}>{page.name}</a>
                        </li>
                    ))}
                    {secondStaticPages.map((page, index) => (
                        <li className="list-disc underline font-bold hover:opacity-70" key={index}>
                            <a href={page.loc}>{page.name}</a>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </>
    );
};
