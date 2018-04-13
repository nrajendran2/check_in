import React, {Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import NewBagPost from './NewBagPost'
import EditBag from './EditBag'

class ShowView extends Component {
    state = {
        users: {},
        bags: ['hkhkhk'],
        flights: {},
        showeditform: false
    };

    async componentDidMount() {
        await this.getAllBags();
        // await this.getAllFlights();

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

    addToBags = async(id) => {
        const userId = this.props.match.params.id
        const updateBags = this
            .state
            .bags
            .find((bag) => {
                if (id == bag.id) {
                    return bag.count++
                }
            })
        const res = await axios.patch(`/api/users/${userId}/bags/${id}`, updateBags)
        console.log(res.data)
        this.setState({bags: []})
    }

    toggleEditForm = (bag) => {
        this.setState({
            showeditform: !this.state.showeditform
        })
    }

    // addToCounter = async (id) => {     const bagId = this.props.match.params.id
    // const updateBaggage = this.state.bags.find((bag) => {         if (id == .id)
    // {             return definition.count++         } getAllFlights = async() =>
    // {     try {         const userId = this.props.match.params.id        .state
    //       .bags             .map((bag) => { return bag.id             }) const
    // newbagId = bagId[0]         const response = await
    // axios.get(`/api/users/${userId}/bags/${newbagId}/flights`)
    // this.setState({flights: response.data});     } catch (err) {
    // console.log(err);         this.setState({err: err.message});     } }
    // deleteFromBags = async (id) => {     const bagId = this.props.match.params.id
    //     const updateBaggage = this.state.bag.find((bag) => {         if (bag ==
    // bag.id) {             return bag.count--         }     }) }

    deleteBag = async(id) => {
        const userId = this.props.match.params.id
        const res = await axios.delete(`/api/users/${userId}/bags/${id}`)
        this.getAllBags()
    }

    render() {

        return (
            <div>
                {this
                    .state
                    .bags
                    .map((bag) => {
                        return (
                            <div>

                                <h1>Weight: {bag.weight}lbs</h1>
                                <h1>Bag ID: {bag.name}</h1>
                                <h1>Fragile: {bag.fragile}</h1>

                                {/* <h1>Airline:{one.airline}</h1> */}
                                <button onClick={() => this.deleteBag(bag.id)}>Delete</button>
                                <button onClick={()=> this.toggleEditForm(bag.id)}>Edit Bag</button>

                                {this.state.showeditform
                                    ? <EditBag  userId={this.props.match.params.id} id={bag.id} bag={bag}/>
                                    : null
}
                            </div>

                        )

                    })}

                {/* <h1>{oneFlight.airline}</h1> */}
                <NewBagPost
                    userId={this.props.match.params.id}
                    bags={this.state.bags}
                    getAllBags={this.getAllBags}/>
                <div></div>
            </div>
        );
    }
}

export default ShowView;