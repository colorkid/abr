import React from 'react';
import ResultItem from './Components/ResultItem';
import { getNoun } from '../../helpers';
import styles from './ResultData.module.css';

const NOUNS_DAY = ['день', 'дня', 'дней'];

const ResultData = ({ currentRate, currentTerm, resultAmount, income }) => {
    return (
        <div className={styles.resultData}>
            <div className={styles.resultData__row}>
                <ResultItem result={currentRate} label="Процентная ставка" type="%" />
                <ResultItem
                    result={resultAmount}
                    label={`Сумма через ${currentTerm} ${getNoun(currentTerm, ...NOUNS_DAY)}`}
                    type="р."
                />
                <ResultItem result={income} label="Доход" type="р." />
            </div>
        </div>
    );
};

export default ResultData;
