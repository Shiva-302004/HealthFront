
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import DoctorsInfo from "./pages/DoctorsInfo";
import Appoinment from "./pages/Appointment";
import Payment from "./pages/Payment";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import Carts from "./components/Carts";
import DoctorsProfile from "./pages/DoctorsProfile";
import { useState } from "react";

const App = () => {
  const [login , setLogin] = useState(false);
  return (
    <>  
    <BrowserRouter>
      <div className="pb-12">
        <Navbar login={login} setLogin={setLogin}/>
      </div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/appointment/:id' element={<Appoinment/>}/>
        <Route path='/doctorsinfo' element={<DoctorsInfo/>}/>
        <Route path='/doctorprofile/:id' element={<DoctorsProfile/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login setLogin={setLogin}/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/paymentsuccessful' element={<PaymentSuccessPage/>}/>
        <Route path='/cart' element={<Carts/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
    </>
  )
}

export default App