import React, { FC, useEffect, useState } from 'react';
import Range from './Range';
import { NounsType } from '../../types';

type RangeContainerType = {
    values: number[];
    nouns: NounsType;
    onChange: (value: number) => void;
    label: string;
};

const RangeContainer: FC<RangeContainerType> = ({ values = [], nouns, onChange, label }) => {
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

    const handleInputChange = (e: number) => {
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
