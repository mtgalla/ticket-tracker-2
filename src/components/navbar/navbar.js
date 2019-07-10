import React, { Component } from 'react';
import {  Link } from 'react-router-dom'
import '../../App.css';
import './style.css';
import axios from 'axios';
import SignInBtn from '../SignInBtn';
import Menu from '../Menu';
import logo from './logo2.png';


class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()

        axios.post('/user/logout').then(response => {
          if (response.status === 200) {
            this.props.updateUser({
                loggedIn: false,
                username: null
            })
          }
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        
        return (
            
            <div>
                <header className="navbar App-header" id="nav-container">
                <div class="logo col-1">
                    <img src={logo} alt="Logo"/>
                    </div>
                <div>
                        {loggedIn ? ( 
                            <section className="navbar-section" >
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                    <span className="text-secondary">Logout</span>
                                </Link>

                            </section>

                        ) : ( <Menu></Menu>

                        )}
                    </div>

                        <div>
                        <SignInBtn></SignInBtn> 
                        </div>
                </header>
            </div>
        );
    }
}

export default Navbar