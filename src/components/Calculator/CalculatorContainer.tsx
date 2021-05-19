import React, { FC, useEffect } from 'react';
import Calculator from './Calculator';
import {
    fetchDeposits,
    setIncome,
    setMinDay,
    setMinSum,
    setRate,
    setResultAmount,
} from '../../redux/calculatorSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { createData } from '../../helpers';

/* eslint-disable react-hooks/exhaustive-deps */
const CalculatorContainer: FC = () => {
    const deposits = useAppSelector((state) => state.calculator.deposits);
    const currentCode = useAppSelector((state) => state.calculator.currentCode);
    const currentTerm = useAppSelector((state) => state.calculator.currentTerm);
    const currentAmount = useAppSelector((state) => state.calculator.currentAmount);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchDeposits());
    }, []);

    const results = createData(deposits, currentCode, currentTerm, currentAmount);

    dispatch(setMinDay(results.minDay));
    dispatch(setMinSum(results.minSum));
    dispatch(setRate(results.rate));
    dispatch(setIncome(results.resultSums.income));
    dispatch(setResultAmount(results.resultSums.resultAmount));

    return <Calculator />;
};

export default CalculatorContainer;
