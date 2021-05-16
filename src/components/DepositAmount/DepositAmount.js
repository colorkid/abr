import React from 'react';
import Range from '../../common/Range';

const NOUNS_RUB = ['рубль', 'рубля', 'рублей', 'рубля'];

const DepositAmount = ({ period, dispatchCurrentTerm }) => {
    return <Range values={period} nouns={NOUNS_RUB} onChange={dispatchCurrentTerm} />;
};

export default DepositAmount;
