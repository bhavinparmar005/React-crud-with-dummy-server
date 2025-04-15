import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
   <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-6 col-lg-4 col-sm-8 ">
          <div className="card p-4 shadow-lg rounded-4">
            <h2 className="text-center mb-4">Login</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required name='email' />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" required name='password'  />
              </div>
              <button type="submit" className="btn btn-primary w-100" >Login</button>
            </form>
            <p className="text-center mt-3">Don't have an account? <Link to={`/signup`}>SignUp</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
