import { DepositsType, IncomeResultAmountType, NounsType } from './types';

export const getNoun = (number: number, nouns: NounsType): string => {
    const [one, two, five] = nouns;

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

export const createIncomeResultAmount = (
    currentAmount: number,
    currentRate: number,
    currentTerm: number
): IncomeResultAmountType => {
    const income = (currentAmount / 100) * currentRate * currentTerm;
    const resultAmount = currentAmount + income;

    return { income: Math.round(income), resultAmount: Math.round(resultAmount) };
};
export const numberWithSpace = (x: number): string => {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const getDataFromArray = (
    arr: any,
    key: string,
    target: string | number,
    valueName?: string
) => {
    if (valueName) {
        return arr?.filter((item: any) => item[key] === target)[0]?.[valueName];
    }
    return arr?.filter((item: any) => item[key] === target)[0];
};

export const createData = (
    deposits: DepositsType,
    currentCode: string,
    currentTerm: number,
    currentAmount: number
) => {
    const paramsByCode: any = getDataFromArray(deposits, 'code', currentCode, 'param');

    const paramsByPeriod = paramsByCode
        ?.filter((item: any) => item.period_from <= currentTerm)
        .slice(-1)[0]?.summs_and_rate;

    const rate = paramsByPeriod
        ?.filter((item: any) => item.summ_from <= currentAmount)
        .slice(-1)[0]?.rate;

    const resultSums = createIncomeResultAmount(currentAmount, rate, currentTerm);

    return {
        minDay: paramsByCode?.[0].period_from,
        minSum: paramsByPeriod?.[0].summ_from,
        resultSums: resultSums,
        rate: rate,
    };
};
