import PropTypes from "prop-types";
import styles from "./Hero.module.css";
import MainImage from "../../assets/luke-miller-VsM6CDlQ8Fg-unsplash.jpg"

export default function BannerSection({ title, text }) {
    return (
        <section className={styles.bannerSection}>
            <div className={styles.bannerText}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{text}</p>
                <button>Shop Today</button>
            </div>
        </section>
    )
}

BannerSection.PropTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string
}
