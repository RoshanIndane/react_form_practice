import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



const User=()=>{

    const {id}=useParams()

    const [data , setData]= useState([])

    useEffect(()=>{
        getdata ()
    },[])

    const getdata=()=>{
        axios.get(`http://localhost:7777/Details/${id}`).then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    }




    return (
        <div>
           <h2> {data.name}</h2>
            
            <h3>{data.roll}</h3>
            
            <h4>{data.course}</h4>
            
            <h3>{data.year}</h3>
            
            <h3>{data.status}</h3>
            

        </div>
    )
}

export default User;