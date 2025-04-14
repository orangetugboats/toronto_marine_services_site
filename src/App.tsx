import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Anchor, Ship, Wrench, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import TowingService from './pages/TowingService';
import CharterService from './pages/CharterService';
import FlooringService from './pages/FlooringService';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <div 
            className="h-screen relative bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black/50">
              <div className="container mx-auto px-6 h-full flex flex-col justify-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Professional Marine Services
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mb-8">
                  Your trusted partner for boat towing, luxury charters, and marine flooring installations
                </p>
                <a 
                  href="#services" 
                  className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                >
                  <span>Explore Our Services</span>
                  <ChevronDown className="animate-bounce" />
                </a>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Towing Service */}
                <Link to="/towing" className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Anchor className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">On-Water Boat Towing</h3>
                  <p className="text-gray-600">
                    24/7 emergency towing service for stranded vessels. Professional assistance when you need it most.
                  </p>
                </Link>

                {/* Charter Service */}
                <Link to="/charters" className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Ship className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Luxury Charters</h3>
                  <p className="text-gray-600">
                    Experience the ultimate in maritime luxury with our premium charter services.
                  </p>
                </Link>

                {/* Flooring Service */}
                <Link to="/flooring" className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Wrench className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Marine Flooring</h3>
                  <p className="text-gray-600">
                    Professional installation of high-quality marine flooring for all types of vessels.
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="py-20 bg-blue-900 text-white">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>info@marineservices.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p>123 Harbor Drive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6 text-center">
              <p>&copy; 2025 Professional Marine Services. All rights reserved.</p>
            </div>
          </footer>
        </div>
      } />
      <Route path="/towing" element={<TowingService />} />
      <Route path="/charters" element={<CharterService />} />
      <Route path="/flooring" element={<FlooringService />} />
    </Routes>
  );
}

export default App;