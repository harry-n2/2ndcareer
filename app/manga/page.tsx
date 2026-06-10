import Link from 'next/link';
import { Container } from '@/components/ui/container';
import Footer from '@/components/footer';

export const metadata = {
    title: '電子マンガ｜アスリートのAI起業 | ATHLETE NEXT',
    description: 'マンガで読む「アスリートのAI起業」。引退に揺れる選手が、AIで経験を90日で講座に変えるまでの物語。',
};

// 読み順：表紙 → はじめに → もくじ → 本編（1〜12） → 背表紙
const pages: { src: string; alt: string }[] = [
    { src: 'cover', alt: '表紙' },
    { src: 'intro-1', alt: 'はじめに 1' },
    { src: 'intro-2', alt: 'はじめに 2' },
    { src: 'toc', alt: 'もくじ' },
    { src: '1', alt: '第1章 1' },
    { src: '2', alt: '第1章 2' },
    { src: '3', alt: '第2章 1' },
    { src: '4', alt: '第2章 2' },
    { src: '5', alt: '第3章 1' },
    { src: '6', alt: '第3章 2' },
    { src: '7', alt: '第4章 1' },
    { src: '8', alt: '第4章 2' },
    { src: '9', alt: '第5章 1' },
    { src: '10', alt: '第5章 2' },
    { src: '11', alt: 'おわりに 1' },
    { src: '12', alt: 'おわりに 2' },
    { src: 'spine', alt: '背表紙' },
];

export default function MangaPage() {
    return (
        <main className="min-h-screen bg-primary text-white">
            {/* Top bar */}
            <div className="sticky top-0 z-50 border-b border-white/10 bg-primary/90 backdrop-blur-sm">
                <Container className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="h-6 w-6 rotate-45 bg-accent transition-transform duration-500 group-hover:rotate-0" />
                        <span className="text-lg font-bold tracking-tighter">
                            ATHLETE <span className="text-accent">NEXT</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-5 text-sm font-bold">
                        <Link href="/ebook" className="text-white/70 transition-colors hover:text-accent">電子書籍</Link>
                        <Link href="/" className="text-white/70 transition-colors hover:text-accent">トップへ</Link>
                    </div>
                </Container>
            </div>

            {/* Title */}
            <Container>
                <div className="py-12 text-center md:py-16">
                    <span className="mb-4 inline-block h-[2px] w-16 bg-accent" />
                    <p className="font-bold uppercase tracking-widest text-accent">Comic</p>
                    <h1 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">電子マンガ</h1>
                    <p className="mt-4 text-slate-300">
                        アスリートのAI起業<br className="md:hidden" />
                        <span className="text-slate-400">— AIが経験を90日で講座に変える —</span>
                    </p>
                </div>
            </Container>

            {/* Pages (vertical reader) */}
            <div className="mx-auto flex w-full max-w-[680px] flex-col items-center gap-3 px-3 pb-20">
                {pages.map((p, i) => (
                    <img
                        key={p.src}
                        src={`/2ndcareer/manga/${p.src}.webp`}
                        alt={p.alt}
                        loading={i < 2 ? 'eager' : 'lazy'}
                        className="h-auto w-full rounded-sm shadow-2xl shadow-black/40"
                    />
                ))}

                {/* LINE CTA */}
                <a
                    href="https://lin.ee/WdYf2tq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#06C755] px-10 py-4 text-lg font-black text-white shadow-lg transition-transform hover:scale-105"
                >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 5.81 2 10.5c0 2.49 1.3 4.73 3.44 6.37-.13.47-.86 3.07-.89 3.26 0 0-.02.13.05.18.07.06.16.03.16.03.21-.03 2.5-1.63 3.53-2.39.54.08 1.1.12 1.71.12 5.52 0 10-3.81 10-8.5S17.52 2 12 2z" />
                    </svg>
                    LINEで「次のゴール」を受け取る
                </a>
                <p className="mt-3 text-sm text-slate-400">無料・解除自由 / lin.ee/WdYf2tq</p>
            </div>

            <Footer />
        </main>
    );
}
