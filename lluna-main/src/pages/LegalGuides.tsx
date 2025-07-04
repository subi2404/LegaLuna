import React, { useState } from 'react';
import { BookOpen, Search, ChevronDown, ChevronUp, Download, Share2 } from 'lucide-react';

const LegalGuides = () => {
  const [expandedGuide, setExpandedGuide] = useState<number | null>(null);
  
  const toggleGuide = (id: number) => {
    if (expandedGuide === id) {
      setExpandedGuide(null);
    } else {
      setExpandedGuide(id);
    }
  };
  
  const guides = [
    {
      id: 1,
      title: "Understanding FIR Filing Process",
      summary: "A step-by-step guide to filing a First Information Report (FIR) with the police",
      content: `
        <h3>What is an FIR?</h3>
        <p>A First Information Report (FIR) is a written document prepared by the police when they receive information about the commission of a cognizable offense.</p>
        
        <h3>When to File an FIR</h3>
        <p>You should file an FIR when you are a victim of a crime, witness a crime, or have knowledge about a crime that has been committed or is likely to be committed.</p>
        
        <h3>Step-by-Step Process</h3>
        <ol>
          <li><strong>Visit the Police Station:</strong> Go to the police station that has jurisdiction over the area where the crime occurred.</li>
          <li><strong>Meet the Officer in Charge:</strong> Speak to the Station House Officer (SHO) or the officer on duty.</li>
          <li><strong>Provide Your Statement:</strong> Narrate the incident in detail. Be truthful and provide all relevant information.</li>
          <li><strong>Review the FIR:</strong> The officer will record your statement and prepare the FIR. Read it carefully before signing.</li>
          <li><strong>Collect FIR Copy:</strong> You are entitled to a free copy of the FIR. Make sure you collect it.</li>
        </ol>
        
        <h3>Important Points to Remember</h3>
        <ul>
          <li>The police cannot refuse to register an FIR.</li>
          <li>If the police refuse, you can approach the Superintendent of Police or file a complaint with the magistrate.</li>
          <li>Filing a false FIR is a punishable offense.</li>
          <li>An FIR can be filed in any police station, regardless of jurisdiction.</li>
        </ul>
      `,
      category: "Criminal Law",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Tenant Rights in India",
      summary: "Know your rights as a tenant under rental laws in India",
      content: `
        <h3>Basic Tenant Rights</h3>
        <p>As a tenant in India, you have several rights protected by law, even if they are not explicitly mentioned in your rental agreement.</p>
        
        <h3>Right to a Written Agreement</h3>
        <p>You have the right to a written rental agreement that clearly states the terms and conditions of the tenancy, including rent amount, security deposit, duration, and other relevant details.</p>
        
        <h3>Right to Essential Services</h3>
        <p>Landlords cannot cut off essential services like water, electricity, or sanitation facilities to force you to vacate the premises.</p>
        
        <h3>Protection Against Arbitrary Eviction</h3>
        <p>A landlord cannot evict you without following the proper legal procedure, which typically involves giving notice as specified in the agreement or as required by state rental laws.</p>
        
        <h3>Right to Privacy</h3>
        <p>The landlord cannot enter the rented premises without prior notice, except in emergencies.</p>
        
        <h3>Security Deposit Refund</h3>
        <p>You are entitled to receive your security deposit back when you vacate the premises, minus any legitimate deductions for damages beyond normal wear and tear.</p>
        
        <h3>State-Specific Laws</h3>
        <p>Rental laws vary by state in India. It's important to familiarize yourself with the specific laws applicable in your state.</p>
      `,
      category: "Property Law",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Consumer Rights Under Consumer Protection Act",
      summary: "Understanding your rights as a consumer and how to file complaints",
      content: `
        <h3>Key Consumer Rights</h3>
        <p>The Consumer Protection Act, 2019 provides the following rights to consumers:</p>
        <ul>
          <li><strong>Right to Safety:</strong> Protection against products and services that are hazardous to life and property.</li>
          <li><strong>Right to Information:</strong> Access to accurate information about quality, quantity, purity, standard, and price of goods or services.</li>
          <li><strong>Right to Choose:</strong> Assurance of access to a variety of goods and services at competitive prices.</li>
          <li><strong>Right to be Heard:</strong> Guarantee that consumer interests will receive due consideration.</li>
          <li><strong>Right to Seek Redressal:</strong> Compensation for unfair trade practices or exploitation.</li>
          <li><strong>Right to Consumer Education:</strong> Access to knowledge and skills to be an informed consumer.</li>
        </ul>
        
        <h3>Filing a Consumer Complaint</h3>
        <ol>
          <li><strong>First Step:</strong> Contact the seller or service provider directly to resolve the issue.</li>
          <li><strong>Written Complaint:</strong> If not resolved, send a written complaint to the company's customer service.</li>
          <li><strong>Consumer Forum:</strong> If still unresolved, file a complaint with the appropriate Consumer Dispute Redressal Commission:
            <ul>
              <li>District Commission: For claims up to ₹1 crore</li>
              <li>State Commission: For claims between ₹1 crore and ₹10 crores</li>
              <li>National Commission: For claims exceeding ₹10 crores</li>
            </ul>
          </li>
        </ol>
        
        <h3>Online Complaint Filing</h3>
        <p>You can file complaints online through the National Consumer Helpline portal or the INGRAM portal maintained by the Department of Consumer Affairs.</p>
      `,
      category: "Consumer Law",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "Understanding Divorce Procedures in India",
      summary: "Different types of divorce and the legal process involved",
      content: `
        <h3>Types of Divorce in India</h3>
        <p>Indian law recognizes two main types of divorce:</p>
        <ul>
          <li><strong>Mutual Consent Divorce:</strong> When both spouses agree to dissolve the marriage.</li>
          <li><strong>Contested Divorce:</strong> When one spouse files for divorce without the consent of the other.</li>
        </ul>
        
        <h3>Mutual Consent Divorce Process</h3>
        <ol>
          <li><strong>Filing the Petition:</strong> Both parties jointly file a petition in the family court.</li>
          <li><strong>First Motion:</strong> The court records statements from both parties.</li>
          <li><strong>Cooling-off Period:</strong> A mandatory 6-month waiting period (can be waived by the court).</li>
          <li><strong>Second Motion:</strong> After the cooling-off period, parties appear again to confirm their decision.</li>
          <li><strong>Final Hearing:</strong> The court passes a decree of divorce if satisfied with the mutual consent.</li>
        </ol>
        
        <h3>Contested Divorce Process</h3>
        <ol>
          <li><strong>Filing the Petition:</strong> One spouse files a petition citing grounds for divorce.</li>
          <li><strong>Response:</strong> The other spouse files a response.</li>
          <li><strong>Evidence and Hearings:</strong> Both parties present evidence and witnesses.</li>
          <li><strong>Mediation:</strong> The court may refer the case for mediation.</li>
          <li><strong>Final Arguments:</strong> Lawyers present final arguments.</li>
          <li><strong>Judgment:</strong> The court passes a judgment granting or denying divorce.</li>
        </ol>
        
        <h3>Grounds for Divorce</h3>
        <p>Common grounds for divorce include cruelty, desertion, conversion to another religion, mental disorder, communicable disease, presumption of death, and irretrievable breakdown of marriage.</p>
        
        <h3>Child Custody and Maintenance</h3>
        <p>The court decides on child custody and maintenance based on the best interests of the child. Factors considered include the child's age, gender, wishes (if old enough), and the parents' ability to care for the child.</p>
      `,
      category: "Family Law",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Employee Rights Under Labor Laws",
      summary: "Essential rights every employee should know about",
      content: `
        <h3>Key Employee Rights</h3>
        <p>Indian labor laws provide several rights to protect employees:</p>
        
        <h3>Working Hours and Overtime</h3>
        <p>The Factories Act limits working hours to 8 hours per day and 48 hours per week. Work beyond these hours qualifies as overtime, which must be paid at double the regular rate.</p>
        
        <h3>Minimum Wages</h3>
        <p>The Minimum Wages Act ensures that employers pay at least the minimum wage set by the government for different categories of work and different regions.</p>
        
        <h3>Equal Remuneration</h3>
        <p>The Equal Remuneration Act prohibits discrimination in recruitment and payment of wages based on gender for the same work or work of similar nature.</p>
        
        <h3>Maternity Benefits</h3>
        <p>The Maternity Benefit Act provides for 26 weeks of paid maternity leave for the first two children and 12 weeks for subsequent children. It also includes provisions for work from home options and crèche facilities.</p>
        
        <h3>Prevention of Sexual Harassment</h3>
        <p>The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act requires employers to create a safe working environment and establish an Internal Complaints Committee to address harassment complaints.</p>
        
        <h3>Termination and Compensation</h3>
        <p>The Industrial Disputes Act regulates the termination of employment and provides for compensation in case of layoffs or retrenchment. It requires proper notice or payment in lieu of notice.</p>
        
        <h3>Social Security</h3>
        <p>Various laws like the Employees' Provident Fund Act and Employees' State Insurance Act provide for social security benefits including provident fund, pension, insurance, and medical benefits.</p>
      `,
      category: "Labor Law",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Legal Guides</h1>
      <p className="text-gray-600 mb-8">Simple explanations of complex legal concepts and procedures</p>
      
      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search legal guides..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      
      {/* Guides List */}
      <div className="space-y-6">
        {guides.map((guide) => (
          <div key={guide.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full mr-4">
                    <BookOpen className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{guide.title}</h3>
                    <p className="text-gray-600">{guide.summary}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full mr-3">
                        {guide.category}
                      </span>
                      <span>{guide.readTime}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => toggleGuide(guide.id)}
                  className="flex-shrink-0 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
                >
                  {expandedGuide === guide.id ? 
                    <ChevronUp className="h-5 w-5 text-gray-600" /> : 
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  }
                </button>
              </div>
              
              {expandedGuide === guide.id && (
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <div 
                    className="prose prose-indigo max-w-none" 
                    dangerouslySetInnerHTML={{ __html: guide.content }}
                  />
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
                      <Download className="h-4 w-4 mr-2" />
                      Download as PDF
                    </button>
                    <button className="inline-flex items-center bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Guide
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Request Guide Section */}
      <div className="mt-12 bg-indigo-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Can't Find What You're Looking For?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          If you need information on a specific legal topic that's not covered in our guides, 
          let us know and our legal experts will create a new guide.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition">
          Request a Guide
        </button>
      </div>
    </div>
  );
};

export default LegalGuides;