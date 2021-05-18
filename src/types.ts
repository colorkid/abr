export type ISumsRate = {
    summ_from: number;
    rate: number;
};

export type IPeriod = {
    period_from: number;
    summs_and_rate: ISumsRate;
};

export type ParamsType = IPeriod[];

export type DepositItemType = {
    code: string;
    name: string;
    param: ParamsType;
};

export type DepositsType = DepositItemType[];

export type DepositListItemType = {
    value: string;
    label: string;
};

export type IncomeResultAmountType = {
    income: number;
    resultAmount: number;
};

export type DataFromArrayType = string | DepositListItemType | IPeriod | ISumsRate;

export type NounsType = string[];
