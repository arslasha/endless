// app/home/page.tsx
'use client';

import styles from './style.module.css';
import SlideWrapper from '@/components/SlideWrapper/SlideWrapper';

export default function Home() {
    return (
        <SlideWrapper>
            <div className={styles.container}>
                <div className={styles.background}/>
                <div className={styles.left}>
                    <div className={styles.logo}/>
                </div>
                <div className={styles.mask}/>
            </div>
        </SlideWrapper>
    );
}
