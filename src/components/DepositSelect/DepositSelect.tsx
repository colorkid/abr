import React, { FC } from 'react';
import Select from '../../common/Select';
import styles from './DepositSelect.module.css';
import { DepositListItemType } from '../../types';

type DepositSelectType = {
    depositTypeList: DepositListItemType[];
    dispatchCurrentDeposit: (value: string) => void;
    currentCode: string;
};

const DepositSelect: FC<DepositSelectType> = ({
    depositTypeList,
    dispatchCurrentDeposit,
    currentCode,
}) => {
    return (
        <div className={styles.depositSelect}>
            <label className={styles.depositSelect__label}>Вклад</label>
            <Select
                currentCode={currentCode}
                list={depositTypeList}
                onChange={dispatchCurrentDeposit}
            />
        </div>
    );
};

export default DepositSelect;
