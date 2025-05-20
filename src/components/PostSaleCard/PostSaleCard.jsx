import React from "react";
import style from './PostSaleCard.module.css';
import Button from "../Button/Button";
import classNames from "classnames";

const PostSaleCard = ({data, groupIndex}) => {

    if (!data) {
        return <div>No location data available</div>;
    }

    const cardClass = classNames(style.card, {
        [style.cardGroup1]: groupIndex === 0,
        [style.cardGroup2]: groupIndex === 1,
        [style.cardGroup3]: groupIndex === 2,
    });

  const infoClass = classNames(style.info, {
        [style.infoGroup1]: groupIndex === 0,
        [style.infoGroup2]: groupIndex === 1,
        [style.infoGroup3]: groupIndex === 2,
    });
    
    return (
        <div className= {cardClass}>
            <img className={style.image} src={data.image} alt={data.title}/>
            
            <div className={infoClass}>
                <div className={style.wraperTitle}>
                    <h4 className="H4">{data.title}</h4>
                </div>
                <div className={style.wraperText}>
                    <p className="body-1-16 text-color-neutral-600">{data.text}</p>
                </div>
            </div>
            <div className={style.buttonWrapper}>
                <Button
                as="a"
                href={data.ctaLinkWs}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                >
                {data.ctaText}

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth={2.4}
                    stroke="currentColor"
                    fill="none"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5L15.75 12 8.25 19.5"
                    />
                </svg>     
                </Button>
            </div>
        
        </div>
    )
}
export default PostSaleCard


