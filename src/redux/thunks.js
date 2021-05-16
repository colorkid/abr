import { getDeposits } from '../api';
import { createDepositSelectList, loadDeposits } from './calculatorSlice';

export const fetchDeposits = () => async (dispatch) => {
    const response = await getDeposits();

    dispatch(loadDeposits(response.deposits));
    dispatch(createDepositSelectList(response.deposits));
};
