
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({setLogin}) => {
  const router = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://hackthon-1.onrender.com/api/v1/auth/login',
        // 'http://localhost:3000/api/login',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      const data = response.data;

      if (data.sucess) {
        localStorage.setItem("token",data.token)
        localStorage.setItem("userName",data.data.username)
        setLogin(true);
        if(data.data.admin === 1){
          router('/admin')
        }
        else{
          router('/');
        }
        setTimeout(()=>{
          toast.success(data.msg);
        },1000)
      } else {
        toast.error(data.msg);
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
        className='max-w-sm mx-auto bg-black p-4 flex flex-col justify-center items-center w-[90vw] md:w-[60vw] rounded-md absolute z-2'
      >
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
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
        <button
          type='submit'
          className='px-4 py-2 text-black bg-red-200 rounded-md'
        >
          Login
        </button>
      </form>
    </div>
  );
};

