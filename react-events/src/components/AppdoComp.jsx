import React, { useEffect, useState } from 'react';
import Form from './aapda-comp/Form';
import Table from './aapda-comp/Table';

const initValue = { fname: '', lname: '', email: '' };

const AppdoComp = () => {
    const [students, setStudents] = useState([
        { id: 1, fname: "shyam", lname: 'kathiriya', email: 'email@email.com', }
    ]);

    const [values, setValues] = useState(initValue)

    function handleSubmit(e) {
        e.preventDefault();
        if (values.id) {
            setStudents(pre => pre.map(a => a.id == values.id ? values : a));
        } else {
            setStudents(pre => [...pre, { ...values, id: Math.random() }]);
        }
        setValues(initValue);
    }

    function handleChange(e) {
        setValues(pre => ({
            ...pre,
            [e.target.name]: e.target.value
        }));
    }

    function handleEdit(index) {
        setValues(students[index])
    }

    return (
        <div style={{ maxWidth: '90%', margin: '0px auto' }}>
            <Form values={values} handleSubmit={handleSubmit} handleChange={handleChange} />
            <Table students={students} handleEdit={handleEdit} />
        </div>
    )
}

export default AppdoComp