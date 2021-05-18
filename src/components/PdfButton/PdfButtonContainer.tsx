import React, { FC } from 'react';
import PdfButton from './PdfButton';
import { usePdfResult } from '../../hocs/usePdfResult';

const PdfButtonContainer: FC = () => {
    const downloadPdf = usePdfResult();

    const downLoad = () => {
        downloadPdf();
    };

    return <PdfButton downLoad={downLoad} />;
};

export default PdfButtonContainer;
