import React from 'react'
import { useState } from "react";
import "../styles/appointment.css";
import { API } from "../api";

const Appointment = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [doctor, setDoctor] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    
    const doctors = [
    "Dr. John Smith",
    "Dr. Emily Davis",
    "Dr. Michael Lee",
    "Dr. Sarah Patel"
  ];

  
  const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await fetch(`${API}/api/appointment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone, dob, doctor, date, time}),
  });

  const data = await res.json();
  alert(data.message);

 
};
  return (
    <div className='appointment-container'>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-heading">
          Enter patient information in the required fields below.
        </div>
         <input
        className="form-name"
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
         <input
        className="form-email"
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
         <br />
         <input
        className="form-phone"
          type="number"
          placeholder="Enter your Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
         <br />
          <label>Select Date of Birth</label>
         <br />
         <input
        className="form-dob"
          type="date"
          placeholder="Enter your Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
         <br />
        <label>Select Doctor</label>
         <br />
     <select
  className="select"
  value={doctor}
  onChange={(e) => setDoctor(e.target.value)}
  style={{
    borderRadius: "40px",
    padding: "10px",
    width: "350px",
    height: "50px",   // <-- add height here
    fontSize: "16px"  // optional
  }}
>
  <option value="">-- Choose Doctor --</option>
  {doctors.map((doc, index) => (
    <option key={index} value={doc}>
      {doc}
    </option>
  ))}
</select>

 <br />
      <div className='selected'>Selected: {doctor}</div>
       <br />
       <label>Select Date for Appointment</label>
         <br />
       <input
        className="form-date"
          type="date"
          placeholder="Select Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
         <br />
          <label>Select Time for Appointment</label>
         <br />
            <input
        className="form-time"
          type="time"
          placeholder="Select Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
         <br />
        <button className='form-submit'>Submit➡️</button>
      </form>
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

export default Appointment