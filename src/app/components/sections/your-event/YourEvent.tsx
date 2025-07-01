'use client';

import styles from './style.module.css';

export default function YourEvent() {
    const features = [
        { number: '01', text: 'ДЕТСКИЙ\nПРАЗДНИК' },
        { number: '02', text: 'ДЕНЬ\nРОЖДЕНИЯ' },
        { number: '03', text: 'КОРПОРАТИВ' },
        { number: '04', text: 'СВАДЬБА' },
        { number: '05', text: 'ЮБИЛЕЙ' },
        { number: '06', text: 'ИММЕРСИВНЫЙ\nУЖИН' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.bg} />

            <div className={styles.topLeft}>
                <div className={styles.moon} />
                <p className={styles.topLeftText}>
                    Создайте
                    эксклюзивное
                    событие, которое
                    станет легендой:
                </p>
            </div>

            <div className={styles.centerRow}>
                {features.map((item) => (
                    <div key={item.number} className={styles.centerItem}>
                        <div className={styles.centerNumber}>{item.number}</div>
                        <div className={styles.centerText} style={{ whiteSpace: 'pre-line' }}>
                            {item.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.bottomLeft}>
                    МЫ СОЗДАЕМ НЕ ПОВТОРЕНИЕ, А <br />
                    ПРОИЗВЕДЕНИЕ
                </div>

                <div className={styles.bottomRight}>
                    …и любое другое
                    памятное событие.
                    Каждое шоу
                    создается полностью
                    индивидуально
                    и соответствует вашим
                    мечтам и ожиданиям.
                </div>
            </div>
        </div>
    );
}
