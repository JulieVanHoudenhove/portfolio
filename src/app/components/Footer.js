import Image from "next/image";

const Footer = () => {
    return (
        <>
            <section>
                <div className="swiper">
                    <div className="swiper-wrapper bg-dark text-white font-yipes">
                        <div className="swiper-slide font-yipes font-sm px-6 py-1"><Image width={22} height={32} src="/images/swiper-star.png" alt="étoile" /></div>
                        <div className="swiper-slide font-yipes font-sm px-6 py-1">Disponible pour du freelance</div>
                        <div className="swiper-slide font-yipes font-sm px-6 py-1"><Image width={22} height={32} src="/images/swiper-star.png" alt="étoile" /></div>
                        <div className="swiper-slide font-yipes font-sm px-6 py-1">Disponible pour du freelance</div>
                        <div className="swiper-slide font-yipes font-sm px-6 py-1"><Image width={22} height={32} src="/images/swiper-star.png" alt="étoile" /></div>
                        <div className="swiper-slide font-yipes font-sm px-6 py-1">Disponible pour du freelance</div>
                        <div className="swiper-slide font-yipes font-sm px-6 py-1"><Image width={22} height={32} src="/images/swiper-star.png" alt="étoile" /></div>
                        <div className="swiper-slide font-yipes font-sm px-6 py-1">Disponible pour du freelance</div>
                    </div>
                </div>
            </section>
            <footer id="contact" className="flex flex-col items-center bg-cream">
                <h2 className="font-yipes text-2xl py-32">Comment puis-je vous aidez ?</h2>
                <div className="flex flex-col gap-4 items-start w-full px-56 pb-20">
                    <p className="text-xs max-w-[739px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent  ultricies odio et massa semper, ut placerat nisi posuere. Sed euismod  justo sit amet lorem hendrerit, non eleifend diam sodales.</p>
                    <a href="mailto:#" className="font-bold text-xs underline">Pour m'écrire un email de fifou</a>
                </div>
                <div className="w-full border-t border-dark"></div>
                <div className="w-full flex justify-between items-center px-56 py-14">
                    <p className="text-xs">© JulieVH - 2024</p>
                    <Image height={62} width={42} src="/images/double_stars.png" alt="deux étoiles" />
                    <a href="#" className="font-bold text-xs underline">Mentions Légales</a>
                </div>
            </footer>
        </>
    );
}

export default Footer;