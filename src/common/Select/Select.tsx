import React, { FC } from 'react';
import Select from 'react-select';
import Skeleton from '../Skeleton';
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

    const defaultValue = getDataFromArray(list, 'value', currentCode);

    return (
        <div className={styles.selectWrapper}>
            {!!list.length && defaultValue ? (
                <div className={styles.select}>
                    <Select
                        // @ts-ignore
                        styles={customStyles}
                        className={styles.select__tag}
                        defaultValue={defaultValue}
                        onChange={onChangeHandler}
                        options={list}
                        isSearchable={false}
                    />
                </div>
            ) : (
                <Skeleton />
            )}
        </div>
    );
};

export default SelectEl;
