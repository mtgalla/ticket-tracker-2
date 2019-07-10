import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Signup from './components/login/sign-up'
import LoginForm from './components/login/login-form'
import Navbar from './components/navbar/navbar'
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Category from "./pages/Category"

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      userId: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {

      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          userId: response.data.user._id
        })
      } else {
        this.setState({
          loggedIn: false,
          username: null,
          userId: null
        })
      }
    })
  }

  render() {

  return (
    <Router>
      <div>
       
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        
        {this.state.loggedIn &&
          <p>Signed in as: {this.state.username}</p>
        }

        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/tickets" component={Search} />
          <Route exact path="/sports" component={Category} />
          <Route exact path="/concert" component={Category} />
          <Route exact path="/theatre" component={Category} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/saved/:id" component={Saved} />

          <Route path="/login" render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
          />
        
          <Route path="/signup" render={() =>
            <Signup/>}
          />
          
          <Route component={NoMatch} /> 
        </Switch>
        
      </div>
            
    </Router>
  );
}
}

export default App;
