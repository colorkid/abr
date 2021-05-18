import React from 'react';
import Select from '../../common/Select';
import styles from './DepositSelect.module.css';

const DepositSelect = ({ depositTypeList, dispatchCurrentDeposit, currentCode }) => {
    return (
        <div className={styles.depositSelect}>
            <label htmlFor="depositTypeList" className={styles.depositSelect__label}>
                Вклад
            </label>
            <Select
                currentCode={currentCode}
                id="depositTypeList"
                list={depositTypeList}
                onChange={dispatchCurrentDeposit}
            />
        </div>
    );
};

export default DepositSelect;
