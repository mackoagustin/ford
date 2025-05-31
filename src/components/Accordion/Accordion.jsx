import React, { useRef, useState } from 'react';
import styles from './Accordion.module.css';

const Accordion = (props) => {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState('0px');

    const contentRef = useRef(null); 

    function toggleAccordion() {
        const newOpen = !open;
        setOpen(newOpen);
        setHeight(newOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }

    return (
        <div className={
            props.variant === 'child' ? styles.wraperAccordionChild : styles.wraperAccordion
        }>
            <div className={styles.accordion} onClick={toggleAccordion}>
                <div className={styles.wraperQuestion}>
                <p className='H3 text-color-secondary'>{props.question}</p>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth={2.4}
                    stroke="currentColor"
                    fill="none"
                    className={`${styles.accordionIcon} ${open ? styles.open : ''}`}

                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <div
                className={styles.accordionContent}
                style={{ maxHeight: height }}
                ref={contentRef} 
            >
                <p className='subtitle-20 text-color-dark'>{props.answer}</p>
            </div>
        </div>
    );
};

export default Accordion;
