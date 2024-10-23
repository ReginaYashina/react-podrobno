import {StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import React, {useState} from 'react';
import {Select} from './Select';

export default {
    title: 'Select',
    component: Select,
};

export const SelectDemo = () => {
    const selectItems = [
        {
            title: 'Item 1',
            value: '1',
        },
        {
            title: 'Item 2',
            value: '2',
        },
        {
            title: 'Item 3',
            value: '3',
        },
    ]

    const [selectorValue, setSelectorValue] = useState('Item 1')

    return <Select value={selectorValue} items={selectItems} setSelectorValue={setSelectorValue}/>
}