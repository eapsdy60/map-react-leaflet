import { marker } from 'leaflet'
import React, {  Component, useState } from 'react'
import  { Map , TileLayer, Marker, Popup } from 'react-leaflet'


export default class CustomMap extends React.Component{
    constructor() {
        super();
        this.state = {
        markers: [[19.4100819, -99.1630388]]
        };
  }

    addMarker = (e) => {
        const {markers} = this.state
        markers.push(e.latlng)
        this.setState({markers})
      }

    render(){

        return (
            <div> 
               <button  > Find My Location </button>
                <Map center={[40.632667, 23.263345]} zoom={12} onClick={this.addMarker}>
                    <Marker position={[40.632667, 23.263345]} >
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />    
                     {this.state.markers.map((position, idx) => 
                        <Marker key={`id-${idx}`} position={position}>
                        <Popup>
                            <span>Marker id : {idx} </span>
                        </Popup>
                        </Marker>
                    )}
                    
                </Map>
            </div>
        )

    }
}





