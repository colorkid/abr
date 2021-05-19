import React, { FC } from 'react';
import ResultItem from './Components/ResultItem';
import { getNoun } from '../../helpers';
import styles from './ResultData.module.css';
import Skeleton from '../../common/Skeleton';

const NOUNS_DAY = ['день', 'дня', 'дней'];

type ResultDataType = {
    rate: number;
    currentTerm: number;
    resultAmount: number;
    income: number;
};

const ResultData: FC<ResultDataType> = ({ rate, currentTerm, resultAmount, income }) => {
    return (
        <div className={styles.resultData}>
            <div className={styles.resultData__row}>

                    <ResultItem result={rate} label="Процентная ставка" type="%" />


                    <ResultItem
                        result={resultAmount}
                        label={`Сумма через ${currentTerm} ${getNoun(currentTerm, NOUNS_DAY)}`}
                        type="р."
                    />

                {!!income ? <ResultItem result={income} label="Доход" type="р." /> :  <Skeleton />}
            </div>
        </div>
    );
};

export default ResultData;
