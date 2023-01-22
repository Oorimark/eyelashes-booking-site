import React from 'react'
import PlaceHolderImage from '../assets/Artificial-eyelashes.jpg'


export default function BookingComponent(){
    const requirements = [
        "Get the lashes you've always wanted with our professional eyelash extension services. Book your appointment today and experience the difference for yourself!",
        "Get the lashes you've always wanted with our professional eyelash extension services. Book your appointment today and experience the difference for yourself!",
        "Get the lashes you've always wanted with our professional eyelash extension services. Book your appointment today and experience the difference for yourself!",
    ]
    return(
        <React.Fragment>
            <div className="booking-component-container">
                <div className="wrapper">
                    <div className="img-container">
                        <img src={PlaceHolderImage} alt="" />
                    </div>
                    <main>
                        <div className="header">
                            <h3 className='title'>Eye lashes</h3>
                            <div className="extras">
                                <h2 className='price'>€12</h2>
                            </div>
                        </div>
                        <section className="description">
                            <h5>Description</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos maiores nulla, autem incidunt modi beatae, amet reiciendis accusantium officiis sint, ad blanditiis culpa in. Eveniet nesciunt veniam harum? Illo, odit.
                            Odio sequi sit illo accusamus id quidem, est perspiciatis harum iure, architecto, in natus quaerat sunt distinctio repellendus perferendis cupiditate nam? Reprehenderit hic deleniti accusamus fugiat praesentium, architecto nulla fugit?</p>
                        </section>
                        <section className="requirements">
                            <h5>Requirements</h5>
                            <ul>
                                {
                                    requirements.map((item, index) => (

                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        </section>
                        <section className="bookings">
                            <h5>Bookings</h5>
                        </section>
                    </main>
                </div>
            </div>
        </React.Fragment>
    )
}