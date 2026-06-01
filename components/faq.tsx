'use client';

import { type ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './ui/container';
import { ChevronDown, ExternalLink } from 'lucide-react';

const faqs: { q: string; a: ReactNode }[] = [
    {
        q: 'ITが本当に苦手ですが、大丈夫でしょうか？',
        a: '問題ありません。AIに「指示を出すだけ」で形になる仕組みを用意しています。スマホでLINEが使えれば十分です。実際に、50代でデジタル未経験だった方も3ヶ月で講座を完成されています。',
    },
    {
        q: '指導経験はありますが、講座にできるか自信がありません',
        a: (
            <>
                Month1で「売れるノウハウ」を一緒に発掘します。多くの方が「自分では気づかなかった価値」を見つけています。あなたが当たり前にやってきたことが、他人にとっては「お金を払ってでも学びたい知識」です。
                <span className="mt-4 block font-bold text-primary">「高単価講座・構築エンジン極」ツールをご利用ください。</span>
                <a
                    href="https://gemini.google.com/gem/1D7VcU1IsbYN9HuRrQGIJGfjXl5XfhQG5?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline font-bold"
                >
                    AIツールを開く <ExternalLink size={14} />
                </a>
                <span className="mt-3 block text-slate-600">
                    あなたの経験やスキルを、AIが「売れる講座」に変換します。経歴、特技、趣味、あるいはSNSのURLや資料を共有するだけでOK。強みの発掘からターゲット設定、カリキュラム構成まで、あなただけのオリジナル講座を自動開発します。LPやライン、メール、SNS投稿文も最適に出力します。副業やコンテンツ販売の第一歩をここから始めましょう！
                </span>
                <span className="mt-3 block text-slate-600">詳しくは紹介サイトをご参照ください。</span>
                <a
                    href="https://harry-n2.github.io/kiwami/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline font-bold"
                >
                    高単価講座・構築エンジン <ExternalLink size={14} />
                </a>
            </>
        ),
    },
    {
        q: '仕事が忙しく、時間が取れるか心配です',
        a: '週3〜5時間の確保をお願いしています。AIで作業を効率化するため、従来の1/10以下の時間で講座が作れます。通勤時間や隙間時間を活用された方も多くいらっしゃいます。',
    },
    {
        q: '返金保証はありますか？',
        a: '返金保証ではなく「成果保証」を採用しています。90日間やり切った方が講座コンテンツ未完成の場合、追加30日間の個別サポートを無償延長します。本気で取り組む方が成果ゼロはあり得ない設計です。',
    },
    {
        q: '分割払いは可能ですか？',
        a: 'はい、クレジットカードで分割が可能です。詳しくは個別相談時にご案内いたします。お気軽にお問い合わせください。',
    },
];

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border-b border-slate-200"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-accent"
            >
                <div className="flex items-start gap-4">
                    <span className="shrink-0 flex h-8 w-8 items-center justify-center bg-accent text-primary text-sm font-black">
                        Q
                    </span>
                    <span className="text-lg font-bold text-primary">{faq.q}</span>
                </div>
                <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="flex items-start gap-4 pb-6 pl-0">
                            <span className="shrink-0 flex h-8 w-8 items-center justify-center bg-primary text-white text-sm font-black">
                                A
                            </span>
                            <div className="text-slate-600 leading-relaxed">{faq.a}</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function Faq() {
    return (
        <section id="faq" className="bg-white py-24 lg:py-32">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-black tracking-tight text-primary md:text-5xl lg:text-6xl">
                        FAQ
                    </h2>
                    <p className="text-xl font-bold text-slate-600">よくある質問</p>
                </motion.div>

                <div className="mx-auto max-w-3xl">
                    {faqs.map((faq, index) => (
                        <FaqItem key={index} faq={faq} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
