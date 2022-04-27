import axios from 'axios';
import React from 'react';
import { useState } from 'react';


const Adduser=()=>{

const [details,  setDetails]=useState({
    "name":"",
    "roll":"",
    "course":"",
    "year":"",
    "status":""

})

const handlesubmit=(e)=>{
    e.preventDefault();

    axios.post("http://localhost:7777/Details",details).then(()=>{
        alert("User created sucessfully !!!")
        setDetails({
            "name":"",
            "roll":"",
            "course":"",
            "year":"",
            "status":""
        })
    })

}


const handlechange=(e)=>{

    const {id,value}=e.target;
    setDetails({...details,[id]:value})
}


    return (
        <div>
            <form onSubmit={handlesubmit}>
                <label htmlFor='name'>Name:</label>
                <input value={details.name} onChange={handlechange} type='text' id='name'/>
                <br/>
                <label htmlFor='roll'>Roll No:</label>
                <input value={details.roll} onChange={handlechange} type='Number' id='roll'/>
                <br/>
                <label htmlFor='course'>Course:</label>
                <input value={details.course} onChange={handlechange} type='text' id='course'/>
                <br/>
                <label htmlFor='year'>Year:</label>
                <select value={details.year} onChange={handlechange} id='year'>
                    <option value=''>-----</option>
                    <option value='first'>First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                    <option value="fourth">Fourth</option>
                </select>
                <br/>

                <label htmlFor='status'>Status:</label>
                <select value={details.status} onChange={handlechange} id='status'>
                    <option value="">-----</option>
                    <option value="pass">Passed</option>
                    <option value="fail">Failed</option>
                </select>
                <br/>

                <input type='submit' value='Submit'/>


            </form>
        </div>
    )
}




















export default Adduser;