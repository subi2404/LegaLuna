import React, { useState, useRef } from 'react';
import { MessageSquare, User, ThumbsUp, Filter, Search, Award, Clock, Send, X } from 'lucide-react';

const CommunityForum = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAskForm, setShowAskForm] = useState(false);
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionDescription, setQuestionDescription] = useState('');
  const [questionCategory, setQuestionCategory] = useState('property');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewingQuestion, setViewingQuestion] = useState<number | null>(null);
  const [newReply, setNewReply] = useState('');
  
  const formRef = useRef<HTMLDivElement>(null);
  
  const filters = [
    { id: 'all', name: 'All Topics' },
    { id: 'property', name: 'Property Law' },
    { id: 'civil', name: 'Civil Law' },
    { id: 'criminal', name: 'Criminal Law' },
    { id: 'family', name: 'Family Law' },
    { id: 'labor', name: 'Labor Law' }
  ];
  
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "Can a landlord increase rent without notice?",
      description: "My landlord wants to increase my rent by 20% without any prior notice. Is this legal? What are my rights as a tenant?",
      author: "Rahul Sharma",
      category: "property",
      time: "2 hours ago",
      replies: [
        {
          id: 1,
          author: "Adv. Priya Mehta",
          text: "No, a landlord cannot increase rent without proper notice. According to most state Rent Control Acts, landlords must provide at least 1-3 months' notice (depending on your state) before increasing rent. The increase should also be reasonable and in line with market rates. Check your rental agreement for specific terms about rent increases. If there's no mention, your state's rent control laws will apply. You can challenge an unreasonable increase in Rent Control Court.",
          time: "1 hour ago",
          isVerified: true,
          upvotes: 7
        },
        {
          id: 2,
          author: "Amit Kumar",
          text: "I faced a similar situation last year. I referred to the Rent Control Act of my state and found that the landlord needs to give at least 3 months' notice. I showed this to my landlord and he agreed to delay the increase and reduce it to 10%.",
          time: "30 minutes ago",
          isVerified: false,
          upvotes: 3
        }
      ],
      upvotes: 7,
      hasVerifiedAnswer: true
    },
    {
      id: 2,
      title: "Process for filing consumer complaint",
      description: "I purchased a defective product online and the seller is refusing to refund. What's the process for filing a consumer complaint?",
      author: "Priya Patel",
      category: "civil",
      time: "1 day ago",
      replies: [
        {
          id: 1,
          author: "Adv. Rajesh Singh",
          text: "Under the Consumer Protection Act 2019, you can file a complaint in the following ways:\n\n1. First, send a formal complaint to the seller/platform giving them 15-30 days to respond.\n\n2. If unresolved, file a complaint with the District Consumer Disputes Redressal Commission where you reside or where the seller has a branch office. For online purchases, you can file in your district.\n\n3. You can file online through the National Consumer Helpline portal (consumerhelpline.gov.in) or the INGRAM portal.\n\n4. Your complaint should include: your details, seller details, purchase proof, description of defect, and relief sought (refund, replacement, compensation).\n\nFor claims up to ₹1 crore, approach the District Commission. The filing fee is nominal based on the claim amount.",
          time: "20 hours ago",
          isVerified: true,
          upvotes: 12
        }
      ],
      upvotes: 12,
      hasVerifiedAnswer: true
    },
    {
      id: 3,
      title: "Rights during police questioning",
      description: "If police call me for questioning, do I need to go? What are my rights during questioning? Can I bring a lawyer?",
      author: "Amit Kumar",
      category: "criminal",
      time: "3 days ago",
      replies: [
        {
          id: 1,
          author: "Adv. Vikram Chandra",
          text: "If police call you for questioning, here are your rights:\n\n1. For informal questioning, you're not legally obligated to go unless there's a written notice/summons.\n\n2. If you receive a formal summons under Section 41A CrPC, you must appear or risk arrest.\n\n3. You have the right to know why you're being questioned.\n\n4. You have the right to remain silent if answers might incriminate you (Article 20(3) of Constitution).\n\n5. You have the right to consult a lawyer before and during questioning, though the lawyer may not intervene during the actual questioning.\n\n6. Women can only be questioned at their residence and between 6am-6pm.\n\n7. Police cannot use threats, promises or force to extract information.\n\nI recommend always having a lawyer present during police questioning.",
          time: "2 days ago",
          isVerified: true,
          upvotes: 24
        }
      ],
      upvotes: 24,
      hasVerifiedAnswer: true
    },
    {
      id: 4,
      title: "Mutual consent divorce timeline",
      description: "My spouse and I have decided to file for mutual consent divorce. How long does the process take and what are the steps involved?",
      author: "Neha Singh",
      category: "family",
      time: "5 days ago",
      replies: [
        {
          id: 1,
          author: "Karan Malhotra",
          text: "My wife and I completed our mutual consent divorce last year. The entire process took about 8 months. We filed the petition together, then had to wait for the mandatory 6-month cooling period, after which we appeared in court again to confirm our decision. The judge granted the divorce decree in our second hearing. Make sure all your paperwork regarding property, maintenance and child custody (if applicable) is properly prepared before filing.",
          time: "4 days ago",
          isVerified: false,
          upvotes: 5
        }
      ],
      upvotes: 9,
      hasVerifiedAnswer: false
    },
    {
      id: 5,
      title: "Maternity leave entitlement",
      description: "I'm pregnant and want to know my maternity leave entitlement. My company says I'm only eligible for 12 weeks. Is this correct?",
      author: "Anjali Gupta",
      category: "labor",
      time: "1 week ago",
      replies: [
        {
          id: 1,
          author: "Adv. Sunita Sharma",
          text: "According to the Maternity Benefit (Amendment) Act, 2017, you are entitled to 26 weeks of paid maternity leave if you have fewer than two children. If you already have two or more children, then you're entitled to 12 weeks.\n\nThe law applies to all establishments employing 10 or more persons. Your employer cannot deny you this legally mandated benefit.\n\nAdditionally, the law provides for:\n- Work from home options after the leave period (based on nature of work)\n- Crèche facilities in establishments with 50+ employees\n- 12 weeks leave for adoptive and commissioning mothers\n\nIf your company is not providing the legally mandated leave, you can file a complaint with the Labor Commissioner or approach the labor court.",
          time: "6 days ago",
          isVerified: true,
          upvotes: 15
        }
      ],
      upvotes: 15,
      hasVerifiedAnswer: true
    }
  ]);

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!questionTitle.trim() || !questionDescription.trim()) {
      alert('Please fill in all fields');
      return;
    }
    
    const newQuestion = {
      id: questions.length + 1,
      title: questionTitle,
      description: questionDescription,
      author: "You", // In a real app, this would be the logged-in user
      category: questionCategory,
      time: "Just now",
      replies: [],
      upvotes: 0,
      hasVerifiedAnswer: false
    };
    
    setQuestions([newQuestion, ...questions]);
    setQuestionTitle('');
    setQuestionDescription('');
    setShowAskForm(false);
    
    // Scroll to top to see the new question
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitReply = (questionId: number) => {
    if (!newReply.trim()) {
      alert('Please enter your reply');
      return;
    }
    
    const updatedQuestions = questions.map(q => {
      if (q.id === questionId) {
        const newReplyObj = {
          id: q.replies.length + 1,
          author: "You", // In a real app, this would be the logged-in user
          text: newReply,
          time: "Just now",
          isVerified: false,
          upvotes: 0
        };
        
        return {
          ...q,
          replies: [...q.replies, newReplyObj]
        };
      }
      return q;
    });
    
    setQuestions(updatedQuestions);
    setNewReply('');
  };

  const handleUpvote = (questionId: number, replyId?: number) => {
    const updatedQuestions = questions.map(q => {
      if (q.id === questionId) {
        if (replyId) {
          // Upvote a reply
          const updatedReplies = q.replies.map(r => {
            if (r.id === replyId) {
              return { ...r, upvotes: r.upvotes + 1 };
            }
            return r;
          });
          return { ...q, replies: updatedReplies };
        } else {
          // Upvote the question
          return { ...q, upvotes: q.upvotes + 1 };
        }
      }
      return q;
    });
    
    setQuestions(updatedQuestions);
  };

  const filteredQuestions = questions
    .filter(q => 
      (activeFilter === 'all' || q.category === activeFilter) &&
      (searchTerm === '' || 
        q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const currentQuestion = viewingQuestion 
    ? questions.find(q => q.id === viewingQuestion) 
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Forum</h1>
          <p className="text-gray-600">Ask questions and get answers from verified legal experts</p>
        </div>
        <button 
          onClick={() => {
            setShowAskForm(true);
            setTimeout(() => {
              formRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="mt-4 md:mt-0 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition flex items-center"
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Ask a Question
        </button>
      </div>
      
      {/* Ask Question Form */}
      {showAskForm && (
        <div ref={formRef} className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Ask a Legal Question</h2>
              <button 
                onClick={() => setShowAskForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmitQuestion}>
              <div className="mb-4">
                <label htmlFor="questionTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Question Title
                </label>
                <input
                  type="text"
                  id="questionTitle"
                  value={questionTitle}
                  onChange={(e) => setQuestionTitle(e.target.value)}
                  placeholder="E.g., What are my rights as a tenant?"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="questionDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="questionDescription"
                  value={questionDescription}
                  onChange={(e) => setQuestionDescription(e.target.value)}
                  placeholder="Provide details about your legal question..."
                  rows={4}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="questionCategory" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="questionCategory"
                  value={questionCategory}
                  onChange={(e) => setQuestionCategory(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  {filters.filter(f => f.id !== 'all').map((filter) => (
                    <option key={filter.id} value={filter.id}>
                      {filter.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowAskForm(false)}
                  className="mr-3 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  Post Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Search and Filter */}
      {!viewingQuestion && (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-500 mr-2">Filter:</span>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activeFilter === filter.id 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Back Button when viewing a question */}
      {viewingQuestion && (
        <button
          onClick={() => setViewingQuestion(null)}
          className="mb-4 flex items-center text-indigo-600 hover:text-indigo-800"
        >
          <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all questions
        </button>
      )}
      
      {/* Question Detail View */}
      {viewingQuestion && currentQuestion && (
        <div className="space-y-6">
          {/* Question */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{currentQuestion.title}</h3>
                <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {filters.find(f => f.id === currentQuestion.category)?.name}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{currentQuestion.description}</p>
              
              <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
                <div className="flex items-center mb-2 sm:mb-0">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{currentQuestion.author}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{currentQuestion.time}</span>
                </div>
                
                <div className="flex items-center">
                  <button 
                    onClick={() => handleUpvote(currentQuestion.id)}
                    className="flex items-center text-gray-500 hover:text-indigo-600"
                  >
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>{currentQuestion.upvotes} upvotes</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Replies */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {currentQuestion.replies.length} {currentQuestion.replies.length === 1 ? 'Reply' : 'Replies'}
              </h3>
              
              <div className="space-y-6">
                {currentQuestion.replies.map((reply) => (
                  <div key={reply.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-800 mr-2">{reply.author}</span>
                        {reply.isVerified && (
                          <span className="inline-flex items-center bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                            <Award className="h-3 w-3 mr-1" />
                            Verified Lawyer
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">{reply.time}</span>
                    </div>
                    
                    <div className="text-gray-700 whitespace-pre-line mb-3">
                      {reply.text}
                    </div>
                    
                    <button 
                      onClick={() => handleUpvote(currentQuestion.id, reply.id)}
                      className="flex items-center text-gray-500 hover:text-indigo-600 text-sm"
                    >
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>{reply.upvotes} upvotes</span>
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Reply Form */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-lg font-medium text-gray-800 mb-3">Add Your Reply</h4>
                <div className="mb-3">
                  <textarea
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    placeholder="Share your knowledge or experience..."
                    rows={4}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleSubmitReply(currentQuestion.id)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Post Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Questions List */}
      {!viewingQuestion && (
        <div className="space-y-6">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question) => (
              <div key={question.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{question.title}</h3>
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {filters.find(f => f.id === question.category)?.name}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{question.description}</p>
                  
                  <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-4">{question.author}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{question.time}</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>{question.replies.length} replies</span>
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>{question.upvotes} upvotes</span>
                      </div>
                      {question.hasVerifiedAnswer && (
                        <div className="flex items-center text-green-600">
                          <Award className="h-4 w-4 mr-1" />
                          <span>Verified Answer</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                  <button 
                    onClick={() => setViewingQuestion(question.id)}
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                  >
                    View Discussion →
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <p className="text-gray-500 text-lg mb-4">No questions found matching your criteria.</p>
              {(searchTerm || activeFilter !== 'all') && (
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveFilter('all');
                  }}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </div>
      )}
      
      {/* Community Guidelines */}
      {!viewingQuestion && (
        <div className="mt-12 bg-indigo-50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Community Guidelines</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <div className="flex-shrink-0 text-indigo-500 mr-2">•</div>
              <p>Be respectful and courteous to other community members</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 text-indigo-500 mr-2">•</div>
              <p>Provide as much detail as possible when asking questions</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 text-indigo-500 mr-2">•</div>
              <p>Upvote helpful answers to make them more visible to others</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 text-indigo-500 mr-2">•</div>
              <p>Remember that responses are general guidance, not specific legal advice</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CommunityForum;