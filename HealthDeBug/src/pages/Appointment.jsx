import React, { useState } from 'react';
import pic from '../assets/appointmentDoc.jpg'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
const Appoinment = () => {
  const router = useNavigate();
  const [patientName, setPatientName] = useState("");
  const [mobile , setMobile] = useState("");
  const [age, setAge]= useState("");
  const [date , setDate] = useState("");
  const [reason , setReason] = useState("");
  const params = useParams();
  console.log(params.id)
  const handleCheckout =async () => {
    // Navigate to the checkout page with total price as parameter
    try{
      const data = await axios.post(`https://hackthon-1.onrender.com/api/v1/app/postappoinment/${params.id}`,{
        name: patientName,
        // mobile,
        age,
        date,
        reason
      },{
        headers:{
          token:localStorage.getItem("token")
        }
      })
    }
    
    catch(e){

    }
    router(`/payment?total=${350}`);
  };
  return (
    <div className=''>
      <div className={`border-[5px] border-black`}>
        <div className='border-[3px] border-blue-400 flex justify-center'>
          <div className='flex flex-col w-full'>

            {/* section 1 */}
            {/* add background picture */}
            <div className={`flex flex-col w-full border rounded-b-lg bg-brightness-50`}> 
              <img className='-z-40 brightness-50 absolute h-40 w-full object-cover' src={pic} alt="loading..." />
              <div className='flex flex-col justify-center w-full h-40'>
                <div className='pl-4 text-3xl font-bold text-white'>Book Your Appointment</div>
              </div>
            </div>
            {/* section 2 */}
            <div className='flex flex-col w-full mb-12 bg-blue-400 border rounded-lg'> 
              <div className='flex flex-col justify-center w-full p-6'>
                <div className='flex justify-center text-3xl font-semibold text-white max-sm:text-2xl'>Patient Information</div>
              </div>
            </div>
            {/* section 3 */}
            <div className='p-4 mb-12 '>
              <div className='grid grid-cols-3 max-sm:grid-cols-1 '>
                <div className='flex flex-col pr-10 mt-4'>
                  <label className='mb-2 font-semibold'>Patient Name</label>
                  <input onChange={(e)=>{
                    setPatientName(e.target.value);
                  }} type='text' placeholder='Jhon Doe' className='p-2 border border-black rounded-md'/>
                </div>
                <div className='flex flex-col pr-10 mt-4'>
                  <label className='mb-2 font-semibold'>Mobile</label>
                  <input onChange={(e)=>{
                    setMobile(e.target.value);
                  }} type='number' placeholder='9910167891' className='p-2 border border-black rounded-md'/>
                </div>
                {/* <div className='flex flex-col pr-10 mt-4'>
                  <label className='mb-2 font-semibold'>Patient Email</label>
                  <input type='text' placeholder='enter user id' className='p-2 border border-black rounded-md'/>
                </div> */}
                <div className='flex flex-col pr-10 mt-4'>
                  <label className='mb-2 font-semibold'>Age</label>
                  <input onChange={(e)=>{
                    setAge(e.target.value);
                  }} type='number' placeholder='45' className='p-2 border border-black rounded-md'/>
                </div>
              </div>
              <div className='flex flex-col mt-4'>
                <label className='font-semibold max-sm:text-sm'>Is this your first visit to our offices ?</label>
                <div className='flex ml-2'>
                  <div className='flex pr-4 '>
                    <div className='flex flex-col justify-center '>
                      <input className='flex flex-col justify-center' type='radio'/>  
                    </div>
                    <span className='ml-2 '>yes</span>
                  </div>
                  <div className='flex '>
                    <div className='flex flex-col justify-center'>
                      <input className='flex flex-col justify-center' type='radio'/>  
                    </div>
                    <span className='ml-2 '>No</span>
                  </div>
                </div>
              </div>
            </div> 
            {/* section 4 */}
            <div className='flex flex-col w-full mb-12 bg-blue-400 border rounded-lg'> 
              <div className='flex flex-col justify-center w-full p-6'>
                <div className='flex justify-center text-3xl font-semibold text-white max-sm:text-2xl'>Appointment Information</div>
              </div>
            </div>
            {/* section 5 */}
            <div className='p-4 mb-12 '>
              <div className='flex flex-wrap'>
               <div className='flex flex-col pr-10 mt-4'>
                  <label className='mb-2 font-semibold'>Date</label>
                  <input onChange={(e)=>{
                    setDate(e.target.value);
                    console.log(date)
                  }} type='date' placeholder='Jhon Doe' className='p-2 border border-black rounded-md'/>
                </div>
                <div className='flex flex-col pr-10 mt-4'>
                    <label className='mb-2 font-semibold max-sm:text-sm'>Please describe the resion for the visit</label>
                    <textarea onChange={(e)=>{
                    setReason(e.target.value);
                  }} type='text' placeholder='feeling pale.....' className='p-2 border border-black rounded-md h-36 max-sm:w-80 w-96'></textarea>
                </div>
              </div>
            </div>
            {/* section 6 */}
            <div className='p-4'>
              <button onClick={handleCheckout} className='flex pt-2 pb-2 pl-4 pr-4 text-white bg-blue-500 border rounded-md hover:bg-blue-600 active:border-black'>Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appoinment;
