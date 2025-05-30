import style from './FordProtectCard.module.css';

const FordProtectCard = ({ data }) => {
    if (!data) {
        return <div>No location data available</div>;
    }

   return (
        <div className={style.wraperCard}>
            <img 
              className={style.image} 
              src={data.image} 
              alt={data.title} 
              loading="lazy"
            />
            <div className={style.info}>
                <div className={style.wraperTitle}>
                    <h4 className="H4">{data.title}</h4>
                </div>
                <div className={style.wraperText}>
                    <p
                        className="body-1-16 text-color-neutral-600"
                        dangerouslySetInnerHTML={{ __html: data.text }}
                    ></p>
                </div>
            </div>
        </div>
    );
};

export default FordProtectCard;