import React, { FC } from 'react';
import icon from './assets/pdfIcon.svg';
import styles from './PdfButton.module.css';

type PdfButtonType = {
    downLoad: () => void;
};

const PdfButton: FC<PdfButtonType> = ({ downLoad }) => {
    return (
        <button onClick={downLoad} className={styles.button}>
            <img src={icon} alt="pdf icon" className={styles.icon} />
        </button>
    );
};

export default PdfButton;
