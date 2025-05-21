// card
import style from './FordProCard.module.css';

const FordProCard = ( { data}) => {

    if (!data) {
        return <div>No location data available</div>;
    }

    return (
        <div>
            <img className={style.image} src={data.image} alt={data.title} />

               <div>
                    <div className={style.wraperTitle}>
                        <h4 className="H4">{data.title}</h4>
                    </div>
                    <div className={style.wraperText}>
                        <p className="body-1-16 text-color-neutral-600" dangerouslySetInnerHTML={{ __html: data.text }}></p> {/* Changed item.text to data.text */}
                    </div>
                </div>
        </div>
    );
};

export default FordProCard;