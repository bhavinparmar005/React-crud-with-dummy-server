import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  let nav = useNavigate()
  const [input, setInput] = useState({
    email: "",
    password: ""
  })
  const [signData, setSignData] = useState([])
  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setInput({ ...input, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let filterData = signData.find((val) => {
        return (
          val.email === input.email && val.password === input.password
        )
      });
      // console.log(filterData);
      if (filterData) {
        let add = await axios.post("http://localhost:3000/login", input);
        console.log("login data", input);

        nav("/")
      } else {
        alert("maro aa")
      }
      setInput({
        email: "",
        password: ""
      })
    } catch (error) {
      console.log(error);
    }
  }
  const getsignData = async () => {
    let r = await axios.get("http://localhost:3000/signup")
    setSignData(r.data)
  }
  useEffect(() => {
    getsignData()
  }, [])
  console.log("signdata", signData);
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-6 col-lg-4 col-sm-8 ">
          <div className="card p-4 shadow-lg rounded-4">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required name='email' value={input.email} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" required name='password' value={input.password} onChange={handleChange} />
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
