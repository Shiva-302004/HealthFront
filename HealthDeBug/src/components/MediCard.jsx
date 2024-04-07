import { PiCurrencyInrBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const MediCard = ({ name ,price , id}) => {
    const navigate = useNavigate();
    return (
        <div className="border w-[300px] flex justify-between mt-4 mr-4 p-4">
            <div className="flex flex-col">
                <div className="text-2xl font-semibold text-transform: uppercase">{name}</div>
                <div className="text-1xl flex"><PiCurrencyInrBold className="h-full"/>{price}</div>
            </div>
            <button onClick={()=>{
                navigate('/cart')
            }} className="p-2 shadow-lg border hover:border-black active:text-black text-blue-500">Add to cart</button>
        </div>
    )
}
export default MediCard