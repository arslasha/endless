'use client';

import styles from './style.module.css';

export default function Formats() {
    return (
        <div className={styles.container}>
            <div className={styles.bg} />
            <div className={styles.fiber} />
            <div className={styles.text_container}>
                <div className={styles.section}>
                    <div className={styles.heading}>
                        <div className={styles.sectionNumber}>01</div>
                        <div className={styles.sectionTitle}>
                            <span className={styles.boldLetter}>Ф</span>ОРМАТЫ
                        </div>
                    </div>
                    <div className={styles.sectionContent}>
                        <div className={styles.bullet}>Эксклюзивное театральное шоу по оригинальному сценарию</div>
                        <div className={styles.bullet}>Иммерсивное шоу, в котором гости становятся участниками постановки</div>
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.heading}>
                        <div className={styles.sectionNumber}>02</div>
                        <div className={styles.sectionTitle}>
                            <span className={styles.boldLetter}>М</span>АЛАЯ ФОРМА
                        </div>
                    </div>
                    <div className={styles.sectionContent}>
                        <div className={styles.bullet}>Постановочный шоу-номер для любой вашей концепции</div>
                        <div className={styles.bullet}>Разработка и постановка Welcome</div>
                        <div className={styles.bullet}>Насыщение события персонажами, поддерживающими повествование</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
