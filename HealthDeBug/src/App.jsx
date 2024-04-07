
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

const App = () => {
  return (
    <>  
    <BrowserRouter>
      <div className="pb-12">
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/appointment' element={<Appoinment/>}/>
        {/* <Route path='/contact' element={<Contact/>}/> */}
        <Route path='/doctorsinfo' element={<DoctorsInfo/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/paymentsuccessful' element={<PaymentSuccessPage/>}/>
        <Route path='/cart' element={<Carts/>}/>
        {/* <Route path='*' element={<Error/>}/> */}
      </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
    </>
  )
}

export default App