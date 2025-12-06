import React from 'react'
import "../styles/service.css";
const Services = () => {
  return (
    <div className='service-container'>
      <div className="model1">
        <div className="white">
        <p className="onehead">Our Services</p>
        <p className="onecontent">The best audiological care for each and every patient

</p>
</div>
      </div>
      <div className="blue">
        <div className="blue-head">Audiological Care at Davis Family Hearing</div>
        <div className="blue-content">At Davis Family Hearing, we are equipped to assess every aspect of the auditory system, from the ear to the brain. We also partner with multiple otolaryngologists and otologists in the Tampa Bay Area to provide the highest level of care possible for any and all disorders of the ear. We serve as a diagnostic center and partner with local Ear, Nose, and Throat associates to perform our cochlear implant and bone-anchored instrument surgeries</div>
      </div>
      <div className="service-image">
        <div className="image1">
          <img src="/images/s1.avif" alt="" />
        </div>
        <div className="image2">
          <img src="/images/s2.avif" alt="" />
        </div>
      </div>
      <div className="services">
  <div className="services-row">

    <div className="audit">
      <h1 className="audithead">Auditing Service</h1>
      <ul>
        <li>Diagnostic Hearing Evaluations</li>
        <li>Pure Tone Audiometry Test</li>
        <li>Bone Conduction Testing</li>
        <li>Tympanometry</li>
        <li>Acoustic Reflex Testing</li>
        <li>Tinnitus Management</li>
        <li>Cerumen (wax) removal</li>
        <li>Otoacoustic emissions testing</li>
        <li>Cochlear implant evaluations</li>
      </ul>
    </div>

    <div className="hearing">
      <h1 className="hearinghead">Hearing Service</h1>
      <ul>
        <li>Hearing Aid Selection</li>
        <li>Hearing Aid Fitting and Programming</li>
        <li>Hearing Aid Instruction and Verification</li>
        <li>Hearing Aid Servicing and Maintenance</li>
        <li>Hearing Aid Accessories</li>
        <li>Custom Ear Protection</li>
        <li>Earmolds</li>
        <li>Cochlear implant initial activations</li>
        <li>Cochlear implant mapping</li>
        <li>Bone-anchored instrument fitting</li>
        <li>Real ear measurements</li>
      </ul>
    </div>

  </div>
</div>
 <div className="location">
  <div className="loc-head">Our Locations</div>
  <div className="loc">
    <p className="para">Spring Hill Office
<br/>
4075 Mariner Blvd
<br/>
Spring Hill, FL 34609
<br/>
Mon-Thur: 7:00AM – 5:30PM</p>
<br/>
<p className="para">
Villages/Lady Lake Office
<br/>
309 Orange St.
<br />
Lady Lake, FL 32159
<br />
Mon-Thur: 7:00AM – 5:30PM
 </p>
    <p className="para">

 Crystal River Office
<br />
11515 W Emerald Oaks Dr
<br />
Crystal River, FL 34428
<br />
Mon-Thur: 7:00AM – 5:30PM</p>
<br />
<p className="para">
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

export default Services