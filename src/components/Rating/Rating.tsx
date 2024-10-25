import React, {memo} from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function RatingComponent(props: RatingPropsType) {
    console.log('UncontrolledRating rendering')
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

function StarComponent(props: StarPropsType) {
    console.log('Star rendering')
    const onClickHandler = () => {
        props.onClick(props.value)
    }
    return (
        <span onClick={onClickHandler}>{props.selected ? <b>star </b> : 'star'} </span>
    )
}

export const Rating = memo(RatingComponent)
const Star = memo(StarComponent)