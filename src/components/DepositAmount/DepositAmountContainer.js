import React, { useEffect } from 'react';
import DepositAmount from './DepositAmount';
import { useDispatch } from 'react-redux';
import { setCurrentAmount, setCurrentRate } from '../../redux/calculatorSlice';

const DepositAmountContainer = ({ currentSummsRate }) => {
    const summs = currentSummsRate?.map((item) => item.summ_from);
    const rates = currentSummsRate?.map((item) => item.rate);
    const dispatch = useDispatch();

    useEffect(() => {
        if (summs?.length) {
            dispatch(setCurrentRate(rates[0]));
            dispatch(setCurrentAmount(summs[0]));
        }
    }, [summs]);

    const dispatchCurrentTerm = (value) => {
        dispatch(setCurrentRate(rates[value]));
        dispatch(setCurrentAmount(summs[value]));
    };

    return <DepositAmount period={summs} dispatchCurrentTerm={dispatchCurrentTerm} />;
};

export default DepositAmountContainer;
