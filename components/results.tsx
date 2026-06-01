'use client';

import { motion } from 'framer-motion';
import { Container } from './ui/container';

const stats = [
    { number: '50万人', label: '公認スポーツ指導者', sub: '日本スポーツ協会調べ' },
    { number: '47.4%', label: '引退後キャリアに不安', sub: 'JOC調査より' },
    { number: '90日', label: 'で講座完成', sub: '本プログラムの標準期間' },
    { number: '1/10', label: '作業時間を短縮', sub: 'AI活用による効率化' },
];

export default function Results() {
    return (
        <section className="relative w-full py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="/2ndcareer/results-bg.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/85" />
            </div>

            <Container className="relative z-10 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
                        RESULTS
                    </h2>
                    <p className="text-xl font-bold text-accent">数字が示す、市場の可能性</p>
                </motion.div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="text-center p-8 border border-white/10 bg-white/5 backdrop-blur-sm"
                        >
                            <p className="text-5xl font-black text-accent lg:text-6xl">{stat.number}</p>
                            <p className="mt-3 text-lg font-bold">{stat.label}</p>
                            <p className="mt-1 text-sm text-slate-400">{stat.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
