import { DepositItemType, DepositListItemType, DepositsType } from '../types';

export const createDepositList = (data: DepositsType): DepositListItemType[] => {
    return data.map((item: DepositItemType) => ({
        value: item.code,
        label: item.name,
    }));
};