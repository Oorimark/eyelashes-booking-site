import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Nav from '../../ui-component/navigation/nav'
import PCard from '../../ui-component/purchase-card/card'
import { cards } from '../Home/home';

export default function BookingPage(){
    return(
        <React.Fragment>
            <Nav />
            <div className="booking-page-container">
                <div className="wrapper">
                    <div className="header">
                        <div className="text-container">
                            <h5>Booking</h5>
                            <h3>Lorem ipsum dolor sit. </h3>
                        </div>
                        <div className="action">
                            <div className="search-bar">
                                <input type="text" name="search" id="" placeholder='search'/>
                            </div>
                            <div className="category-section">
                                <form action="">
                                    <select name="category" id="">
                                        <optgroup>
                                        <option value=""></option>
                                        <option value="Micro services">Micro Services</option>
                                        <option value="Eye Lashes">Eye Lashes</option>
                                        <option value="Parity Test">Parity Test</option>
                                        </optgroup>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        { cards() }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


