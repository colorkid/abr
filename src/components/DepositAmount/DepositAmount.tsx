import React, { FC } from 'react';
import Range from '../../common/Range';

const NOUNS_RUB = ['рубль', 'рубля', 'рублей', 'рубля'];
const LABEL_TXT = 'Сумма вклада';

type DepositAmountType = {
    dispatchCurrentTerm: (value: number) => void;
    step: number;
    currentAmount: number;
    min: number;
    max: number;
};

const DepositAmount: FC<DepositAmountType> = ({
    dispatchCurrentTerm,
    currentAmount,
    min,
    max,
    step
}) => {
    return (
        <Range
            min={min}
            max={max}
            step={step}
            value={currentAmount}
            nouns={NOUNS_RUB}
            onChange={dispatchCurrentTerm}
            label={LABEL_TXT}
        />
    );
};

export default DepositAmount;
