'use client';

import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { CheckCircle2, Star } from 'lucide-react';

const plans = [
    {
        name: 'セルフスタディ・ベーシック',
        tag: 'BASIC',
        recommended: false,
        items: [
            '全カリキュラム動画視聴',
            '月1回×3回 グループZoom相談会',
            '講座設計テンプレート一式',
            'AIプロンプト集',
        ],
    },
    {
        name: 'スタンダード・エクセレンス',
        tag: 'STANDARD',
        recommended: true,
        items: [
            '全カリキュラム完全サポート',
            '隔週×6回 個別Zoomコンサル（60分）',
            'LP・LINE・動画台本の添削（各3回）',
            '構築マニュアル提供',
            '3ヶ月間グループチャットサポート',
        ],
    },
    {
        name: 'エグゼクティブ・プレミアム',
        tag: 'PREMIUM',
        recommended: false,
        items: [
            '全カリキュラム完全サポート',
            '週1回×12回 個別Zoomコンサル（60分）',
            'LP・LINE・動画台本の添削無制限',
            '講座プラットフォーム構築代行',
            '初回セールス同席サポート',
            '卒業後6ヶ月間チャットサポート',
        ],
    },
];

export default function Plan() {
    return (
        <section className="bg-primary py-24 lg:py-32 text-white">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
                        PLAN
                    </h2>
                    <p className="text-xl font-bold text-accent">あなたに合ったプランをお選びください</p>
                    <p className="mt-2 text-sm text-slate-400">詳しい内容・料金は個別相談でご案内いたします</p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`relative p-8 border ${plan.recommended
                                ? 'border-accent bg-accent/10 scale-105'
                                : 'border-white/10 bg-white/5'
                                }`}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-accent text-primary px-4 py-1 text-sm font-black">
                                    <Star size={14} />
                                    おすすめ
                                </div>
                            )}

                            <div className="mb-6">
                                <span className="text-xs font-bold tracking-widest text-accent uppercase">{plan.tag}</span>
                                <h3 className="mt-2 text-xl font-black">{plan.name}</h3>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                                        <span className="text-sm text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://ljpbqpwr5vbk.jp.larksuite.com/scheduler/96c06a2209d4e79e"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block w-full text-center py-3 font-bold text-sm transition-all ${plan.recommended
                                    ? 'bg-accent text-primary hover:bg-yellow-400'
                                    : 'border border-white/20 hover:border-accent hover:text-accent'
                                    }`}
                            >
                                詳細を相談する
                            </a>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
