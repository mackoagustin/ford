// card
import style from './FordProCard.module.css';
import useIsMobile from "../../hook/useIsMobile";

const FordProCard = ({ data }) => {
    const isMobile = useIsMobile();
    if (!data) {
        return <div>No location data available</div>;
    }

    if(isMobile) {
         return (
        <div>
            <img className={style.image} src={data.image} alt={data.title} />
               <div>
                    <div className={style.wraperTitle}>
                        <h4 className="H4">{data.title}</h4>
                    </div>
                    <div className={style.wraperText}>
                        <p className="body-1-16 text-color-neutral-600" dangerouslySetInnerHTML={{ __html: data.text }}></p>
                    </div>
                </div>
        </div>
    );
    }

   return (
        <div className={style.wraperCard}>
            <img className={style.image} src={data.image} alt={data.title} />
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

export default FordProCard;