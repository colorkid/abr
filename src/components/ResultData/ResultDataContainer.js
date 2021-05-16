import React, { memo, useMemo } from 'react';
import ResultData from './ResultData';
import { useSelector } from 'react-redux';
import { createIncomeResultAmount } from '../../helpers';

const ResultDataContainer = () => {
    const currentRate = useSelector((state) => state.calculator.currentRate);
    const currentAmount = useSelector((state) => state.calculator.currentAmount);
    const currentTerm = useSelector((state) => state.calculator.currentTerm);

    const resultSums = useMemo(() => {
        return createIncomeResultAmount(currentAmount, currentRate);
    }, [currentRate, currentAmount]);

    return (
        <>
            <ResultData
                currentRate={currentRate}
                income={resultSums.income}
                resultAmount={resultSums.resultAmount}
                currentTerm={currentTerm}
            />
        </>
    );
};

export default memo(ResultDataContainer);
