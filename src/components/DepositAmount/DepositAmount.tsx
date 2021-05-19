import React, { FC } from 'react';
import Range from '../../common/Range';

const NOUNS_RUB = ['рубль', 'рубля', 'рублей', 'рубля'];
const LABEL_TXT = 'Сумма вклада';

type DepositAmountType = {
    period: number[];
    dispatchCurrentTerm: (value: number) => void;
};

const DepositAmount: FC<DepositAmountType> = ({ period, dispatchCurrentTerm }) => {
    return (
        <Range values={period} nouns={NOUNS_RUB} onChange={dispatchCurrentTerm} label={LABEL_TXT} />
    );
};

export default DepositAmount;
