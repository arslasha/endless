'use client';

import styles from './style.module.css';
import SlideWrapper from '@/components/SlideWrapper/SlideWrapper';
import Image from 'next/image';

export default function Contacts() {
    return (
        <SlideWrapper>
            <div className={styles.container}>
                <div className={styles.bg} />

                <div className={styles.contactBlock}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/images/home/Logo.svg"
                            alt="Endless Logo"
                            width={370}
                            height={157}
                            priority
                            className={styles.logo}
                        />
                        <div className={styles.underline} />
                    </div>

                    <a href="tel:+79835370907" className={styles.phone}>
                        +7 983 537 09 07
                    </a>

                    <div className={styles.signature}>
                        Time to show
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
}
