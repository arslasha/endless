'use client';

import styles from './style.module.css';
import SlideWrapper from '@/components/SlideWrapper/SlideWrapper';

export default function Formats() {
    return (
        <div className={styles.container}>
            {/* Фоновые слои */}
            <div className={styles.bg}/>
            <div> className={styles.fiber}</div>
            {/* Текстовые секции */}
            <div className={styles.text_container}>
                <div className={styles.section}>
                    <div className={styles.heading}>
                        <div className={styles.sectionNumber}>01</div>
                        <div className={styles.sectionTitle}><span className={styles.boldLetter}>Ф</span>ОРМАТЫ</div>
                    </div>
                    <div className={styles.sectionContent}>
                        <div className={styles.bullet}>Эксклюзивное театральное шоу</div>
                        <div className={styles.bullet}>Иммерсивное шоу, в котором гости становятся участниками
                            постановки
                        </div>
                    </div>
                </div>

                <div className={styles.section} style={{top: '260px'}}>
                    <div className={styles.heading}>
                        <div className={styles.sectionNumber}>02</div>
                        <div className={styles.sectionTitle}><span className={styles.boldLetter}>М</span>АЛАЯ ФОРМА
                        </div>
                    </div>
                    <div className={styles.sectionContent}>
                        <div className={styles.bullet}>Постановочный шоу-номер для любой вашей концепции</div>
                        <div className={styles.bullet}>Welcome — насыщение события персонажами</div>
                        <div className={styles.bullet}>Оригинальный сюжет, созданный под вас</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
