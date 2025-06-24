'use client';

import styles from './style.module.css';
import SlideWrapper from '@/components/SlideWrapper/SlideWrapper';

export default function ResumePage() {
    return (
        <SlideWrapper>
            <div className={styles.container}>
                <div className={styles.bg} />

                <div className={styles.contentWrapper}>
                    {/* Секция 1 */}
                    <div className={styles.section1}>
                        <div className={styles.titleGradient}>ENDLESS -</div>
                        <div className={styles.subtitle}>ЭТО ИСКУССТВО, ВОПЛОЩЕННОЕ В ВАШЕЙ РЕАЛЬНОСТИ</div>

                        <div className={styles.block}>
                            <div className={styles.imageBlock} />

                            <div className={styles.textOverlay}>
                                <p>Захватывающий сценарий, неожиданные сюжетные повороты, мастерская работа со светом и звуком.</p>
                                <p>Полное перевоплощение в руках лучших костюмеров и гримеров.</p>
                                <p>Аплодисменты восхищенной публики. Смелые творческие решения и тонкая режиссура.</p>
                            </div>

                            <div className={styles.highlighted}>
                                ВЫ МЕЧТАЛИ ОБ ЭТОМ,<br />НО НЕ ОСМЕЛИВАЛИСЬ СКАЗАТЬ ВСЛУХ.<br />ТЕПЕРЬ ЭТО ВОЗМОЖНО.
                            </div>
                        </div>
                    </div>

                    {/* Секция 2 */}
                    <div className={styles.section2}>
                        <div className={styles.section2Title}>
                            ВАША РЕАЛЬНОСТЬ – ЭТО ТЕАТР, СОЗДАННЫЙ ВАМИ
                        </div>

                        <div className={styles.section2Text}>
                            <div>Ощутите магию театра в уникальном формате, который не имеет аналогов</div>
                            <div>Направить известных персонажей в новое путешествие</div>
                            <div>Стать соавтором собственной истории</div>
                            <div>Самому стать героем своего шоу</div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
}
