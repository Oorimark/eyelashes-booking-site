import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ContactPage(){
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
                </div>
            </div>
        </React.Fragment>
    )
}