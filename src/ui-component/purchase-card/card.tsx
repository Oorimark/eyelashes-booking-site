import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceHolderImage from '../../assets/Artificial-eyelashes.jpg';
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from '../../app-context/app-context';
import BookingComponent from '../../component/booking-component';
import Form from '../../component/form';

type IProps = {
  id: string,
  name: string,
  price: string,
  shortDescription: string,
  rating: string,
  duration: string,
}

export default function PCard(props: IProps){
  const { filledForm, setDialogBox } = React.useContext(AppContext)
  const book = (id: string) => {
    if (filledForm){
      setDialogBox(
        {
          open: true,
          children: <BookingComponent id={id} />
        }
      )
    }
    else {
      setDialogBox(
        {
          open: true,
          children: <Form />
        }
      )
    }
  }
    const nameFormatter = (text: string) => {
    if (text.length < 14){
      return (text + <br/>)
    }
    return text;
  }
    return (
      <React.Fragment>
        <div className="purchase-card-container">
          <div className="img-section">
            <img src={PlaceHolderImage} alt="" />
          </div>
          <div className="text-container">
            <div className="text">
              <div className="header">
                <h6 className="name">
                  {
                    props.name
                  }
                </h6>
                <p className="price">{props.price}</p>
              </div>
              <p>
                { props.shortDescription }
              </p>
            </div>
            <div className="ratingTime-container">
                <div className="rating">
                    <StarRateIcon sx={{fontSize: 'medium', color: 'rgb(247, 247, 10)'}}/>
                    <p>{props.rating}</p>
                </div>
                <div className="duration">
                    <AccessTimeIcon sx={{fontSize: 'medium'}}/>
                    <p>{props.duration}</p>
                </div>
            </div>
            <button className="book-cta pill-button" onClick={_ => book(props.id)}>View</button>
          </div>
        </div>
      </React.Fragment>
    );
}

                // Book your appointment today and
                // experience the difference for yourself!