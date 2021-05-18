import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calculator from './Calculator';
import { fetchDeposits } from '../../redux/thunks';
import { getDataFromArray } from '../../helpers';

const CalculatorContainer = () => {
    const deposits = useSelector((state) => state.calculator.deposits);
    const currentCode = useSelector((state) => state.calculator.currentCode);
    const currentTerm = useSelector((state) => state.calculator.currentTerm);

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

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDeposits());
    }, []);

    return <Calculator currentParams={currentParams} currentSummsRate={currentSummsRate} />;
};

export default CalculatorContainer;
