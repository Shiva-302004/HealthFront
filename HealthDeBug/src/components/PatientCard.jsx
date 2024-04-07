import { Link } from "react-router-dom"


export const PatientCard = ({patient})=>{
    return(
        <Link to={'/'} className="flex border-l border-t border-b p-2 mb-2 justify-between max-sm:text-[10px]">
            <div className="h-full flex flex-col justify-center">{patient.patientname}</div>
            <div className="h-full flex flex-col justify-center">{patient.age || 45}</div>
            <button className="border rounded-full p-2">visited</button>
        </Link>
    )
}