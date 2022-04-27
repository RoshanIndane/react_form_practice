import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";




const Userlist=()=>{

    const [user, setUser]=useState([]);
    const navigate=useNavigate();

useEffect(()=>{
    getdata ()
},[])

const getdata=()=>{
    axios.get("http://localhost:7777/Details").then((res)=>{
        console.log(res.data);
        setUser(res.data);
    })
}



    return (
        <div>
            {
                user.map((e,i)=>{
                return <div key={i} onClick={()=>{
                    navigate(`/userlist/${e.id}`)
                }}>{e.id}.{e.name}<br/></div>
                
                })
            }


        </div>
    )
}

export default Userlist;
