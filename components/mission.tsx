'use client';

import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { Button } from './ui/button';

export default function Mission() {
    return (
        <section id="concept" className="relative w-full bg-secondary py-24 lg:py-32 overflow-hidden">
            {/* Background Graphic Elements */}
            <div className="absolute top-0 right-0 h-full w-1/3 bg-slate-200/50 -skew-x-12 translate-x-1/2" />

            <Container className="relative z-10">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-6 flex items-center gap-4">
                            <span className="h-[2px] w-12 bg-primary" />
                            <span className="font-bold tracking-widest text-primary uppercase">Mission</span>
                        </div>

                        <h2 className="text-4xl font-black leading-tight text-primary md:text-5xl lg:text-6xl">
                            その<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-600">経験</span>は、<br />
                            誰かの<span className="text-accent underline decoration-4 underline-offset-4">道標</span>になる。
                        </h2>

                        <div className="mt-8 space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                            <p>
                                「現役引退」は、終わりではありません。<br />
                                あなたが流した汗、乗り越えた怪我、勝利の瞬間の震え。<br />
                                そのすべてが、次世代のアスリートにとっての「教科書」です。
                            </p>
                            <p>
                                しかし、多くの選手がその価値を言語化できず、<br />
                                セカンドキャリアへの不安を抱えています。
                            </p>
                            <p className="font-bold text-primary text-xl">
                                私たちは、あなたの経験を「高単価な講座」へと昇華させ、<br />
                                経済的な自立と、社会への貢献を両立させます。
                            </p>
                        </div>

                        <div className="mt-10">
                            <Button size="lg" variant="secondary" className="bg-primary text-white hover:bg-primary/90">
                                想いを形にするプロセスを見る
                            </Button>
                        </div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-slate-300 shadow-2xl">
                            {/* Fallback color if image fails, but using Unsplash */}
                            <img
                                src="/2ndcareer/mission-soccer.jpg"
                                alt="コーチが次世代のアスリートを指導する様子"
                                className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                            />
                        </div>
                        {/* Overlay Box */}
                        <div className="absolute -bottom-10 -left-10 hidden lg:block h-48 w-48 bg-accent p-6 text-primary shadow-lg">
                            <p className="text-sm font-bold tracking-widest opacity-80">VALUE</p>
                            <p className="mt-2 text-3xl font-black leading-none">
                                100%<br />
                                PLAYER<br />
                                FOCUSED
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
