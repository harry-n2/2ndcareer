'use client';

import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { AlertCircle } from 'lucide-react';

const problems = [
    '指導ノウハウには自信があるのに、どう講座にすればいいかわからない',
    'ITやAIが苦手で、オンラインビジネスなんて自分には無理だと思っている',
    '毎日指導に追われ、新しいことを学ぶ時間が取れない',
    '「元アスリート」の肩書きが、いつまで通用するか不安になることがある',
    '副収入を作りたいけど、何から始めればいいか見当がつかない',
];

export default function Problem() {
    return (
        <section className="relative w-full bg-primary py-24 lg:py-32 text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/2ndcareer/problem-bg.jpg"
                    alt=""
                    className="h-full w-full object-cover opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary" />
            </div>

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
                        こんな<span className="text-accent">お悩み</span>ありませんか？
                    </h2>
                    <p className="text-lg text-slate-300">
                        卓越した実績を持つあなたが、なぜ収益化に苦戦するのか
                    </p>
                </motion.div>

                <div className="mx-auto max-w-3xl space-y-6">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start gap-4 rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-white/10"
                        >
                            <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                            <p className="text-lg font-medium leading-relaxed">{problem}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mx-auto mt-16 max-w-2xl text-center"
                >
                    <p className="text-xl leading-relaxed text-slate-300">
                        実は、これらの悩みを抱えているのはあなただけではありません。<br />
                        多くの元アスリート・指導者が、同じ壁にぶつかっています。
                    </p>
                    <p className="mt-6 text-2xl font-bold text-accent">
                        「競技以外、何もできない」——<br />そう思い込んでいませんか？
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
