import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input'
};

export const UncontrolledInput = () => {
    return <input/>
}
export const TrackValueOfUncontrolledInput = () => {
    const [trackValue, setTrackValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTrackValue(e.currentTarget.value)
    }
    return (
        <><input onChange={onChangeHandler}/> - {trackValue}</>
    )
}

export const TrackValueOfUncontrolledInputRef = () => {
    const [trackValue, setTrackValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setTrackValue(el.value)
    }
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            - {trackValue}</>
    )

}

export const ControlledInputWithFixedValue = () => {
    return <input value={'Controlled Input With Fixed Value'}/>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const setParentValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={setParentValueHandler}/>
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const setParentValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={'checkbox'} checked={parentValue} onChange={setParentValueHandler}/>


}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState('1');
    const setParentValueHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={setParentValueHandler}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moskow</option>
            <option value={'3'}>Kiew</option>
        </select>
    )
}

