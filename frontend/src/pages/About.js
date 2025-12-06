import React from 'react'
import "../styles/about.css";
import { Link} from "react-router-dom";
const About = () => {
  return (
    <div className="about">
    <div className="about-container">
      <div className="about-one">
          <p className="one-title">Davis Family Hearing: Who We Are</p>
          <p className="one-content">Our mission is to create a warm, welcoming environment that offers the highest level of care in medical audiology.
          <br/>
           <br/>
            <br/>
          We have state-of-the-art equipment to accurately diagnose and treat hearing loss. Our staff consists of experienced board-certified Doctors of Audiology and Hearing Instrument Specialists who offer the latest knowledge in hearing healthcare and management options. We guide our patients through all treatment processes and answer all your questions along the way.
        </p>
      </div>
    <div className="about-two">
      <img className="one-img" src="/images/about1.avif" alt="overview" />
    </div>
    </div>
    <div className="about-container">
      
    <div className="about-two">
      <img className="one-img" src="/images/about2.avif" alt="overview" />
    </div>
    <div className="about-one">
           <p className="one-content">Davis Family Hearing is the leader in hearing aid fittings; however, we offer so much more. When hearing aids are not enough, we offer bone-anchored instruments, cochlear implants, tinnitus treatment, and more. Our services are designed for patients of all ages. We offer specialized tests including auditory brainstem response, otoacoustic emissions, visual reinforcement, audiometry, and auditory processing disorder testing.

            We are here to help you with all of your hearing and balance needs. We are providers for all insurances. </p>
          <p className='two-content'>Call (800) 610-0399 
<br />
<br />
today to schedule your appointment.
You can also  <Link to="/appointment" className='about-link'>Click Here</Link> to schedule your appointment</p>
      </div>
    </div>

    <div className="about-team">
      <div className="team-title">Our Teams</div>
      <div className="team-image">
        <div className="image1">
        <img src="/images/d1.avif" alt="d1" />
        <p className="team-content">Dr. Madison Dowdy
          <br />
        Audiologist
        <br />
        
        Spring Hill Office</p></div>
        <div className="image2">
        <img src="/images/d2.avif" alt="d2" />
        <p className="team-content">Dr. Abigail Nemo
<br />
Audiologist
<br />
Spring Hill Office</p>
        </div>
        <div className="image3">
        <img src="/images/d3.avif" alt="d3" />
        <p className="team-content">
          
Dr. Joanie Davis
<br />
Owner, Audiologist
          </p></div>
        <div className="image4">
        <img src="/images/d4.avif" alt="d4" />
        <p className="team-content">
        Bianca Castillo, HIS
<br />
Hearing Instrument Specialist
<br />
New Port Richey Office
          </p></div>
        <div className="image5">
        <img src="/images/d5.avif" alt="d5" />
        <p className="team-content">
          
McKenzie Priest, HIS
<br />
Hearing Instrument Specialist
<br />
Crystal River Office
        </p>
        </div>
        <div className="image6">
        <img src="/images/d6.avif" alt="d6" />
        <p className="team-content">
          Chris O'Brien, HIS
<br />
Hearing Instrument Specialist
<br />
Lady Lake/Villages Office
        </p>
        </div>
      </div>
    </div>
    <div className="about-office">
      <div className="team-title">Office Staff</div>
      <div className="team-image">
        <div className="image1">
        <img src="/images/o1.avif" alt="d1" />
        <p className="team-content">
          
Ashley Evans
<br />
Practice Administrator
          </p></div>
        <div className="image2">
        <img src="/images/o2.avif" alt="d2" />
        <p className="team-content">
          Flora Hibner
<br/>
Treatment Coordinator and
<br/>
Audiology Assistant
<br/>
Crystal River Office
        </p>
        </div>
        <div className="image3">
        <img src="/images/o3.avif" alt="d3" />
        <p className="team-content">
          Alyssa Hunnicut
<br />
Treatment Coordinator
<br />
Spring Hill Office

          </p></div>
        <div className="image4">
        <img src="/images/o4.avif" alt="d4" />
        <p className="team-content">
       
Kaitlin Ford
<br />
Patient Care Coordinator
<br />
New Port Richey Office
          </p></div>
        <div className="image5">
        <img src="/images/o5.avif" alt="d5" />
        <p className="team-content">
          
Brittani Juanis
<br />
Audiology Assistant and Treatment Coordinator
<br />
Spring Hill Office

        </p>
        </div>
        <div className="image6">
        <img src="/images/o6.avif" alt="d6" />
        <p className="team-content">
        Samantha Ibsen
<br />
Audiology Assistant
<br />
Spring Hill Office
        </p>
        </div>
         <div className="image7">
        <img src="/images/o7.avif" alt="d6" />
        <p className="team-content">
          Briana Morgan
<br />
Patient Care Coordinator
<br />
Crystal River Office
        </p>
        </div>
         <div className="image8">
        <img src="/images/o8.avif" alt="d6" />
        <p className="team-content">
         
Kristen McLaughin
<br />
Treatment Coordinator
<br />
The Villages Office
        </p>
        </div>
         <div className="image9">
        <img src="/images/o9.avif" alt="d6" />
        <p className="team-content">
         Madisson Gobin
<br />
Treatment Coordinator
<br />
New Port Richey Office
        </p>
        </div>
         <div className="image10">
        <img src="/images/o10.avif" alt="d6" />
        <p className="team-content">
          Kellsea Audit
<br />
Patient Care Coordinator
<br />
The Villages Office
        </p>
        </div>
         <div className="image11">
        <img src="/images/o11.avif" alt="d6" />
        <p className="team-content">
         Destiny Flammia
<br />
Patient Care Coordinator
<br />
Spring Hill Office
        </p>
        </div>
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

export default About