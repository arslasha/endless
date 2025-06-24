'use client';

import styles from './style.module.css';
import SlideWrapper from '@/components/SlideWrapper/SlideWrapper';

export default function SmallFormat() {
    return (
        <SlideWrapper>
            <div className={styles.container}>
                <div className={styles.bg_small_format} />

                <div className={styles.text_container}>
                    <div className={styles.pageTitle}>
                        <span className={styles.pageNumber}>03</span> МАЛАЯ ФОРМА
                    </div>

                    <div className={styles.sections}>
                        {/* Секция 1 */}
                        <div className={styles.section}>
                            <div className={styles.sectionTitle}>
                                <span className={styles.boldLetter}>С</span>ЮЖЕТНЫЙ{' '}
                                <span className={styles.boldLetter}>Н</span>ОМЕР
                            </div>
                            <div className={styles.sectionContent}>
                                <div className={styles.subheading}>
                                    СЮЖЕТНЫЙ ШОУ-НОМЕР 5–7 МИНУТ — ИСТОРИЯ, СОЗДАННАЯ НА ОСНОВЕ ЛИЧНЫХ МОМЕНТОВ.
                                </div>
                                <div className={styles.text}>
                                    Комедия, драма, боевик, фантазия — жанр выбираем под концепцию. Интегрируется между основными номерами или работает как самостоятельный акцент.
                                </div>
                            </div>
                        </div>

                        {/* Секция 2 */}
                        <div className={styles.section}>
                            <div className={styles.sectionTitle}>
                                <span className={styles.boldLetter}>W</span>ELCOME
                            </div>
                            <div className={styles.sectionContent}>
                                <div className={styles.subheading}>
                                    СЦЕНАРНАЯ ИНТРО-ЗОНА ИЗ БЛОКОВ И АКТИВНОСТЕЙ.
                                </div>
                                <div className={styles.text}>
                                    С первых минут гости оказываются в атмосфере события. Уникальные декорации, реквизит и мини-сценки задают тон вечеру.
                                </div>
                            </div>
                        </div>

                        {/* Секция 3 */}
                        <div className={styles.section}>
                            <div className={styles.sectionTitle}>
                                <span className={styles.boldLetter}>П</span>ЕРСОНАЖИ
                            </div>
                            <div className={styles.sectionContent}>
                                <div className={styles.subheading}>
                                    АКТЕРЫ В ОБРАЗАХ, РАЗРАБОТАННЫХ ПОД ВАШУ КОНЦЕПЦИЮ.
                                </div>
                                <div className={styles.text}>
                                    Они живут внутри события — общаются с гостями или дополняют атмосферу незаметно. Деталь, которая превращает вечер в историю.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
}

