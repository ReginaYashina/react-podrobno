import React from 'react';

type AccordionPropsType = {
    title: string

}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')

    const [collapsed, setCollapsed] = React.useState(true);
    const setCollapsedHandler = () => {
        setCollapsed(!collapsed);
    }
    return (
        <div>
            <AccordionTitle title={props.title}/> <button onClick={setCollapsedHandler}>Toggle</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
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
