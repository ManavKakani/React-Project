import React, { useEffect, useState } from 'react';

const LoginForm = () => {

    const [values, setValues] = useState({
        fname: '',
        lname: '',
    });

    useEffect(() => {
        console.log(values);
    }, [values])

    function valueLeviChe(e) {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <input
                    type='text'
                    name='fname'
                    value={values?.fname}
                    onChange={valueLeviChe}
                    onBlur={() => { }}
                />
                <input
                    type='text'
                    name='lname'
                    value={values?.lname}
                    onChange={valueLeviChe}
                    onBlur={() => { }}
                />
                <input type='submit' value={'Submit'}></input>
            </form>
        </div>
    )
}

export default LoginForm