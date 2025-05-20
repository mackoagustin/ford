import React from "react";
import style from './PostSaleCard.module.css';
import Button from "../Button/Button";

const PostSaleCard = ({data}) => {

     if (!location) {
    return <div>No location data available</div>;
  }
    return (
        <div className= {style.card}>
            <img className={style.image} src={data.image} alt={data.title}/>
            
            <div className={style.info}>
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


