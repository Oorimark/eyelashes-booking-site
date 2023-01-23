import React from 'react'
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import List from "@mui/material/List";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from '../../assets/logo.png'
import { AppContext } from '../../app-context/app-context';
import Form from '../../component/form';
import BookedCard from '../booked-card/booked-card';
import {Link} from 'react-router-dom'

export default function Nav(){
    const [drawerState, setDrawerState] = React.useState(false)
    const [bookedServicesDrawer, setBookedServicesDrawer] = React.useState(false)
    const appContext = React.useContext(AppContext)
    const {bookingDetails, setDialogBox} = React.useContext(AppContext)

    const openForm = () => {
      appContext.setDialogBox({
                open: true,
                children: <Form/>
              })
    }

    const generateBookedCards = () => {
      console.log(bookingDetails)
      return (bookingDetails.map(detail => (
        <BookedCard 
          name = {detail.bookedItemDetails.name}
          price = {detail.bookedItemDetails.price}
          status = "Booked" 
        />
      )))
    }

    const viewBookedServices = () => {
      setBookedServicesDrawer(true)
    }
    return (
      <React.Fragment>
        <Drawer
          anchor="left"
          open={drawerState}
          onClose={(_) => setDrawerState(false)}
        >
          <List>
            {["Home", "About", "Booking", "Contact", "Fill Details"].map((text, index) => (
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
        <Drawer
          anchor="right"
          sx={{width: "50rem"}}
          open={bookedServicesDrawer}
          onClose={(_) => setBookedServicesDrawer(false)}
        >
          <List>
            {
              bookingDetails.length ? (
                bookingDetails.map((detail, index) => (
              <ListItem key={index} disablePadding>
                   <BookedCard 
                      name = {detail.bookedItemDetails.name}
                      price = {detail.bookedItemDetails.price}
                      status = "Booked" 
                    />
              </ListItem>
               ))
              ) : (<h6 style={{padding: '5rem'}}>No Booking has been made</h6>)
            }
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
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="">About</Link> </li>
              <li> <Link to="all_services">Booking</Link></li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="extras">
              <div className="appointment" onClick={viewBookedServices}>
                <span>{bookingDetails.length}</span>
                <EventAvailableIcon sx={{ fontSize: "2.3rem" }}/>
              </div>
              <div className="fill-details-cta" onClick={openForm}>Fill Details</div>
          </div>
        </nav>
      </React.Fragment>
    );
}