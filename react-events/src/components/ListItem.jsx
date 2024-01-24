import React from 'react'

const ListItem = ({ data, deleteItem, index }) => {
    return (
        <div key={data.id}>
            <div>name: <span>{data.name}</span> </div>
            <div>work: <span>{data.work}</span> </div>
            <div>blogs: <span>{data.blogs}</span> </div>
            <div>websites: <span>{data.websites}</span> </div>
            <div>hackathons: <pan>{data.hackathons}</pan> </div>
            <div>location: <span>{data.location}</span> </div>
            <button onClick={() => { deleteItem(data.id) }}>delete</button>
            <hr />
        </div>
    )
}

export default ListItem