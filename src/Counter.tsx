import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button/Button';
import {Result} from './components/Result/Result';

type TypePropsType = {
    maxCount: number;
    resetValue: number;
    stepValue: number
}

export const Counter = ({maxCount, resetValue,stepValue}: TypePropsType) => {
    const [count, setCount] = useState(resetValue);
    const handleIncrement = () => {
        if (count !== maxCount) {
            setCount(count + stepValue)
        }
        // return hello;
    };
    const doReset = () => {
        setCount(resetValue)
    };

    const islimitedCount = count === maxCount;

    const isResetValue = count === resetValue;

    return (
            <div className='main__content'>
                <Result count={count} limited={islimitedCount}/>
                <div className='main__content--buttons'>
                    <Button text="inc" inActive={islimitedCount} handleClick={handleIncrement}/>
                    <Button text="reset" inActive={isResetValue} handleClick={doReset}/>
                </div>
            </div>
    );
}