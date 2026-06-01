import Link from 'next/link';
import { Container } from '@/components/ui/container';
import Footer from '@/components/footer';

export const metadata = {
    title: 'プライバシーポリシー | ATHLETE NEXT',
    description: 'ATHLETE NEXTのプライバシーポリシー（個人情報保護方針）',
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-primary py-16">
                <Container>
                    <Link href="/" className="text-accent hover:text-accent/80 text-sm font-bold mb-4 inline-block transition-colors">
                        ← トップページに戻る
                    </Link>
                    <h1 className="text-3xl font-black text-white md:text-4xl">
                        プライバシーポリシー
                    </h1>
                </Container>
            </div>
            <Container>
                <div className="py-16 max-w-3xl prose prose-slate">
                    <Section title="1. 個人情報の定義">
                        本プライバシーポリシーにおける「個人情報」とは、個人情報保護法に定める個人情報を指し、
                        氏名、メールアドレス、電話番号、その他の記述等により特定の個人を識別できる情報を言います。
                    </Section>

                    <Section title="2. 個人情報の収集方法">
                        当サービスでは、お問い合わせ、無料相談のお申し込み、サービスのご購入の際に、
                        氏名、メールアドレス、電話番号等の個人情報をお伺いすることがあります。
                    </Section>

                    <Section title="3. 個人情報の利用目的">
                        収集した個人情報は、以下の目的で利用いたします。
                        <ul className="mt-3 space-y-2 text-slate-600">
                            <li>サービスの提供・運営のため</li>
                            <li>お問い合わせへの対応のため</li>
                            <li>サービスに関するご案内・情報提供のため</li>
                            <li>利用規約に違反した利用者への対応のため</li>
                            <li>サービスの改善・新サービス開発のため</li>
                        </ul>
                    </Section>

                    <Section title="4. 個人情報の第三者提供">
                        当サービスは、以下の場合を除き、個人情報を第三者に提供いたしません。
                        <ul className="mt-3 space-y-2 text-slate-600">
                            <li>ご本人の同意がある場合</li>
                            <li>法令に基づく場合</li>
                            <li>人の生命・身体・財産の保護のために必要な場合</li>
                        </ul>
                    </Section>

                    <Section title="5. 個人情報の管理">
                        当サービスは、個人情報の正確性及び安全性を確保するために、
                        セキュリティに関する適切な措置を講じます。
                    </Section>

                    <Section title="6. Cookieの使用について">
                        当サイトでは、ユーザー体験の向上やアクセス解析のためにCookieを使用する場合があります。
                        ブラウザの設定により、Cookieの受け入れを拒否することが可能です。
                    </Section>

                    <Section title="7. プライバシーポリシーの変更">
                        本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、
                        ユーザーに通知することなく変更できるものとします。
                        変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じるものとします。
                    </Section>

                    <Section title="8. お問い合わせ窓口">
                        個人情報の取扱いに関するお問い合わせは、下記よりご連絡ください。
                        <p className="mt-3">
                            <a
                                href="https://ljpbqpwr5vbk.jp.larksuite.com/share/base/form/shrjp9gksNra45vIjBd3UBlJ23e"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline font-bold"
                            >
                                お問い合わせフォーム →
                            </a>
                        </p>
                    </Section>

                    <p className="mt-12 text-sm text-slate-400">
                        制定日：2025年2月1日<br />
                        事業者：ワールドトレードネクスト<br />
                        代表：西野 直哉
                    </p>
                </div>
            </Container>
            <Footer />
        </main>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-8">
            <h2 className="text-lg font-black text-primary mb-3">{title}</h2>
            <div className="text-slate-600 leading-relaxed">{children}</div>
        </div>
    );
}
