import { createSlice } from '@reduxjs/toolkit';
import { createDepositList } from './helpers';
import { CALCULATOR } from '../types';

export const calculatorSlice = createSlice({
    name: CALCULATOR,
    initialState: {
        deposits: [],
        depositSelectList: [],
        currentCode: null,
        currentTerm: null,
        currentAmount: null,
        currentRate: null,
    },
    reducers: {
        loadDeposits: (state, action) => {
            state.deposits = action.payload;
        },
        createDepositSelectList: (state, action) => {
            state.depositSelectList = createDepositList(action.payload);
        },
        setCurrentCode: (state, action) => {
            state.currentCode = action.payload;
        },
        setCurrentTerm: (state, action) => {
            state.currentTerm = action.payload;
        },
        setCurrentAmount: (state, action) => {
            state.currentAmount = action.payload;
        },
        setCurrentRate: (state, action) => {
            state.currentRate = action.payload;
        },
    },
});

export const {
    createDepositSelectList,
    loadDeposits,
    setCurrentCode,
    setCurrentTerm,
    setCurrentAmount,
    setCurrentRate,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
