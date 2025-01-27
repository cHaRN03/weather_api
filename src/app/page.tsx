'use client';

import { useState } from 'react';
import { Search, MapPin, ArrowRight, XCircle } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [location, setLocation] = useState('');

  const {push}=useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}`)

    // const data=response.data.weather
    //localStorage.setItem()
    push(`/location/${location}`)

    
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-blue-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Search Location</h1>
            <p className="text-gray-600 mt-2">Enter a location to get started</p>
          </div>

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
        </div>
      </div>
    </div>
  );
}
