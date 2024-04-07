import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react"
import MediCard from "../components/MediCard";

const Medicines = () => {
    const [filterMed , setFilterMed] = useState("");
    const [medicines , setMedicines] = useState([]);

    const Handlesubmit = async (e)=>{
        e.preventDefault()

        try{
            if(filterMed.length !== 0){

                const response = await axios.get(`https://hackthon-1.onrender.com/api/v1/medicine/getmedicines/${filterMed}`);
                setMedicines(response.data.data)
            }
            else{
                const response = await axios.get("https://hackthon-1.onrender.com/api/v1/medicine/getmedicine");
                setMedicines(response.data.data)
            }
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        const fetchdata = async ()=>{
            try{
                const response = await axios.get("https://hackthon-1.onrender.com/api/v1/medicine/getmedicine");
                setMedicines(response.data.data)
            }
            catch(e){
                console.log(e);
            }
        };
        fetchdata();
    },[])
    
    return (
        <div className=" m-4">
                <form className="flex justify-center mt-4 mb-4" onSubmit={Handlesubmit}>
                    <input className="h-10 w-80 p-2 border rounded-full" placeholder="Search..." onChange={(e)=>setFilterMed(e.target.value)}/>
                    <button type="submit" className="ml-2 h-8 w-8  flex flex-col justify-center"><FaSearch className="flex justify-center w-full"/></button>
                </form>
            <div className="flex flex-wrap">
                {medicines.map(medicine => {
                    return(
                        <MediCard key={medicine._id} id={medicine._id} name={medicine.name} price={medicine.price}/>
                    )
                })}
            </div>
        </div>
    )
}
export default Medicines