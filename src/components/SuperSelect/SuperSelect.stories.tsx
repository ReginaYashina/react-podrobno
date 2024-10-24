import {StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import React, {useState} from 'react';
import {SuperSelect} from './SuperSelect';

export default {
    title: 'SuperSelect',
    component: SuperSelect,
};

export const SelectWithValue = () => {
    const selectItems = [
        {
            title: 'Minsk',
            value: '1',
        },
        {
            title: 'Moskow',
            value: '2',
        },
        {
            title: 'Kiev',
            value: '3',
        },
    ]

    const [selectorValue, setSelectorValue] = useState('2')

    return <SuperSelect value={selectorValue} items={selectItems} setSelectorValue={setSelectorValue}/>
}

export const SelectWithoutValue = () => {
    const selectItems = [
        {
            title: 'Minsk',
            value: '1',
        },
        {
            title: 'Moskow',
            value: '2',
        },
        {
            title: 'Kiev',
            value: '3',
        },
    ]

    const [selectorValue, setSelectorValue] = useState('')

    return <SuperSelect value={selectorValue} items={selectItems} setSelectorValue={setSelectorValue}/>
}