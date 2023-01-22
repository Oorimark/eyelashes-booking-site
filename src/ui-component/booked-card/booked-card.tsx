import React from 'react'

export default function BookedCard(){
    return(
        <React.Fragment>
            <div className="booked-card-container">
                <div className="card">
                    <div className="text-info">
                        <div className="title">Eye lashes</div>
                        <div className="status">Booked</div>
                    </div>
                    <div className="price">€12</div>
                </div>
            </div>
        </React.Fragment>
    )
}