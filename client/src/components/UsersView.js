import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from "react-router-dom";


const ProfileImage = styled.img`
height: 200px;
max-width: 200px;
display: flex;
flex-direction: column;
border-radius: 50%;
align-items: center;
background-color: white;
margin: 0 0 0 300px;`

const ProfileName = styled.div`
height: 200px;
max-width: 200px;
font-size: 20px;
display: flex;
flex-direction: column;
border-radius: 50%;
align-items: center;
background-color: white;
margin: 0 0 0 300px;`


class UsersView extends Component {
     state = {
    users: ['hkhkhk'],
    bikes: {
        brand: 'Razor'
    }
  };

  componentDidMount(){
      this.getAllUsers();
  }

  getAllUsers = async() => {
      try {
          const response = await axios.get("/api/users");
          console.log(response.data);
                this.setState({
        users: response.data.users,
        
      });
            } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };


    render() {
        return (
            <div>
                <h1>Users</h1>





{this.state.users.map((user)=> {
    return (
        <div>

        <ProfileImage src={user.photo_url} />
       <Link to={`/users/${user.id}`}> <ProfileName>{user.name}</ProfileName></Link>
     
       </div>
         
        
    )
})}
                
            </div>
        );
    }
}

export default UsersView;