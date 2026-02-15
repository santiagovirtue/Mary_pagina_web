"use client";
import Link from "next/link";

export function Navbar() {
return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
        <span className="text-gold">Mary</span> Nails
        </Link>

        <ul className="flex gap-8 text-sm font-medium">
        <li><Link href="/servicios" className="hover:text-gold">Servicios</Link></li>
        <li><Link href="/galeria" className="hover:text-gold">Galería</Link></li>
        <li><Link href="/reserva" className="hover:text-gold">Reserva</Link></li>
        <li><Link href="/contacto" className="hover:text-gold">Contacto</Link></li>
        </ul>
    </nav>
    </header>
);
}
