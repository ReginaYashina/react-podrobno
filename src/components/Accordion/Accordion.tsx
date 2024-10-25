import React, {memo} from 'react';
import {string} from 'prop-types';

type ItemsType = {
    title: string,
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: ItemsType[]
    onClick: (value: any) => void
}

function AccordionComponent(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')
    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.setCollapsed} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitleComponent(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    const onClickHandler = () => {
        props.onClick(!props.collapsed)
    }
    return <h3 onClick={onClickHandler}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (value: any) => void
}

function AccordionBodyComponent(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>
    )
}

export const Accordion = memo(AccordionComponent)
const AccordionTitle = memo(AccordionTitleComponent)
const AccordionBody = memo(AccordionBodyComponent)