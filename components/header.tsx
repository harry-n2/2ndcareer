'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Container } from './ui/container';
import { Menu, X, BookOpen, BookText } from 'lucide-react';

const anchorItems = [
    { label: 'Concept', href: '#concept' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Team', href: '#mentors' },
    { label: 'FAQ', href: '#faq' },
];

const featureItems = [
    { label: '電子書籍', href: '/ebook', icon: BookOpen },
    { label: '電子マンガ', href: '/manga', icon: BookText },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary/90 backdrop-blur-sm border-b border-white/10">
            <Container className="flex h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="h-8 w-8 bg-accent rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    <span className="text-xl font-bold tracking-tighter text-white">
                        ATHLETE <span className="text-accent">NEXT</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {anchorItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-accent transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}

                    <span className="h-5 w-px bg-white/15" />

                    {featureItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-black text-primary shadow-lg shadow-accent/30 ring-2 ring-accent/40 transition-all hover:scale-105 hover:bg-yellow-300"
                        >
                            <item.icon size={16} className="shrink-0" />
                            {item.label}
                            <span className="ml-1 rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold leading-none">無料</span>
                        </Link>
                    ))}
                </nav>

                {/* Action */}
                <div className="hidden md:flex items-center">
                    <a
                        href="https://ljpbqpwr5vbk.jp.larksuite.com/scheduler/96c06a2209d4e79e"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="ghost" size="sm" className="border border-white/30 text-white hover:bg-white/10 hover:text-accent">
                            無料相談・資料請求
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </button>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-primary border-t border-white/10">
                    <Container className="py-6 space-y-3">
                        {/* 目立つ電子書籍・電子マンガを最上部に */}
                        <div className="grid grid-cols-2 gap-3">
                            {featureItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-3 text-base font-black text-primary shadow-lg"
                                >
                                    <item.icon size={18} className="shrink-0" />
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <p className="text-center text-xs font-bold text-accent">▲ 無料で読めます</p>

                        {anchorItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-lg font-bold text-white/80 hover:text-accent transition-colors py-1"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href="https://ljpbqpwr5vbk.jp.larksuite.com/scheduler/96c06a2209d4e79e"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-2"
                        >
                            <Button variant="ghost" size="md" className="w-full border border-white/30 text-white">
                                無料相談・資料請求
                            </Button>
                        </a>
                    </Container>
                </div>
            )}
        </header>
    );
}
