import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';

function App() {
    console.log('App rendering')
    return (
        <div className="App">
            {/*<AppTitle title={'This is APP component'}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<UncontrolledAccordion title={'This is AccordionTitle-1'} collapsed = {true}/>*/}
            {/*<UncontrolledAccordion title={'This is AccordionTitle-2'} collapsed = {false}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            <UncontrolledAccordion title={'UncontrolledAccordion'}/>
        </div>
    );
}

type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    console.log('AppTitle rendering')
    return (
        <h2>{props.title}</h2>
    )
}


export default App;
