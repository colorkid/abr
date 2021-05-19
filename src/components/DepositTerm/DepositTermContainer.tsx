import React, { FC, memo, useEffect } from 'react';
import DepositTerm from './DepositTerm';
import { setCurrentTerm } from '../../redux/calculatorSlice';
import { IPeriod } from '../../types';
import { useAppDispatch } from '../../redux/store';

type DepositTermContainerType = {
    currentParams: IPeriod[];
};

/* eslint-disable react-hooks/exhaustive-deps */
const DepositTermContainer: FC<DepositTermContainerType> = ({ currentParams }) => {
    const period = currentParams?.map((item) => item.period_from);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (period?.length) {
            dispatch(setCurrentTerm(period[0]));
        }
    }, [period]);

    const dispatchCurrentTerm = (value: number) => {
        dispatch(setCurrentTerm(period[value]));
    };

    return <DepositTerm period={period} dispatchCurrentTerm={dispatchCurrentTerm} />;
};

export default memo(DepositTermContainer);
