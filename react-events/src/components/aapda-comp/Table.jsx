import React from 'react'

const Table = ({ students, handleEdit }) => {
  return (
    <div style={{margin: '40px auto'}}>
      <h1>Students</h1>
      <table width={'100%'} border={'1'} style={{ borderCollapse: 'collapse' }
      } >
        <thead>
          <tr>
            <td>Sr.No</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {students.map((stud, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{stud.fname}</td>
                <td>{stud.lname}</td>
                <td>{stud.email}</td>
                <td><button onClick={() => handleEdit(index)}>Edit</button></td>
              </tr>
            )
          })}
        </tbody>
      </table >
    </div >
  )
}

export default Table