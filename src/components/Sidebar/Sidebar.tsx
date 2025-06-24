// components/Sidebar/Sidebar.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Sidebar.module.css';
import { motion, AnimatePresence } from 'framer-motion';


// список навигации
const navItems = [
    { title: 'Форматы', path: '/formats' },
    { title: 'Персональный спектакль', path: '/personal-performance' },
    { title: 'Малая форма', path: '/small-format' },
    { title: 'Endless - это ...', path: '/about' },
    { title: 'Ваше событие', path: '/your-event' },
    { title: 'Киноформат', path: '/cinema-format' },
    { title: 'Резюме', path: '/resume' },
    { title: 'Контакты', path: '/contacts' },
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={styles.sidebarWrapper}>
            <div className={styles.toggleArea} onClick={toggleMenu}>
                <img src="/icons/endless-logo.svg" alt="Endless Logo" width={100} height={100} />
                <button className={styles.menuButton}>
                    <img src={isOpen ? '/icons/close-icon.svg' : '/icons/menu-icon.svg'} alt="menu toggle" width={24} height={24} />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className={styles.navMenu}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={item.path}>
                                    <button
                                        className={styles.navItem}
                                        onClick={() => {
                                            router.push(item.path);
                                            setIsOpen(false);
                                        }}
                                    >
                                        <span className={styles.title}>{item.title}</span>
                                        <span className={styles.number}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
}
