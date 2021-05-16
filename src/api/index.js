export const getDeposits = () => fetch("../data.json")
    .then(response => response.json())
