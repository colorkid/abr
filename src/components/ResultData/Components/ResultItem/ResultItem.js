import React from 'react';
import Skeleton from '../../../../common/Skeleton';
import { numberWithSpace } from '../../../../helpers';
import styles from './ResultItem.module.css';

const ResultItem = ({ result, label, type }) => {
    return (
        <>
            {!!result ? (
                <div className={styles.resultItem}>
                    <div className={styles.resultItem__label}>{label}</div>
                    <div className={styles.resultItem__value}>{`${numberWithSpace(result)} ${type}`}</div>
                </div>
            ) : (
                <Skeleton />
            )}
        </>
    );
};

export default ResultItem;
