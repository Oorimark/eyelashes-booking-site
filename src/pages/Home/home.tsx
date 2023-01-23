import React from 'react'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Nav from '../../ui-component/navigation/nav';
import HeroImg from '../../assets/hero-img.png'
import AboutImg from '../../assets/feature-img.png'
import PCard from '../../ui-component/purchase-card/card';
import Form from '../../component/form';
import { AppContext } from '../../app-context/app-context';
import { QueryManager } from '../../api/queryManager/query-manager';


const cards = () => {
  const query: QueryManager = new QueryManager()
  const data = query.queryData(2)
  return(
    data.map(data => (
    <PCard 
      id = {data.id}
      name = { data.name }
      price = {data.price}
      shortDescription = {data.description.slice(0, 60) + "..."}
      rating = {data.rating}
      duration = {data.duration}
      key = {data.id}
    />
   ))
  )
}

export default function HomePage(){
    const appContext = React.useContext(AppContext)

    const openForm = () => {
      appContext.setDialogBox({
                open: true,
                children: <Form/>
            })
    }
    return (
      <React.Fragment>
        <div className="home-container">
          <Nav />
          <section className="hero-section">
            <div className="veil"></div>
            <div className="img-container">
                <img src={HeroImg} alt="" />
            </div>
            <div className="text-container">
              <h1>Unleash the power of your lashes</h1>
              <p>
                Get the lashes you've always wanted with our professional
                eyelash extension services. Book your
                appointment today and experience the difference for yourself!
              </p>
              <a href="#booking-section"><button
               className="hero-cta cta pill-button">Book</button>
               </a>
            </div>
          </section>
          <section className="favorite-section"></section>
          <section className="aboutUs-section" id="about-section">
            <div className="img-container">
              <img src={AboutImg} alt="" />
            </div>
            <div className="text-container">
              <div className="header">
                <h5>About Us</h5>
                <h3>What our Mission is</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dicta voluptatum omnis perferendis tempore tenetur eos numquam qui sunt expedita ad ipsa, fugiat quas dolor impedit cumque officiis blanditiis voluptas.
              </p>
              <button className="about-cta cta pill-button">See More</button>
            </div>
          </section>
          <section className="features-section"></section>
          <section className="booking-section" id="booking-section">
            <div className="header">
                <div className="header-text">
                    <h5>Bookings</h5>
                    <h3>Lorem Ipsum Est Nst Gin Fugiat</h3>
                </div>
                <div className="extra-content">
                  <ul>
                    <li>All</li>
                    <li>Micro service</li>
                    <li>Eye Lashes</li>
                    <li>Parity Test</li>
                  </ul>
                </div>
            </div>
            <div className="card-container">
              { cards() }
            </div>
            <button className="cta booking-section-cta pill-button">
                <div className="wrapper">
                    Load More 
                  <TrendingFlatIcon />
                </div>
              </button>
          </section>
        </div>
      </React.Fragment>
    )
} 