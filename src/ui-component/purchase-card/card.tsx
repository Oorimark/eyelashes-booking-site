import React from 'react'
import PlaceHolderImage from '../../assets/Artificial-eyelashes.jpg';

export default function PCard(){
    return (
      <React.Fragment>
        <div className="purchase-card-container">
          <div className="img-section">
            <img src={PlaceHolderImage} alt="" />
          </div>
          <div className="text-container">
            <div className="text">
              <div className="header">
                <h6 className="name">Eye Lashes</h6>
                <p className="price">€12</p>
              </div>
              <p>
                Book your appointment today and
                experience the difference for yourself!
              </p>
            </div>
            <div className="ratingTime-container">
                <div className="rating">
                    <p>5.0</p>
                </div>
                <div className="duration">
                    <p>10-20min</p>
                </div>
            </div>
            <button className="book-cta pill-button">Book</button>
          </div>
        </div>
      </React.Fragment>
    );
}