import React, { FC, memo, useEffect } from 'react';
import DepositSelect from './DepositSelect';
import { setCurrentCode } from '../../redux/calculatorSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

/* eslint-disable react-hooks/exhaustive-deps */
const DepositSelectContainer: FC = () => {
    const currentCode = useAppSelector((state) => state.calculator.currentCode);
    const depositSelectList = useAppSelector((state) => state.calculator.depositSelectList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (depositSelectList.length) {
            dispatch(setCurrentCode(depositSelectList[0].value));
        }
    }, [depositSelectList]);

    const dispatchCurrentDeposit = (value: string) => {
        dispatch(setCurrentCode(value));
    };

    return (
        <DepositSelect
            currentCode={currentCode}
            depositTypeList={depositSelectList}
            dispatchCurrentDeposit={dispatchCurrentDeposit}
        />
    );
};

export default memo(DepositSelectContainer);
