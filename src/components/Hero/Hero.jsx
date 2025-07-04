import HeroImg from '../../assets/karsten-winegeart-LZRZJam4Avg-unsplash.jpg'
import BannerSection from './BannerSection'
import HeroBackground from './HeroBackground'
import styles from "./Hero.module.css"
import MainImage from "../../assets/christian-crocker-i3pqna-3yC4-unsplash.jpg"


export default function Hero() {
    return (
        <HeroBackground imageSrc={HeroImg}>
            <h1 className={styles.mainTitle}>Welcome to Wildex</h1>
            <BannerSection title="MyPage" text="Click below to see what we have"/>
            <div className={styles.mainImage}>
                <img src={MainImage} alt="Van with tent in a desert" />
            </div>
        </HeroBackground>
    )
}