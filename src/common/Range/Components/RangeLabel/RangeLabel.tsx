import { getNoun, numberWithSpace } from '../../../../helpers';
import React, { FC } from 'react';
import { NounsType } from '../../../../types';

type RangeLabelType = {
    values: number[];
    currentStepIndex: number;
    nouns: NounsType;
};

const RangeLabel: FC<RangeLabelType> = ({ values, currentStepIndex, nouns }) => {
    const createLabel = () => {
        const value = numberWithSpace(values[currentStepIndex]);

        if (currentStepIndex === values.length - 1) {
            return `больше ${value} ${nouns[3]}`;
        } else if (currentStepIndex === 0 && values.length > 2) {
            return `${value} ${getNoun(values[currentStepIndex], nouns)}`;
        } else {
            return `от ${value} до ${values[currentStepIndex + 1] - 1} ${getNoun(
                values[currentStepIndex + 1] - 1,
                nouns
            )}`;
        }
    };

    return <>{createLabel()}</>;
};

export default RangeLabel;
