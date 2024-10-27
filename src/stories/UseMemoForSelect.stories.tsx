import React, {memo, useMemo, useState} from 'react';
import {ItemsType, SuperSelect} from '../components/SuperSelect/SuperSelect';


// ====================================================
// ====================================================
// ===== ХЗ ===========================================
// ===== ВООБЩЕ НЕ ПОНЯЛА, ЧТО НАДО СДЕЛАТЬ ===========
// ====================================================
// ====================================================
// ====================================================



export default {
    title: 'UseMemoForSelect'
};

const SecretUsers = (props: { users: Array<string> }) => {
    console.log('Secret Users')
    return <div>
        {props.users.map((user, index) => <div key={index}>{user}</div>)}
    </div>
}
const Users = memo(SecretUsers)

const selectItems: ItemsType[] = [
    {
        title: 'Minsk',
        id: '1',
        population: 1938280,
        country: 'Belarus'
    },
    {
        title: 'Moskow',
        id: '2',
        population: 13149803,
        country: 'Russia'
    },
    {
        title: 'Kiev',
        id: '3',
        population: 2952301,
        country: 'Ukraine'
    },
    {
        title: 'Gomel',
        id: '4',
        population: 516976,
        country: 'Belarus'
    },
    {
        title: 'Vitebsk',
        id: '5',
        population: 366299,
        country: 'Belarus'
    },
    {
        title: 'Sankt-Peterburg',
        id: '6',
        population: 5598473,
        country: 'Russia'
    },
]

export const SelectWithCountriesFilter = () => {
    console.log('COUNTRIES')
    const [selectorValue, setSelectorValue] = useState('')
    const newSelectItems = selectItems.filter((i) => i.country === 'Belarus')
    return <SuperSelect value={selectorValue} items={newSelectItems} setSelectorValue={setSelectorValue}/>
}

export const SelectWithPopulationFilter = () => {
    console.log('POPULATION')
    const [selectorValue, setSelectorValue] = useState('')
    const newSelectItems = selectItems.filter((i) => i.population > 1000000)
    return <SuperSelect value={selectorValue} items={newSelectItems} setSelectorValue={setSelectorValue}/>
}

export const SelectWithLetterFilter = () => {
    console.log('LETTER')
    const [selectorValue, setSelectorValue] = useState('')
    const newSelectItems = selectItems.filter((i) => i.title.toLowerCase().indexOf('m') > -1)
    return <SuperSelect value={selectorValue} items={newSelectItems} setSelectorValue={setSelectorValue}/>
}

export const SelectsWithFilters = () => {
    const wrapperStyles = {
        display: 'flex',
        maxWidth: '1000px',
        gap: '10px',
        justifyContent: 'space-between',
    }

    return <div style={wrapperStyles}>
        <SelectWithCountriesFilter/>
        <SelectWithPopulationFilter/>
        <SelectWithLetterFilter/>
    </div>
}


// export const HelpsForReactMemoExample = () => {
//     console.log('HelpsForReactMemoExample')
//     const [count, setCount] = useState(0);
//     const [users, setUsers] = useState(['Regina', 'Ignat', 'Roma', 'Pol', 'Bob']);
//
//     const newArray = useMemo(() => {
//         return users.filter(u => u.toLowerCase().indexOf('a') > -1)
//     }, [users])
//
//     const addUser = () => {
//         const newUser = [...users, 'Alexander']
//         setUsers(newUser)
//     }
//     return <>
//         <button onClick={() => setCount(count + 1)}>+</button>
//         <span> {count}</span>
//         <hr/>
//         <button onClick={addUser}>add User</button>
//         <Users users={newArray}/>
//     </>
// }