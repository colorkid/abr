import React, { FC } from 'react';
import Select from 'react-select';
import styles from './Select.module.css';
import { customStyles } from './customStyle';
import { getDataFromArray } from '../../helpers';
import { DepositListItemType } from '../../types';

type SelectElType = {
    list: DepositListItemType[];
    onChange: (value: string) => void;
    currentCode: string;
};

const SelectEl: FC<SelectElType> = ({ list, onChange, currentCode }) => {
    const onChangeHandler = (e: DepositListItemType) => {
        onChange(e.value);
    };

    const value = getDataFromArray(list, 'value', currentCode);

    return (
        <div className={styles.selectWrapper}>
            <div className={styles.select}>
                <Select
                    // @ts-ignore
                    styles={customStyles}
                    className={styles.select__tag}
                    value={value}
                    onChange={onChangeHandler}
                    options={list}
                    isSearchable={false}
                />
            </div>
        </div>
    );
};

export default SelectEl;
