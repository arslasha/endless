'use client';

import { useEffect, useRef } from 'react';
import styles from '../style.module.css';

type Video = {
    title: string;
    url: string;
};

interface VideoCardProps {
    video: Video;
    onPlay: () => void;
    onPause: () => void;
}

export default function VideoCard({ video, onPlay, onPause }: VideoCardProps) {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    useEffect(() => {
        const handleMessage = (e: MessageEvent) => {
            if (typeof e.data === 'string') {
                if (e.data.includes('play')) onPlay();
                if (e.data.includes('pause')) onPause();
            }
        };

        window.addEventListener('message', handleMessage);
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [onPlay, onPause]);

    return (
        <div className={styles.card}>
            <iframe
                ref={iframeRef}
                src={`${video.url}?autoplay=0`}
                width="100%"
                height="100%"
                allow="autoplay"
                allowFullScreen
                loading="lazy"
                className={styles.iframe}
            />
            <div className={styles.caption}>{video.title}</div>
        </div>
    );
}
