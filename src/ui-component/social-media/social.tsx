import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SocialComponent(){
    return(
        <React.Fragment>
            <div className="social-component-container">
                <div className="facebook">
                    <FacebookOutlinedIcon sx={{fontSize: 'medium'}}/>
                </div>
                <div className="twitter">
                    <TwitterIcon sx={{fontSize: 'medium'}}/>
                </div>
                <div className="instagram">
                    <InstagramIcon sx={{fontSize: 'medium'}}/>
                </div>
            </div>
        </React.Fragment>
    )
}