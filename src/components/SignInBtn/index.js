import React from "react";
import "./style.css";
import { Route, Link } from 'react-router-dom';



function SignInBtn(props) {
    return (
        <section className="navbar-section signbtn">

        <Link to="/login" className="btn btn-link text-secondary signbtn">
            <span className="text-secondary">Login</span>
        </Link>
        
        <Link to="/signup" className="btn btn-link signbtn">
            <span className="text-secondary">Sign Up</span>
        </Link>

    </section>
    )
}


export default SignInBtn;