// app/home/About.tsx
'use client';

import styles from './style.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.background}/>
            <div className={styles.left}>
                <div className={styles.logo}/>
            </div>
            <div className={styles.maskWrapper}>
                <div className={styles.mask}/>
            </div>
        </div>

    );
}
