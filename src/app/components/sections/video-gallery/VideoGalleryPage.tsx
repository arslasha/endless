// src/app/components/sections/video-gallery/page.tsx
'use client';

import styles from './style.module.css';
import VideoGallery from './components/VideoGallery';


export default function VideoGallerySection() {
    return (
        <div className={styles.container} id="video-gallery">
            <div className={styles.bg} />

            <div className={styles.content}>
                <h1 className={styles.title}>Наши проекты</h1>
                <VideoGallery />
            </div>
        </div>
    );
}
