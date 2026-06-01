'use client';

import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { CheckCircle2 } from 'lucide-react';

const beforeAfter = [
    {
        before: '指導ノウハウはあるが、売り方がわからない',
        after: '自分の経験が「売れる講座」として形になっている',
    },
    {
        before: 'ITやAIに苦手意識があり手が止まる',
        after: 'AIを相棒に、コンテンツを量産できる自分になっている',
    },
    {
        before: '副収入ゼロ、指導報酬だけに依存',
        after: '講座という「資産」から継続収入が生まれている',
    },
    {
        before: '将来のキャリアに漠然とした不安',
        after: '「元アスリート×講座ビジネス」という新たな肩書きを獲得',
    },
    {
        before: '一人で悩み、相談相手がいない',
        after: '同じ志を持つ仲間と繋がり、孤独から解放されている',
    },
];

export default function Benefits() {
    return (
        <section className="relative w-full py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="/2ndcareer/benefits-bg.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/90" />
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
                        この講座で手に入る<span className="text-accent">5つの未来</span>
                    </h2>
                    <p className="text-lg text-slate-300">90日後、あなたはこう変わっている</p>
                </motion.div>

                <div className="mx-auto max-w-4xl space-y-6">
                    {beforeAfter.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="grid gap-4 md:grid-cols-[1fr_auto_1fr] items-center rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                        >
                            <div className="text-center md:text-right">
                                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Before</span>
                                <p className="mt-1 text-slate-300">{item.before}</p>
                            </div>
                            <div className="flex justify-center">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary font-black text-lg">
                                    →
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <span className="text-xs font-bold tracking-widest text-accent uppercase">After</span>
                                <p className="mt-1 font-bold text-white">{item.after}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
