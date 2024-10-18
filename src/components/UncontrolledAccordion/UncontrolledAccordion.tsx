import React from 'react';

type AccordionPropsType = {
    title: string

}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')

    const [collapsed, setCollapsed] = React.useState(true);

    return (
        <div>
            <AccordionTitle collapsed={collapsed} title={props.title} onClick={setCollapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    const AccordionTitleStyle = {
        cursor: 'pointer',
    }
    return <h3 onClick={() => props.onClick(!props.collapsed)} style={AccordionTitleStyle}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
