import {useState} from 'react';

type OnOffPropsType = {};

export const OnOff = (props: OnOffPropsType) => {
    const [on, setOn] = useState(false)

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
        backgroundColor: on ? 'green' : 'transparent'
    }
    const offStyle = {
        cursor: 'pointer',
        width: '50px',
        height: '30px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        backgroundColor: on ? 'transparent' : 'red'
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'red'
    }

    const setOnHandler = () => {
        setOn(true)
    }
    const setOffHandler = () => {
        setOn(false)
    }

    return (
        <div style={OnOffStyle}>
            <div style={onStyle} onClick={setOnHandler}>on</div>
            <div style={offStyle} onClick={setOffHandler}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};