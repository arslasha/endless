'use client';

import styles from './style.module.css';
import SlideWrapper from '@/components/SlideWrapper/SlideWrapper';

export default function PersonalPerformance() {
    return (
        <SlideWrapper>
            <div className={styles.container}>
                <div className={styles.bg} />

                <div className={styles.text_container}>
                    <div className={styles.pageTitle}>
                        <span className={styles.pageNumber}>01</span>{' '}
                        ПЕРСОНАЛЬНЫЙ СПЕКТАКЛЬ
                    </div>

                    <div className={styles.sections}>

                        <div className={styles.section}>
                            <div className={styles.sectionTitle}>
                                <span className={styles.boldLetter}>Э</span>КСКЛЮЗИВНОЕ{' '}
                                <span className={styles.boldLetter}>Т</span>ЕАТРАЛЬНОЕ{' '}
                                ШОУ
                            </div>
                            <div className={styles.sectionContent}>
                                <div className={styles.subheading}>ПЕРСОНАЛЬНЫЙ СПЕКТАКЛЬ СОЗДАННЫЙ ДЛЯ ВАС.</div>
                                <div className={styles.text}>
                                    Создано на основе ваших пожеланий. Оригинальный
                                    сюжет, профессиональное исполнение, пристальное
                                    внимание к деталям, безупречное решение сцены.
                                     Эта история создана лично для вас и не имеет
                                    аналогов.
                                </div>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <div className={styles.sectionTitle}>
                                <span className={styles.boldLetter}>И</span>ММЕРСИВНЫЙ{' '}
                                <span className={styles.boldLetter}>Ф</span>ОРМАТ
                            </div>
                            <div className={styles.sectionContent}>
                                <div className={styles.subheading}>ГОСТИ - ЧАСТЬ ДЕЙСТВИЯ. МЫ СОЗДАЕМ ИСТОРИЮ,
                                    В КОТОРОЙ КАЖДЫЙ МОЖЕТ СТАТЬ ГЕРОЕМ.</div>
                                <div className={styles.text}>
                                    Позволит предоставить близким и гостям уникальную
                                    возможность стать частью действия на сцене, раскрыть
                                    свои актерские таланты и прожить уникальную историю.
                                    Индивидуальный сюжет позволяет адаптировать историю
                                    под каждого участника.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
}
