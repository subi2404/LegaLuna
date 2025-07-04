import { MessageCircle, Mic, Send, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [conversation, setConversation] = useState<{ type: 'user' | 'assistant'; text: string; link?: string }[]>([
    { type: 'assistant', text: 'Welcome to Legaluna! How can I assist you today?' },
  ]);

  const navigate = useNavigate();

  const options = [
    { label: '📂 Find Legal Templates', response: 'You can download the templates here.', route: '/templates' },
    { label: '📜 Get Legal Guides', response: 'You can get legal guides here.', route: '/guides' },
    { label: '❓ Ask Legal FAQs', response: 'Redirecting you to our AI Legal Chatbot for detailed assistance.', route: '/chatbot' },
    { label: '💬 Join Legal Forum', response: 'Here is your community forum to discuss with.', route: '/community' },
    { label: '📞 Call Legal Helpline', response: 'Call the legal helpline at 1800-LEGAL-HELP', route: '/helpline' },
  ];

  const faqResponses = [
    { question: 'What is a rental agreement?', answer: 'A rental agreement is a legal contract between a landlord and a tenant, outlining terms for renting a property. To know more, click the link below.', link: 'https://www.indiafilings.com/sample-format/residential-rental-agreement-format.pdf' },
    { question: 'How do I register a complaint?', answer: 'You can file a complaint at your local police station or online at the government complaint portal. To know more, click the link below.', link: 'https://services.india.gov.in/service/detail/register-your-complaint-with-ministry-of-corporate-affairs' },
    { question: 'How do I get a marriage certificate?', answer: 'You can apply for a marriage certificate at your local municipal office or online via Govt. Marriage Registration. To know more, click the link below.', link: 'https://services.india.gov.in/service/detail/apply-online-for-marriage-registration-certificate-1' },
    { question: 'How can I file for divorce?', answer: 'You need to file a divorce petition in court, citing valid grounds. To know more, click the link below.', link: 'https://lawcommissionofindia.nic.in/cat_marriage_divorce_maintenance/' },
    { question: 'Who gets child custody in a divorce?', answer: 'The court decides custody based on the child’s best interests. To know more, click the link below.', link: 'https://www.legalserviceindia.com/legal/article-710-child-custody-laws-in-india.html' },
    { question: 'How do I legally change my name?', answer: 'You need to submit a name change application with supporting documents to your local government office. To know more, click the link below.', link: 'https://cleartax.in/s/name-change-online-india' },
    { question: 'What are the labor laws for part-time workers?', answer: 'This requires a legal expert. Redirecting you to our AI chatbot for accurate answers...', link: '/chatbot' },
  ];

  const handleOptionClick = (option) => {
    setConversation([...conversation, { type: 'user', text: option.label }, { type: 'assistant', text: option.response }]);
    setTimeout(() => {
      navigate(option.route);
      speakResponse(option.response);
    }, 1000);
  };

  const handleSend = () => {
    if (message.trim()) {
      const faq = faqResponses.find((faq) => message.toLowerCase().includes(faq.question.toLowerCase()));
      if (faq) {
        setConversation([...conversation, { type: 'user', text: message }, { type: 'assistant', text: faq.answer, link: faq.link }]);
        speakResponse(faq.answer);
      } else {
        setConversation([...conversation, { type: 'user', text: message }, { type: 'assistant', text: 'I will redirect you to the appropriate resource.' }]);
        speakResponse('I will redirect you to the appropriate resource.');
      }
      setMessage('');
    }
  };

  const speakResponse = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
  };

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Your browser does not support voice recognition.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      setMessage('Listening...');
    };

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setMessage(spokenText);
      setIsListening(false);
      handleSend();
    };

    recognition.onerror = () => {
      setIsListening(false);
      setMessage('');
    };

    recognition.start();
  };

  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 transition-all z-50">
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-50 flex flex-col border border-gray-200">
      <div className="bg-indigo-600 text-white p-3 flex justify-between items-center">
        <h3 className="font-medium">Legal Assistant</h3>
        <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="p-3">
        {options.map((option, index) => (
          <button key={index} onClick={() => handleOptionClick(option)} className="block w-full text-left bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded mb-2">
            {option.label}
          </button>
        ))}
      </div>

      <div className="flex-1 p-3 overflow-y-auto max-h-80 bg-gray-50">
        {conversation.map((msg, index) => (
          <div key={index} className={`mb-3 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-3 rounded-lg ${msg.type === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {msg.text}
            </div>
            {msg.link && msg.type === 'assistant' && (
              <a href={msg.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline block mt-1">
                🔗 Click here
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 p-3 bg-white flex items-center">
        <button onClick={startListening} className={`p-2 rounded-lg mr-2 ${isListening ? 'bg-red-600 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}>
          <Mic className="h-5 w-5" />
        </button>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your question..." className="flex-1 border border-gray-300 py-2 px-3 rounded-lg" />
        <button onClick={handleSend} className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700">
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default FloatingAssistant;
