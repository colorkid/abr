import React from 'react';
import Select from '../../common/Select';

const DepositSelect = ({ depositTypeList, dispatchCurrentDeposit }) => {
    return (
        <div>
            <label htmlFor="depositTypeList">Вклад</label>
            <Select id="depositTypeList" list={depositTypeList} onChange={dispatchCurrentDeposit} />
        </div>
    );
};

export default DepositSelect;
