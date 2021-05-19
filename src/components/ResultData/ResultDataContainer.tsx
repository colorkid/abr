import React, { FC, memo, useMemo } from 'react';
import ResultData from './ResultData';
import { createIncomeResultAmount } from '../../helpers';
import { useAppSelector } from '../../redux/store';

const ResultDataContainer: FC = () => {
    const currentRate = useAppSelector((state) => state.calculator.currentRate);
    const currentAmount = useAppSelector((state) => state.calculator.currentAmount);
    const currentTerm = useAppSelector((state) => state.calculator.currentTerm);

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
