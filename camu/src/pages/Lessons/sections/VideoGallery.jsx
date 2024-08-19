import styles from './VideoGallery.module.css'

export default function VideoGallery() {
    return (
        <div className={styles.container}>
            <section className={styles.latestVideosContainer}>
                <h4>Latest</h4>
                <div className={styles.latestVideoContainer}>
                    <div className={styles.videoPreview}>
                        <img src='src/assets/Lessons/videoGallery/large_preview.png' alt='preview' />
                    </div>
                    <div className={styles.intro}>
                        <div className={styles.description}>
                            <h3>Gain technical skills through learning stuff</h3>
                        </div>
                        <div className={styles.tagsContainer}>
                            <div className={styles.tag}>Render</div>
                            <div className={styles.tag}>Render</div>
                            <div className={styles.tag}>Render</div>
                        </div>
                        <div className={styles.date}>
                            <p>June 7, 2024</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
