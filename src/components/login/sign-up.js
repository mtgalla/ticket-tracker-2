import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import  "./style.css";

class Signup extends Component {
	constructor() {
		super()

		this.state = {
			username: '',
			password: '',
			redirectTo: null,
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	ValidateEmail(mail) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.username.value)) {
		   return (true)
		}
		
	   	alert("You have entered an invalid email address!")
	   	return (false)
   	}

	handleSubmit(event) {
		event.preventDefault()

		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.username)) {

			//request to server to add a new Email/Password
			axios.post('/user/', {
				username: this.state.username,
				password: this.state.password
			})
			.then(response => {
				if (!response.data.error) {
					alert('Successful Signup!')
				
					this.setState({
						//redirect to login page
						redirectTo: '/login'
					})
				} else {
					alert('Email Already Taken')
				}
			}).catch(error => {
				console.log(error)
			})

		} else {
			alert("You have entered an invalid email address!")
		}
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {

			return (
				<div className="signUpBox">
					<h4>Sign up</h4>

					<form className="form-horizontal">
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="username">Email:</label>
							</div>

							<div className="col-3 col-mr-auto">
								<input className="form-input"
									type="text"
									id="username"
									name="username"
									placeholder="Username"
									value={this.state.username}
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="password">Password: </label>
							</div>

							<div className="col-3 col-mr-auto">
								<input className="form-input"
									placeholder="password"
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="form-group ">
							<div className="col-7"></div>

							<button className="btn btn-primary col-1 col-mr-auto btn-signup" onClick={this.handleSubmit} type="submit">
								Sign up
							</button>
						</div>
					</form>
				</div>
			)
		}
	}
}

export default Signup