'use client';

import { motion } from 'framer-motion';
import { Container } from './ui/container';

const members = [
    {
        name: 'ハリー（Harry）',
        role: '代表 / 事業者',
        org: 'ワールドトレードネクスト',
        image: '/2ndcareer/profile-nishino.png',
        credentials: [
            '海外営業＆外国人材事業 約25年',
            'ロンドンの貿易会社で勤務（約2年）',
            'AI講師・AIマーケティング',
            'Anthropic公認資格 計13個取得',
            'Lark業務改善コンサルタント',
            '電子書籍・マンガ出版 40冊以上',
            '合気道2段（ロンドンで入門・20年以上／全日本合気道連盟認定）',
        ],
        desc: '東京と地方の二拠点で事業を展開。25年以上の実務経験を活かし「スポーツ×ビジネス×AI」の交差点で、元アスリート・指導者のセカンドキャリア支援に取り組む。',
    },
];

export default function Profile() {
    return (
        <section id="mentors" className="bg-secondary py-24 lg:py-32">
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
                        TEAM
                    </h2>
                    <p className="mt-4 text-xl font-bold text-slate-600">
                        あなたをバックアップする<br className="md:hidden" />プロフェッショナル
                    </p>
                </motion.div>

                <div className="grid gap-12 max-w-xl mx-auto">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="mx-auto h-48 w-48 overflow-hidden rounded-full bg-transparent mb-6 ring-4 ring-accent/20">
                                <img
                                    src={member.image}
                                    alt=""
                                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 text-[0px]"
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                />
                            </div>
                            <div>
                                <p className="text-sm font-bold uppercase tracking-widest text-accent bg-primary inline-block px-3 py-1">
                                    {member.role}
                                </p>
                                <h3 className="mt-3 text-3xl font-black text-primary">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-bold text-slate-500 mt-1">{member.org}</p>
                                <p className="mt-4 text-slate-600 leading-relaxed">
                                    {member.desc}
                                </p>
                                <ul className="mt-4 space-y-2">
                                    {member.credentials.map((cred, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                                            <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                                            {cred}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
