import { getNoun, numberWithSpace } from '../../../../helpers';
import React from 'react';

const RangeLabel = ({ values, currentStepIndex, nouns }) => {
    const Label = () => {
        const value = numberWithSpace(values[currentStepIndex]);

        if (currentStepIndex === values.length - 1) {
            return `больше ${value} ${nouns[3]}`;
        } else if (currentStepIndex === 0 && values.length > 2) {
            return `${value} ${getNoun(value, ...nouns)}`;
        } else {
            return `от ${value} до ${values[currentStepIndex + 1] - 1} ${getNoun(
                values[currentStepIndex + 1] - 1,
                ...nouns
            )}`;
        }
    };

    return <Label />;
};

export default RangeLabel;
