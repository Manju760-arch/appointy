import React from 'react'
import "../styles/overview.css";
import { Link} from "react-router-dom";
const Overview = () => {
  return (
    <div className="overview">
    <div className="overview-banner">
      <div className='textone'>Davis Family Hearing
      </div>
<div className='texttwo'>Hear the difference</div>
 
    </div>
    <div className="overview-two">
      <div className="two-one">
      <div className="two-title">Welcome to Davis Family Hearing</div>
    <div className="two-content">At Davis Family Hearing, we treat the entire patient – not just their hearing loss. We take the time to understand your individual hearing loss needs and help keep you on track to living your best life possible.Hearing loss, which affects millions of Americans each year, can be a challenging journey for anyone.<br />
    <br />
    <br />
Davis Family Hearing offers state-of-the-art diagnostic equipment and an unbeatable, compassionate team of doctors of audiology and hearing instrument specialists who will make sure you feel like family as soon as you walk through our doors.</div>
<Link to="/about"><div className="two-button">Read More</div></Link></div>
<div className="two-two">
<img className="two-img" src="/images/two.avif" alt="overview" />
</div>
    </div>
<div className="overview-three">
  <div className="three-title">Why Choose Davis Family Hearing?</div>
  <div className="three-content">At Davis Family Hearing, we offer expert solutions for all of your hearing and tinnitus needs. Our team has access to any and every type of hearing device to give you back the hearing clarity you are looking for and treat any annoying tinnitus. If you have profound or severe hearing loss, you may be a candidate for cochlear implants. We offer a full range of services and evaluations related to cochlear implants and bone-anchored hearing devices to take you through your entire hearing loss journey.</div>
</div>
<div className="overview-four">
  <div className="four-title">Gallery</div>
  <div className="gallery-container">
    <img className="four-img" src="/images/c1.webp" alt="overview" />
    <img className="four-img" src="/images/c2.webp" alt="overview" />
    <img className="four-img" src="/images/c3.webp" alt="overview" />
    
    <img className="four-img" src="/images/c4.webp" alt="overview" />
    <img className="four-img" src="/images/c5.webp" alt="overview" />
    <img className="four-img" src="/images/c6.webp" alt="overview" />
  </div>
</div>
<div className="overview-five">
  <div className="five-head">Insurance Policy</div>
  <div className="five-sub">We are providers of most insurances</div>
  <div className="five-content">We are here to help you with all of your hearing and balance needs

</div>
</div>
<div class="text-slider">
  <span className='span'>United Healthcare</span>
  <span className='span'>Aetna</span>
  <span className='span'>Humana</span>
   <span className='span'>Signa</span>
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

export default Overview