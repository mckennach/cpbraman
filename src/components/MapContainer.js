import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    const style = {
      width: '100%',
      height: '50%'
    }
    return (
      <Map
      style={style}
      initialCenter={{
            lat: 41.464331,
            lng: -81.514674
          }}
      google={this.props.google}
      zoom={14}
      >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}>
                    <div>
                      <h1>Charles P. Braman</h1>
                    </div>
                </InfoWindow>


      </Map>
    );
  }
}




export default GoogleApiWrapper({
  apiKey: ('AIzaSyDHrhao1IA7ypJNw-zx1Yi_KykLHjuaMoY')
})(MapContainer)
