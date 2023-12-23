import React, { useState } from 'react'
import { getUserList } from './getUserList';

const FuncCompo = () => {
    const [data, setData] = useState("");

    return (
        <div>
            <h1>This is a function based component</h1>
            <button data-testid="btn1" onClick={() => setData("hello")} >Click</button>
            <button onClick={getUserList}></button>
            <div>{data}</div>
        </div>
    )
}

export default FuncCompo