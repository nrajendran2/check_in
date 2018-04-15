import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import axios from 'axios'


class MapView extends Component {


    getGeoCode = async() => {
   const geoCode = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params:{
         address: location,
         key: 'AIzaSyDz9GTRPlsmQAElgY8CjxX650o1n4h-Ccs'
     }
   })
   try{
     const geoCodeInfo = geoCode.data.results[0].formatted_address
   }
  catch(err){
    console.log(err)
  }
 }


    

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default MapView;