import React from 'react';
import RangeLabel from './Components/RangeLabel';
import Skeleton from '../Skeleton';

const Range = ({ values = [], nouns, handleInputChange, currentStepIndex }) => {
    return (
        <div>
            {values.length ? (
                <>
                    <input
                        onChange={handleInputChange}
                        type="range"
                        min="0"
                        value={currentStepIndex}
                        max={values.length - 1}
                        step="1"
                        list="tickmarks"
                    />
                    {
                        <datalist id="tickmarks">
                            {values.map((item) => (
                                <option key={item} value={item} />
                            ))}
                        </datalist>
                    }
                    <span id="output">
                        <RangeLabel
                            values={values}
                            currentStepIndex={currentStepIndex}
                            nouns={nouns}
                        />
                    </span>
                </>
            ) : (
                <Skeleton />
            )}
        </div>
    );
};

export default Range;
