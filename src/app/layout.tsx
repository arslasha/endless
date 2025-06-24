// app/layout.tsx
import type { Metadata } from 'next';
import '../styles/globals.css';
import Sidebar from '@/components/Sidebar/Sidebar';

export const metadata: Metadata = {
    title: 'endless',
    description: 'Театральное шоу, созданное лично для вас.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <Sidebar />
        <main style={{ paddingRight: '250px' }}>{children}</main>
        </body>
        </html>
    );
}
