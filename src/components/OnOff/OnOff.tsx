import {memo, useState} from 'react';

type OnOffPropsType = {
    on: boolean
    setOn: (value: boolean) => void
};

export const OnOffComponent = (props: OnOffPropsType) => {

    const OnOffStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '3px',
        margin: '5px 0',
    }
    const onStyle = {
        cursor: 'pointer',
        width: '50px',
        height: '30px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'transparent'
    }
    const offStyle = {
        cursor: 'pointer',
        width: '50px',
        height: '30px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        backgroundColor: props.on ? 'transparent' : 'red'
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'red'
    }

    const setOnHandler = () => {
        props.setOn(true)
    }
    const setOffHandler = () => {
        props.setOn(false)
    }

    return (
        <div style={OnOffStyle}>
            <div style={onStyle} onClick={setOnHandler}>on</div>
            <div style={offStyle} onClick={setOffHandler}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
export const OnOff  = memo(OnOffComponent)