import React, {memo, useMemo, useState} from 'react';
import {ItemsType, SuperSelect} from '../components/SuperSelect/SuperSelect';


export default {
    title: 'Use State demo'
};

const generateData = () => {
    console.log('generateData')
    // return 43347746
    return 1
}

export const Example1 = () => {
    console.log('Example1')

    const [count, setCount] = useState(generateData);
    const changer = (state: number) => state + 1
    return <>
        <div>{count}</div>
        <hr/>
        <button onClick={() => setCount(changer(count))}>+</button>

    </>
}