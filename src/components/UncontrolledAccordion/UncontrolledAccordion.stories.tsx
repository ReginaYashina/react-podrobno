import {StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import React from 'react';
import {UncontrolledAccordion} from './UncontrolledAccordion';

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
};

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = React.useState<boolean>(false)

    return <UncontrolledAccordion
        title={'Uncontrolled Accordion Demo'}/>
}