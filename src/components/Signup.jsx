import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center " style={{ height: '100vh' }}>
                <div className="col-md-6 col-lg-4 col-sm-8">
                    <div className="card p-4 shadow-lg">
                        <h2 className="text-center mb-4">Signup</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your full name" required name='name'  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" required name='email'  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" required name='password'  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confirm-password" placeholder="Confirm password" required name='confirmPassword'  />
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
