import React, { useState } from 'react'

const ClickHandler = () => {

    let [click, setClick] = useState(false);
    let [fname, setFname] = useState('');

    function handleClick(e) {
        console.log("click on btn 1", e);
        setClick(true);
    }

    return (
        <div>
            {click && <h1>click</h1>}
            <button onClick={(e) => handleClick(e)}>
                btn 1
            </button>
            {fname}
            <input type="text" value={fname} onChange={e => setFname(e.target.value)} />
        </div>
    )
}

export default ClickHandler