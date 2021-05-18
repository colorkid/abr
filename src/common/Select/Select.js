import React from 'react';
import Select from 'react-select';
import Skeleton from '../Skeleton';
import styles from './Select.module.css';
import { customStyles } from './customStyle';
import { getDataFromArray } from '../../helpers';

const SelectEl = ({ list, onChange, currentCode }) => {
    const onChangeHandler = (e) => {
        onChange(e.value);
    };

    const defaultValue = getDataFromArray(list, 'value', currentCode);

    return (
        <div className={styles.selectWrapper}>
            {!!list.length && defaultValue ? (
                <div className={styles.select}>
                    <Select
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
