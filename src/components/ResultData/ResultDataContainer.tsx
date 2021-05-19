import React, { FC, memo } from 'react';
import ResultData from './ResultData';
import { useAppSelector } from '../../redux/store';

const ResultDataContainer: FC = () => {
    const currentTerm = useAppSelector((state) => state.calculator.currentTerm);
    const rate = useAppSelector((state) => state.calculator.rate);
    const income = useAppSelector((state) => state.calculator.income);
    const resultAmount = useAppSelector((state) => state.calculator.resultAmount);

    return (
        <>
            <ResultData
                rate={rate}
                income={income}
                resultAmount={resultAmount}
                currentTerm={currentTerm}
            />
        </>
    );
};

export default memo(ResultDataContainer);
