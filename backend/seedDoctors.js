// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import Doctor from './models/Doctor.js';

// dotenv.config();

// const doctors = [
//     { name: "Dr. John Smith", image: "https://img.freepik.com/premium-photo/portrait-indian-doctor-indian-doctor-smiling_890100-1265.jpg?w=2000" },
//     { name: "Dr. Emily Davis", image: "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX7095362.jpg" },
//     { name: "Dr. Michael Brown", image: "https://png.pngtree.com/png-clipart/20240302/original/pngtree-indian-doctor-with-uniform-png-image_14479570.png" },
//     { name: "Dr. Sarah Wilson", image: "https://static.vecteezy.com/system/resources/thumbnails/049/515/192/small_2x/smiling-indian-male-doctor-with-crossed-arms-isolated-transparent-background-png.png" },
//     { name: "Dr. David Lee", image: "https://static.vecteezy.com/system/resources/thumbnails/046/680/059/small_2x/an-old-pakistani-male-doctor-on-isolated-transparent-background-png.png" },
//     { name: "Dr. Laura Martinez", image: "https://static.vecteezy.com/system/resources/thumbnails/046/680/050/small_2x/an-old-pakistani-male-doctor-on-isolated-transparent-background-png.png" },
//     { name: "Dr. Robert Taylor", image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA2L3Jhd3BpeGVsX29mZmljZV8zN19hX3Bob3RvX29mX2FfbWlkZGxlX2FnZV9tYWxlX2luZGlhbl9kb2N0b3JfaV9kZDYwMjMyMS04Mzk3LTRjNDMtOWQyMS1hNTA4MjIxYjk0NTdfMS5qcGc.jpg" },
//     { name: "Dr. Linda Anderson", image: "https://png.pngtree.com/png-vector/20231113/ourmid/pngtree-indian-doctor-success-png-image_10437444.png" },
//     { name: "Dr. James Thomas", image: "https://purepng.com/public/uploads/large/purepng.com-doctordoctorsdoctors-and-nursesclinicianmedical-practitionernotepadfemale-1421526857248uragw.png" },
//     { name: "Dr. Karen Moore", image: "https://pluspng.com/img-png/png-woman-doctor--602.png" },
// ];

// mongoose.connect(process.env.MONGO_URI)
// .then(async ()=>{
//     console.log('MongoDB connected');
//     await Doctor.deleteMany();
//     await Doctor.insertMany(doctors);
//     console.log('Doctors seeded successfully!');
//     mongoose.disconnect();
// })
// .catch(err=>console.log(err));
