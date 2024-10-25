import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
};

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const SecretUsers = (props: { users: Array<string> }) => {
    console.log('Users rendering')
    return <div>
        {props.users.map((user, index) => <div key={index}>{user}</div>)}
    </div>
}
const Users = React.memo(SecretUsers)
export const Example1 = () => {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(['item1', 'item2', 'item3', 'item4', 'item5']);
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setUsers([...users, 'new user ' + new Date().getTime()])}>add user</button>
        <NewMessagesCounter count={count}/>
        <Users users={users}/>
    </>
}