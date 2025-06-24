'use client';

import styles from './style.module.css';
import SlideWrapper from '@/components/SlideWrapper/SlideWrapper';

export default function CinemaFormat() {
    return (
        <SlideWrapper>
            <div className={styles.container}>
                <div className={styles.bg} />

                <div className={styles.contentWrapper}>
                    {/* Левая верхняя секция */}
                    <div className={styles.leftSection}>
                        <div className={styles.title}>ФОРМАТ КИНО</div>

                        <div className={styles.subheading}>
                            МЫ СОЗДАЕМ ПЕРСОНАЛЬНЫЕ
                            МИНИ-ФИЛЬМЫ, ВДОХНОВЛЁННЫЕ
                            СТИЛЕМ КУЛЬТУРНОГО КИНО.
                        </div>

                        <div className={styles.paragraph1}>
                            <div className={styles.textStart}>Это может быть:</div>

                            <div className={styles.imageWrapper}>
                                <div className={styles.imageText}>шпионский триллер,</div>
                                <div className={styles.imageText}>уличная драма,</div>
                                <div className={styles.imageText}>ироничный экшен,</div>
                                <div className={styles.imageText}>ностальгическая комедия,</div>
                            </div>

                            <div className={styles.textEnd}>... и многое другое.</div>
                        </div>

                        <div className={styles.paragraph2}>
                            Фирменный монтаж, узнаваемые образы,
                            актёры, точные диалоги — всё выглядит
                            как сцена из настоящего фильма.
                        </div>
                    </div>

                    {/* Правая нижняя секция */}
                    <div className={styles.rightSection}>
                        <div className={styles.rightSubheading}>НО В ФИНАЛЕ ЗРИТЕЛИ ПОНИМАЮТ:</div>
                        <div className={styles.rightText}>
                            ЭТО НЕ ПРОСТО
                            КИНО
                            ЭТО — ЛИЧНЫЙ
                            ПОДАРОК
                        </div>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
}
