import React, {Component} from 'react';
import {Form, Button, TextArea, Icon, Card} from "semantic-ui-react";
import styled from "styled-components";
import axios from 'axios'
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
        const bagload = {
            bag: this.state.new.bagname,
            weight: this.state.new.weight,
            fragile: this.state.new.fragile
        };

        const flightload = {
            airline: this.state.new.airline,
            confirmationId: this.state.new.confirmationId
        }

        await axios.post(`api/users/${this.props.userId}/bags`, bagload)

    }

    render() {
        return (
            <div>
                <Form onSubmit={this.createNewPost}>
                    <Form.Input
                        className="inputs"
                        name="bagname"
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Name of Bag"
                        value={this.state.bagname}
                        required/>
                    <Form.Input
                        className="input"
                        placeholder="Enter Weight"
                        name="weight"
                        onChange={this.handleChange}
                        value={this.state.weight}/>

                    <Form.Input
                        className="input"
                        placeholder="Enter airline"
                        name="airline"
                        onChange={this.handleChange}
                        value={this.state.airline}/>
                    <Form.Input
                        className="input"
                        placeholder="confirmation Id"
                        name="confirmationId"
                        onChange={this.handleChange}
                        value={this.state.confirmationId}/> {/* <ButtonWrap>
                <Button animated color="green" type="submit">
                  <Button.Content visible>Post Comment</Button.Content>
                  <Button.Content hidden>
                    <Icon name="comments" />
                  </Button.Content>
                </Button>
              </ButtonWrap> */}
              <button>Submit</button>
                </Form>

            </div>
        );
    }
}

export default NewBagPost;