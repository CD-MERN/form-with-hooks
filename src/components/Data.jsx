import React from 'react'

const Data = (props) => {
    const {state} = props
  return (
    <div>
        <p>First Name: {state.firstName}</p>
        <p>Last Name: {state.lastName}</p>
        <p>Password: {state.password}</p>
        <p>Confirm Password: {state.passwordConfirm}</p>
    </div>
  )
}

export default Data