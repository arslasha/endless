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
        <body>
        <Sidebar />
        <main>{children}</main>
        </body>
        </html>
    );
}
