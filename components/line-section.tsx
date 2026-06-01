'use client';

import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { MessageCircle } from 'lucide-react';

export default function LineSection() {
    return (
        <section className="bg-[#06C755] py-16 lg:py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center text-white"
                >
                    <MessageCircle className="h-12 w-12 mb-4" />
                    <h2 className="text-3xl font-black md:text-4xl">
                        まずはLINEで気軽に相談
                    </h2>
                    <p className="mt-4 text-lg opacity-90 max-w-lg">
                        「こんな講座を作りたい」「自分の経験でも大丈夫？」<br />
                        どんな些細なことでもお気軽にご連絡ください。
                    </p>

                    <div className="mt-8 bg-white rounded-xl p-4 shadow-lg">
                        <img
                            src="/2ndcareer/line-qr.png"
                            alt="LINE QRコード"
                            className="h-48 w-48"
                        />
                    </div>

                    <a
                        href="https://lin.ee/WdYf2tq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 bg-white text-[#06C755] font-black text-lg px-10 py-4 rounded-full shadow-lg hover:bg-slate-50 transition-colors"
                    >
                        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                            <path d="M12 2C6.48 2 2 5.81 2 10.5c0 2.49 1.3 4.73 3.44 6.37-.13.47-.86 3.07-.89 3.26 0 0-.02.13.05.18.07.06.16.03.16.03.21-.03 2.5-1.63 3.53-2.39.54.08 1.1.12 1.71.12 5.52 0 10-3.81 10-8.5S17.52 2 12 2z" />
                        </svg>
                        LINEで友だち追加する
                    </a>
                </motion.div>
            </Container>
        </section>
    );
}
