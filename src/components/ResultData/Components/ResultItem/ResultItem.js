import React from 'react';
import Skeleton from '../../../../common/Skeleton';
import { numberWithSpace } from '../../../../helpers';

const ResultItem = ({ result, label, type }) => {
    return (
        <>
            {!!result ? (
                <div>
                    <div>{label}</div>
                    <div>{`${numberWithSpace(result)} ${type}`}</div>
                </div>
            ) : (
                <Skeleton />
            )}
        </>
    );
};

export default ResultItem;
