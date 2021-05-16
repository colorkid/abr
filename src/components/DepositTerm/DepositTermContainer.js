import React, { memo, useEffect } from 'react';
import DepositTerm from './DepositTerm';
import { setCurrentTerm } from '../../redux/calculatorSlice';
import { useDispatch } from 'react-redux';

const DepositTermContainer = ({ currentParams }) => {
    const period = currentParams?.map((item) => item.period_from);
    const dispatch = useDispatch();

    useEffect(() => {
        if (period?.length) {
            dispatch(setCurrentTerm(period[0]));
        }
    }, [period]);

    const dispatchCurrentTerm = (value) => {
        dispatch(setCurrentTerm(period[value]))
    };

    return <DepositTerm period={period} dispatchCurrentTerm={dispatchCurrentTerm} />;
};

export default memo(DepositTermContainer);
