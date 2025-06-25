// app/layout.tsx
import type { Metadata } from 'next';
import '../styles/globals.css';
import Sidebar from '@/components/Sidebar/Sidebar';

export const metadata: Metadata = {
    title: 'Endless',
    description: 'Театральное шоу, созданное лично для вас.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap"
                rel="stylesheet"
            />
        </head>
        <body>
        <Sidebar />
        <main>{children}</main>
        </body>
        </html>
    );
}
