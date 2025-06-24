'use client';

import styles from './stub.module.css';

export default function StubPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Страница в разработке</h1>
            <p className={styles.subtitle}>Мы скоро всё добавим. Пока можно вернуться на главную.</p>
            <a href="/" className={styles.button}>На главную</a>
        </div>
    );
}
