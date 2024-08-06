import Link from "next/link";
import Image from "next/image";

const Header = ({background}) => {

    return (
        <header className={`fixed w-full z-40 ${background === 'blue-pattern' ? 'bg-blue-pattern' : 'bg-cream'}`}>
            <nav className={`flex justify-between items-center px-20 py-12 ${background === 'blue-pattern' ? 'text-white' : 'text-black' }`}>
                <Link className="font-yipes px-6 py-1 text-md" href="#accueil">Julie</Link>
                <ul className="text-xs flex gap-8">
                    <li><Link className="px-6 py-1" href="#a_propos">À propos</Link></li>
                    <li><Link className="px-6 py-1" href="#projets">Projets</Link></li>
                    <li><Link className="px-6 py-1" href="#competences">Compétences</Link></li>
                    <li><Link className="px-6 py-1" href="#contact">Contact</Link></li>
                </ul>
                <ul className="flex gap-10">
                    <li><Link href="https://github.com/JulieVanHoudenhove" target="_blank"><Image src={`images/github${background === 'blue-pattern' ? '_white' : ''}.svg`} alt="Logo GitHub" height={32} width={32} /></Link></li>
                    <li><Link href="https://www.linkedin.com/in/julie-van-houdenhove/" target="_blank"><Image src={`images/linkedin${background === 'blue-pattern' ? '_white' : ''}.svg`} alt="Logo LinkedIn" height={32} width={32} /></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;