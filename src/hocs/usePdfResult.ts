import { getDataFromArray, getNoun, numberWithSpace } from '../helpers';
import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts';
import { NounsType } from '../types';
import {useAppSelector} from "../redux/store";

const { vfs } = vfsFonts.pdfMake;
pdfMake.vfs = vfs;

const NOUNS_DAY: NounsType = ['день', 'дня', 'дней'];

export const usePdfResult = () => {
    const currentCode = useAppSelector((state) => state.calculator.currentCode);
    const currentTerm = useAppSelector((state) => state.calculator.currentTerm);
    const rate = useAppSelector((state) => state.calculator.rate);
    const currentAmount = useAppSelector((state) => state.calculator.currentAmount);
    const resultAmount = useAppSelector((state) => state.calculator.resultAmount);
    const income = useAppSelector((state) => state.calculator.income);
    const depositSelectList = useAppSelector((state) => state.calculator.depositSelectList);

    const nameDeposit = getDataFromArray(depositSelectList, 'value', currentCode, 'label');

    const fileBody = {
        content: [
            { text: `Вклад: ${nameDeposit}.`, style: 'row' },
            {
                text: `Срок вклада: ${currentTerm} ${getNoun(currentTerm, NOUNS_DAY)}.`,
                style: 'row',
            },
            { text: `Процентная ставка: ${rate} %.`, style: 'row' },
            { text: `Сумма вклада: ${numberWithSpace(currentAmount)} рублей.`, style: 'row' },
            {
                text: `Сумма через ${currentTerm} ${getNoun(
                    currentTerm,
                    NOUNS_DAY
                )}: ${numberWithSpace(resultAmount)} рублей.`,
                style: 'row',
            },
            { text: `Доход: ${numberWithSpace(income)} рублей.`, style: 'row' },
        ],

        styles: {
            row: {
                fontSize: 16,
                marginTop: 5,
            },
        },
    };

    return () => {
        pdfMake.createPdf(fileBody).download('deposit.pdf');
    };
};
