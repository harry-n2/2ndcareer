'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { Lightbulb, Cpu, Heart, ExternalLink } from 'lucide-react';

const solutions: {
    icon: typeof Lightbulb;
    title: string;
    desc: ReactNode;
    image: string;
    alt: string;
}[] = [
    {
        icon: Lightbulb,
        title: '経験を「売れる講座」に変換する設計メソッド',
        desc: (
            <>
                <span className="font-bold text-primary">「高単価講座・構築エンジン極」ツール</span>をご利用ください。
                <a
                    href="https://gemini.google.com/gem/1D7VcU1IsbYN9HuRrQGIJGfjXl5XfhQG5?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline font-bold"
                >
                    AIツールを試す <ExternalLink size={14} />
                </a>
                <span className="mt-3 block">
                    あなたの経験やスキルを、AIが「売れる講座」に変換します。経歴、特技、趣味、あるいはSNSのURLや資料を共有するだけでOK。強みの発掘からターゲット設定、カリキュラム構成まで、あなただけのオリジナル講座を自動開発します。LPやライン、メール、SNS投稿文も最適に出力します。副業やコンテンツ販売の第一歩をここから始めましょう！
                </span>
                <span className="mt-3 block">詳しくは紹介サイトをご参照ください。</span>
                <a
                    href="https://harry-n2.github.io/kiwami/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline font-bold"
                >
                    高単価講座・構築エンジン <ExternalLink size={14} />
                </a>
            </>
        ),
        image: '/2ndcareer/solution-1.jpg',
        alt: '高単価講座・構築エンジン極',
    },
    {
        icon: Cpu,
        title: 'AIを味方につけ、コンテンツ作成を10倍速に',
        desc: '台本作成、LP原稿、SNS投稿...すべてAIが下書き。IT苦手でも「指示を出すだけ」で形になります。',
        image: '/2ndcareer/solution-2.jpg',
        alt: 'ノートPCを使ったコンテンツ作成',
    },
    {
        icon: Heart,
        title: '元アスリートの気持ちがわかる伴走サポート',
        desc: '海外サッカー経験を持ち、ゼロから多角経営を実現したアドバイザーが、あなたの「現場の言葉」で寄り添いながら導きます。',
        image: '/2ndcareer/solution-3.jpg',
        alt: 'チームメンバーが喜び合う様子',
    },
];

export default function Solution() {
    return (
        <section className="relative w-full bg-secondary py-24 lg:py-32 overflow-hidden">
            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="mb-4 flex items-center justify-center gap-4">
                        <span className="h-[2px] w-12 bg-primary" />
                        <span className="font-bold tracking-widest text-primary uppercase">Solution</span>
                        <span className="h-[2px] w-12 bg-primary" />
                    </div>
                    <h2 className="mb-4 text-3xl font-black tracking-tight text-primary md:text-4xl lg:text-5xl">
                        その悩み、<br className="md:hidden" />
                        <span className="text-accent bg-primary px-2 py-1 inline-block mt-2">「高単価講座・構築エンジン極」ツール</span>で<br className="md:hidden" />
                        解決できます
                    </h2>
                </motion.div>

                <div className="grid gap-10 md:grid-cols-3">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-slate-300 mb-6">
                                <img
                                    src={solution.image}
                                    alt={solution.alt}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-10 w-10 items-center justify-center bg-accent text-primary">
                                    <solution.icon size={20} />
                                </div>
                                <span className="text-sm font-bold text-slate-400">0{index + 1}</span>
                            </div>
                            <h3 className="mb-3 text-xl font-black text-primary leading-tight">
                                {solution.title}
                            </h3>
                            <div className="text-slate-600 leading-relaxed">
                                {solution.desc}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
