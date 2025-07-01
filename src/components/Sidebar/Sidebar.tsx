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

import { useEffect } from 'react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
        } else {
            document.body.style.overflow = ''; // Возвращаем скролл страницы
        }
        // Очистка при размонтировании
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/* Шапка */}
            <header
                className={`${styles.sidebarWrapper} ${isOpen ? styles.open : ''}`}
            >
                {/* Логотип */}
                <a href="#home" className={styles.logoWrapper}>
                    <Image
                        src="/icons/endless-logo.svg"
                        alt="Endless Logo"
                        width={165}
                        height={40}
                        priority
                    />
                </a>

                {/* Кнопка меню */}
                <button
                    className={styles.menuButton}
                    onClick={toggleMenu}
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

            {/* Выпадающее меню — всегда в DOM, управляется классом .open */}
            <div className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}>
                <div className={styles.menuContent}>
                    {navItems.map((item, index) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={styles.menuItem}
                            onClick={closeMenu}
                        >
                            <span className={styles.itemText}>{item.title}</span>
                            <span className={styles.itemNumber}>
                {String(index + 1).padStart(2, '0')}
              </span>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
