'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/button';
import { Container } from './ui/container';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={ref} className="relative h-screen w-full overflow-hidden bg-primary text-white">
            {/* Background with Image */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="/2ndcareer/hero-bg.jpg"
                    alt=""
                    className="h-full w-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/60 to-primary" />
            </motion.div>

            <Container className="relative z-10 flex h-full flex-col justify-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <div className="mb-6 flex items-center gap-4 text-accent">
                        <span className="h-[2px] w-20 bg-accent" />
                        <span className="font-bold tracking-widest uppercase">Athlete 2nd Career Support</span>
                    </div>

                    <h1 className="font-sans text-3xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-7xl">
                        <span className="block text-stroke text-white/10 uppercase">Breakthrough</span>
                        <span className="block mt-[-1rem] md:mt-[-2rem] text-white">競技人生の<span className="text-accent">集大成</span>を、</span>
                        <span className="block text-white">次世代への<span className="text-accent">遺産</span>に。</span>
                    </h1>

                    <p className="mt-8 max-w-xl text-lg text-slate-300 md:text-xl font-medium leading-relaxed">
                        25年の現場知見×最新AI技術。<br />
                        90日で「教える側」から「仕組みを持つ側」へ。<br />
                        アスリート・指導者のための、講座開発サポート。
                    </p>

                    <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="https://ljpbqpwr5vbk.jp.larksuite.com/scheduler/96c06a2209d4e79e"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" className="border-2 border-accent bg-accent text-primary hover:bg-transparent hover:text-accent font-bold text-lg group">
                                エグゼクティブ・セッションを予約する
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>
                        <a href="#concept">
                            <Button size="lg" variant="ghost" className="text-white hover:text-accent hover:bg-white/10 border-2 border-white/20">
                                サービス詳細を見る
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <span className="sr-only">Scroll down</span>
                <ChevronDown className="h-8 w-8" />
            </motion.div>
        </div>
    );
}
