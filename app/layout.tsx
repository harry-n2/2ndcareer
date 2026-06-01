import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const notoSansJP = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['400', '500', '700', '900'],
    variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
    title: 'ATHLETE NEXT | アスリート・指導者のためのセカンドキャリア講座開発',
    description:
        '25年の現場知見×最新AI技術。90日で「教える側」から「仕組みを持つ側」へ。元アスリート・指導者のための高単価講座開発サポートプログラム。',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body className={`${inter.variable} ${notoSansJP.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
