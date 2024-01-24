import React, { useEffect, useState } from 'react'
import Child from './Child';

const Parent = ({ }) => {

    const [on, setOn] = useState(false);
    const[data,setData]= useState([]);

    useEffect(() => {
      getData();
    }, [])

    async function getData(){
        const response =await fetch("https://jsonplaceholder.typeicode.com/todos/");
        const json = await response.json();
        setData(json);
    }

    return (
        <div>
            <Child />
            {
                 data.map(j => {
                    return <h1 key={j.id}>{j.title}</h1>
                 })
            }
            <button onClick={() => setOn(!on)}>Clicickkckc</button>
        </div>
    )
}

export default Parent