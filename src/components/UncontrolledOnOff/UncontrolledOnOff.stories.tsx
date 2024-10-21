import {action} from '@storybook/addon-actions';
import React from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const onChangeHandler = action('onChange')

export const UncontrolledOn = () => {
    return <UncontrolledOnOff defaultOn={true}/>
}
export const UncontrolledOff = () => {
    return <UncontrolledOnOff defaultOn={false}/>
}
export const UncontrolledOnOffDemo = () => {
    return <UncontrolledOnOff/>
}

