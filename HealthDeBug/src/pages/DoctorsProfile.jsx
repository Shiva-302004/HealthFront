import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import pic from "../assets/doctor.jpeg"
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const defaultState={name:"NA", room:"NA"}
const DoctorsProfile = () => {
  const [filterRoom , setFilterRoom] = useState("");
  const [doctor , setDoctor] = useState({});
  const [data , setData] = useState(defaultState);
  const params = useParams();
  const Navigate = useNavigate();
  useEffect(()=>{
    const fetchdata = async ()=>{
        try{
            const response = await axios.get(`https://hackthon-1.onrender.com/api/v1/doctor/getonedoctor/${params.id}`);
            setDoctor(response.data.data[0])
        }
        catch(e){
            console.log(e);
        }
    };
    fetchdata();
},[])
useEffect(()=>{
  const fetchdata1 = async ()=>{
    try{
        const response = await axios.get(`https://hackthon-1.onrender.com/api/v1/doctor/getonedoctor/${params.id}`);

        setDoctor(response.data.data[0])
    }
    catch(e){
        console.log(e);
    }
  };
fetchdata1();  
},[filterRoom])
return (
  <div className="p-8 max-md:p-0 w-full bg-white border-8  border-r-blue-400 border-l-black border-b-black border-t-blue-600"> 
    <div className="grid grid-cols-5 max-sm:grid-cols-1 pb-8 ">
      <div className="border-b-2 border-l-2 mr-20 max-md:mr-2 max-sm:mr-0 border-blue-700 col-span-3">
        <img  className='w-full h-full' src={pic} alt='doctor loading' />
      </div>
      {/* Profile */}
      <div className="col-span-2 pt-8 pl-2">
        <div className="font-bold text-slate-600">PROFILE</div>
        <div className="flex">
          <div className="text-blue-500 text-2xl font-bold mr-2">Dr. {doctor.name}</div>
        </div>
        <div className="font-bold text-slate-500 mb-10 mt-4">Affilation: {doctor.qualification}</div>
        <div className="flex flex-col space-y-4 text-1xl max-md:text-sm">
          <div className="grid grid-cols-5 max-md:grid-cols-2">
            <div className=" font-semibold col-span-2 max-md:col-span-1">EXPERIENCE</div>
            <div className="text-slate-500 font-semibold col-span-3 max-md:col-span-1">{doctor.experiance} years+</div>
          </div>
          <div className="flex flex-col w-full">
            <div className="font-semibold mb-2">Notice</div>
            <div  border className="border rounded-lg p-2 overflow-hidden flex">
              {(doctor.status)?doctor.status:"Notification Soon..."}
            </div>
          </div>
          <div className="grid grid-cols-5 max-md:grid-cols-2 w-full">
            <div className=" font-semibold col-span-2 max-md:col-span-1"></div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-slate-500 font-bold mb-4">SPECIALITY</div>
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-3">
              <div className="border flex justify-center pl-4 pr-4  pt-1 pb-1 rounded-3xl w-40 text-slate-500 text-sm font-semibold">{doctor.speciality}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* bottom */}
    <div className="flex justify-between  mb-4">
      <div className="col-span-3 flex  pl-8 pt-4 justify-between">
        <div className="flex flex-col ">
          <div className="flex justify-start text-3xl max-sm:text-lg font-bold">DR.</div>
          <div className="flex justify-start text-3xl max-sm:text-lg text-slate-600 mb-2">{doctor.name}</div>
          <div className="flex justify-start text-1xl max-sm:text-sm text-slate-400">Doctor id: {doctor.doctorid}</div>
        </div>
      </div>
      <div className="col-span-2 flex justify-start pl-8 pt-4 pr-4">
        <div className="flex flex-col">
          <div className="flex justify-end text-3xl max-sm:text-lg font-bold">
            <div className="flex flex-col justify-center">
              <div className="h-8 w-8 bg-blue-500 mr-3 flex justify-center">
                <div className="flex flex-col justify-center text-white">+</div>
              </div>
            </div>
            <div className='max-sm:text-lg'>{doctor.hospital}</div>
          </div>
          <div className="flex justify-start text-2xl max-sm:text-[9px] text-white  bg-blue-500 pl-4 pr-4 mb-2 mt-2">
            <div className='flex flex-col justify-center  mr-4'><MdOutlinePermPhoneMsg /></div>
            {doctor.phoneno}</div>
          <div className="flex">
            <div className="h-full w-1 bg-blue-500 rounded-full mr-2"></div>
            <div className="flex flex-col text-1xl max-sm:text-sm">
              <div className="flex justify-start text-slate-400">Place: {doctor.address}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='border-t grid grid-cols-5 pt-8'>
      <div className='col-span-2 border-r flex justify-center'>
      <div className='flex flex-col w-full'>
          <div className='font-semibold max-sm:text-[9px] flex justify-center mb-4'>Total Patient {(doctor.patientdetails?.length)}</div>
          <div className='flex justify-center max-sm:text-[9px]'>
            {/* onclick event ------->  remain */}  
              <button onClick={()=>{
                Navigate(`/appointment/${doctor._id}`)
              }} className='p-4 flex justify-center border border-blue-500 hover:bg-slate-200 active:border-black rounded-full'>Book Your Appointment</button>
          </div>
        </div>
      </div>
      <div className='col-span-3  flex justify-center'>
        <div className='flex flex-col w-full'>
          <div className='font-semibold max-sm:text-[9px] flex justify-center mb-4'>Search for patient room</div>
          <div className='flex justify-center'>
            <input onChange={(e)=>{
              setFilterRoom(e.target.value);
            }} className='border rounded-full max-sm:text-[9px] p-2 max-sm:p-1' placeholder='Search...'/>
          <button className="ml-2" onClick={()=>{
            for(let i = 0 ; i < doctor.patientdetails.length ; i++){
              if(doctor.patientdetails[i].patientname == filterRoom){
                setData({room: i+1 , name:doctor.patientdetails[i].patientname})
                break;
              }
              else{
                setData(defaultState);
              }
            }
          }}><FaSearch /></button>
          </div>
          <div className=' p-4'>
              {(data.name == "NA")? <div></div>: 
              <div className='flex border space-x-4 max-sm:text-[9px] p-2 rounded-full justify-center'>
                  <div className='font-semibold'>{data.name}</div>
                  <div className='font-semibold'>Room {data.room}</div>
                </div>
              }
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default DoctorsProfile;