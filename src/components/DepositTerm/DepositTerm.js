import React from 'react';
import Range from '../../common/Range';

const NOUNS_DAY = ['день', 'дней', 'дней', 'дня'];
const LABEL_TXT = 'Срок вклада';

const DepositTerm = ({ period, dispatchCurrentTerm }) => {
    return (
        <Range values={period} nouns={NOUNS_DAY} onChange={dispatchCurrentTerm} label={LABEL_TXT} />
    );
};

export default DepositTerm;
