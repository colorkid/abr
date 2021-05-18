export const createDepositList = (data) => {
    return data.map((item) => ({
        value: item.code,
        label: item.name,
    }));
};