import React, {useState} from 'react';


type RatingPropsType = {}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('UncontrolledRating rendering')

    const [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} value={1} onClick={setValue}/>
            <Star selected={value > 1} value={2} onClick={setValue}/>
            <Star selected={value > 2} value={3} onClick={setValue}/>
            <Star selected={value > 3} value={4} onClick={setValue}/>
            <Star selected={value > 4} value={5} onClick={setValue}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    const StarStyle = {
        cursor: 'pointer',
    }

    return (
        <span onClick={() => props.onClick(props.value)} style={StarStyle}>{props.selected ?
            <b>star </b> : 'star'} </span>
    )
}