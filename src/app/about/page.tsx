'use client';

import styles from './style.module.css';
import SlideWrapper from '@/components/SlideWrapper/SlideWrapper';

export default function About() {
    return (
        <SlideWrapper>
            <div className={styles.container}>
                <div className={styles.bg_about}/>

                {/* Левая верхняя секция */}
                <div className={styles.sections}>
                    <div className={`${styles.section} ${styles.sectionTopLeft}`}>
                        <div className={styles.sectionTitle}>
                            <span className={styles.boldLetter}>C</span>ОВЕРШЕНСТВО В КАЖДОЙ <span
                            className={styles.boldLetter}>Д</span>ЕТАЛИ
                        </div>
                        <div className={styles.sectionContent}>
                            <div className={styles.subheading}>СЦЕНАРИЙ</div>
                            <div className={styles.text}>
                                Оригинальный сюжет, отражающий тему события
                                и характеры героев. Режиссура, построенная
                                на точной драматургии и эмоциональных акцентах.
                            </div>
                        </div>
                        <div className={styles.sectionContent}>
                            <div className={styles.subheading}>ОБРАЗЫ И КОСТЮМЫ</div>
                            <div className={styles.text}>
                                Индивидуально созданные костюмы, грим,
                                аксессуары. Художественные решения,
                                подчёркивающие эстетику всего шоу.
                            </div>
                        </div>
                        <div className={styles.sectionContent}>
                            <div className={styles.subheading}>СВЕТ И ТЕХНОЛОГИИ</div>
                            <div className={styles.text}>
                                Световое оформление высокого уровня,
                                атмосферные переходы, спецэффекты.
                                Использование передовых технологий индустрии шоу.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Правая нижняя секция */}
                <div className={styles.sections}>
                    <div className={`${styles.section} ${styles.sectionBottomRight}`}>
                        <div className={styles.sectionTitle}>
                            <span className={styles.boldLetter}>К</span>АЖДАЯ ДЕТАЛЬ — ЧАСТЬ <span
                            className={styles.boldLetter}>П</span>РОИЗВЕДЕНИЯ
                        </div>
                        <div className={styles.sectionContent}>
                            <div className={styles.subheading}>МУЗЫКА</div>
                            <div className={styles.text}>
                                От авторских композиций до оригинальных аранжировок мировых хитов. Музыкальная
                                драматургия — как отдельный язык внутри постановки.
                            </div>
                        </div>
                        <div className={styles.sectionContent}>
                            <div className={styles.subheading}>ШОУ-НОМЕРА И СЦЕНЫ</div>
                            <div className={styles.text}>
                                Яркие акценты, эффектные мизансцены и эпизоды. Точные вхождения в ритм события,
                                эмоциональные пики.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
}
