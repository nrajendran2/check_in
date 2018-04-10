import React, { Component } from 'react';
import styled from "styled-components";
import LogInComponent from "./LogInComponent";


const LandingWrap = styled.div`
  background-image: url("https://media.bizj.us/view/img/3972271/skyline-of-atlanta*1024xx1600-900-0-1384.jpg");
  background-size: cover;
  z-index: -9;
  position: fixed;
  height: 100vh;
  width: 100vw;
  .letter-box {
    display: flex;
    position: fixed;
    top: 20vh;
    color: white;
    margin: 0 10vw 20vw 50vw;
    background-color: #88888875;
    border-bottom: 1px solid purple;
    border-top: 1px solid purple;
    padding: 1em 2em;
    span {
      font-family: "Permanent Marker", cursive;
    }
    @media (max-width: 510px) {
    top: 36vh;
    margin: auto;
  }
  }
`;



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
                Welcome to <span>Vagabond</span>
              </h1>
            </div>
          </LandingWrap>
        )}
                
            </div>
        );
    }
}

export default HomePage;