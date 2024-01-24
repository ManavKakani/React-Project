import React, { useEffect, useRef, useState } from 'react'
import Parent from './Parent';

const Abc = () => {

    const [count, setCount] = useState(0);
    const [on, setOn] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("mount");
        const intervalFn = () => {
            setCount(pre => pre + 1)
        }
        let interval = setInterval(intervalFn, 1000)

        return () => {
            console.log("unmount");
            clearInterval(interval);
            interval = undefined;
        }
    }, [on])

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <Parent></Parent>
            {count} <br />
            <button onClick={() => setOn(!on)}>Click</button>

            <input type="text" id='focusInput' ref={inputRef} />
            {/* <button onClick={() => setCount1(1 + count)}>Click1</button> */}
        </div>
    )
}

export default Abc