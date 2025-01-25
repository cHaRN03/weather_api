import {  MapPin, ArrowRight, XCircle } from 'lucide-react';
import { useState } from 'react';

const Frm = () => {
    const[location,setLocation]=useState("")
    const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault()
        
    }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                required
              />
            </div>
            
            <button
              type="submit"
              
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Search Location
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
  )
}

export default Frm