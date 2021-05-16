import React, { useEffect, useState } from 'react';
import Range from './Range';

const RangeContainer = ({ values = [], nouns, onChange }) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const handleInputChange = (e) => {
        setCurrentStepIndex(Number(e.currentTarget.value));
        onChange(Number(e.currentTarget.value));
    };

    useEffect(() => {
        setCurrentStepIndex(0);
    }, [values]);

    return (
        <Range
            values={values}
            nouns={nouns}
            handleInputChange={handleInputChange}
            currentStepIndex={currentStepIndex}
        />
    );
};

export default RangeContainer;
