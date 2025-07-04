import React, { useState } from 'react';
import { FileText, Download, Home, FileSignature, FileWarning, FileBadge, FileCheck, Search, Check } from 'lucide-react';

const LegalTemplates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [downloadedTemplates, setDownloadedTemplates] = useState<number[]>([]);
  
  const templates = [
    { 
      id: 1, 
      title: 'Rental Agreement', 
      description: 'Standard rental/lease agreement for residential properties',
      icon: <Home className="h-8 w-8 text-blue-500" />,
      category: 'Property',
      fileUrl: '/templates/rental-agreement.pdf'
    },
    { 
      id: 2, 
      title: 'Will Format', 
      description: 'Basic will template for asset distribution important under the Property rights',
      icon: <FileSignature className="h-8 w-8 text-green-500" />,
      category: 'Personal',
      fileUrl: '/templates/will-format.pdf'
    },
    { 
      id: 3, 
      title: 'FIR Format', 
      description: 'First Information Report template for police complaints',
      icon: <FileWarning className="h-8 w-8 text-red-500" />,
      category: 'Criminal',
      fileUrl: '/templates/fir-format.pdf'
    },
    { 
      id: 4, 
      title: 'Employment Contract', 
      description: 'Standard employment agreement with terms and conditions',
      icon: <FileBadge className="h-8 w-8 text-purple-500" />,
      category: 'Employment',
      fileUrl: '/templates/employment-contract.pdf'
    },
    { 
      id: 5, 
      title: 'Power of Attorney', 
      description: 'Legal document for delegating authority to another person',
      icon: <FileCheck className="h-8 w-8 text-amber-500" />,
      category: 'Personal',
      fileUrl: '/templates/power-of-attorney.pdf'
    },
    { 
      id: 6, 
      title: 'Consumer Complaint', 
      description: 'General affidavit template for Consumer Complaint',
      icon: <FileText className="h-8 w-8 text-indigo-500" />,
      category: 'Consumer',
      fileUrl: '/templates/consumer_format.pdf'
    },
  ];

  const categories = ['All', 'Property', 'Personal', 'Criminal', 'Employment', 'Consumer'];

  const handleDownload = (id: number, fileUrl: string) => {
    console.log(`Downloading template: ${fileUrl}`);
  
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop() || 'template.pdf';
    
    document.body.appendChild(link);
    link.click(); // 🔥 TRIGGER THE DOWNLOAD
    document.body.removeChild(link); // ✅ REMOVE AFTER DOWNLOAD
  
    // Mark as downloaded
    setDownloadedTemplates(prev => [...prev, id]);
  
    // Show success message
    setTimeout(() => {
      alert(`Template downloaded successfully!`);
    }, 500);
  };
  

  const filteredTemplates = templates
    .filter(template => 
      (activeCategory === 'All' || template.category === activeCategory) &&
      (searchTerm === '' || 
        template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Legal Templates</h1>
      
      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                category === activeCategory 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template) => (
            <div key={template.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
                    {template.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">{template.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-2">
                      {template.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                <button 
                  onClick={() => handleDownload(template.id, template.fileUrl)}
                  className={`w-full flex items-center justify-center ${
                    downloadedTemplates.includes(template.id)
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  } text-white px-4 py-2 rounded-lg text-sm font-medium transition`}
                >
                  {downloadedTemplates.includes(template.id) ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Downloaded
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4 mr-2" />
                      Download as PDF
                    </>
                  )}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No templates found matching your search criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
              }}
              className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      
      {/* Coming Soon Section */}
      <div className="mt-12 bg-indigo-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Coming Soon: Auto-Fill Forms</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Soon you'll be able to automatically fill legal documents based on your inputs. 
          Our system will generate customized legal documents tailored to your specific needs.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition opacity-50 cursor-not-allowed">
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default LegalTemplates;