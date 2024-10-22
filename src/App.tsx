import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from './components/OnOff/OnOff';

function App() {
    console.log('App rendering')
    const [value, setValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = React.useState(true);
    const [on, setOn] = useState(false)
    return (
        <div className="App">
            {/*<AppTitle title={'This is APP component'}/>*/}
            {/*<Rating value={value} onClick={setValue}/>*/}
            {/*<Accordion title={'This is AccordionTitle-1'} collapsed = {collapsed} setCollapsed={setCollapsed}/>*/}
            {/*<OnOff on = {on} setOn={setOn}/>*/}
            {/*<UncontrolledAccordion title={'UncontrolledAccordion'}/>*/}
            <UncontrolledRating />
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
