import { useSelector } from 'react-redux';
import { createIncomeResultAmount, getNoun } from '../helpers';
import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts';

const { vfs } = vfsFonts.pdfMake;
pdfMake.vfs = vfs;

const NOUNS_DAY = ['день', 'дня', 'дней'];

export const usePdfResult = () => {
    const currentCode = useSelector((state) => state.calculator.currentCode);
    const currentTerm = useSelector((state) => state.calculator.currentTerm);
    const currentRate = useSelector((state) => state.calculator.currentRate);
    const currentAmount = useSelector((state) => state.calculator.currentAmount);
    const depositSelectList = useSelector((state) => state.calculator.depositSelectList);

    const nameDeposit = depositSelectList.filter((item) => item.value === currentCode)[0]?.name;

    const resultSums = createIncomeResultAmount(currentAmount, currentRate);

    const fileBody = {
        content: [
            { text: `Вклад: ${nameDeposit}.`, style: 'row' },
            {
                text: `Срок вклада: ${currentTerm} ${getNoun(currentTerm, ...NOUNS_DAY)}.`,
                style: 'row',
            },
            { text: `Процентная ставка: ${currentRate} %.`, style: 'row' },
            { text: `Сумма вклада: ${currentAmount} рублей.`, style: 'row' },
            {
                text: `Сумма через ${currentTerm} ${getNoun(currentTerm, ...NOUNS_DAY)}: ${
                    resultSums.resultAmount
                } рублей.`,
                style: 'row',
            },
            { text: `Доход: ${resultSums.income} рублей.`, style: 'row' },
        ],

        styles: {
            header: {
                fontSize: 22,
                bold: true,
            },
        },
    };

    return () => {
        pdfMake.createPdf(fileBody).download('deposit.pdf');
    };
};
