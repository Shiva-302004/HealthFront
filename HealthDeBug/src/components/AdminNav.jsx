import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom'; 
import pic from "../assets/logoimg.png"
const AdminNav = ({login , setLogin}) => {
    const [click, setClick] = useState(false);
    const [savedToken, setSavedToken] = useState("");
    const User = localStorage.getItem("userName")? localStorage.getItem("userName")[0] : "A"
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        setSavedToken(token);
    }, [localStorage.getItem("token")]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setLogin(false);
        setSavedToken("");
        // Handle any other logout actions here
    };

    return (
        <div className='absolute top-0'>
            {/* Mobile view */}
            <div className='max-sm:block max-md:hidden md:hidden'>
                <div className='w-[100vw] h-[50px] bg-blue-400 flex justify-between px-3 fixed z-30 items-center'>
                    <img src={pic} className='h-[60%] w-[200px]' alt='logo..' />
                    <span className='ham-cross text-slate-700  mt-1 text-xl' onClick={() => setClick(!click)}>
                        {click ? <RxCross2 /> : <RxHamburgerMenu />}
                    </span>
                </div>
                <div className={`fixed z-40 bg-white h-[100vh] w-[100vw] max-h-[100vh] overflow-hidden text-green-400 ${click ? "visible" : "hidden"}`}>
                    <RxCross2 className='absolute text-red-200 right-3 top-5 text-3xl' onClick={() => setClick(!click)} />
                    <div className='flex flex-col justify-center items-center '>
                        {!savedToken ? (
                            <>
                                <Link className='mt-8 text-2xl' to="/login" onClick={() => setClick(!click)}>Login</Link>
                                <Link className='mt-8 text-2xl' to="/signup" onClick={() => setClick(!click)}>Signup</Link>
                            </>
                        ) : (
                            <div className='flex flex-col space-y-4'>
                                <Link className='mt-8 text-2xl' to="/" onClick={handleLogout}>Logout</Link>
                                <div onClick={()=>{
                                    navigate('/userprofile')
                                }} className="cursor-pointer ml-2 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                    <span className="font-medium text-gray-600 dark:text-gray-300 capitalize">{User}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Laptop view */}
            <div className='max-sm:hidden max-md:block md:block'>
                <div className='w-[100vw] h-[50px] bg-blue-700 flex justify-between px-3 fixed z-10 items-center'>
                    <img width={200} height={90} src={pic} className='h-[60%] w-[200px]' alt='logo..' />
                    <div className='flex text-white '>
                        {savedToken ? (
                            <div>
                                <Link className={`${(login)?"flex":"hidden"}text-sm md:text-md px-4 py-2 bg-white hover:bg-slate-200 text-blue-400 rounded-full font-bold`} to="/" onClick={handleLogout}>Logout</Link>       
                                <div className="ml-2 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                    <span className="font-medium text-gray-600 dark:text-gray-300 capitalize">{User}</span>
                                </div>

                            </div>
                        ) : (
                            <div >
                                <Link className='text-sm md:text-md px-4 py-2 bg-white hover:bg-slate-200 active:text-black text-blue-400 rounded-full font-bold' to="/login">Login</Link>
                                <Link className='text-sm md:text-md px-4 py-2 bg-white hover:bg-slate-200 active:text-black text-blue-400 rounded-full font-bold ml-3' to="/register">Signup</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNav;
