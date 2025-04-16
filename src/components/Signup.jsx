import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        confirmPassword: "",
        password: ""
    })
    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setInput({ ...input, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(input);
        try {
            let add = await axios.post("http://localhost:3000/signup", input);
            // setInput({
            //     name: "",
            //     email: "",
            //     confirmPassword: "",
            //     password: ""
            // })
            console.log(add);
            

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center " style={{ height: '100vh' }}>
                <div className="col-md-6 col-lg-4 col-sm-8">
                    <div className="card p-4 shadow-lg">
                        <h2 className="text-center mb-4">Signup</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your full name" required name='name' value={input.name} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" required name='email' value={input.email} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" required name='password' value={input.password} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confirm-password" placeholder="Confirm password" required name='confirmPassword' value={input.confirmPassword} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Sign-Up</button>
                        </form>
                        <p className="text-center mt-3">Already have an account? <Link to={`/login`}>Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
