import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom'; 
import pic from "../assets/logoimg.png"
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [savedToken, setSavedToken] = useState("");

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     setSavedToken(token);
    // }, []);

    // const handleLogout = () => {
    //     localStorage.removeItem("token");
    //     setSavedToken("");
    //     // Handle any other logout actions here
    // };

    return (
        <div>
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
                        <Link className='mt-8 text-2xl' to="/" onClick={() => setClick(!click)}>Home</Link>
                        <Link className='mt-8 text-2xl' to="/medicines" onClick={() => setClick(!click)}>Medicines</Link>
                        <Link className='mt-8 text-2xl' to="/doctorsinfo" onClick={() => setClick(!click)}>Doctors</Link>
                        {!savedToken ? (
                            <>
                                <Link className='mt-8 text-2xl' to="/login" onClick={() => setClick(!click)}>Login</Link>
                                <Link className='mt-8 text-2xl' to="/signup" onClick={() => setClick(!click)}>Signup</Link>
                            </>
                        ) : (
                            <Link className='mt-8 text-2xl' to="/" onClick={handleLogout}>Logout</Link>
                        )}
                    </div>
                </div>
            </div>
            {/* Laptop view */}
            <div className='max-sm:hidden max-md:block md:block'>
                <div className='w-[100vw] h-[50px] bg-blue-400 flex justify-between px-3 fixed z-10 items-center'>
                    <img width={200} height={90} src={pic} className='h-[60%] w-[200px]' alt='logo..' />
                    <div className='flex text-white '>
                        <Link className='text-md md:text-lg px-2' to="/">Home</Link>
                        <Link className='text-md md:text-lg px-2' to="/medicines">Medicines</Link>
                        <Link className='text-md md:text-lg px-2' to="/doctorsinfo">Doctors</Link>
                    </div>
                    <div className='flex text-white '>
                        {savedToken ? (
                            <Link className='text-sm md:text-md px-4 py-2 bg-white hover:bg-slate-200 text-blue-400 rounded-full font-bold' to="/" onClick={handleLogout}>Logout</Link>
                        ) : (
                            <>
                                <Link className='text-sm md:text-md px-4 py-2 bg-white hover:bg-slate-200 active:text-black text-blue-400 rounded-full font-bold' to="/login">Login</Link>
                                <Link className='text-sm md:text-md px-4 py-2 bg-white hover:bg-slate-200 active:text-black text-blue-400 rounded-full font-bold ml-3' to="/register">Signup</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
