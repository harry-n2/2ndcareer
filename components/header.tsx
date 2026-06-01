'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Container } from './ui/container';
import { Menu, X } from 'lucide-react';

const navItems = [
    { label: 'Concept', href: '#concept' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Team', href: '#mentors' },
    { label: 'FAQ', href: '#faq' },
    { label: '電子書籍', href: '/ebook' },
    { label: '電子マンガ', href: '/manga' },
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
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-accent transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Action */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://ljpbqpwr5vbk.jp.larksuite.com/scheduler/96c06a2209d4e79e"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="primary" size="sm">
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
                    <Container className="py-6 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-lg font-bold text-white/80 hover:text-accent transition-colors py-2"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href="https://ljpbqpwr5vbk.jp.larksuite.com/scheduler/96c06a2209d4e79e"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-4"
                        >
                            <Button variant="primary" size="md" className="w-full">
                                無料相談・資料請求
                            </Button>
                        </a>
                    </Container>
                </div>
            )}
        </header>
    );
}
