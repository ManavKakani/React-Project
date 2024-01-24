import React, { useContext, useState } from 'react'
import ListItem from './ListItem';
import PataraContext from './use-contexts/pataro';


const List = ({ applicants, setApplicants }) => {

    const pataro = useContext(PataraContext);

    console.log(pataro, 'list');

    function addDummy() {
        setApplicants(pre => [...pre, {
            name: 'Janet', work: 'fullstack-developer',
            blogs: '34', websites: '12',
            hackathons: '6', location: 'Mozambique', id: '3',
        }])
    }

    function removeLast() {
        // let arr = [...applicants];
        // applicants.splice(applicants.length - 1, 1);
        // arr.splice(arr.length - 1, 1);
        let arr = [...applicants];
        arr.pop();
        setApplicants(arr);
    }

    function deleteItem(id) {
        let arr = [...applicants];
        // arr.splice(index, 1);
        arr = arr.filter(a => a.id !== id)
        setApplicants(arr);
    }

    return (
        <div>
            <button onClick={addDummy}>ADD</button>
            <button onClick={removeLast}>REMOVE</button>
            {applicants.map((app, index) => <ListItem key={index} index={index} data={app} deleteItem={deleteItem} />)}
        </div>
    )
}

export default List