import React from 'react'
import "../styles/blog.css";
const Blog = () => {
  return (
    <div className='blog-container'>
      <div className="blog-title">Blog</div>
      <div className="line"></div>
      <p className='blog-para'>Tune into clearer living—visit our blog at Davis Family Hearing and discover hearing health insights that make a difference.</p>
    <div className="card">
      <div className="card1">
        <div className="one">
        <span className='paraone'>Over-The-Counter (OTC) Hearing Aids vs. Prescription Hearing Aids
<br/>
<br/>
By: Dr. Joanie Davis
<br/>
<br/>
It is a common misconception that to treat hearing loss, one must simply turn the
volume up. If that were true, people who have hearing loss would love OTC hearing
aids. In my 20 years of treating hearing loss, I have never met a person who loves their
OTC hearing aids. Here is why.</span>
<br />
<button className="one-button">Read More</button></div>
<div className="two">
  <img className="oneimage" src="/images/c2.webp" alt="overview" />
</div>
      </div>
       <div className="card2">
        <div className="two">
        <span className='paratwo'>Is there a Cure for Tinnitus?
          <br />
<br />
By: Dr. Joanie Davis
<br />
<br />
There is a lot of misinformation regarding tinnitus treatment. When searching
tinnitus “cures” online be careful of misleading ads. There are a lot of pills,
supplements, oils, etc. promising false results. They do not work. 

You will be
successful if you see a qualified hearing healthcare professional who can guide you
through your treatment and success in silencing annoying tinnitus.</span>
<br />
<button className="twobutton">Read More</button></div>
<div className="two">
  <img className="twoimage" src="/images/c3.webp" alt="overview" />
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

export default Blog