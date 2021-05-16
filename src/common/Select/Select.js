import React from 'react';
import Skeleton from '../Skeleton';

const Select = ({ list, onChange }) => {
    const onChangeHandler = (e) => {
        onChange(e.target.value);
    };

    return (
        <>
            {!!list.length ? (
                <select onChange={onChangeHandler}>
                    {list.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.name}
                        </option>
                    ))}
                </select>
            ) : (
                <Skeleton />
            )}
        </>
    );
};

export default Select;
