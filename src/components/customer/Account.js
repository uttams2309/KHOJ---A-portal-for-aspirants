import React, { Component } from 'react'
import TopAll from './TopAll';
import OverviewBar from "./OverviewBar";
import './Account.css';

export default class Account extends Component {
    render() {
        return (
            <div className='Account'>
            <TopAll value='Welcome to our Portal' name='Taimur' />
            <OverviewBar />
        </div>
        )
    }
}
