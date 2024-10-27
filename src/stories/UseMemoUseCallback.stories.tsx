import React, {memo, useCallback, useMemo, useState} from 'react';

export default {
    title: 'UseMemo'
};


export const DifficultCountingExample = () => {
    const [a, setA] = useState(2);
    const [b, setB] = useState(2);

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tmpResultA = 1;
        for (let i = 1; i <= a; i++) {
            console.log('A')
            let fake = 0;
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random();
            }
            tmpResultA *= i
        }
        return tmpResultA;
    }, [a]);

    for (let i = 1; i <= b; i++) {
        console.log('B')
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for A: {resultA}</div>
        <div>Result for B: {resultB}</div>
    </>
}


const SecretUsers = (props: { users: Array<string> }) => {
    console.log('Secret Users')
    return <div>
        {props.users.map((user, index) => <div key={index}>{user}</div>)}
    </div>
}
const Users = memo(SecretUsers)

export const HelpsForReactMemoExample = () => {
    console.log('HelpsForReactMemoExample')
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(['Regina', 'Ignat', 'Roma', 'Pol', 'Bob']);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUser = [...users, 'Alexander']
        setUsers(newUser)
    }
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span> {count}</span>
        <hr/>
        <button onClick={addUser}>add User</button>
        <Users users={newArray}/>
    </>
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [count, setCount] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML']);

    const newArray = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf('a') > -1)
    }, [books])


    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBook = [...books, 'Angular']
            setBooks(newBook)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        const newBook = [...books, 'Angular']
        setBooks(newBook)
    }, [books])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span> {count}</span>
        <hr/>
        <Book books={newArray} addBook={memoizedAddBook2}/>
    </>
}


const BookSecret = (props: { books: Array<string>; addBook: () => void }) => {
    console.log('Secret Users')
    return <div>
        <button onClick={props.addBook}>add Book</button>
        {props.books.map((book, index) => <div key={index}>{book}</div>)}
    </div>
}
const Book = memo(BookSecret)