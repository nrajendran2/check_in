import React, {Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {Link} from "react-router-dom";


const UserContainer = styled.div`
display:flex;
justify-content: space-around;
`


const FullPage = styled.div `
justify-content:space-around; 
background-color: white;



`

const ProfileImage = styled.img `
height: 200px;
max-width: 200px;
display:inline-block;
justify-content: space-around;
border-radius: 50%;
background-color: white;
border: solid;
`

const ProfileName = styled.div `
height: 200px;
max-width: 200px;
font-size: 20px;
 display: flex;
justify-content: space-around; 
 flex-direction: row; 
`
const EachProfile = styled.div`
display: block;
width: 20vw;
margin: 20px auto;
a{
    margin: auto;
}
.name{
    justify-content: center;
    margin:0 auto;
    }
    
    
    `
class UsersView extends Component {
    state = {
        users: ['hkhkhk'],
        bikes: {
            brand: 'Razor'
        }
    };

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers = async() => {
        try {
            const response = await axios.get("/api/users");
            console.log(response.data);
            this.setState({users: response.data.users});
        } catch (err) {
            console.log(err);
            this.setState({err: err.message});
        }
    };

    render() {
        return (

            <FullPage>
                

                    <h1>Users</h1>

                    <UserContainer>

                    {this
                        .state
                        .users
                        .map((user) => {
                            return (

                                <EachProfile>

                                    <div>
                                        <ProfileImage src={user.photo_url}/>
                                   

                                    
                                        <Link to={`/users/${user.id}`}>

                                            <ProfileName>{user.name}</ProfileName>
                                        </Link>

                                  </div>
                            
                                </EachProfile>

                            )
                        })}
                         </UserContainer>
                
            </FullPage>
        );
    }
}

export default UsersView;