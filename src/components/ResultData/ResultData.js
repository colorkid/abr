import React from 'react';
import ResultItem from './Components/ResultItem';
import { getNoun } from '../../helpers';
import PdfButton from '../PdfButton';

const NOUNS_DAY = ['день', 'дня', 'дней'];

const ResultData = ({ currentRate, currentTerm, resultAmount, income }) => {
    return (
        <div>
            <div>
                <ResultItem result={currentRate} label="Процентная ставка" type="%" />
                <ResultItem
                    result={resultAmount}
                    label={`Сумма через ${currentTerm} ${getNoun(currentTerm, ...NOUNS_DAY)}`}
                    type="р."
                />
                <ResultItem result={income} label="Доход" type="р." />
            </div>
            <div>
                <PdfButton />
            </div>
        </div>
    );
};

export default ResultData;
