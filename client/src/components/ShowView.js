import React, { Component } from 'react';

class ShowView extends Component {
     state = {
    bags: ['hkhkhk'],
    flight: {
        airline: 'Razor'
    }
  };
    render() {
        return (
            <div>
                <h1>Bag Information</h1>
                <h1> New Bag Button </h1>
                <h1>New Bag Appears</h1>
                <h1>New Bag Added to Page</h1>
            </div>
        );
    }
}

export default ShowView;