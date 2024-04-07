import axios from "axios";
import { useEffect, useState } from "react"
import Card from "../components/Card";

const DoctorsInfo = ()=>{
    const [doctor , setDoctor] = useState([]);

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
            <div className="flex items-center justify-center w-full">
                <div className="flex flex-wrap xl:grid xl:grid-cols-4  mt-20 w-[100vw] md:w-[700px] lg:w-[90vw] xl:w-[1300px] justify-center md:justify-start md:items-center items-center">
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