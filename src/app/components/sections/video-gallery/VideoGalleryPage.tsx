'use client';

import styles from './style.module.css';
import VideoGallery from './components/VideoGallery';

export default function VideoGallerySection() {
    return (
        <div className={styles.container} id="video-gallery">
            <div className={styles.bg} />
            <div className={styles.content}>
                <VideoGallery />
            </div>
        </div>
    );
}
