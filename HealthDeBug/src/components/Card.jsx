
import { Link } from "react-router-dom"
import pic from "../assets/doctor.jpeg"
const Card = ({ name ,speciality,click}) => {
    return (
        <div className="w-[70vw]  h-[320px] md:w-[300px]  p-2 m-2 bg-white md:m-2 rounded-md border-black border-2 hover:border-slate-200" style={{boxShadow:"2px 2px 3px 2px black"}}>
                <div className="flex flex-col items-center justify-center">
                    <img src={pic}  className="rounded-full w-[150px] h-[150px]" alt=""/>
                    <span className="text-2xl font-semibold text-slate-500">{name}</span>
                    <span className="text-lg font-semibold text-slate-400">{speciality}</span>
                    <Link to={`/doctorprofile/${click}`} className="bg-slate-600 border-2 border-blue-100 w-[90%] md:w-[80%] rounded-full text-center h-10 mt-2 pt-1 text-white font-bold text-sm md:text-lg ">
                        Visit Now
                    </Link>
                </div>
        </div>
    )
}
export default Card