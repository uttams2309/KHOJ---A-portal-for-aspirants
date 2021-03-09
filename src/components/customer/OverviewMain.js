import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import './OverviewMain.css';

class OverviewMain extends Component {
    render() {
        const style = {
            width: '980px',
            height: '300px',
            borderRadius:'5px',
          }
          
          const containerStyle = {
            position: 'relative',  
            
            width: 'auto',
            height: 'auto'
          }
        return (
            <div className='OverviewMain'>
               
                            <Map className="map" 
                                google={this.props.google} 
                                zoom={15} 
                                style={style}
                                containerStyle={containerStyle}
                                initialCenter={{
                                    lat: 30.3165,
                                    lng: 78.0622
                                }}
                            >
            
                                <Marker onClick={this.onMarkerClick}
                                        name={'Current location'} />
                        
                                <InfoWindow onClose={this.onInfoWindowClose}>
                                    
                                </InfoWindow>
                            </Map>
                        
                            <Dropdown className='drop' >
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    Hostels
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Sharma</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Gupta</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Negi</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className='drop2' >
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    Tiffins
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Singh</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Acharya</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Kharbanda</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        
            </div>
        )
    }   
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCzpzqgrjadRHloEtZovwaCjV7wqKxg8Qk")
  })(OverviewMain)