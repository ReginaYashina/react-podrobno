import {StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import React, {useState} from 'react';
import {OnOff} from './OnOff';

export default {
    title: 'OnOff',
    component: OnOff,
};

const onChangeHandler = action('onChange')

export const OnOffOn = () => {
    return <OnOff on={true} setOn={onChangeHandler}/>
}
export const OnOffOff = () => {
    return <OnOff on={false} setOn={onChangeHandler}/>
}
export const OnOffSwitch = () => {
    const [onSwitch, setOnSwitch] = useState(false);

    return <OnOff on={onSwitch} setOn={setOnSwitch}/>
}
