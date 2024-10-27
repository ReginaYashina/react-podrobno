import {StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import React, {useState} from 'react';
import {ItemsType, SuperSelect} from './SuperSelect';

export default {
    title: 'SuperSelect',
    component: SuperSelect,
};

export const SelectWithValue = () => {
    const selectItems: ItemsType[] = [
        {
            title: 'Minsk',
            id: '1',
            population: 1938280,
            country: 'Belarus'
        },
        {
            title: 'Moskow',
            id: '2',
            population: 13149803,
            country: 'Russia'
        },
        {
            title: 'Kiev',
            id: '3',
            population: 2952301,
            country: 'Ukraine'
        },
        {
            title: 'Gomel',
            id: '4',
            population: 516976,
            country: 'Belarus'
        },
        {
            title: 'Vitebsk',
            id: '5',
            population: 366299,
            country: 'Belarus'
        },
        {
            title: 'Sankt-Peterburg',
            id: '6',
            population: 5598473,
            country: 'Russia'
        },
    ]

    const [selectorValue, setSelectorValue] = useState('2')

    return <SuperSelect value={selectorValue} items={selectItems} setSelectorValue={setSelectorValue}/>
}

export const SelectWithoutValue = () => {
    const selectItems: ItemsType[] = [
        {
            title: 'Minsk',
            id: '1',
            population: 1938280,
            country: 'Belarus'
        },
        {
            title: 'Moskow',
            id: '2',
            population: 13149803,
            country: 'Russia'
        },
        {
            title: 'Kiev',
            id: '3',
            population: 2952301,
            country: 'Ukraine'
        },
        {
            title: 'Gomel',
            id: '4',
            population: 516976,
            country: 'Belarus'
        },
        {
            title: 'Vitebsk',
            id: '5',
            population: 366299,
            country: 'Belarus'
        },
        {
            title: 'Sankt-Peterburg',
            id: '6',
            population: 5598473,
            country: 'Russia'
        },
    ]

    const [selectorValue, setSelectorValue] = useState('')

    return <SuperSelect value={selectorValue} items={selectItems} setSelectorValue={setSelectorValue}/>
}