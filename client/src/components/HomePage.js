import React, { Component } from 'react';
import styled from "styled-components";
import LogInComponent from "./LogInComponent";
import { Link } from "react-router-dom";


const LandingWrap = styled.div`
  background-image: url("https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1511281122%2Fflight-landing-INBNDCHECK1117.jpg%3Fitok%3DrlElho3R&w=700&q=85");
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
    margin-top:  15vw;
    margin-left: 20vw;
    background-color: #88888875;
    border-bottom: 1px solid purple;
    border-top: 1px solid purple;
    padding: 1em 2em;
    span {
      font-family: "Permanent Marker", cursive;
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
    <h1><Link to="/users/">Users</Link></h1>


    </Links>
          
          
          </LandingWrap>
        )}
               
            </div>
        );
    }
}

export default HomePage;