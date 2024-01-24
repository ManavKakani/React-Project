import React, { useEffect } from 'react'

const Child = () => {
    useEffect(() => {
        console.log('Child');
    }, [])
  return (
    <div>Child</div>
  )
}

export default Child