'use client';

import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'K.S 様',
        attr: '元実業団バレーボール選手・40代',
        image: '/2ndcareer/testimonial-1.jpg',
        alt: 'バレーボールのイメージ',
        before: '引退後、一般企業に就職したが「自分にはこれしかない」と悩んでいた',
        after: '3ヶ月でバレーボール指導者向けオンライン講座を開設、初月から2名成約',
        comment: '正直、最初は半信半疑でした。でもAIの使い方を教わって、台本が15分で書けた時は衝撃でした。同じ悩みを持つ後輩たちに、この方法を伝えたいです。',
    },
    {
        name: 'M.T 様',
        attr: '高校サッカー部コーチ・30代',
        image: '/2ndcareer/testimonial-2.jpg',
        alt: 'サッカーのイメージ',
        before: '平日は指導、土日は試合。副業を考える余裕すらなかった',
        after: 'AIで台本を作り、通勤時間に収録。60日で講座コンテンツ完成',
        comment: '時間がないことが言い訳にならなくなった。AIは本当に相棒です。移動中にスマホで台本を作り、週末に10分だけ収録。この効率は革命的でした。',
    },
    {
        name: 'Y.O 様',
        attr: '元プロ野球選手・50代',
        image: '/2ndcareer/testimonial-3.jpg',
        alt: '野球のイメージ',
        before: '講演依頼は来るが単発収入。デジタルは全くわからなかった',
        after: '自分の名前を冠したオンラインスクールを開設、月額会員制で安定収入化',
        comment: '50代でも遅くなかった、というのが一番の学びです。一人でやっていたら絶対に完成しなかった。伴走してもらえたから、最後まで走り切れました。',
    },
];

export default function Testimonials() {
    return (
        <section className="bg-secondary py-24 lg:py-32">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block h-[2px] w-20 bg-primary" />
                    <h2 className="text-4xl font-black tracking-tight text-primary md:text-5xl lg:text-6xl">
                        VOICE
                    </h2>
                    <p className="mt-4 text-xl font-bold text-slate-600">受講者の声</p>
                </motion.div>

                <div className="grid gap-10 md:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group bg-white shadow-lg overflow-hidden"
                        >
                            <div className="aspect-[3/2] overflow-hidden">
                                <img
                                    src={t.image}
                                    alt={t.alt}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <div className="mb-4">
                                    <p className="font-black text-lg text-primary">{t.name}</p>
                                    <p className="text-sm text-slate-500">{t.attr}</p>
                                </div>

                                <div className="mb-4 space-y-2 text-sm">
                                    <div className="flex items-start gap-2">
                                        <span className="shrink-0 rounded bg-slate-200 px-2 py-0.5 text-xs font-bold text-slate-500">Before</span>
                                        <span className="text-slate-500">{t.before}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="shrink-0 rounded bg-accent px-2 py-0.5 text-xs font-bold text-primary">After</span>
                                        <span className="font-bold text-primary">{t.after}</span>
                                    </div>
                                </div>

                                <div className="relative border-t border-slate-100 pt-4">
                                    <Quote className="absolute -top-3 left-0 h-6 w-6 bg-white text-accent" />
                                    <p className="text-sm text-slate-600 leading-relaxed italic">
                                        「{t.comment}」
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
