import React, { FC } from 'react';
import Slider from 'rc-slider';
import RangeLabel from './Components/RangeLabel';
import Skeleton from '../Skeleton';
import styles from './Range.module.css';
import './Range.css';
import { NounsType } from '../../types';

type RangeType = {
    values: number[];
    nouns: NounsType;
    currentStepIndex: number;
    handleInputChange: (e: number) => void;
    label: string;
};

const Range: FC<RangeType> = ({
    values = [],
    nouns,
    handleInputChange,
    currentStepIndex,
    label,
}) => {
    return (
        <div className={styles.range}>
            {values.length ? (
                <div>
                    <div className={styles.range__top}>
                        <div>{label}</div>
                        <span id="output" className={styles.range__result}>
                            <RangeLabel
                                values={values}
                                currentStepIndex={currentStepIndex}
                                nouns={nouns}
                            />
                        </span>
                    </div>
                    <Slider
                        min={0}
                        max={values.length - 1}
                        onChange={handleInputChange}
                        value={currentStepIndex}
                    />
                </div>
            ) : (
                <Skeleton />
            )}
        </div>
    );
};

export default Range;
