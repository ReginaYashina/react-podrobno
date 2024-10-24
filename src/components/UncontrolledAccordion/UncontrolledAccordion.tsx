import React, {useReducer} from 'react';

type AccordionPropsType = {
    title: string
}
type ActionType = {
    type: string
}
const reducer = (state: boolean, action: ActionType) => {
    if (action.type === 'TOGGLE-COLLAPSED') {
        return !state
    } else return state

}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')

    // const [collapsed, setCollapsed] = React.useState(true);
    const [collapsed, dispatchCollapsed] = useReducer(reducer, true);

    return (
        <div>
            <AccordionTitle collapsed={collapsed} title={props.title}
                            onClick={() => dispatchCollapsed({type: 'TOGGLE-COLLAPSED'})}/>
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
