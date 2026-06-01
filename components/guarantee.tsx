'use client';

import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
    return (
        <section className="relative bg-secondary py-24 lg:py-32 overflow-hidden">
            <Container className="relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="aspect-[4/3] overflow-hidden bg-slate-300">
                            <img
                                src="/2ndcareer/guarantee.jpg"
                                alt="信頼のサポート"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldCheck className="h-10 w-10 text-accent" />
                            <h2 className="text-3xl font-black text-primary md:text-4xl">
                                安心の<span className="text-accent bg-primary px-2 py-1">成果保証</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                            <p>
                                90日間のカリキュラムを全て実践したにもかかわらず、
                                講座コンテンツが1本も完成しなかった場合、
                                <span className="font-bold text-primary">追加30日間の個別サポートを無償で延長</span>いたします。
                            </p>
                            <p className="text-base text-slate-500">
                                ※適用条件：全課題の提出完了・個別コンサル出席率80%以上
                            </p>
                        </div>

                        <div className="mt-8 rounded-sm border-l-4 border-accent bg-accent/5 p-6">
                            <p className="font-bold text-primary text-lg">
                                「やり切ったのに成果ゼロ」はあり得ない設計です。
                            </p>
                            <p className="mt-2 text-slate-600">
                                それでも不安な方のために、この保証をご用意しました。<br />
                                あなたの挑戦を、最後まで全力でサポートします。
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
