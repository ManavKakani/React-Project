import React from 'react'
import { getImageUrl } from '../helpers'

const Avtar = ({ avtarUrl = '5cmyRGA', border }) => {

    const arr = [];

    return <>
        {!!arr.length && <h1>sdsdf</h1>}
        {border && <img
            className="avatar"
            src={getImageUrl(avtarUrl)}
            alt="Lin Lanying"
            width={100}
            height={100}
        />}
    </>
}

// const Avtar = ({ avtarUrl = '5cmyRGA', border }) => {
//     return (
//         border && <img
//             className="avatar"
//             src={getImageUrl(avtarUrl)}
//             alt="Lin Lanying"
//             width={100}
//             height={100}
//         />
//     )
// }

// const Avtar = ({ avtarUrl = '5cmyRGA', border }) => {
//     return (
//         border ? <img
//             className="avatar"
//             src={getImageUrl(avtarUrl)}
//             alt="Lin Lanying"
//             width={100}
//             height={100}
//         /> : <><p>Image not found</p> <p>Image not found</p></>
//     )
// }

// const Avtar = ({ avtarUrl = '5cmyRGA', border }) => {

//     if (border) {
//         return <img
//             className="avatar"
//             src={getImageUrl(avtarUrl)}
//             alt="Lin Lanying"
//             width={100}
//             height={100}
//         />
//     }

//     return <><p>Image not found</p> <p>Image not found</p></>
// }

export default Avtar