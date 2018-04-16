import React, {Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import NewBagPost from './NewBagPost'
import EditBag from './EditBag'


const BagWrapper = styled.div`
font-size: 10px;
/* background-color: red; */
background-size: cover;
background-image: url("https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1511281122%2Fflight-landing-INBNDCHECK1117.jpg%3Fitok%3DrlElho3R&w=700&q=85");

`

 
const Background = styled.div`
/* font-size: 12px; */
color: black;

h1 {
    font-size: 30px;
}
`



 
const FullPage = styled.div`
font-size: 8px;

background-size: cover;`

class ShowView extends Component {
    state = {
        users: {},
        bags: [],
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
    // .bags             .map((bag) => { return bag.id             }) const newbagId
    // = bagId[0]         const response = await
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

        const bags = this
            .state
            .bags
            .map((bag) => {
                console.log("FRAGILE", bag.fragile)
                if (!bag) {
                    return 
                    
                    <div></div>
                }
                return (

                    <FullPage>


                
                    <div>
                        <Background>

                        <h1>Weight: {bag.weight}lbs</h1>
                        <h1>Bag ID: {bag.name}</h1>
                        <h1>Fragile: {bag.fragile

                                    ? bag
                                    .fragile
                                    .toString()
                                : "false"}</h1>

                        {/* <h1>Airline:{one.airline}</h1> */}
                        <button onClick={() => this.deleteBag(bag.id)}>Delete</button>
                        <button onClick={() => this.toggleEditForm(bag.id)}>Edit Bag</button>

                        {this.state.showeditform
                            ? <EditBag userId={this.props.match.params.id} id={bag.id} bag={bag}/>
                            : null}

                            </Background>
                    </div>
                   
                    </FullPage>
                )

            })

        return (

            <BagWrapper>
            <div>

                {bags}

                {/* <h1>{oneFlight.airline}</h1> */}
                <NewBagPost
                    userId={this.props.match.params.id}
                    bags={this.state.bags}
                    getAllBags={this.getAllBags}/>
                <div></div>
                <Link to="/map">Track Bags</Link>

                

            </div>
            </BagWrapper>

            
        );

    }
}

export default ShowView;