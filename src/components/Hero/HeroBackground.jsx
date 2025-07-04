import PropTypes from "prop-types";
import styles from "./Hero.module.css";

export default function HeroBackground({ imageSrc, children }) {
    return(
        <section className={styles.hero} style={{backgroundImage: `url(${imageSrc})`}}>
            {children}
        </section>
    )
}

HeroBackground.PropTypes = {
    imageSrc: PropTypes.string.isRequired,
    children: PropTypes.node
}