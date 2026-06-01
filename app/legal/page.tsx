import Link from 'next/link';
import { Container } from '@/components/ui/container';
import Footer from '@/components/footer';

export const metadata = {
    title: '特定商取引法に基づく表記 | ATHLETE NEXT',
    description: 'ATHLETE NEXTの特定商取引法に基づく表記',
};

export default function LegalPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-primary py-16">
                <Container>
                    <Link href="/" className="text-accent hover:text-accent/80 text-sm font-bold mb-4 inline-block transition-colors">
                        ← トップページに戻る
                    </Link>
                    <h1 className="text-3xl font-black text-white md:text-4xl">
                        特定商取引法に基づく表記
                    </h1>
                </Container>
            </div>
            <Container>
                <div className="py-16 max-w-3xl">
                    <table className="w-full text-sm border-collapse">
                        <tbody>
                            <Row label="販売業者" value="ワールドトレードネクスト" />
                            <Row label="代表者" value="西野 直哉" />
                            <Row label="所在地" value="ご請求いただけましたら遅滞なく開示いたします" />
                            <Row label="電話番号" value="ご請求いただけましたら遅滞なく開示いたします" />
                            <Row label="メールアドレス" value="お問い合わせフォームよりご連絡ください" />
                            <Row label="販売URL" value="https://2ndcareer.vercel.app/" />
                            <Row label="販売価格" value="各サービスページに記載の価格に準じます（税込表示）" />
                            <Row label="支払方法" value="クレジットカード決済、銀行振込" />
                            <Row label="支払時期" value="クレジットカード：お申込み時に決済 / 銀行振込：お申込みから7日以内" />
                            <Row label="商品の引渡し時期" value="決済確認後、3営業日以内にサービス提供を開始いたします" />
                            <Row label="返品・交換・キャンセル" value="デジタルコンテンツ・コンサルティングサービスの性質上、お申込み後のキャンセル・返金は原則としてお受けしておりません。ただし、サービス内容に重大な瑕疵がある場合はこの限りではありません。" />
                            <Row label="動作環境" value="最新版のGoogle Chrome、Safari、Firefoxを推奨いたします" />
                        </tbody>
                    </table>
                </div>
            </Container>
            <Footer />
        </main>
    );
}

function Row({ label, value }: { label: string; value: string }) {
    return (
        <tr className="border-b border-slate-200">
            <th className="py-4 pr-6 text-left font-bold text-primary align-top whitespace-nowrap w-[160px]">
                {label}
            </th>
            <td className="py-4 text-slate-600 leading-relaxed">
                {value}
            </td>
        </tr>
    );
}
