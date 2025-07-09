'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import styles from '../style.module.css';
import VideoCard from './VideoCard';

type Video = {
    title: string;
    url: string;
};

export default function VideoGallery() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
    const isPaused = useRef(false);

    // Получаем видео
    useEffect(() => {
        fetch('/videos.json')
            .then((res) => res.json())
            .then((data) => setVideos(data.videos))
            .catch((err) => console.error('Ошибка загрузки видео:', err));
    }, []);

    // Автопрокрутка
    useEffect(() => {
        if (!videos.length) return;

        if (autoSlideRef.current) clearInterval(autoSlideRef.current);

        autoSlideRef.current = setInterval(() => {
            if (!isPaused.current) {
                setCurrentIndex((prev) => (prev + 1) % videos.length);
            }
        }, 8000);

        return () => clearInterval(autoSlideRef.current!);
    }, [videos]);

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, [videos]);

    const prev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    }, [videos]);

    // Приостановка автоплея
    const pauseAuto = () => {
        isPaused.current = true;
    };

    const resumeAuto = () => {
        isPaused.current = false;
    };

    return (
        <>
            <div className={styles.sliderWrapper}>
                <button onClick={prev} className={styles.arrow}>‹</button>

                <div
                    className={styles.videoContainer}
                    onMouseEnter={pauseAuto}
                    onMouseLeave={resumeAuto}
                >
                    {videos.length > 0 ? (
                        <VideoCard video={videos[currentIndex]} />
                    ) : (
                        <div className={styles.placeholder}>Видео пока не загружены</div>
                    )}
                </div>

                <button onClick={next} className={styles.arrow}>›</button>
            </div>

            {/* Название видео */}
            {videos.length > 0 && (
                <div className={styles.caption}>
                    {videos[currentIndex].title}
                </div>
            )}

            {/* Индикаторы */}
            {videos.length > 1 && (
                <div
                    className={styles.dots}
                    onMouseEnter={pauseAuto}
                    onMouseLeave={resumeAuto}
                >
                    {videos.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => {
                                setCurrentIndex(index);
                                pauseAuto(); // останавливаем на клик
                            }}
                            aria-label={`Показать видео ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
