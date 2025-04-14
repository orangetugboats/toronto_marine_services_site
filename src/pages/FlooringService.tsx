import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function FlooringService() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Marine Flooring Installation</h1>
          
          <div className="aspect-video mb-8 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1588712427408-77a2235f523d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
              alt="Marine Flooring"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="prose max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                Professional installation of premium marine flooring solutions for all types of vessels. Enhance both the aesthetics and safety of your boat.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Our Flooring Options:</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Marine-grade vinyl</li>
                <li>Synthetic teak</li>
                <li>Non-slip surfaces</li>
                <li>Custom designs</li>
                <li>Waterproof solutions</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Request Installation Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="boatType" className="block text-sm font-medium text-gray-700 mb-1">
                    Boat Type
                  </label>
                  <input
                    type="text"
                    id="boatType"
                    name="boatType"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="boatLength" className="block text-sm font-medium text-gray-700 mb-1">
                    Boat Length (ft)
                  </label>
                  <input
                    type="number"
                    id="boatLength"
                    name="boatLength"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Get Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}