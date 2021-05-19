import { getNoun, numberWithSpace } from '../../../../helpers';
import React, { FC } from 'react';
import { NounsType } from '../../../../types';
import Skeleton from '../../../Skeleton';
import styles from './RangeLabel.module.css';

type RangeLabelType = {
    value: number;
    nouns: NounsType;
};

const RangeLabel: FC<RangeLabelType> = ({ value, nouns }) => {
    const createLabel = () => {
        const valueWithSpace = numberWithSpace(value);
        return `${valueWithSpace} ${getNoun(value, nouns)}`;
    };

    return <div className={styles.rangeLabel}>{!!value ? createLabel() : <Skeleton />}</div>;
};

export default RangeLabel;
