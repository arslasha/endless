'use client';

import { useEffect, useState, useRef } from 'react';
import styles from '../style.module.css';
import VideoCard from './VideoCard';

export default function VideoGallery() {
    const [videos, setVideos] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Загрузка видео
    useEffect(() => {
        fetch('/videos.json')
            .then(res => res.json())
            .then(data => setVideos(data.videos || []))
            .catch(err => console.error('Ошибка загрузки видео:', err));
    }, []);

    // Автоматическое переключение
    useEffect(() => {
        if (!isPaused && videos.length > 1) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex(prev => (prev + 1) % videos.length);
            }, 6000); // каждые 6 секунд
        }

        return () => clearInterval(intervalRef.current as NodeJS.Timeout);
    }, [isPaused, videos]);

    const next = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <div className={styles.slider}>
            <button onClick={prev} className={styles.arrow}>‹</button>

            <div
                className={styles.videoContainer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {videos.length > 0 ? (
                    <VideoCard
                        video={videos[currentIndex]}
                        onPlay={() => setIsPaused(true)}
                        onPause={() => setIsPaused(false)}
                    />
                ) : (
                    <div className={styles.placeholder}>Видео пока нет</div>
                )}
            </div>

            <button onClick={next} className={styles.arrow}>›</button>
        </div>
    );
}
