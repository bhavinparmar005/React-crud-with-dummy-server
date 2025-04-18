import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);
    const nav = useNavigate();



    const loginData = async () => {

        let login = await axios.get("http://localhost:3000/login");

        console.log(login.data);
        

        if (login.data.length ==0) {
            nav("/login")
        }
    }

  
    
    
    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/posts");
            setData(response.data);
        } catch (e) {
            console.error("Error fetching data:", e);
        }
    };
    
    useEffect(() => {
        loginData()
        getData();
    }, []);

    // getData();
    const deleteData = async (id) => {
        try {
            let result = await axios.delete(`http://localhost:3000/posts/${id}`);
            console.log(result);
            getData();


        } catch (e) {
            console.error("Error deleting item:", e);
        }
    };

    return (
        <>
            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold">Product List</h2>
                    <button className="btn btn-primary" onClick={() => nav('/add')}>
                        <i className="bi bi-plus-circle me-1" />Add Product
                    </button>
                </div>
                <div className="row g-4">
                    {
                        data.length > 0 ? (
                            data.map((val) => (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={val.id}>
                                    <div className="card h-100 shadow-sm">
                                        <img src={val.img} className="card-img-top" alt="Product" />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">{val.title}</h5>
                                            <p className="card-text">{val.descriptions}</p>
                                            <div className="mt-auto d-flex justify-content-between align-items-center">
                                                <span className="fw-bold text-primary">₹{val.price}</span>
                                                <div>
                                                    <button className="btn btn-sm btn-outline-success me-1"
                                                        onClick={() => nav("/edit", { state: val })}>
                                                        <i className="bi bi-pencil-square" />
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-danger"
                                                        onClick={() => deleteData(val.id)}>
                                                        <i className="bi bi-trash" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No products found.</p>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Home;
