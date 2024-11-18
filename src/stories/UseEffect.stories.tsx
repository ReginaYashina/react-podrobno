import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect demo'
};


export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);
    console.log('SimpleExample')

    useEffect(() => {
        // debugger
        console.log('useEffect every render')
        document.title = counter.toString()
    });

    useEffect(() => {
        // debugger
        console.log('useEffect only first render (componentDidMounth)')
        document.title = counter.toString()
    }, []);

    useEffect(() => {
        // debugger
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter]);

    return <>
        Hello, {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+counter
        </button>
        <button onClick={() => {
            setFake(fake + 1)
        }}>+fake
        </button>
        Fake: {fake}
    </>


}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);
    console.log('SetTimeoutExample')

    // useEffect(() => {
    //     // setTimeout(()=>{
    //     //     console.log('setTimeout')
    //     //     document.title = counter.toString()
    //     // },1000)
    //
    //     setInterval(()=>{
    //         console.log('setInterval')
    //         setCounter(counter + 1)
    //     },1000)
    //
    // }, [counter]); - так плохо работаетЖ щетчик ускоряется и со временем вообще непонятно что отображает

    // useEffect(() => {
    //     setInterval(()=>{
    //         console.log('setInterval')
    //         setCounter((state) => state + 1);
    //     },1000)
    //
    // }, []);


    return <>
        Counter: {counter}
        {/*<button onClick={() => { setCounter(counter + 1)}}>+counter</button>*/}
        {/*<button onClick={() => {setFake(fake + 1)}}>+fake</button>*/}
        {/*Fake: {fake}*/}
    </>


}

export const WatchExample = () => {
    const [time, setTime] = useState(new Date());
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000)

    }, []);

    return <>
        <div>
            <span> {hours}</span>
            <span> : </span>
            <span>  {minutes}</span>
            <span> : </span>
            <span>{seconds}</span>
        </div>

    </>


}