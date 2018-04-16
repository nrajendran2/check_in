import React, {Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const FullPage = styled.div `
display:flex;
flex-wrap: wrap;
justify-content:space-around; 

`

const ProfileImage = styled.img `
height: 200px;
max-width: 200px;
display: flex;
flex-wrap: wrap;
flex-direction:row;
border-radius: 50%;
background-color: white;
`

const ProfileName = styled.div `
height: 200px;
max-width: 200px;
font-size: 20px;
 display: flex;
justify-content: space-around; 
 flex-direction: row; 
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
                <div>

                    <h1>Users</h1>

                    {this
                        .state
                        .users
                        .map((user) => {
                            return (

                                <div>

                                    

                                        <ProfileImage src={user.photo_url}/>
                                        <Link to={`/users/${user.id}`}>
                                            <ProfileName>{user.name}</ProfileName>
                                        </Link>

                                   
                                </div>

                            )
                        })}

                </div>
            </FullPage>
        );
    }
}

export default UsersView;