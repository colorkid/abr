import { DataFromArrayType, IncomeResultAmountType } from './types';

export const getNoun = (number: number, one: string, two: string, five: string): string => {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }

    return five;
};

type testt = {
    currentAmount: null as number | null;
    currentRate: number;
};

export const createIncomeResultAmount = (
    currentAmount: number,
    currentRate: number
): IncomeResultAmountType => {
    const income = (currentAmount / 100) * currentRate;
    const resultAmount = currentAmount + income;

    return { income: Math.round(income), resultAmount: Math.round(resultAmount) };
};

export const numberWithSpace = (x: number): string => {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const getDataFromArray = (
    arr: any,
    key: string,
    target: string | null,
    valueName: string
): DataFromArrayType => {
    if (valueName) {
        return arr?.filter((item: any) => item[key] === target)[0]?.[valueName];
    }
    return arr?.filter((item: any) => item[key] === target)[0];
};
