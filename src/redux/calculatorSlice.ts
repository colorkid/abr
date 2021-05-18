import { AnyAction, createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { createDepositList } from './helpers';
import { RootState } from './store';
import { getDeposits } from '../api';
import { DepositListItemType, DepositsType } from '../types';

interface initialStateType {
    deposits: DepositsType;
    depositSelectList: DepositListItemType[];
    currentCode: string | null;
    currentTerm: string | null;
    currentAmount: number | null;
    currentRate: number | null;
}

const initialState = {
    deposits: [],
    depositSelectList: [],
    currentCode: null,
    currentTerm: null,
    currentAmount: null,
    currentRate: null,
} as initialStateType;

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        loadDeposits: (state, action: PayloadAction<DepositsType>) => {
            state.deposits = action.payload;
        },
        createDepositSelectList: (state, action: PayloadAction<DepositsType>) => {
            state.depositSelectList = createDepositList(action.payload);
        },
        setCurrentCode: (state, action: PayloadAction<string>) => {
            state.currentCode = action.payload;
        },
        setCurrentTerm: (state, action: PayloadAction<string>) => {
            state.currentTerm = action.payload;
        },
        setCurrentAmount: (state, action: PayloadAction<number>) => {
            state.currentAmount = action.payload;
        },
        setCurrentRate: (state, action: PayloadAction<number>) => {
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

export const fetchDeposits =
    (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
        const response = await getDeposits();

        dispatch(loadDeposits(response.deposits));
        dispatch(createDepositSelectList(response.deposits));
    };

export default calculatorSlice.reducer;
