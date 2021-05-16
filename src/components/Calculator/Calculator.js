import React from 'react';
import DepositSelect from '../DepositSelect';
import DepositTerm from '../DepositTerm';
import DepositAmount from '../DepositAmount';
import ResultData from '../ResultData';

const Calculator = ({ currentParams, currentSummsRate }) => {
    return (
        <div>
            <h1>Депозитный калькулятор</h1>
            <DepositSelect />
            <DepositTerm currentParams={currentParams} />
            <DepositAmount currentSummsRate={currentSummsRate} />
            <ResultData />
        </div>
    );
};

export default Calculator;
