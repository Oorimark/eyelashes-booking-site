import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AppContext } from '../app-context/app-context';

export default function ContactPage(){
    const { setDialogBox, setOpenSuccessSnackbar } = React.useContext(AppContext)
    return(
        <React.Fragment>
            <div className="contact-component-container">
                <div className="contact-header">
                    <h5>Contact Us</h5>
                    <h3>Reach out to us and we reach out to you</h3>
                </div>
                <div className="form">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <div>
                            <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            defaultValue=""
                            />
                            <TextField
                            id="outlined-multiline-flexible"
                            label="Message"
                            multiline
                            maxRows={5}
                            />
                            </div>
                            </Box>
                        <button className="cta pill-button" onClick={_ => {
                            setDialogBox({
                                open: false
                            }); setOpenSuccessSnackbar({
                                open: true,
                                msg: "Your message has been sent"
                            })
                        }}>Send</button>
                </div>
            </div>
        </React.Fragment>
    )
}