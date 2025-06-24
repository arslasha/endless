'use client';

import styles from './style.module.css';
import SlideWrapper from '@/components/SlideWrapper/SlideWrapper';

export default function YourEvent() {
    return (
        <SlideWrapper>
            <div className={styles.container}>
                <div className={styles.bg} />

                {/* Левая верхняя секция */}
                <div className={styles.topLeft}>
                    <div className={styles.topLeftText}>Свет задаёт атмосферу, а луна — вдохновение</div>
                    <div className={styles.moon} />
                </div>

                {/* Центральный блок из 6 элементов */}
                <div className={styles.centerRow}>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div className={styles.centerItem} key={i}>
                            <div className={styles.centerIcon} style={{ backgroundImage: `url('/images/your-event/icon-${i + 1}.svg')` }} />
                            <div className={styles.centerText}>Описание {i + 1}</div>
                        </div>
                    ))}
                </div>

                {/* Левая нижняя граница центрального блока */}
                <div className={styles.bottomLeft}>
                    Уникальный финал, отражающий ваше настроение и эмоции
                </div>

                {/* Правая нижняя секция */}
                <div className={styles.bottomRight}>
                    Ваш вечер — это не просто программа, это персональное произведение искусства, ритм которого — ваш собственный.
                </div>
            </div>
        </SlideWrapper>
    );
}
