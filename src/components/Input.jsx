import React from 'react';

const Input = (props) => {
    const {state, setState} = props

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('after', state);
        // console.log(e.target);
    }
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
        
        
    }
    return (
        <form onSubmit={handleSubmit} className="mb-5">
            <div className="mb-3">
                <label htmlFor="inputFirstName" className="form-label">First Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="firstName"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="inputLastName" className="form-label">Last Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputLastName" 
                    name="lastName"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="inputPassword"
                    name="password"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="inputConfirmPassword"
                    name="passwordConfirm"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
export default Input;