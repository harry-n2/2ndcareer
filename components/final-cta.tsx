'use client';

import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export default function FinalCta() {
    return (
        <section className="relative w-full py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="/2ndcareer/final-cta-bg.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/90" />
            </div>

            <Container className="relative z-10 text-white text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-3xl"
                >
                    <p className="mb-6 text-sm font-bold tracking-widest text-accent uppercase">Ready to start?</p>

                    <h2 className="text-3xl font-black leading-tight md:text-5xl lg:text-6xl">
                        競技人生の「第2章」を、<br />
                        <span className="text-accent">今日</span>から始めませんか？
                    </h2>

                    <div className="mt-8 inline-block rounded-sm border border-accent/30 bg-accent/10 px-6 py-3">
                        <p className="text-lg font-bold text-accent">
                            個別サポートの質を保つため、今期の募集は<span className="text-2xl">先着10名</span>限定です
                        </p>
                    </div>

                    <div className="mt-10">
                        <a
                            href="https://ljpbqpwr5vbk.jp.larksuite.com/scheduler/96c06a2209d4e79e"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" className="border-2 border-accent bg-accent text-primary hover:bg-transparent hover:text-accent font-bold text-lg h-16 px-12 group">
                                エグゼクティブ・セッションを予約する
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>
                        <p className="mt-4 text-sm text-slate-400">今期受付：残り若干名</p>
                    </div>

                    <div className="mt-16 mx-auto max-w-xl text-left border-t border-white/10 pt-8">
                        <p className="text-sm font-bold text-accent mb-4">追伸</p>
                        <p className="text-slate-300 leading-relaxed">
                            「時期を見て...」とお考えになる気持ちは理解できます。しかし、競技の世界でご経験されてきた通り、最適なタイミングは「準備が整った時」ではなく「決断した時」に訪れます。
                        </p>
                        <p className="mt-4 text-slate-300 leading-relaxed">
                            1年後、「あの時動いておいてよかった」と振り返れる選択を、今日この瞬間にお持ちいただけます。
                        </p>
                        <p className="mt-4 font-bold text-white text-lg">
                            あなたの競技人生、まだ終わっていません。
                        </p>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
