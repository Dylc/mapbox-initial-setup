import React from 'react';
import mapboxgl from 'mapbox-gl';
require('dotenv').config()

/**
 * Set acces token that one can get from mapbox after registration
 * There are different access right
 * To see full list & create access token 
 * visit this page https://account.mapbox.com/access-tokens/create/
 */
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN


class MyMap extends React.Component  {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [35.2137, 31.7683], // Jerusalem coordinates
      zoom: 5,
      hash: true,
    });
  };


  render() {
    return (
      <div ref={el => this.mapContainer = el} style={{ height: "100%", width: "100%" }} />
    )
  }
}
export default MyMap;
