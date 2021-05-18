import React from 'react';
import Range from '../../common/Range';

const NOUNS_RUB = ['рубль', 'рубля', 'рублей', 'рубля'];
const LABEL_TXT = 'Сумма вклада';

const DepositAmount = ({ period, dispatchCurrentTerm }) => {
    return <Range values={period} nouns={NOUNS_RUB} onChange={dispatchCurrentTerm} label={LABEL_TXT} />;
};

export default DepositAmount;
