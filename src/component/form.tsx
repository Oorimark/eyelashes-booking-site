import { RadioGroup } from '@mui/material'
import React from 'react'
import { AppContext } from '../app-context/app-context'
import { storeDetails } from '../utli/localStorageWorkers'

export type FormSchema = {
  firstName: string,
  lastName: string,
  email: string,
  phone: number,
}

export default function Form(){
  const appContext = React.useContext(AppContext)
  const { openSuccessSnackbar, setOpenSuccessSnackbar } = appContext
  const firstNameRef = React.useRef<any>(null)
  const lastNameRef = React.useRef<any>(null)
  const emailRef = React.useRef<any>(null)
  const phoneRef = React.useRef<any>(null)
  
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const response = storeDetails(
        {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value
        }
      )
      if (response){
        appContext.setFilledForm(true)
        appContext.setDialogBox({ // close dialog box
          open: false
        })
        setOpenSuccessSnackbar(
          {
            open: true,
            msg: "Your details has been saved"
          }
        )
      }
  }
    return (
      <React.Fragment>
        <div className="form-container">
          <div className="wrapper">
            {
              appContext.filledForm ? (
                <h6>Your Information is still stored</h6>
              ) : ""
            }
            <div className="header">
              <h5>Fill Details</h5>
              <h3>Please Fill the Form Below</h3>
              <p>
                The information provided below would be used strictly as to know
                you we'd also know how to give you maximum satisfaction
              </p>
            </div>
            <form action="" onSubmit={e => formSubmit(e)}>
              <input type="text" placeholder="First Name " ref={firstNameRef}/>
              <input type="text" placeholder="Last Name" ref={lastNameRef}/>
              <input type="email" placeholder="Email" ref={emailRef}/>
              <input type="phone" placeholder="Phone Number" ref={phoneRef}/>
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