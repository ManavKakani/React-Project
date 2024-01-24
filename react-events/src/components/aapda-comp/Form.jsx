import React from 'react'

const Form = ({ handleSubmit, values,
  handleChange }) => {
  return (
    <div style={{ margin: '20px' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <label><b>First Name: </b></label>
            <input type="text" name='fname' value={values.fname} onChange={handleChange} />
          </div>
          <div>
            <label><b>Last Name: </b></label>
            <input type="text" name='lname' value={values.lname} onChange={handleChange} />
          </div>
          <div>
            <label><b>Email Name: </b></label>
            <input type="text" name='email' value={values.email} onChange={handleChange} />
          </div>
          
        </div>
        <button type="submit" style={{ display: 'block', margin: '20px auto' }}>Submit</button>
      </form>
    </div>
  )
}

export default Form