

import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const router = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://hackthon-1.onrender.com/api/v1/auth/signup',
        // "http://localhost:3000/api/users",
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = response.data;

      if (data.success) {
        router('/login');
        toast.success(data.message);
        localStorage.setItem("token",data.token)
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.message);
    }
  };

  return (
    <div className='w-[100vw] h-[90vh]  justify-center flex items-center rounded-md p-3 mt-3'>
      <form
        onSubmit={handleSubmit}
        className='max-w-sm mx-auto bg-black p-4 flex flex-col justify-center items-center w-[90vw] md:w-[60vw] rounded-md absolute z-20'
      >
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Username'
          className='w-full px-3 py-2 mb-3 border rounded-md'
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
          className='w-full px-3 py-2 mb-3 border rounded-md'
        />
        <input
          type='number'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          placeholder='Phone'
          className='w-full px-3 py-2 mb-3 border rounded-md'
        />
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Password'
          className='w-full px-3 py-2 mb-3 border rounded-md'
        />
        <textarea
          name='address'
          value={formData.address}
          onChange={handleChange}
          placeholder='Address'
          className='w-full px-3 py-2 mb-3 border-2 border-black rounded-md'
        ></textarea>
        <button
          type='submit'
          className='px-4 py-2 text-black bg-red-200 rounded-md'
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
