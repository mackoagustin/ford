// src/components/BannerHomeSlider/BannerHomeSlider.jsx
import styles from './BannerHomeSlider.module.css';
import bannerHomeSlider from '../../data/bannerHomeSlider.json';

const BannerHomeSlider = () => {
    return (
        <div className={styles.wraper}>
            <img 
                src={bannerHomeSlider.bannerHomeSlider[0].image} 
                className={styles.image}
                alt="Banner Home Slider"
            />
        </div>
    );
};

export default BannerHomeSlider;