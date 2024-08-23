import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Mentions Légales - Julie Van Houdenhove | Développeuse Web Full Stack",
    description: "Découvrez les projets web de Julie Van Houdenhove, spécialisée en développement full stack. Explorez mes réalisations en développement web.",
    keywords: "portfolio, développeuse web, full stack, Julie Van Houdenhove, projets web",
    author: "Julie Van Houdenhove",
    image: "/images/favicon_star.svg",
    url: "https://julie-vh.fr/",
    type: "website",
};

const MentionsLegales = () => {
    return (
        <>
            <Header />
            <section className="bg-cream lg:pt-[152px] px-8 lg:px-32">
                <h1 className="flex justify-center font-yipes text-xl lg:text-2xl pb-16 pt-40 lg:py-40 text-center">Mentions Légales</h1>
                <div className='flex flex-col gap-9 pb-16 lg:pb-40'>
                    <div className="flex flex-col gap-6">
                        <h2 className="font-yipes text-lg lg:text-xl">1. Éditeur du site</h2>
                        <div className='flex flex-col gap-4'>
                            <p className='text-xs2 lg:text-xs'><strong>Nom :</strong> Van Houdenhove Julie</p>
                            <p className='text-xs2 lg:text-xs'><strong>Adresse :</strong> 3, avenue Maurice de Vlaminck - 77680 Roissy-en-Brie</p>
                            <p className='text-xs2 lg:text-xs'><strong>Email :</strong> <Link href='mailto:julie.vanhoudenhove@gmail.com'>julie.vanhoudenhove@gmail.com</Link></p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="font-yipes text-lg lg:text-xl">2. Hébergeur du site</h2>
                        <div className='flex flex-col gap-4'>
                            <p className='text-2xs lg:text-xs'><strong>Nom de l'hébergeur :</strong> PulseHeberg</p>
                            <p className='text-2xs lg:text-xs'><strong>Adresse de l'hébergeur :</strong> 9, Boulevard de Strasbourg - 83000 Toulon</p>
                            <p className='flex gap-1 text-2xs lg:text-xs'><strong>Site web :</strong> <Link className='flex gap-1' target='_blank' href='https://pulseheberg.com'>pulseheberg.com<Image src="/images/open_in_new.svg" width={24} height={24} alt="Icône d'ouverture dans un nouvel onglet" /></Link></p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="font-yipes text-lg lg:text-xl">3. Propriété intellectuelle</h2>
                        <p className='text-2xs lg:text-xs'>Le contenu du site www.julie-vh.fr, incluant mais ne se limitant pas aux textes, images, graphismes, logo, icônes, sons, logiciels, est la propriété de Julie Van Houdenhove ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Julie Van Houdenhove.</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="font-yipes text-lg lg:text-xl">4. Limitation de responsabilité</h2>
                        <p className='text-2xs lg:text-xs'>Le site www.julie-vh.fr s'efforce de fournir des informations aussi précises que possible. Toutefois, Julie Van Houdenhove ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.<br/>Toutes les informations indiquées sur le site www.julie-vh.fr sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site www.julie-vh.fr ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="font-yipes text-lg lg:text-xl">5. Droit applicable et attribution de juridiction</h2>
                        <p className='text-2xs lg:text-xs'>Tout litige en relation avec l’utilisation du site www.julie-vh.fr est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default MentionsLegales;