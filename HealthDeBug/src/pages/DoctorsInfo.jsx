import axios from "axios";
import { useEffect, useState } from "react"
import Card from "../components/Card";
import { FaSearch } from "react-icons/fa";

const DoctorsInfo = ()=>{
    const [doctor , setDoctor] = useState([]);
    const [filterDoctor , setFilterDoctor] = useState("");
    
    const Handlesubmit = async (e)=>{
        e.preventDefault()
        try{
            if(filterDoctor.length!==0){

                const response = await axios.get(`https://hackthon-1.onrender.com/api/v1/doctor/getonedoctors/${filterDoctor}`);
                setDoctor(response.data.data)
            }else{
                const response = await axios.get("https://hackthon-1.onrender.com/api/v1/doctor/getdoctor");
                setDoctor(response.data.data)
            }
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        const fetchdata = async ()=>{
            try{
                const response = await axios.get("https://hackthon-1.onrender.com/api/v1/doctor/getdoctor");
                setDoctor(response.data.data)
            }
            catch(e){
                console.log(e);
            }
        };
        fetchdata();
    },[])
    
    return(
        <div>
            <form className="flex justify-center mt-4 mb-4" onSubmit={Handlesubmit}>
                    <input className="h-10 w-80 p-2 border rounded-full" placeholder="Search..." onChange={(e)=>setFilterDoctor(e.target.value)}/>
                    <button type="submit" className="ml-2 h-8 w-8  flex flex-col justify-center"><FaSearch className="flex justify-center w-full"/></button>
            </form>
            <div className="flex items-center justify-center w-full">
                <div className="flex flex-wrap xl:grid xl:grid-cols-4  mt-10 w-[100vw] md:w-[700px] lg:w-[90vw] xl:w-[1300px] justify-center md:justify-start md:items-center items-center">
                    {
                        doctor.map((item)=>{
                            return(
                                <Card name={item.name} speciality={item.speciality} click={item._id} key={item._id}/>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default DoctorsInfo;