'use client';

import { useState } from 'react';
import styles from './Sidebar.module.css';
import Image from 'next/image';

const navItems = [
    { title: 'Форматы', id: 'formats' },
    { title: 'Персональный спектакль', id: 'personal-performance' },
    { title: 'Малая форма', id: 'small-format' },
    { title: 'Endless - это ...', id: 'about' },
    { title: 'Ваше событие', id: 'your-event' },
    { title: 'Киноформат', id: 'cinema-format' },
    { title: 'Резюме', id: 'resume' },
    { title: 'Контакты', id: 'contacts' },
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header className={styles.sidebarWrapper}>
                {/* Логотип */}
                <div className={styles.logoWrapper}>
                    <a href="#home">
                        <Image
                            src="/icons/endless-logo.svg"
                            alt="Endless Logo"
                            width={100}
                            height={60}
                            priority
                        />
                    </a>
                </div>

                {/* Навигация — только на больших экранах */}
                <nav className={styles.navLinks}>
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.id}`}
                            className={styles.link}
                        >
                            {item.title}
                        </a>
                    ))}
                </nav>

                {/* Кнопка меню — только на мобилках */}
                <button
                    className={styles.menuButton}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <Image
                        src={isOpen ? '/icons/close-icon.svg' : '/icons/menu-icon.svg'}
                        alt="menu toggle"
                        width={24}
                        height={24}
                    />
                </button>
            </header>

            {/* Мобильное меню */}
            {isOpen && (
                <nav className={styles.mobileMenu}>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={closeMenu}
                                    className={styles.mobileLink}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </>
    );
}
