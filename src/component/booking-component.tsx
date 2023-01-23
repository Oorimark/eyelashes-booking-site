import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaceHolderImage from '../assets/Artificial-eyelashes.jpg'
import { DataSchema, QueryManager } from '../api/queryManager/query-manager';
import { AppContext } from '../app-context/app-context';
import { getDetails } from '../utli/localStorageWorkers';

type IProps = {
    id: string
}
export default function BookingComponent({ id }: IProps){
    const { bookingDetails, setBookingDetails, setOpenSuccessSnackbar } = React.useContext(AppContext)
    const [value, setValue] = React.useState< any | Dayjs | null>(
    dayjs('2014-08-18T21:11:54'),
  );

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };
    React.useEffect(() => {
        console.log(value['$d'])
    }, [value])

    const query = new QueryManager()    
    const props = query.queryOneData(id)

    const saveBooking = () => {
        setBookingDetails([
            ...bookingDetails, 
            {
                userDetails: getDetails(),
                bookedItemDetails: props,
                appointmentDate: value ? value['$d'] : ""
            }
        ]);
        setOpenSuccessSnackbar({
            open: true,
            msg: "Appointment has been booked successfully"
        });
    }

    return(
        <React.Fragment>
            <div className="booking-component-container">
                <div className="wrapper">
                    <div className="img-container">
                        <img src={PlaceHolderImage} alt="" />
                    </div>
                    <main>
                        <div className="header">
                            <h3 className='title'>{props.name}</h3>
                            <div className="extras">
                                <FavoriteIcon />
                                <h2 className='price'>{props.price}</h2>
                            </div>
                        </div>
                        <section className="description">
                            <h5>Description</h5>
                            <p>{props.description}</p>
                        </section>
                        <section className="requirements">
                            <h5>Requirements</h5>
                            <ul>
                                {
                                    props.requirements.map((item, index) => (

                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        </section>
                        <section className="bookings">
                            <h5>Bookings</h5>
                            <div className="date">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                    <MobileDatePicker
                                    label="Appointment Date"
                                    inputFormat="DD/MM/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                                    <TimePicker
                                    label="Appointment Time"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                                </LocalizationProvider>
                            </div>
                        </section>
                        <button className="cta booking-component-cta pill-button" onClick={saveBooking}>Complete Booking</button>
                    </main>
                </div>
            </div>
        </React.Fragment>
    )
}