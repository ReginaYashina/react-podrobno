import {StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating';

export default {
    title: 'Rating',
    component: Rating,
};

const onChangeHandler = action('onChange')

export const Rating0 = () => {
    return <Rating value={0} onClick={onChangeHandler}/>
}
export const Rating1 = () => {
    return <Rating value={1} onClick={onChangeHandler}/>
}
export const Rating2 = () => {
    return <Rating value={2} onClick={onChangeHandler}/>
}
export const Rating3 = () => {
    return <Rating value={3} onClick={onChangeHandler}/>
}
export const Rating4 = () => {
    return <Rating value={4} onClick={onChangeHandler}/>
}
export const Rating5 = () => {
    return <Rating value={5} onClick={onChangeHandler}/>
}
export const RatingChanging = () => {
    const [value, setValue] = useState<RatingValueType>(0);
    return <Rating value={value} onClick={setValue}/>
}