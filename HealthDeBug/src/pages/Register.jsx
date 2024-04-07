// import React from 'react';
import RegistrationForm from '../components/Registration';
import pic from "../assets/sign.jpeg"
// import RegistrationForm from '@/component/Registration';

export const Register = () => {
  return (
    <div className=''>
    <img className='w-[100vw] h-[100vh] absolute -z-2 bg-contain brightness-50 top-0' src={pic} alt="" />
      <div className="pt-12 ">
        <RegistrationForm />
      </div>
    </div>
  );
}
