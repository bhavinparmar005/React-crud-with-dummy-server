import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState([])


  useEffect(() => {
    apiFetch()
  }, [])


  const apiFetch = async () => {
    const result = await axios.get("http://localhost:3000/user")

    setData(result.data)

  }
  console.log(data);



  return (
    <>
      <h1>user Data</h1>
      <table border={1} width={"80%"}>
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((val, index) => {
              return (

                <tr>
                  <th>{index+1}</th>
                  <th>{val.name}</th>
                  <th>{val.email}</th>
                  <th>{val.password}</th>
                  
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </>
  )
}

export default App
