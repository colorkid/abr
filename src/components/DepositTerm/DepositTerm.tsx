import React, { FC } from 'react';
import Range from '../../common/Range';

const NOUNS_DAY = ['день', 'дней', 'дней', 'дня'];
const LABEL_TXT = 'Срок вклада';

type DepositTermType = {
    dispatchCurrentTerm: (value: number) => void;
    step: number;
    currentTerm: number;
    min: number;
    max: number;
};

const DepositTerm: FC<DepositTermType> = ({ dispatchCurrentTerm, step, currentTerm, min, max }) => {
    return (
        <Range
            nouns={NOUNS_DAY}
            onChange={dispatchCurrentTerm}
            value={currentTerm}
            label={LABEL_TXT}
            step={step}
            min={min}
            max={max}
        />
    );
};

export default DepositTerm;
