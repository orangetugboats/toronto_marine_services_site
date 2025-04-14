import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TowingService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">On-Water Boat Towing</h1>
          
          <div className="aspect-video mb-8 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
              alt="Boat Towing Service"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              24/7 emergency towing service for stranded vessels. Our experienced team is always ready to assist you on the waters of Lake Ontario.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Towing Services Include:</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Emergency towing to nearest safe harbor</li>
              <li>Fuel delivery</li>
              <li>Battery jumps</li>
              <li>Prop disentanglement</li>
              <li>Soft ungrounding</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Emergency Contact</h3>
              <p className="text-gray-700">
                For immediate assistance, call our 24/7 emergency line:
                <br />
                <span className="text-2xl font-bold text-blue-600">(555) 123-4567</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}