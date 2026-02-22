// card
import style from './VehicleBenefitCard.module.css';
// import useIsMobile from "../../hook/useIsMobile";

const VehicleBenefitCard = ({ data }) => {
    // const isMobile = useIsMobile();
    if (!data) {
        return <div>No location data available</div>;
    }

    // Función para detectar si el texto contiene HTML
    const containsHTML = (text) => {
        return /<[^>]*>/.test(text);
    };

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
                    {containsHTML(data.text) ? (
                        <p
                            className="body-1-16 text-color-neutral-600"
                            dangerouslySetInnerHTML={{ __html: data.text }}
                        />
                    ) : (
                        <p className="body-1-16 text-color-neutral-600">
                            {data.text}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VehicleBenefitCard;