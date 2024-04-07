import axios from "axios";
import { useEffect, useState } from "react";
import pic from "../assets/doctor.jpeg";
const UserProfile = () => {
  const loading = false; // state mannagement
  const [user , setUser] = useState({});
    useEffect(()=>{
        const fetchdata = async ()=>{
        try{
            const response = await axios.get(`https://hackthon-1.onrender.com/api/v1/auth/getuser`,{
                headers:{
                    token: localStorage.getItem("token")
                }
            });
            setUser(response.data)
        }
        catch(e){
            console.log(e);
        }
    };
    fetchdata();
},[])
  if(loading){
    return(
      <div className='max-sm:h-max h-screen w-full bg-slate-300 p-10'>
          {/* <UserBar /> */}
          <div className='flex flex-col justify-center mt-40'>
            <div className='grid max-sm:grid-cols-1 grid-cols-6'>
              <div className='col-span-2 border max-sm:mb-4 max-sm:mr-0  mr-2 bg-white flex justify-center pt-6 pb-6'>
                <div className='flex flex-col justify-center space-y-2'>
                <svg className="w-40 h-40 me-3 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
                  <div className="h-2 flex justify-center bg-gray-200 rounded-full mb-2.5"></div>
                  <div className='flex justify-center text-slate-400 text-md h-2 bg-gray-200 rounded-full mb-2.5'></div>
                  <div className='flex justify-center text-slate-400 text-md h-2 bg-gray-200 rounded-full mb-2.5'></div>
                  <div className='flex justify-center space-x-1'>
                    <button className='border pl-2 pr-2 pt-1 pb-1 text-white h-10 w-16 bg-gray-200 rounded-sm mb-2.5'></button>
                    <button className='border pl-2 pr-2 pt-1 pb-1 text-white h-10 w-16 bg-gray-200 rounded-sm mb-2.5'></button>
                  </div>
                </div>
              </div>
              <div className='col-span-4'>
                <div className='mb-2 pb-6 bg-white p-4 border'>
                    <div className='border-b w-full pt-4 pb-4 grid grid-cols-6 h-2 bg-gray-200 rounded-full mb-2.5'>
                      <div className='max-sm:col-span-2 col-span-1 font-semibold text-1xl'></div>
                      <div className='max-sm:col-span-4 col-span-5 text-1xl text-slate-400 font-semibold'></div>
                    </div>
                    <div className='border-b w-full pt-4 pb-4 grid grid-cols-6 h-2 bg-gray-200 rounded-full mb-2.5'>
                      <div className='max-sm:col-span-2 col-span-1 font-semibold text-1xl'></div>
                      <div className='max-sm:col-span-4 col-span-5 text-1xl text-slate-400 font-semibold'></div>
                    </div>
                    <div className='border-b w-full pt-4 pb-4 grid grid-cols-6 h-2 bg-gray-200 rounded-full mb-2.5'>
                      <div className='max-sm:col-span-2 col-span-1 font-semibold text-1xl'></div>
                      <div className='max-sm:col-span-4 col-span-5 text-1xl text-slate-400 font-semibold'></div>
                    </div>
                    <div className='border-b w-full pt-4 pb-4 grid grid-cols-6 h-2 bg-gray-200 rounded-full mb-2.5'>
                      <div className='max-sm:col-span-2 col-span-1 font-semibold text-1xl'></div>
                      <div className='max-sm:col-span-4 col-span-5 text-1xl text-slate-400 font-semibold'></div>
                    </div>
                    <div className='border-b w-full pt-4 pb-4 grid grid-cols-6 h-2 bg-gray-200 rounded-full mb-2.5'>
                      <div className='max-sm:col-span-2 col-span-1 font-semibold text-1xl'></div>
                      <div className='max-sm:col-span-4 col-span-5 text-1xl text-slate-400 font-semibold'></div>
                    </div>
                </div>
                <div className='flex flex-col '>
                  <div className='max-sm:grid-cols-1 grid grid-cols-2 '>
                    <div className='pt-4 max-sm:mr-0 max-sm:mb-2 border mr-2 pb-2 bg-white pl-4 font-semibold text-1xl flex flex-col justify-center'>
                      <div className=" h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    </div>
                    <div className='border pt-4 pb-2 bg-white pl-4 font-semibold text-1xl flex flex-col justify-center'><div className=" h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
  else{

      return (
        <div className='max-sm:h-max h-screen w-full bg-slate-300 p-10'>
          {/* <UserBar /> */}
          <div className='flex flex-col justify-center mt-40'>
            <div className='grid max-sm:grid-cols-1 grid-cols-6'>
              <div className='col-span-2 border max-sm:mb-4 max-sm:mr-0  mr-2 bg-white flex justify-center pt-6 pb-6'>
                <div className='flex flex-col justify-center space-y-2'>
                  <div className='flex justify-center'>
                    <img  className="w-40 h-40 flex flex-col justify-center rounded-full border border-black" src={pic} alt='loading..'/>
                  </div>
                  <div className='flex justify-center font-semibold text-2xl'>{user.username}</div>
                  <div className='flex justify-center text-slate-400 text-md'>{user.address}</div>
                  {/* <div className='flex justify-center space-x-1'>
                    <button className='border pl-2 pr-2 pt-1 pb-1 text-white bg-blue-500 rounded-sm hover:bg-blue-700'>Follow</button>
                    <button className='border pl-2 pr-2 pt-1 pb-1 text-blue-400 rounded-sm hover:border-slate-400'>Message</button>
                  </div> */}
                </div>
              </div>
              <div className='col-span-4'>
                <div className='mb-2 bg-white p-4 pb-0 border'>
                    <div className='border-b w-full pt-4 pb-6 grid grid-cols-6'>
                      <div className='max-sm:col-span-2 col-span-1 font-semibold text-1xl'>Name</div>
                      <div className='max-sm:col-span-4 col-span-5 text-1xl text-slate-400 font-semibold'>{user.username}</div>
                    </div>
                    <div className='border-b w-full pt-4 pb-6 grid grid-cols-6'>
                      <div className='max-sm:col-span-2 col-span-1 font-semibold text-1xl'>Email</div>
                      <div className='max-sm:col-span-4 col-span-5 text-1xl text-slate-400 font-semibold'>{user.email}</div>
                    </div>
                    <div className='border-b w-full pt-4 pb-6 grid grid-cols-6'>
                      <div className='max-sm:col-span-2 col-span-1 font-semibold text-1xl'>Phone</div>
                      <div className='max-sm:col-span-4 col-span-5 text-1xl text-slate-400 font-semibold'>{user.phone}</div>
                    </div>
                    <div className='border-b w-full pt-4 pb-6 grid grid-cols-6'>
                      <div className='max-sm:col-span-2 col-span-1 font-semibold text-1xl'>Address</div>
                      <div className='max-sm:col-span-4 col-span-5 text-1xl text-slate-400 font-semibold'>{user.address}</div>
                    </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      );
  }
}
const UserBar = ()=>{
  return (
    <div className=' border w-full bg-white shadow-md mb-6 text-1xl font-bold pt-3 pb-3 pl-6 max-sm:text-sm'>
      <button className='mr-2 ml-2 text-blue-500'>Home</button>/
      <button className='mr-2 ml-2 text-blue-500'>User</button>/
      <button className='mr-2 ml-2 text-slate-500'>User Profile</button>
    </div>
  )
}

export default UserProfile;