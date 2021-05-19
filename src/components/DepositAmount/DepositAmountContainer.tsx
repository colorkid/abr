import React, { FC, useEffect } from 'react';
import DepositAmount from './DepositAmount';
import { setCurrentAmount } from '../../redux/calculatorSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const AMOUNT_MAX = 100000000;
const AMOUNT_STEP = 1000;

/* eslint-disable react-hooks/exhaustive-deps */
const DepositAmountContainer: FC = () => {
    const currentAmount = useAppSelector((state) => state.calculator.currentAmount);
    const min = useAppSelector((state) => state.calculator.minSum);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!currentAmount) {
            dispatch(setCurrentAmount(min));
        }
    }, [min]);

    const dispatchCurrentTerm = (value: number) => {
        dispatch(setCurrentAmount(value));
    };

    return (
        <DepositAmount
            dispatchCurrentTerm={dispatchCurrentTerm}
            currentAmount={currentAmount}
            min={min}
            max={AMOUNT_MAX}
            step={AMOUNT_STEP}
        />
    );
};

export default DepositAmountContainer;
