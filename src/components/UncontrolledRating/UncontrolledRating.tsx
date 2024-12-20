import React, {memo, useState} from 'react';
import {RatingValueType} from '../Rating/Rating';

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange?: (value: RatingValueType) => void
}

export function UncontrolledRatingComponent(props: RatingPropsType) {
    console.log('UncontrolledRating rendering')

    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

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
    onChange?: (value: RatingValueType) => void
}

function StarComponent(props: StarPropsType) {
    console.log('Star rendering')
    const StarStyle = {
        cursor: 'pointer',
    }

    return (
        <span onClick={() => props.onClick(props.value)} style={StarStyle}>{props.selected ?
            <b>star </b> : 'star'} </span>
    )
}

export const UncontrolledRating = memo(UncontrolledRatingComponent)
const Star = memo(StarComponent)