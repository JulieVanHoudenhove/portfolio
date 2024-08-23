"use client";

import Image from 'next/image';
import Link from "next/link";

const Footer = () => {

    return (
        <>
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <Image className="p-2" width={38} height={48} src="/images/swiper_star.svg" alt="étoile" />
                        <p className="font-yipes font-sm px-6 py-1 text-white">Disponible pour du freelance</p>
                    </div>
                    <div className="slide">
                        <Image className="p-2" width={38} height={48} src="/images/swiper_star.svg" alt="étoile" />
                        <p className="font-yipes font-sm px-6 py-1 text-white">Disponible pour du freelance</p>
                    </div>
                    <div className="slide">
                        <Image className="p-2" width={38} height={48} src="/images/swiper_star.svg" alt="étoile" />
                        <p className="font-yipes font-sm px-6 py-1 text-white">Disponible pour du freelance</p>
                    </div>
                    <div className="slide">
                        <Image className="p-2" width={38} height={48} src="/images/swiper_star.svg" alt="étoile" />
                        <p className="font-yipes font-sm px-6 py-1 text-white">Disponible pour du freelance</p>
                    </div>
                    <div className="slide">
                        <Image className="p-2" width={38} height={48} src="/images/swiper_star.svg" alt="étoile" />
                        <p className="font-yipes font-sm px-6 py-1 text-white">Disponible pour du freelance</p>
                    </div>
                    <div className="slide">
                        <Image className="p-2" width={38} height={48} src="/images/swiper_star.svg" alt="étoile" />
                        <p className="font-yipes font-sm px-6 py-1 text-white">Disponible pour du freelance</p>
                    </div>
                    <div className="slide">
                        <Image className="p-2" width={38} height={48} src="/images/swiper_star.svg" alt="étoile" />
                        <p className="font-yipes font-sm px-6 py-1 text-white">Disponible pour du freelance</p>
                    </div>
                    <div className="slide">
                        <Image className="p-2" width={38} height={48} src="/images/swiper_star.svg" alt="étoile" />
                        <p className="font-yipes font-sm px-6 py-1 text-white">Disponible pour du freelance</p>
                    </div>
                    <div className="slide">
                        <Image className="p-2" width={38} height={48} src="/images/swiper_star.svg" alt="étoile" />
                        <p className="font-yipes font-sm px-6 py-1 text-white">Disponible pour du freelance</p>
                    </div>
                    <div className="slide">
                        <Image className="p-2" width={38} height={48} src="/images/swiper_star.svg" alt="étoile" />
                        <p className="font-yipes font-sm px-6 py-1 text-white">Disponible pour du freelance</p>
                    </div>
                    <div className="slide">
                        <Image className="p-2" width={38} height={48} src="/images/swiper_star.svg" alt="étoile" />
                        <p className="font-yipes font-sm px-6 py-1 text-white">Disponible pour du freelance</p>
                    </div>
                    <div className="slide">
                        <Image className="p-2" width={38} height={48} src="/images/swiper_star.svg" alt="étoile" />
                        <p className="font-yipes font-sm px-6 py-1 text-white">Disponible pour du freelance</p>
                    </div>
                    <div className="slide">
                        <Image className="p-2" width={38} height={48} src="/images/swiper_star.svg" alt="étoile" />
                        <p className="font-yipes font-sm px-6 py-1 text-white">Disponible pour du freelance</p>
                    </div>
                </div>
            </div>
            <footer id="contact" className="flex flex-col items-center bg-cream">
                <h2 className="font-yipes text-2xl py-32">Comment puis-je vous aider ?</h2>
                <div className="flex flex-col gap-4 items-start w-full px-32 pb-20">
                    <p className="text-xs max-w-[739px]">Prête à vous accompagner dans vos projets web ! Si vous avez des questions ou souhaitez discuter, contactez-moi par email ou via mes réseaux sociaux.</p>
                    <Link href="mailto:julie.vanhoudenhove@gmail.com" className="font-bold text-xs underline hover:opacity-70 transition flex gap-2">Écrivez-moi un email !<Image src="/images/open_in_new.svg" width={24} height={24} alt="Icône d'ouverture dans un nouvel onglet" /></Link>
                </div>
                <div className="w-full border-t border-dark"></div>
                <div className="w-full grid grid-cols-12 items-center px-32 py-14">
                    <p className="text-xs col-span-4">© Julie VH - 2024</p>
                    <Link className="col-span-4 justify-self-center" href="/"><Image height={62} width={42} src="/images/double_stars.svg" alt="deux étoiles" /></Link>
                    <div className="text-xs col-span-4 justify-self-end flex gap-2">
                        <Link href="/mentions-legales" className="font-bold text-xs underline hover:opacity-70 transition">Mentions Légales</Link>
                        <p>-</p>
                        <Link href="/plan-du-site" className="font-bold text-xs underline hover:opacity-70 transition">Plan du site </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
