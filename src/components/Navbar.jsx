import React from "react";
import { Link } from "react-router-dom";



const Navbar=()=>{


    return (
        <div>
            <Link to='/adduser'>AddUser</Link>
            <br/>
            <Link to='/'> Home</Link>
            <br/>
            <Link to='/userlist'>Userlist</Link>

        </div>
    )
}

export default Navbar;