import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Edit = () => {

    let nav = useNavigate()
    
    let data = useLocation()



useEffect(()=>{
    if (data.state== null) {
        nav("/")
    }
},[])


    const [input, setInput] = useState({
        id: data.state?.id,
        img: data.state?.img,
        title: data.state?.title,
        price: data.state?.price,
        descriptions: data.state?.descriptions
    })


    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setInput({ ...input, [name]: value })

    }
 




    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            let result = await axios.put(`http://localhost:3000/posts/${data.state.id}`, input);
            nav('/')
        } catch (e) {
            console.log(e);

        }



    }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <div className="card shadow-sm rounded-4">
                            <div className="card-body p-4">
                                <h4 className="mb-4 text-center">Edit Product</h4>
                                <form onSubmit={handleSubmit}>
                                    {/* Product Image URL */}
                                    <div className="mb-3">
                                        <label htmlFor="productUrl" className="form-label">Image URL</label>
                                        <input type="url" className="form-control" id="productUrl" placeholder="Enter image URL" required name='img' onChange={handleChange} value={input.img} />
                                    </div>
                                    {/* Product Title */}
                                    <div className="mb-3">
                                        <label htmlFor="productTitle" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="productTitle" placeholder="Enter product title" required name='title' onChange={handleChange} value={input.title} />
                                    </div>
                                    {/* Product Price */}
                                    <div className="mb-3">
                                        <label htmlFor="productPrice" className="form-label">Price ($)</label>
                                        <input type="number" className="form-control" id="productPrice" placeholder="Enter price" required name='price' onChange={handleChange} value={input.price} />
                                    </div>
                                    {/* Product Description */}
                                    <div className="mb-3">
                                        <label htmlFor="productDescription" className="form-label">Description</label>
                                        <textarea className="form-control" id="productDescription" rows={4} placeholder="Enter product description" required name='descriptions' onChange={handleChange} value={input.descriptions} />
                                    </div>
                                    {/* Submit Button */}
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary rounded-3">Edit Product</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit
