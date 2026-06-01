'use client';

import Link from 'next/link';
import { Container } from './ui/container';
import { Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-primary pt-16 text-white">
            <Container>
                {/* Links */}
                <div className="grid gap-12 border-t border-white/10 py-16 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <div className="mb-6 flex items-center gap-2">
                            <div className="h-6 w-6 bg-accent rotate-45" />
                            <span className="text-2xl font-bold tracking-tighter">
                                ATHLETE <span className="text-accent">NEXT</span>
                            </span>
                        </div>
                        <p className="max-w-xs text-slate-400 text-sm leading-relaxed">
                            アスリート・指導者のセカンドキャリアを、<br />
                            教育という「資産」で支える。
                        </p>
                        <div className="mt-6 text-sm text-slate-500 space-y-1">
                            <p>事業者：ワールドトレードネクスト</p>
                            <p>代表：西野 直哉</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-6 font-bold text-accent">LINKS</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="/#concept" className="hover:text-white transition-colors">Concept</Link></li>
                            <li><Link href="/#curriculum" className="hover:text-white transition-colors">Curriculum</Link></li>
                            <li><Link href="/#mentors" className="hover:text-white transition-colors">Team</Link></li>
                            <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/ebook" className="hover:text-white transition-colors">電子書籍</Link></li>
                            <li><Link href="/manga" className="hover:text-white transition-colors">電子マンガ</Link></li>
                            <li>
                                <a
                                    href="https://ljpbqpwr5vbk.jp.larksuite.com/scheduler/96c06a2209d4e79e"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    無料相談予約
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-6 font-bold text-accent">CONTACT</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li>
                                <a
                                    href="https://lin.ee/WdYf2tq"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    LINE公式アカウント
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://ljpbqpwr5vbk.jp.larksuite.com/scheduler/96c06a2209d4e79e"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    カレンダー予約
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://ljpbqpwr5vbk.jp.larksuite.com/share/base/form/shrjp9gksNra45vIjBd3UBlJ23e"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    お問い合わせフォーム
                                </a>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <a
                                href="https://x.com/Sekaikun_office"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X (旧Twitter)"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-accent hover:text-primary transition-colors"
                            >
                                <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/nishino.wtn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-accent hover:text-primary transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} ワールドトレードネクスト / ATHLETE NEXT. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/legal" className="hover:text-white transition-colors">特定商取引法に基づく表記</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
