import React, { FC } from 'react';
import DepositSelect from '../DepositSelect';
import DepositTerm from '../DepositTerm';
import DepositAmount from '../DepositAmount';
import ResultData from '../ResultData';
import styles from './Calculator.module.css';
import PdfButton from '../PdfButton/PdfButtonContainer';
import { DataFromArrayType } from '../../types';

type CalculatorType = {
    currentParams: DataFromArrayType;
    currentSummsRate: DataFromArrayType;
};

const Calculator: FC<CalculatorType> = ({ currentParams, currentSummsRate }) => {
    return (
        <div className={styles.calculator}>
            <header className={styles.calculator__header}>
                <h1>Депозитный калькулятор</h1>
                <PdfButton />
            </header>
            <DepositSelect />
            <DepositTerm currentParams={currentParams} />
            <DepositAmount currentSummsRate={currentSummsRate} />
            <ResultData />
        </div>
    );
};

export default Calculator;
