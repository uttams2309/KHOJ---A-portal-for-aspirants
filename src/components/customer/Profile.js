import React, { Component } from 'react';
import TopAll from './TopAll';
import OverviewBar from "./OverviewBar";
import './Profile.css';

export default class Profile extends Component {
    render() {
        return (
            <div className='Profile'>
                <TopAll value='Welcome to our Portal' name='Taimur' />
                <OverviewBar />
            </div>
        )
    }
}
