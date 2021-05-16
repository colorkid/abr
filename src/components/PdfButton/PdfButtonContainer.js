import React from 'react';
import PdfButton from './PdfButton';
import { usePdfResult } from '../../hocs/usePdfResult';

const PdfButtonContainer = () => {
    const downloadPdf = usePdfResult();

    const downLoad = () => {
        downloadPdf();
    };

    return <PdfButton downLoad={downLoad} />;
};

export default PdfButtonContainer;
