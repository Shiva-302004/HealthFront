
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import DoctorsInfo from "./pages/DoctorsInfo";
import Appoinment from "./pages/Appointment";

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
        {/* <Route path='*' element={<Error/>}/> */}
      </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
    </>
  )
}

export default App