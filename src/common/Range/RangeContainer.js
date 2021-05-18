import React, { useEffect, useState } from 'react';
import Range from './Range';

const RangeContainer = ({ values = [], nouns, onChange, label }) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const handleInputChange = (e) => {
        setCurrentStepIndex(e);
        onChange(e);
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
            label={label}
        />
    );
};

export default RangeContainer;
