import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Dropdown, Menu } from "semantic-ui-react";

const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
  box-shadow: 1px 4px 8px 1px rgba(0, 0, 0, 0.8);
  align-items: center;
  z-index: 1000;
  @media (max-width: 510px) {
    height: 40vw;
  }
  a {
    color: white;
  }
`;

const LogoWrap = styled.div`
  display: inline-flex;
  justify-content: space-around;
  margin-left: 10vw;
  h1 {
     font-family: 'Faster One', cursive;
    font-size: 48px;
    @media (max-width: 510px) {
      font-size: 40px;
    }
  }
  @media (max-width: 510px) {
    margin-left: 3vw
}
`;

const NavLinkWrap = styled.div`
  text-align: center;
  display: inline-flex;
  white-space: nowrap;
  font-size: 20px;
  margin-right: 8vw;
  color: white;
  height: 6vw;
  align-items: center;
  @media (max-width: 510px) {
      height: auto;
      width: 92px;
      display: block;
    margin-right: 3vw;   
    }
  .inner-nav {
    height: 44px;
    color: white;
    @media (max-width: 510px){
    margin-bottom: 200px;
  }  
  }
  a.white-letter {
    color: purple;
  }
  a {
    text-align: center;
    color: black;
    a:visited {
      color: lightgray;
    }
  }
  .inner-nav {
    margin: 0 12px;
  }
`;
class Navbar extends Component {
  render() {
    return (
      <NavWrap>
        <LogoWrap className="media">
          <Link to="/">
            <h1>Baggage Expre$$</h1>
          </Link>
          <h1>{!this.props.city_name ? null : this.props.city_name}</h1>
        </LogoWrap>
        <NavLinkWrap>
          <Button fluid color="purple=" className="inner-nav">
            <Link className="white-letter" to="/">
              Login
            </Link>
          </Button>
          <Button fluid color="purple" className="inner-nav white-letter" onClick={this.props.toggleShowLogin}>
            Sign Up
          </Button>
          <Menu color="purple" compact>
        
          </Menu>
        </NavLinkWrap>
      </NavWrap>
    );
  }
}

export default Navbar;
