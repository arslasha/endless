'use client';

import styles from '../style.module.css';

type Video = {
    title: string;
    url: string;
};

export default function VideoCard({ video }: { video: Video }) {
    return (
        <div className={styles.card}>
            <iframe
                src={`${video.url}?autoplay=0`}
                allow="autoplay"
                allowFullScreen
                loading="lazy"
                className={styles.iframe}
            />
        </div>
    );
}
