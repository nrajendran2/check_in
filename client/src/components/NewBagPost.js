import React, {Component} from 'react';
import {Form, Button, TextArea, Icon, Card} from "semantic-ui-react";
import styled from "styled-components";
import axios from 'axios'

const FormWrapper = styled.div`
font-size: 10px;
padding: 30px;

`

class NewBagPost extends Component {
    state = {
        new: {
            bagname: "",
            weight: "",
            fragile: "",
            airline: "",
            confirmationId: ""
        }
    }

    handleChange = event => {
        const name = event.target.name;
        const newBag = {
            ...this.state.new
        }
        newBag[name] = event.target.value;
        this.setState({new: newBag});
    };

    createNewBag = async event => {
        event.preventDefault();
        let letbagId = this
            .props
            .bags
            .map((bag) => {
                return bag.id
            })
        const bagId = letbagId[0]
        console.log(bagId)
        const bagload = {
            name: this.state.new.bagname,
            weight: this.state.new.weight,
            fragile: this.state.new.fragile,
            airline: this.state.new.airline,
            confirmationId: this.state.new.confirmationId

        };

        await axios.post(`/api/users/${this.props.userId}/bags/`, bagload)
        // await axios.post(`/api/users/${this.props.userId}/bags/${bagId}/flights`,
        // flightload)
        this
            .props
            .getAllBags()
        // this.props.getAllBags()
    }

    render() {
        return (
            
            <h1>Add Bags</h1>
            <Form onSubmit={this.createNewBag}/>

                <div>

                <FormWrapper>
                    
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s6">
                                    <input className="inputs"
                            name="bagname"
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Name of Bag"
                            value={this.state.bagname}
                            required/>  
                                    <label for="name">Name</label>
                                </div>
                               
                            </div>

                             <div class="input-field col s7">
                                    <input className="input"
                            placeholder="Enter Weight"
                            name="weight"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.weight}/>
                                   
                                </div>
                           
                          
                            <div class="row">
                                <div class="input-field col s12">
                                    <input className = "input"
                        placeholder = "fragile"
                        name = "fragile"
                        onChange = {
                            this.handleChange
                        }
                        value = {
                            this.state.fragile
                        } />
                                  <label for="email">Fragile</label>
                                </div>
                            </div>
                          
                        </form>
                    </div>

                    <button>Submit</button>

                </FormWrapper>

            </div>
        )
    }
}

export default NewBagPost;



                        



                        
                                                
