import React, { memo, useEffect } from 'react';
import DepositSelect from './DepositSelect';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCode } from '../../redux/calculatorSlice';

const DepositSelectContainer = () => {
    const depositSelectList = useSelector((state) => state.calculator.depositSelectList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (depositSelectList.length) {
            dispatch(setCurrentCode(depositSelectList[0].value));
        }
    }, [depositSelectList]);

    const dispatchCurrentDeposit = (value) => {
        dispatch(setCurrentCode(value));
    };

    return (
        <DepositSelect
            depositTypeList={depositSelectList}
            dispatchCurrentDeposit={dispatchCurrentDeposit}
        />
    );
};

export default memo(DepositSelectContainer);
