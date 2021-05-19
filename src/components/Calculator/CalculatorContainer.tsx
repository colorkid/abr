import React, { FC, useEffect, useMemo } from 'react';
import Calculator from './Calculator';
import { getDataFromArray } from '../../helpers';
import { fetchDeposits } from '../../redux/calculatorSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { IPeriod, ISumsRate } from '../../types';

/* eslint-disable react-hooks/exhaustive-deps */
const CalculatorContainer: FC = () => {
    const deposits = useAppSelector((state) => state.calculator.deposits);
    const currentCode = useAppSelector((state) => state.calculator.currentCode);
    const currentTerm = useAppSelector((state) => state.calculator.currentTerm);

    const dispatch = useAppDispatch();

    const currentParams: IPeriod[] = useMemo(
        () => getDataFromArray(deposits, 'code', currentCode, 'param'),
        [currentCode]
    );

    const currentSummsRate: ISumsRate[] = getDataFromArray(
        currentParams,
        'period_from',
        currentTerm,
        'summs_and_rate'
    );

    useEffect(() => {
        dispatch(fetchDeposits());
    }, []);

    return <Calculator currentParams={currentParams} currentSummsRate={currentSummsRate} />;
};

export default CalculatorContainer;
