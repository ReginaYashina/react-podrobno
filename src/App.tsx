import React from 'react';
import './App.css';

function App() {
    console.log('App rendering')
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendering')
    return (
        <h2>This is APP component</h2>
    )
}

function Rating() {
    console.log('Rating rendering')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>


    )
}

function Accordion() {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    console.log('AccordionTitle rendering')
    return <h3>Меню</h3>
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

function Star() {
    console.log('Star rendering')
    return (
        <div>star</div>
    )
}

export default App;
