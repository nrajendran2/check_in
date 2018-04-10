import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { injectGlobal } from "styled-components";
import './App.css';
import axios from "axios";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Faster+One'););
*, :after, :before {
    box-sizing: inherit;
}
html, body {
        height: 100%;
        margin: 0;
      }
`;

class App extends Component {
state = {
    cities: [],
    cityname: "",
    showLogin: false,
    error: ""
  };

  componentDidMount() {
    this.getAllCities();
  }

  toggleShowLogin = () => {
    this.setState({
      showLogin: !this.state.showLogin
    });
  };

  getAllCities = async () => {
    try {
      const response = await axios.get("/api/cities");
      console.log(response.data);
      this.setState({
        cities: response.data.cities,
        cityname: response.data.cityname
      });
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  render() {

      const HomePageWrapper = props => {
      return <HomePage toggleShowLogin={this.toggleShowLogin} showLogin={this.state.showLogin}/>;
    };



    return (
      <Router>
      <div className="App">
       <Navbar
            {...this.props}
            cities={this.state.cities}
            cityname={this.props.city_name}
            toggleShowLogin={this.toggleShowLogin}
            showLogin={this.state.showLogin}
          />
      <Switch>
 <Route exact path="/" render={HomePageWrapper} />
 
    



      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
