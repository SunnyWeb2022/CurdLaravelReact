import React, { useState , useEffect } from "react";
import Http from "../Http";
import { Link } from "react-router-dom";

  const Home = ()=> {
    const [users, setUsers] = useState([]);
    const [srchuser,setSearchuser] = useState('');

    const searchuser = (e) =>{
        setSearchuser(e.target.value);
        const result= users.filter(getuser => `${getuser.name} ${getuser.email}`.match(srchuser));
        setUsers(result);
        if(e.target.value === '')
        {
            window.location.reload();
        }
    }

    useEffect(()=>{
        getAllusers();
    },[]);

    const getAllusers = () =>{
            Http.get('/users').then(res=>{
                setUsers(res.data);
            });
    }

    const deleteuser = (id) =>
    {
        Http.delete('/users/'+id).then(res=>{
            getAllusers();
        })
    }


    return(
        <div className="container my-3">
            <div className="row">
                <div className="col-sm-6">
                     <h2>Home Page</h2>
                </div>
                <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                        <label className="h3">Search</label>
                        <input type="search" name="search" className="form-control ms-2"
                        value={srchuser || ''}
                        onChange={searchuser}
                        />
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>(
                        <tr key={user.id}>
                            <td>{++index}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={{ pathname:"/edit/"+user.id }} className="btn btn-info nav-Link mx-2">Edit</Link>
                                <Link to={{ pathname:"/view/"+user.id }} className="btn btn-info nav-Link mx-2" >View</Link>
                                {/* <Link to={{ pathname:"/"+user.id }} className="btn btn-danger nav-Link mx-2" >Delete</Link> */}
                                <button type="button" onClick={()=>{deleteuser(user.id)}} className="btn btn-danger nav-Link mx-2" >Delete</button>

                            </td>
                        </tr>
                    ))}
                    

                </tbody>
            </table>
        </div>
    );
 };

 export default Home ;