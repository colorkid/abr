export const getNoun = (number, one, two, five) => {
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

export const createIncomeResultAmount = (currentAmount, currentRate) => {
    const income = (currentAmount / 100) * currentRate;
    const resultAmount = currentAmount + income;

    return { income: Math.round(income), resultAmount: Math.round(resultAmount) };
};

export const numberWithSpace = (x) => {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const getDataFromArray = (arr, key, target, valueName) => {
    if (valueName) {
        return arr?.filter((item) => item[key] === target)[0]?.[valueName];
    }
    return arr?.filter((item) => item[key] === target)[0];
};
