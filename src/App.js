import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./App.css";
import CustomMap from './CustomMap'
import ReactDOM from "react-dom";


function App() {  
  return (
    <CustomMap/>
  );
}

ReactDOM.render(<App />,  document.getElementById("root"));

export default App