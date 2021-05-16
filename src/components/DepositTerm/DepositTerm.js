import React from 'react';
import Range from '../../common/Range';

const NOUNS_DAY = ['день', 'дней', 'дней', 'дня'];

const DepositTerm = ({ period, dispatchCurrentTerm }) => {
    return <Range values={period} nouns={NOUNS_DAY} onChange={dispatchCurrentTerm} />;
};

export default DepositTerm;
