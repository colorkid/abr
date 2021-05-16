import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calculator from './Calculator';
import { fetchDeposits } from '../../redux/thunks';

const CalculatorContainer = () => {
    const deposits = useSelector((state) => state.calculator.deposits);
    const currentCode = useSelector((state) => state.calculator.currentCode);
    const currentTerm = useSelector((state) => state.calculator.currentTerm);

    const currentParams = useMemo(
        () => deposits.filter((item) => item.code === currentCode)[0]?.param,
        [currentCode]
    );

    const currentSummsRate = currentParams?.filter((item) => item.period_from === currentTerm)[0]
        ?.summs_and_rate;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDeposits());
    }, []);

    return <Calculator currentParams={currentParams} currentSummsRate={currentSummsRate} />;
};

export default CalculatorContainer;
