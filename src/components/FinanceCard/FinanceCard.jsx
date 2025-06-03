import styles from "./FinanceCard.module.css";

const FinanceCard = ({ data }) => {

    if(!data) {
        return <div>No data</div>
    }

    return (
        <div className={styles.wraperCard}>
            <img 
                src={data.image} 
                alt={data.vehicle || data.title}
                className={styles.image}
                loading="lazy" />
            <div className={styles.info}>
                <h4 className="H3">
                    {data.vehicle}
                </h4>
                <p className="subtitle-16 text-color-neutral-900">{data.title}</p>
                
                <ul>
                    {data.ways.map((item, index) => (
                        <li key={index} className={`body-1-16 text-color-neutral-600 ${styles.bullets}`}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FinanceCard;