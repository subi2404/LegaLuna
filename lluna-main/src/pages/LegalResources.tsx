import React, { useState } from 'react';
import { FileText, BookOpen, ChevronDown, Search } from 'lucide-react';

// Data from database
const legalCategories = [
  { id: 1, name: 'Criminal Law', description: 'Laws related to crimes and their punishments' },
  { id: 2, name: 'Civil Law', description: 'Laws governing private disputes between individuals or organizations' },
  { id: 3, name: 'Constitutional Law', description: 'Laws related to the Indian Constitution and governance' },
  { id: 4, name: 'Corporate Law', description: 'Laws concerning businesses and corporate entities' },
  { id: 5, name: 'Labor Law', description: 'Laws regulating employment, wages, and working conditions' },
  { id: 6, name: 'Family Law', description: 'Laws related to marriage, divorce, and inheritance' },
  { id: 7, name: 'Tax Law', description: 'Laws governing taxation policies and revenue collection' },
  { id: 8, name: 'Property Law', description: 'Laws dealing with ownership, transfer, and rights over property' },
  { id: 9, name: 'Environmental Law', description: 'Laws protecting the environment and natural resources' },
  { id: 10, name: 'Cyber Law', description: 'Laws concerning cybercrimes and data protection' },
  { id: 11, name: 'Consumer Law', description: 'Laws protecting consumer rights and fair trade practices' }
];

const laws = [
  // 1. Criminal Laws
  {
    id: 1,
    name: 'Bharatiya Nyaya Sanhita, 2023',
    categoryId: 1,
    year: 2023,
    description: 'Replaced the Indian Penal Code, governing crimes and punishments.',
    link: 'https://www.mha.gov.in/sites/default/files/250883_english_01042024.pdf',
    sections: [
      { number: 'Section 34', title: 'Acts done by several persons in furtherance of common intention' },
      { number: 'Section 120B', title: 'Punishment of Criminal Conspiracy' },
      { number: 'Section 143', title: 'Punishment for Unlawful Assembly' }
    ]
  },
  {
    id: 2,
    name: 'Bharatiya Sakshya Adhiniyam, 2023',
    categoryId: 1,
    year: 2023,
    description: 'Replaces the Indian Evidence Act, setting rules for the admissibility of evidence in court.',
    link: 'https://www.mha.gov.in/sites/default/files/250884_english_01042024.pdf',
    sections: [
      { number: 'Section 3', title: 'Definition of Evidence' },
      { number: 'Section 65B', title: 'Admissibility of Electronic Records' },
      { number: 'Section 114', title: 'Presumptions as to Documents' }
    ]
  },

  // 2. Civil Laws
  {
    id: 3,
    name: 'Code of Civil Procedure, 1908',
    categoryId: 2,
    year: 1908,
    description: 'Provides the procedure for civil court cases in India.',
    link: 'https://legislative.gov.in/sites/default/files/A1908-05.pdf',
    sections: [
      { number: 'Section 9', title: 'Courts to Try All Civil Suits' },
      { number: 'Section 151', title: 'Inherent Powers of Court' },
      { number: 'Order 39', title: 'Temporary Injunctions and Interlocutory Orders' }
    ]
  },

  // 3. Consumer Laws
  {
    id: 4,
    name: 'Consumer Protection Act, 2019',
    categoryId: 3,
    year: 2019,
    description: 'Protects consumer rights and prevents unfair trade practices.',
    link: 'https://consumeraffairs.nic.in/sites/default/files/ConsumerProtectionAct2019.pdf',
    sections: [
      { number: 'Section 2', title: 'Definitions' },
      { number: 'Section 35', title: 'Consumer Rights' },
      { number: 'Section 47', title: 'Consumer Disputes Redressal Commission' }
    ]
  },

  // 4. Labour Laws
  {
    id: 5,
    name: 'Industrial Disputes Act, 1947',
    categoryId: 4,
    year: 1947,
    description: 'Regulates labor disputes and defines worker rights.',
    link: 'https://labour.gov.in/sites/default/files/TheIndustrialDisputesAct1947.pdf',
    sections: [
      { number: 'Section 2', title: 'Definitions' },
      { number: 'Section 25F', title: 'Conditions for Retrenchment of Workmen' },
      { number: 'Section 33', title: 'Prohibition of Change of Service Conditions During Dispute' }
    ]
  },

  // 5. Environmental Laws
  {
    id: 6,
    name: 'Environment Protection Act, 1986',
    categoryId: 5,
    year: 1986,
    description: 'Provides for the protection and improvement of the environment.',
    link: 'https://moef.gov.in/wp-content/uploads/2020/06/ep-act-1986.pdf',
    sections: [
      { number: 'Section 3', title: 'Power of Central Government to Take Measures' },
      { number: 'Section 7', title: 'Persons Carrying on Industry to Not Allow Emission of Pollutants' },
      { number: 'Section 15', title: 'Penalty for Contravention' }
    ]
  },

  // 6. Corporate Laws
  {
    id: 7,
    name: 'Companies Act, 2013',
    categoryId: 6,
    year: 2013,
    description: 'Regulates the formation, functioning, and dissolution of companies in India.',
    link: 'https://www.mca.gov.in/Ministry/pdf/CompaniesAct2013.pdf',
    sections: [
      { number: 'Section 2', title: 'Definitions' },
      { number: 'Section 135', title: 'Corporate Social Responsibility (CSR)' },
      { number: 'Section 248', title: 'Removal of Name of Company from Register' }
    ]
  },

  // 7. Family Laws
  {
    id: 8,
    name: 'Hindu Marriage Act, 1955',
    categoryId: 7,
    year: 1955,
    description: 'Governs marriage and divorce for Hindus in India.',
    link: 'https://legislative.gov.in/sites/default/files/A1955-25.pdf',
    sections: [
      { number: 'Section 5', title: 'Conditions for a Hindu Marriage' },
      { number: 'Section 13', title: 'Grounds for Divorce' },
      { number: 'Section 24', title: 'Maintenance Pendente Lite and Expenses of Proceedings' }
    ]
  },

  // 8. Cyber Laws
  {
    id: 9,
    name: 'Information Technology Act, 2000',
    categoryId: 8,
    year: 2000,
    description: 'Governs cyber laws, digital signatures, and electronic records.',
    link: 'https://www.meity.gov.in/writereaddata/files/itact2000/it-amendment-act-2008.pdf',
    sections: [
      { number: 'Section 43', title: 'Penalty for Damage to Computer System' },
      { number: 'Section 66', title: 'Hacking with Computer System' },
      { number: 'Section 72', title: 'Breach of Confidentiality and Privacy' }
    ]
  },

  // 9. Property Laws
  {
    id: 10,
    name: 'Transfer of Property Act, 1882',
    categoryId: 9,
    year: 1882,
    description: 'Regulates the transfer of property in India.',
    link: 'https://legislative.gov.in/sites/default/files/A1882-04.pdf',
    sections: [
      { number: 'Section 5', title: 'Transfer Defined' },
      { number: 'Section 54', title: 'Sale of Immovable Property' },
      { number: 'Section 118', title: 'Exchange' }
    ]
  },

  // 10. Constitutional Laws
  {
    id: 11,
    name: 'The Constitution of India, 1950',
    categoryId: 10,
    year: 1950,
    description: 'The supreme law of India, laying down the framework of governance and fundamental rights.',
    link: 'https://legislative.gov.in/sites/default/files/COI...pdf',
    sections: [
      { number: 'Article 14', title: 'Right to Equality' },
      { number: 'Article 19', title: 'Right to Freedom' },
      { number: 'Article 21', title: 'Right to Life and Personal Liberty' }
    ]
  }
];


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [expandedLaw, setExpandedLaw] = useState<number | null>(null);

  const toggleCategory = (categoryId: number) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleLaw = (lawId: number) => {
    setExpandedLaw(expandedLaw === lawId ? null : lawId);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Legal Resources</h1>
          <p className="text-gray-600">Access comprehensive Indian legal information and resources</p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Search laws, articles, or legal terms..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4339CA] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-4 top-3.5 text-gray-400" />
          </div>
        </div>

        {/* Legal Categories */}
        <div className="space-y-4">
          {legalCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-[#4339CA]/10 p-2 rounded-lg">
                    <BookOpen className="h-6 w-6 text-[#4339CA]" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`h-6 w-6 text-gray-400 transition-transform ${
                    expandedCategory === category.id ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expanded Category Content */}
              {expandedCategory === category.id && (
                <div className="px-6 py-4 border-t border-gray-100">
                  <div className="space-y-4">
                    {laws
                      .filter((law) => law.categoryId === category.id)
                      .map((law) => (
                        <div key={law.id} className="bg-gray-50 rounded-lg p-4">
                          <button
                            onClick={() => toggleLaw(law.id)}
                            className="w-full flex items-start justify-between"
                          >
                            <div>
                              <h4 className="text-lg font-medium text-gray-900">{law.name}</h4>
                              <p className="text-gray-600 mt-1">{law.description}</p>
                            </div>
                            <ChevronDown
                              className={`h-5 w-5 text-gray-400 transition-transform ${
                                expandedLaw === law.id ? 'transform rotate-180' : ''
                              }`}
                            />
                          </button>

                          {/* Expanded Law Content */}
                          {expandedLaw === law.id && (
                            <div className="mt-4 space-y-4">
                              <div className="space-y-2">
                                <h5 className="font-medium text-gray-900">Key Sections:</h5>
                                {law.sections.map((section) => (
                                  <div
                                    key={section.number}
                                    className="bg-white p-3 rounded border border-gray-200"
                                  >
                                    <p className="font-medium text-[#4339CA]">{section.number}</p>
                                    <p className="text-gray-700">{section.title}</p>
                                  </div>
                                ))}
                              </div>
                              <div className="pt-4 border-t border-gray-200">
                                <a
                                  href={law.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-[#4339CA] hover:text-[#5B54D3]"
                                >
                                  <FileText className="h-4 w-4 mr-2" />
                                  View Full Text
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;