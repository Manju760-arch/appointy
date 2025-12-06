import React from 'react'

import "../styles/hearing.css";
import { Link} from "react-router-dom";
const Hearing = () => {
  return (
    <div className='hearing'>
      <div className="hearing1">
        <h1 className="honehead">
          Hearing Aids
        </h1>
        <p className="hpara1">We carry the most advanced hearing aids to help you, no matter the severity of your hearing loss.</p>
        <Link to="/appointment"><button className="hbutton1">Schedule Appointment</button></Link></div>
         <div className="hearing2">
          <h1 className="twohead">Hearing Aids at Davis Family Hearing</h1>
          <p className="twopara">There are 48 million Americans who have hearing loss. Of those people, only 20 percent actually wear hearing aids. Untreated hearing loss can do more damage than originally thought, and those who seek treatment see improvements in all aspects of their lives. Individuals who choose to treat their hearing loss with hearing aids are known to have better overall health, professional success, and emotional well-being than those don’t.

 <br />
<br />
At Davis Family Hearing, we carry the latest hearing aid technology. Because we are an independently owned practice, we are able to work with all of the major hearing aid manufacturers, providing you with the best options available. From hearing aids with Bluetooth connectivity to devices that are completely rechargeable, we carry the latest technology that will help you hear better.</p>
       <img className="twoim" src="/images/ser1.webp" alt="overview" />
 
  </div>
  <div className="hearing3">
    <h2 className="threehead">Finding the Right Hearing Aid</h2>
    <p className="threepara">There are many different types and styles of hearing aids available. Our audiologists will help you find a hearing aid that will fit comfortably in your ears while providing your brain with the proper amplification it needs to hear and understand sounds. When deciding what type of hearing aid will best help you, we will consider your degree of hearing loss, your hearing needs, and your lifestyle. These three factors are important for our audiologists to find you a hearing aid that will address all of your unique needs.

 <br />
<br />
Once we’ve found a hearing aid then we will program them based on your hearing loss and lifestyle needs. The hearing aids will be placed in your ears and turned on, allowing us to measure the volume levels to ensure you are hearing the full range of sounds properly.

<br />
 <br />

During your hearing aid fitting we will go over the care and maintenance of your hearing aids. You will learn how to use them correctly and make adjustments for different hearing environments as well as how to insert and remove them, change the batteries, and clean them properly. We will also go over some tips and strategies for better communication.</p>
  </div>
  <div className="hearing3img">
    <div className="eimg1">
      <img src="/images/e1.avif" alt="" />
      <h1 className="ehead">BTE-RIE</h1>
     <p className="cone">Behind-the-Ear
Receiver-in-Ear</p>
    </div>
    <div className="eimg2">
      <img src="/images/25.avif" alt="" />
      <h1 className="ehead">CIC</h1>
     <p className="cone">Completely-in-Canal</p>
    </div>
    <div className="eimg3">
      <img src="/images/e3.avif" alt="" />
       <h1 className="ehead">ITC</h1>
     <p className="cone">In-the-Canal</p>
    </div>
    <div className="eimg4">
      <img src="/images/e4.avif" alt="" />
      <h1 className="ehead">Open BTE</h1>
     <p className="cone">Open Behind-the-Ear</p>
    </div>
    <div className="eimg5">
      <img src="/images/e5.avif" alt="" />
      <h1 className="ehead">BTE</h1>
     <p className="cone">Behind-the-Ear</p>
    </div>
    <div className="eimg6">
      <img src="/images/e6.avif" alt="" />
      <h1 className="ehead">IIC
</h1>
     <p className="cone">Invisible-in-Canal</p>
    </div>
    <div className="eimg7">
      <img src="/images/e7.avif" alt="" />
      <h1 className="ehead">ITE
</h1>
     <p className="cone">In-the-Ear</p>
   
    </div>
     <div className="eimg8">
      <img src="/images/e8.avif" alt="" />
      <h1 className="ehead">Remote
</h1>
    </div>
  </div>
  <div className="hearing4">
    <h1 className="hearing4head">Follow-Up Visits</h1>
    <p className="hearing4con">A follow-up visit will be scheduled a few weeks after your initial fitting. During your follow-up appointment, we will fine-tune and adjust your hearing aids as needed and answer any questions you may have. It may take some time to adjust to your hearing aids, so it’s important to be patient and continue wearing your devices. If needed we will make an additional appointment to follow-up and make sure you are adjusting to your hearing aids.</p>
  </div>
  <div className="hearing5">
    <div className="image5">
      <img src="/images/h1.avif" alt="" />
    </div>
    <div className="fivetwo">
    <h1 className="fivehead">Hearing Aid Accessories</h1>
    <p className="fivecon">
Along with your child’s hearing aids, there are a number of important accessories that can improve speech and learning. Children and adults can both use classroom-specific hearing aid accessories. Classes and lecture halls are some of the hardest places to focus for those with hearing loss.

For older children and adults, there are wireless remote-control accessories and apps that allow for precise hearing aid adjustments without having to touch the tiny and delicate controls on the hearing aids themselves. Other similar accessories can allow your child to wirelessly connect directly to important equipment such as televisions, cell phones, computers, and MP3 players, which will help them relate more easily to their peers and will help with concentration.

If you are interested in a hearing aid accessory, contact us today. We would be happy to help you find a hearing aid accessory to help you, or your child, hear even better.
    </p>
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

export default Hearing