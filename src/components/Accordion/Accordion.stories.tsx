import {StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';
import React from 'react';

export default {
    title: 'Accordion',
    component: Accordion,
};

// export default meta;

//================= новый синтаксис (для примера) ==========================
type Story = StoryObj<typeof Accordion>;

export const NewAccordion: Story = {
    args: {
        title: 'New Accordion',
        collapsed: false,
        setCollapsed: (collapsed: boolean) => {
        }
    },
};
// ========================================================================
const onChangeHandler = action('onChange')
export const CollapsedAccordion = () => {
    return <Accordion
        title={'Collapsed Accordion'}
        collapsed={true}
        setCollapsed={onChangeHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion
        title={'Opened Accordion'}
        collapsed={false}
        setCollapsed={onChangeHandler}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = React.useState<boolean>(false)

    return <Accordion
        title={'Accordion Demo'}
        collapsed={collapsed}
        setCollapsed={() => setCollapsed(!collapsed)}/>
}