import React from 'react';
import pic from '../assets/appointmentDoc.jpg'
const Appoinment = () => {
  return (
    <div className=''>
      <div className={`border-[5px] border-black`}>
        <div className='border-[3px] border-blue-400 flex justify-center'>
          <div className='flex flex-col w-full'>

            {/* section 1 */}
            {/* add background picture */}
            <div className={`flex flex-col w-full border rounded-b-lg mb-12 bg-[url('/appointmentDoc.jpg')] bg-center bg-brightness-50 bg-cover`}> 
              <div className='h-40 w-full flex flex-col justify-center'>
                <div className='text-3xl font-bold pl-4 text-white'>Book Your Appointment</div>
              </div>
            </div>
            {/* section 2 */}
            <div className='flex flex-col w-full border bg-blue-400 rounded-lg mb-12'> 
              <div className='p-6 w-full flex flex-col justify-center'>
                <div className='text-3xl max-sm:text-2xl font-semibold flex justify-center text-white'>Patient Information</div>
              </div>
            </div>
            {/* section 3 */}
            <div className=' p-4 mb-12'>
              <div className='grid grid-cols-3 max-sm:grid-cols-1 '>
                <div className='flex flex-col pr-10 mt-4'>
                  <label className='font-semibold mb-2'>Patient Name</label>
                  <input type='text' placeholder='Jhon Doe' className='border border-black rounded-md p-2'/>
                </div>
                <div className='flex flex-col pr-10 mt-4'>
                  <label className='font-semibold mb-2'>Mobile</label>
                  <input type='number' placeholder='9910167891' className='border border-black rounded-md p-2'/>
                </div>
                <div className='flex flex-col pr-10 mt-4'>
                  <label className='font-semibold mb-2'>Patient Email</label>
                  <input type='text' placeholder='enter user id' className='border border-black rounded-md p-2'/>
                </div>
                <div className='flex flex-col pr-10 mt-4'>
                  <label className='font-semibold mb-2'>Age</label>
                  <input type='number' placeholder='45' className='border border-black rounded-md p-2'/>
                </div>
              </div>
              <div className='mt-4  flex flex-col'>
                <label className='font-semibold max-sm:text-sm'>Is this your first visit to our offices ?</label>
                <div className='flex ml-2'>
                  <div className=' flex pr-4'>
                    <div className='flex flex-col justify-center '>
                      <input className='flex flex-col justify-center' type='radio'/>  
                    </div>
                    <span className='ml-2 '>yes</span>
                  </div>
                  <div className=' flex'>
                    <div className='flex flex-col justify-center'>
                      <input className='flex flex-col justify-center' type='radio'/>  
                    </div>
                    <span className='ml-2 '>No</span>
                  </div>
                </div>
              </div>
            </div> 
            {/* section 4 */}
            <div className='flex flex-col w-full border bg-blue-400 rounded-lg mb-12'> 
              <div className='p-6 w-full flex flex-col justify-center'>
                <div className='text-3xl max-sm:text-2xl font-semibold flex justify-center text-white'>Appointment Information</div>
              </div>
            </div>
            {/* section 5 */}
            <div className=' p-4 mb-12'>
              <div className='flex flex-wrap'>
               <div className='flex flex-col pr-10 mt-4'>
                  <label className='font-semibold mb-2'>Date</label>
                  <input type='date' placeholder='Jhon Doe' className='border border-black rounded-md p-2'/>
                </div>
                <div className='flex flex-col pr-10 mt-4'>
                    <label className='font-semibold mb-2 max-sm:text-sm'>Please describe the resion for the visit</label>
                    <textarea type='text' placeholder='feeling pale.....' className='border border-black rounded-md p-2 h-36 max-sm:w-80 w-96'></textarea>
                </div>
              </div>
            </div>
            {/* section 6 */}
            <div className='p-4'>
              <button className='flex border pl-4 pr-4 pt-2 pb-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white active:border-black'>Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appoinment;
