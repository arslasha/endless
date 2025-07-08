'use client';

import styles from '../style.module.css';

export default function VideoCard({
                                      video,
                                      onPlay,
                                      onPause
                                  }: {
    video: any;
    onPlay: () => void;
    onPause: () => void;
}) {
    return (
        <div className={styles.card}>
            <iframe
                src={`${video.url}?autoplay=0`}
                width="100%"
                height="100%"
                allow="autoplay"
                allowFullScreen
                loading="lazy"
                className={styles.iframe}
                onLoad={() => {
                    const iframe = document.querySelector('iframe');
                    if (iframe) {
                        const win = iframe.contentWindow;
                        if (win) {
                            window.addEventListener('message', (e) => {
                                if (typeof e.data === 'string' && e.data.includes('play')) onPlay();
                                if (typeof e.data === 'string' && e.data.includes('pause')) onPause();
                            });
                        }
                    }
                }}
            />
            <div className={styles.caption}>{video.title}</div>
        </div>
    );
}
