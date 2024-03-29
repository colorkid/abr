import React, { FC } from 'react';
import DepositSelect from '../DepositSelect';
import DepositTerm from '../DepositTerm';
import DepositAmount from '../DepositAmount';
import ResultData from '../ResultData';
import styles from './Calculator.module.css';
import PdfButton from '../PdfButton/PdfButtonContainer';

const Calculator: FC = () => {
    return (
        <div className={styles.calculator}>
            <header className={styles.calculator__header}>
                <h1>Депозитный калькулятор</h1>
                <PdfButton />
            </header>
            <DepositSelect />
            <DepositTerm />
            <DepositAmount />
            <ResultData />
        </div>
    );
};

export default Calculator;
