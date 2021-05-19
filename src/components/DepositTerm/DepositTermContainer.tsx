import React, { FC, memo, useEffect } from 'react';
import DepositTerm from './DepositTerm';
import { setCurrentTerm } from '../../redux/calculatorSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const TERM_MAX = 365;
const TERM_STEP = 1;

/* eslint-disable react-hooks/exhaustive-deps */
const DepositTermContainer: FC = () => {
    const currentTerm = useAppSelector((state) => state.calculator.currentTerm);
    const min = useAppSelector((state) => state.calculator.minDay);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCurrentTerm(TERM_STEP));
    }, []);

    const dispatchCurrentTerm = (value: number) => {
        dispatch(setCurrentTerm(value));
    };

    return (
        <DepositTerm
            dispatchCurrentTerm={dispatchCurrentTerm}
            currentTerm={currentTerm}
            min={min}
            max={TERM_MAX}
            step={TERM_STEP}
        />
    );
};

export default memo(DepositTermContainer);
