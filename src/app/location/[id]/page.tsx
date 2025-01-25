import React from 'react'
import axios from 'axios';
//import { useRouter } from 'next/navigation';
import {  MapPin,  XCircle } from 'lucide-react';

export const getresult = async (location:string)=>{
     
     const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.api_key}`)
     console.log(response)
     const data=response.data
     return data
}

const page = async ({params}:{params:any}) => {
    const p=await params
    const location=p.id
    const soln=await getresult(location)

  //  const router=useRouter()
  
  return (
     
      
          <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 p-6">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1200&q=80"
                  alt="Location"
                  className="w-full h-48 object-cover"
                />
                <button
                  //onClick={()=>router.push('/')}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <XCircle className="w-6 h-6 text-gray-700" />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-blue-500" />
                  <h2 className="text-2xl font-bold text-gray-800">{location}</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Location Details</h3>
                    <p className="text-gray-600">
                      Showing results for {location}. This is where you would display the relevant
                      information based on the location input.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800">Data Point 1</h4>
                      <p className="text-gray-600">{`the weather is ${soln.weather[0].main}`}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800">Data Point 2</h4>
                      <p className="text-gray-600">{soln.name}$$$$$$$$$$$$$$$$$$</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
 


export default page