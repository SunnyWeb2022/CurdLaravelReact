import React, { useEffect, useState } from "react";
import Http from "../Http";
import { useParams } from "react-router-dom";

 const View = () =>{
    const [inputs , setInputs] = useState({});
    const {id} = useParams();
    
    useEffect(()=>{
        viewuser();
    },[]);

    const viewuser = () =>{
        Http.get('/users/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email
            })
        })
    }

    return(
        <div className="container my-3">
            <h2>View User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">

                        <label>Name</label>
                        <input type="text" name="name" className="form-control mb-2"
                            value={inputs.name}

                        />

                        <label>Email</label>
                        <input type="email" name="email" className="form-control mb-2"
                            value={inputs.email}
                        />

                    </div>
                </div>
            </div> 
        </div>
    )
 }

 export default View;