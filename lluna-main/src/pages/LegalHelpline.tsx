import React from 'react';
import { Phone, Clock, Info, Users, Shield, Scale, Heart } from 'lucide-react';

const LegalHelpline = () => {
  const helplines = [
    {
      id: 1,
      name: "Women's Helpline",
      number: "1091",
      description: "24/7 emergency helpline for women facing violence or harassment",
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      hours: "24 hours, all days",
      eligibility: "Women facing violence, harassment, or any form of abuse"
    },
    {
      id: 2,
      name: "Labor Rights Helpline",
      number: "1800-2700-703",
      description: "Assistance for workers facing exploitation or unfair labor practices",
      icon: <Users className="h-8 w-8 text-blue-500" />,
      hours: "10:00 AM - 6:00 PM, Monday to Friday",
      eligibility: "Workers in organized and unorganized sectors"
    },
    {
      id: 3,
      name: "SC/ST Rights Helpline",
      number: "1800-180-5577",
      description: "Support for individuals facing caste-based discrimination",
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      hours: "9:30 AM - 6:00 PM, Monday to Friday",
      eligibility: "Members of Scheduled Castes and Scheduled Tribes"
    },
    {
      id: 4,
      name: "Legal Services Authority",
      number: "1516",
      description: "Free legal aid and advice for eligible citizens",
      icon: <Scale className="h-8 w-8 text-green-500" />,
      hours: "10:00 AM - 5:00 PM, Monday to Saturday",
      eligibility: "Low-income individuals, women, children, SC/ST, disabled persons"
    },
    {
      id: 5,
      name: "Child Helpline",
      number: "1098",
      description: "Emergency assistance for children in distress",
      icon: <Heart className="h-8 w-8 text-amber-500" />,
      hours: "24 hours, all days",
      eligibility: "Children in need of care and protection"
    },
    {
      id: 6,
      name: "Senior Citizen Helpline",
      number: "14567",
      description: "Support for elderly citizens facing legal or other issues",
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      hours: "24 hours, all days",
      eligibility: "Senior citizens aged 60 years and above"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Legal Helplines</h1>
      <p className="text-gray-600 mb-8">Direct access to government and NGO helplines for immediate legal assistance</p>
      
      {/* Important Notice */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <Info className="h-5 w-5 text-amber-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-amber-700">
              <strong>Important:</strong> In case of emergencies, please dial 112 for immediate police assistance.
            </p>
          </div>
        </div>
      </div>
      
      {/* Helplines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {helplines.map((helpline) => (
          <div key={helpline.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
                  {helpline.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">{helpline.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{helpline.description}</p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 text-gray-500 mr-2" />
                      <span>{helpline.hours}</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <Users className="h-4 w-4 text-gray-500 mr-2 mt-1" />
                      <span>{helpline.eligibility}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
              <a 
                href={`tel:${helpline.number}`}
                className="w-full flex items-center justify-center bg-green-600 text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-green-700 transition"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call {helpline.number}
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional Resources */}
      <div className="mt-12 bg-indigo-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Resources</h2>
        <p className="text-gray-600 mb-6">
          Besides helplines, you can also visit the following for in-person legal assistance:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="flex-shrink-0 bg-white p-1 rounded-full">
              <Scale className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="ml-3">
              <p className="text-gray-800 font-medium">District Legal Services Authority (DLSA)</p>
              <p className="text-sm text-gray-600">Located in every district court complex</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 bg-white p-1 rounded-full">
              <Scale className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="ml-3">
              <p className="text-gray-800 font-medium">Legal Aid Clinics</p>
              <p className="text-sm text-gray-600">Run by law colleges and NGOs across the country</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 bg-white p-1 rounded-full">
              <Scale className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="ml-3">
              <p className="text-gray-800 font-medium">Lok Adalats</p>
              <p className="text-sm text-gray-600">Alternative dispute resolution mechanism for quick settlement</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LegalHelpline;
