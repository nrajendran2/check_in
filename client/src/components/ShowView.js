import React, {Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import NewBagPost from './NewBagPost'
class ShowView extends Component {
    state = {
        users: {},
        bags: ['hkhkhk'],
        flights: []
    };

    async componentDidMount() {
        await this.getAllBags();
        await this.getAllFlights();

    }

    getAllBags = async() => {
        try {
            const userId = this.props.match.params.id
            console.log("About to make API call for bags")
            const response = await axios.get(`/api/users/${userId}/bags`);
            console.log("Finished API call", response.data);
            this.setState({bags: response.data});
        } catch (err) {
            console.log(err);
            this.setState({err: err.message});
        }
    };

    getAllFlights = async() => {
        try {
            const userId = this.props.match.params.id
            const bagId = this.state.bags.map((bag) => {
                    return bag.id
                
                })
                const newbagId = bagId[0]
            console.log(bagId)
            console.log(newbagId)
            const response = await axios.get(`/api/users/${userId}/bags/${newbagId}/flights`)
            console.log("finishedAPi Call", response.data);
            this.setState({flights: response.data});
        } catch (err) {
            console.log(err);
            this.setState({err: err.message});
        }

    }

    render() {

        return (
            <div>
                {this.state.bags.map((bag) => {
                        return (
                            <div>

                                <h1>Weight: {bag.weight}lbs</h1>
                                <h1>Bag ID: {bag.name}</h1>
                                <h1>Fragile: {bag.fragile}</h1>
                                <h1>Airlline:{this.state.flights.airline}</h1>
                                <h1>Confirmation ID: {this.state.flights.confirmation_id}</h1>
                                {/* <h1>Airline:{one.airline}</h1> */}
                            

                            </div>

                        )
                    })}

                {/* <h1>{oneFlight.airline}</h1> */}
    <NewBagPost userId={this.props.match.params.id}/>
            </div>
        );
    }
}

export default ShowView;