import React, { FC, useEffect } from 'react';
import DepositAmount from './DepositAmount';
import { setCurrentAmount, setCurrentRate } from '../../redux/calculatorSlice';
import { ISumsRate } from '../../types';
import {useAppDispatch} from "../../redux/store";

type DepositAmountContainerType = {
    currentSummsRate: ISumsRate[];
};

/* eslint-disable react-hooks/exhaustive-deps */
const DepositAmountContainer: FC<DepositAmountContainerType> = ({ currentSummsRate }) => {
    const summs = currentSummsRate?.map((item) => item.summ_from);
    const rates = currentSummsRate?.map((item) => item.rate);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (summs?.length) {
            dispatch(setCurrentRate(rates[0]));
            dispatch(setCurrentAmount(summs[0]));
        }
    }, [summs]);

    const dispatchCurrentTerm = (value: number) => {
        dispatch(setCurrentRate(rates[value]));
        dispatch(setCurrentAmount(summs[value]));
    };

    return <DepositAmount period={summs} dispatchCurrentTerm={dispatchCurrentTerm} />;
};

export default DepositAmountContainer;
