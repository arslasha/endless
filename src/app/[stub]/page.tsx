'use client';

import styles from './stub.module.css';
import Link from "next/link";

export default function StubPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Страница в разработке</h1>
            <p className={styles.subtitle}>Мы скоро всё добавим. Пока можно вернуться на главную.</p>
            <Link href="/" className={styles.button}>На главную</Link>
        </div>
    );
}
