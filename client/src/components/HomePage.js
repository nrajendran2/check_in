import React, { Component } from 'react';
import styled from "styled-components";
import LogInComponent from "./LogInComponent";
import { Link } from "react-router-dom";


const LandingWrap = styled.div`
  background-image: url("https://i.imgur.com/z7C5BnE.jpg");
  background-size: cover;
  z-index: -9;
  position: fixed;
  height: 100vh;
  width: 100vw;
  padding: 40px;
  .letter-box {
    display: flex;
    position: fixed;
    top: 20vh;
    color: white;
    margin-top:  25vw;
    margin-left: 20vw;
    background-color: #88888875;
    border-bottom: 1px solid purple;
    border-top: 1px solid purple;
    padding: 1em 2em;
    span {
      font-family: 'Faster One', cursive;
    }
    @media (max-width: 510px) {
    top: 56vh;
    margin: auto;

  }
  }
`;

const Links = styled.div`
display:flex;
justify-content: space-around;
margin-right: 200px;


`


class HomePage extends Component {
    render() {
        return (
            <div>
            {this.props.showLogin ? (
          <LogInComponent toggleShowLogin={this.props.toggleShowLogin} showLogin={this.props.showLogin} />
        ) : (
          <LandingWrap>
            <div className="letter-box">
              <h1>
                Welcome to <span>Baggage Expre$$</span>
              </h1>
             
            </div>

<Links>
    {/* <h1><Link to="/users/">Users</Link></h1> */}


    </Links>
          
          
          </LandingWrap>
        )}
               
            </div>
        );
    }
}

export default HomePage;