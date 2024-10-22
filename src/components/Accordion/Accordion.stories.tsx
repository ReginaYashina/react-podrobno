import {StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';
import React from 'react';
import {string} from 'prop-types';

export default {
    title: 'Accordion',
    component: Accordion,
};

// export default meta;

//================= новый синтаксис (для примера) ==========================
type Story = StoryObj<typeof Accordion>;
const newAccordionItems = [{
    title: 'Item 1',
    value: 'Item 1',
    },
    {
        title: 'Item 2',
        value: 'Item 2',
    },
    {
        title: 'Item 3',
        value: 'Item 3',
    }]
export const NewAccordion: Story = {

    args: {
        title: 'New Accordion',
        collapsed: false,
        items: newAccordionItems,
        setCollapsed: (collapsed: boolean) => {
        }
    },
};
// ========================================================================
const onChangeHandler = action('onChange')
const onClickHandler = action('some element was clicked')
export const CollapsedAccordion = () => {
    const AccordionItems = [{
        title: 'Item 1',
        value: 'Item 1',
        },
        {
            title: 'Item 2',
            value: 'Item 2',
        },
        {
            title: 'Item 3',
            value: 'Item 3',
        }]
    return <Accordion
        title={'Collapsed Accordion'}
        collapsed={true}
        items={AccordionItems}
        setCollapsed={onChangeHandler}
        onClick={onClickHandler}/>
}

export const OpenedAccordion = () => {
    const AccordionItems = [{
        title: 'Item 1',
        value: 'Item 1',
        },
        {
            title: 'Item 2',
            value: 'Item 2',
        },
        {
            title: 'Item 3',
            value: 'Item 3',
        }]
    return <Accordion
        title={'Opened Accordion'}
        collapsed={false}
        items={AccordionItems}
        setCollapsed={onChangeHandler}
        onClick={onClickHandler}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = React.useState<boolean>(false)
    const AccordionItems = [{
        title: 'Item 1',
        value: 'Item 1',
        },
        {
            title: 'Item 2',
            value: 'Item 2',
        },
        {
            title: 'Item 3',
            value: 'Item 3',
        }]
    return <Accordion
        title={'Accordion Demo'}
        collapsed={collapsed}
        items={AccordionItems}
        setCollapsed={() => setCollapsed(!collapsed)}
        onClick={onClickHandler}/>
}