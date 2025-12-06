import React from 'react'
import "../styles/location.css";
import {  Link} from "react-router-dom";

const Locations = () => {
  return (
    <div className='location-container'>
      <div className="relative">
      <img src="/images/l1.webp" alt="" className="locationimg" /></div>
      <div className="absolute">
        <h1 className="location-title">Locations</h1>
        <p className="location-content">We are glad to have multiple locations! </p>
        <button className="location-button">Find our 4</button>
      </div>
     
        <h1 className="loc-head">
          Location
        </h1>
         <div className="location-box">
        <div className="box1">
          <h1 className="onetitle">Spring Hill</h1>
          <p className="onepara">Spring Hill Office
<br/>
4075 Mariner Blvd
<br/>
Spring Hill, FL 34609
<br/>
Mon-Thur: 7:00AM – 5:30PM</p>
          <button className="onebutton"><Link to ="/about">More Info</Link></button>

        </div>
        <div className="box1">
          <h1 className="onetitle">Villages/Lady Lake</h1>
          <p className="onepara">Villages/Lady Lake Office
<br />
309 Orange St.
<br />
Lady Lake, FL 32159
<br />
Mon-Thur: 7:00AM – 5:30PM</p>
          <button className="onebutton"><Link to ="/about">More Info</Link></button>

        </div>
         <div className="box1">
          <h1 className="onetitle">Crystal River</h1>
          <p className="onepara">

Crystal River Office
<br />
11515 W Emerald Oaks Dr
<br />
Crystal River, FL 34428
<br />
Mon-Thur: 7:00AM – 5:30PM</p>
          <button className="onebutton"><Link to ="/about">More Info</Link></button>

        </div>
         <div className="box1">
          <h1 className="onetitle">
New Port Richey</h1>
          <p className="onepara">

New Port Richey
<br />
11325 Little Road
<br />
New Port Richey, FL 34654
<br />
Mon-Thur: 7:00AM – 5:30PM</p>
          <button className="onebutton"><Link to ="/about">More Info</Link></button>

        </div>
      </div>
    <div className="location">
  <div className="loc-head">Our Locations</div>
  <div className="loc">
    <p>Spring Hill Office
<br/>
4075 Mariner Blvd
<br/>
Spring Hill, FL 34609
<br/>
Mon-Thur: 7:00AM – 5:30PM</p>
<br/>
<p>
Villages/Lady Lake Office
<br/>
309 Orange St.
<br />
Lady Lake, FL 32159
<br />
Mon-Thur: 7:00AM – 5:30PM
 </p>
    <p>

 Crystal River Office
<br />
11515 W Emerald Oaks Dr
<br />
Crystal River, FL 34428
<br />
Mon-Thur: 7:00AM – 5:30PM</p>
<br />
<p>
 New Port Richey 
 <br />
 11325 Little Road
 <br />
New Port Richey, FL 34654
<br />
Mon-Thur: 7:00AM – 5:30PM</p>
  </div>
</div>
    </div>
  )
}

export default Locations