import React from 'react';
import icon from './assets/pdfIcon.svg';
import styles from './PdfButton.module.css';

const PdfButton = ({ downLoad }) => {
    return (
        <button onClick={downLoad} className={styles.button}>
            <img src={icon} alt="pdf icon" className={styles.icon} />
        </button>
    );
};

export default PdfButton;
