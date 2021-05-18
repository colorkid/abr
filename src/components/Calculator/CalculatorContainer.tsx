import React, { FC, useEffect, useMemo } from 'react';
import Calculator from './Calculator';
import { getDataFromArray } from '../../helpers';
import { fetchDeposits } from '../../redux/calculatorSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const CalculatorContainer: FC = () => {
    const deposits = useAppSelector((state) => state.calculator.deposits);
    const currentCode = useAppSelector((state) => state.calculator.currentCode);
    const currentTerm = useAppSelector((state) => state.calculator.currentTerm);

    const currentParams = useMemo(
        () => getDataFromArray(deposits, 'code', currentCode, 'param'),
        [currentCode]
    );

    const currentSummsRate = getDataFromArray(
        currentParams,
        'period_from',
        currentTerm,
        'summs_and_rate'
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchDeposits());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <Calculator currentParams={currentParams} currentSummsRate={currentSummsRate} />;
};

export default CalculatorContainer;
