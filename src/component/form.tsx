import { RadioGroup } from '@mui/material'
import React from 'react'

export default function Form(){
    return (
      <React.Fragment>
        <div className="form-container">
          <div className="wrapper">
            <div className="header">
              <h5>Fill Details</h5>
              <h3>Please Fill the Form Below</h3>
              <p>
                The information provided below would be used strictly as to know
                you we'd also know how to give you maximum satisfaction
              </p>
            </div>
            <form action="">
              <input type="text" placeholder="First Name " />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="phone" placeholder="Phone Number" />
              <input type="number" placeholder="Age" />
              <RadioGroup>

              </RadioGroup>
              <button className='pill-button'>Submit</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
}