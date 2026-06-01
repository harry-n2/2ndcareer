'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { Search, PenTool, TrendingUp, CheckCircle2, ExternalLink } from 'lucide-react';

const months: {
    month: string;
    phase: string;
    subtitle: string;
    image: string;
    alt: string;
    icon: typeof Search;
    extraContent?: ReactNode;
    items: string[];
    goal: string;
}[] = [
    {
        month: 'Month 1',
        phase: '価値発掘フェーズ',
        subtitle: '「売れるコンセプト」を確定する',
        image: '/2ndcareer/curriculum-m1.jpg',
        alt: '戦略ミーティングの様子',
        icon: Search,
        extraContent: (
            <div className="mb-6 rounded-sm border border-accent/30 bg-white/5 p-6">
                <p className="mb-3 text-lg font-bold text-accent">「高単価講座・構築エンジン」ツールを開く</p>
                <a
                    href="https://gemini.google.com/gem/1D7VcU1IsbYN9HuRrQGIJGfjXl5XfhQG5?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 inline-flex items-center gap-1 text-accent hover:underline font-bold"
                >
                    AIツールを開く <ExternalLink size={14} />
                </a>
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                    あなたの経験やスキルを、AIが「売れる講座」に変換します。経歴、特技、趣味、あるいはSNSのURLや資料を共有するだけでOK。強みの発掘からターゲット設定、カリキュラム構成まで、あなただけのオリジナル講座を自動開発します。LPやライン、メール、SNS投稿文も最適に出力します。副業やコンテンツ販売の第一歩をここから始めましょう！
                </p>
                <p className="mt-3 text-slate-300 text-sm">紹介サイトをご参照ください。</p>
                <a
                    href="https://harry-n2.github.io/kiwami/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-accent hover:underline font-bold"
                >
                    高単価講座・構築エンジン <ExternalLink size={14} />
                </a>
            </div>
        ),
        items: [
            'あなたの競技・指導経験から「売れるノウハウ」を抽出',
            'AIツールで市場調査、競合分析を実施',
            '「誰の・どんな悩みを解決するか」ペルソナを設計',
            '講座タイトル・差別化ポイントを決定',
        ],
        goal: '売れる講座コンセプトが完成',
    },
    {
        month: 'Month 2',
        phase: 'コンテンツ構築フェーズ',
        subtitle: '「講座を形にする」',
        image: '/2ndcareer/curriculum-m2.jpg',
        alt: 'コンテンツ撮影の様子',
        icon: PenTool,
        items: [
            '成果が出るカリキュラム設計',
            'AIで動画台本を自動生成',
            'スマホ1台で完結する撮影・編集術を習得',
            '講座プラットフォームへのアップロード完了',
        ],
        goal: '講座コンテンツ（動画・資料）が完成',
    },
    {
        month: 'Month 3',
        phase: '集客・販売フェーズ',
        subtitle: '「初売上を達成する」',
        image: '/2ndcareer/curriculum-m3.jpg',
        alt: '目標達成の喜び',
        icon: TrendingUp,
        items: [
            'AIでLP（販売ページ）原稿を作成、公開',
            'LINE/メルマガ自動配信シナリオ構築',
            'SNS投稿をAIで量産、認知拡大',
            '個別相談からの成約、初売上達成',
        ],
        goal: '集客導線完成＋初売上達成',
    },
];

const deliverables = [
    '売れる講座コンセプト企画書',
    '動画講座コンテンツ一式（5-10本）',
    'LP（ランディングページ）',
    'LINE/メルマガ自動配信シナリオ',
    'SNS投稿テンプレート30本分',
    '個別相談クロージング台本',
];

export default function Curriculum() {
    return (
        <section id="curriculum" className="relative w-full bg-primary py-24 lg:py-32 text-white">
            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
                        CURRICULUM
                    </h2>
                    <p className="text-xl font-bold text-accent">90日間カリキュラム</p>
                </motion.div>

                <div className="space-y-16">
                    {months.map((month, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`grid gap-10 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}
                        >
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className="mb-4 flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center bg-accent text-primary">
                                        <month.icon size={24} />
                                    </div>
                                    <div>
                                        <span className="text-sm font-bold tracking-widest text-accent uppercase">{month.month}</span>
                                        <h3 className="text-2xl font-black">{month.phase}</h3>
                                    </div>
                                </div>
                                <p className="mb-6 text-lg text-slate-300">—— {month.subtitle}</p>
                                {month.extraContent}
                                <ul className="space-y-3 mb-6">
                                    {month.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                                            <span className="text-slate-200">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="inline-block rounded-sm bg-accent/10 border border-accent/30 px-4 py-2">
                                    <span className="text-sm font-bold text-accent">GOAL：{month.goal}</span>
                                </div>
                            </div>

                            <div className={`aspect-[4/3] overflow-hidden bg-slate-700 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <img
                                    src={month.image}
                                    alt={month.alt}
                                    className="h-full w-full object-cover opacity-80 transition-all duration-500 hover:opacity-100 hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Deliverables */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 rounded-sm border border-white/10 bg-white/5 p-10"
                >
                    <h3 className="mb-8 text-center text-2xl font-black text-accent">プログラム全体の成果物</h3>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {deliverables.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-3">
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
