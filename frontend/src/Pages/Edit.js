import React, { useEffect, useState } from "react";
import Http from "../Http";
import { useNavigate, useParams } from "react-router-dom";

  const Edit = (props) => {
    const navigate = useNavigate();
    const [inputs , setInputs] = useState({});

    const {id} = useParams();

    useEffect(()=>{
        getUser();
    },[])

    const getUser = () =>
    {
        Http.get('/users/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email
            });
        })
    }


    const handlechange = (e) => 
    {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(values => ({...values,[name]:value}))

    }

    const handleSubmit = () =>
    {
        console.log(inputs);
        Http.put('/users/'+id,inputs).then((res) => {
            navigate('/');
        })
    }

    return(
        <div className="container my-3">
            <h2>Edit user</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control mb-2"
                        value={inputs.name || ''}
                        onChange={handlechange}
                        />

                        <label>Email</label>
                        <input type="eamil" name="email" className="form-control mb-2"
                        value={inputs.email || ''}
                        onChange={handlechange}
                        />

                        <button type="button" onClick={handleSubmit} className="btn btn-info mt-2">Update</button>

                    </div>
                </div>
            </div>
        </div>
    );
 };

 export default Edit ;