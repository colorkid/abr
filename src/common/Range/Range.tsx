import React, { FC } from 'react';
import Slider from 'rc-slider';
import RangeLabel from './Components/RangeLabel';
import styles from './Range.module.css';
import './Range.css';
import { NounsType } from '../../types';

type RangeType = {
    nouns: NounsType;
    value: number;
    onChange: (e: number) => void;
    label: string;
    min: number;
    max: number;
    step: number;
};

const Range: FC<RangeType> = ({ nouns, onChange, value, label, max, min, step }) => {
    return (
        <div className={styles.range}>
            <div>
                <div className={styles.range__top}>
                    <div>{label}</div>
                    <span id="output" className={styles.range__result}>
                        <RangeLabel value={value} nouns={nouns} />
                    </span>
                </div>
                <Slider min={min} max={max} step={step} onChange={onChange} value={value} />
            </div>
        </div>
    );
};

export default Range;
