'use client';

import styles from './style.module.css';

export default function YourEvent() {
    const features = [
        { number: '01', text: 'ДЕТСКИЙ \n' + 'ПРАЗДНИК' },
        { number: '02', text: 'ДЕНЬ \n' + 'РОЖДЕНИЯ' },
        { number: '03', text: 'КОРПОРОТИВ\n' },
        { number: '04', text: 'СВАДЬБА\n' },
        { number: '05', text: 'ЮБИЛЕЙ\n' },
        { number: '06', text: 'ИММЕРСИВНЫЙ \n' + 'УЖИН' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.bg} />

            {/* Левая верхняя секция */}
            <div className={styles.topLeft}>
                <div className={styles.moon}/>
                <p className={styles.topLeftText}>Создайте <br/>эксклюзивное <br/>событие, которое <br/>станет
                    легендой:</p>
            </div>

            {/* Центральная секция */}
            <div className={styles.centerRow}>
                {features.map((item) => (
                    <div key={item.number} className={styles.centerItem}>
                        <div className={styles.centerNumber}>{item.number}</div>
                        <div className={styles.centerText}>{item.text}</div>
                    </div>
                ))}
            </div>

            {/* Левая нижняя секция */}
            <div className={styles.bottomLeft}>
                МЫ СОЗДАЕМ НЕ ПОВТОРЕНИЕ, А <br/>
                ПРОИЗВЕДЕНИЕ
            </div>

            {/* Правая нижняя секция */}
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
    );
}
