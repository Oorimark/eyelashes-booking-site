import React from 'react'
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from '../../assets/logo.png'

export default function Nav(){
    const [drawerState, setDrawerState] = React.useState(false)
    return (
      <React.Fragment>
        <Drawer
          anchor="left"
          open={drawerState}
          onClose={(_) => setDrawerState(false)}
        >
          <List>
            {["Home", "About", "Booking", "Contact"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <nav className="navigation-component-container">
          <div className="hamburger" onClick={(_) => setDrawerState(true)}>
            <MenuIcon sx={{ fontSize: "2rem" }} />
          </div>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="desktop-menu">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Booking</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="fill-details-cta">Fill Details</div>
        </nav>
      </React.Fragment>
    );
}