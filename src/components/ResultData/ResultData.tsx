import React, { FC } from 'react';
import ResultItem from './Components/ResultItem';
import { getNoun } from '../../helpers';
import styles from './ResultData.module.css';
import Skeleton from '../../common/Skeleton';

const NOUNS_DAY = ['день', 'дня', 'дней'];

type ResultDataType = {
    currentRate: number;
    currentTerm: number;
    resultAmount: number;
    income: number;
};

const ResultData: FC<ResultDataType> = ({ currentRate, currentTerm, resultAmount, income }) => {
    const isSomeReady = currentRate || currentTerm || income;

    return (
        <div className={styles.resultData}>
            {isSomeReady ? (
                <div className={styles.resultData__row}>
                    <ResultItem result={currentRate} label="Процентная ставка" type="%" />
                    <ResultItem
                        result={resultAmount}
                        label={`Сумма через ${currentTerm} ${getNoun(currentTerm, NOUNS_DAY)}`}
                        type="р."
                    />
                    <ResultItem result={income} label="Доход" type="р." />
                </div>
            ) : (
                <Skeleton />
            )}
        </div>
    );
};

export default ResultData;
