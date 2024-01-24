import React, { useContext } from 'react'
import PataraContext from './pataro';

const Child4 = () => {

    const pataro = useContext(PataraContext);

    return (
        <>
            <h1>child4</h1>
            {pataro.count}
        </>
    );
}

export default Child4 