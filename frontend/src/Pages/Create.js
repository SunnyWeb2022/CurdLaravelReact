import React, { useState } from "react";
import Http from "../Http";
import { useNavigate } from "react-router-dom";

  const Create = ()=> {
    const navigate = useNavigate();
    const [inputs , setInputs] = useState({});

    const handlechange = (e) => 
    {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(values => ({...values,[name]:value}))

    }

    const handleSubmit = ()=>
    {
        Http.post('/users',inputs).then(res=>{
            navigate('/');
        })
    }

    return(
        <div className="container my-3">
            <h2>New user</h2>
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

                        <label>Password</label>
                        <input type="password" name="password" className="form-control mb-2"
                          value={inputs.password || ''}
                          onChange={handlechange}   
                        />

                        <button type="button" onClick={handleSubmit} className="btn btn-info mt-2">Submit</button>

                    </div>
                </div>
            </div>
        </div>
    );
 };

 export default Create ;