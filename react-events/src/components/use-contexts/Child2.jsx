import React, { useContext } from 'react'
import Child3 from './Child3'
import PataraContext from './pataro'

const Child2 = ({}) => {

    const pataro = useContext(PataraContext);

    return (
        <div>
            Child2
            <button onClick={() => { pataro.setCount(pre => pre + 1) }}>Click inc</button>
            <Child3 />
        </div>
    )
}

export default Child2