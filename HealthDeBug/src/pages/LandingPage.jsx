import { IoPlay } from "react-icons/io5";
import pic from "../assets/appointmentDoc.jpg"
export default function LandingPage() {
  return ( 
    <main className="h-screen">
        <img  className="mb-2 w-full object-cover h-[90%] absolute -z-20 opacity-78"  src={pic} />
        <div className={`z-20 mb-2 h-[90%] bg-[url('${pic}')] bg-cover`}>
            <div className="border flex flex-col justify-center pl-48 max-lg:pl-20  max-sm:pl-8 h-full">
              <div className="text-slate-900 text-2xl mb-4">We are hare for your care.</div>
              <div className="text-6xl font-bold text-slate-900 mb-2 max-sm:text-4xl">Best care &</div>
              <div className="text-6xl font-bold text-slate-900 mb-4 max-sm:text-4xl">Better Doctor.</div>
              <div className="w-[60%] max-sm:w-full mb-6">Imagine a world where healthcare meets innovation seamlessly. Welcome to our groundbreaking prototype designed to transform the medical field.</div>
              <div className="flex">
                <div className="border flex bg-blue-500 rounded-full p-2 w-80">
                  <div className="w-10 h-10 bg-white rounded-full border flex justify-center mr-4">
                    <div className="flex flex-col justify-center">+</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex flex-col justify-center text-white">A Med-Tech Nexus</div>
                  </div>
                </div>
                <div className="ml-8 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full border flex justify-center mr-4">
                    <div className="flex flex-col justify-center text-white"><IoPlay /></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </main>
  );
}