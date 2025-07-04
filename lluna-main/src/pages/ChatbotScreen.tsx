import translate from "google-translate-api-x";
import { Languages, Mic, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const ChatbotScreen = () => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<
    { type: "user" | "assistant"; text: string }[]
  >([
    { type: "assistant", text: "*Hello!* I'm your *legal AI assistant*. How can I help you today?" }
  ]);
  const [language, setLanguage] = useState<"en" | "ta">("en");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isListening, setIsListening] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const translateText = async (text: string, from: string, to: string) => {
    try {
      if (text.length > 500) {
        const chunks = text.match(/.{1,500}/g) || [];
        const translatedChunks = await Promise.all(
          chunks.map(async (chunk) => {
            const result = await translate(chunk, { from, to });
            return result.text;
          })
        );
        return translatedChunks.join(" ");
      } else {
        const translated = await translate(text, { from, to });
        return translated.text;
      }
    } catch (error) {
      console.error("Translation error:", error);
      return text;
    }
  };

  const sendMessage = async (userMessage: string) => {
    try {
      let translatedInput = userMessage;

      if (language === "ta") {
        translatedInput = await translateText(userMessage, "ta", "en");
      }

      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: translatedInput, language }),
      });

      const data = await response.json();
      let botReply = `**${data.reply}**`;

      if (language === "ta") {
        botReply = await translateText(botReply, "en", "ta");
        botReply = `**${botReply}**`;
      }

      return botReply;
    } catch (error) {
      console.error("Error sending message:", error);
      return "*Error processing request.*";
    }
  };

  const handleSend = async () => {
    if (!message.trim()) return;

    setConversation((prev) => [...prev, { type: "user", text: message }]);

    const botReply = await sendMessage(message);

    setConversation((prev) => [...prev, { type: "assistant", text: botReply }]);

    setMessage("");
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ta" : "en"));
  };

  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert("Your browser does not support voice recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language === "en" ? "en-US" : "ta-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const spokenText = event.results[0][0].transcript;
      setMessage(spokenText);
    };

    recognition.start();
  };

  // FAQs as separate text containers (buttons)
  const faqs = [
    "What are my rights as a tenant?",
    "How can I file a consumer complaint?",
    "What is the process for divorce in India?",
    "What are the legal steps to start a business?",
    "How can I report workplace harassment?",
    "What are the rules for inheritance and will?",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-[calc(100vh-64px)] flex flex-col">
      <div className="bg-white rounded-xl shadow-md flex flex-col flex-grow overflow-hidden">

        {/* Header */}
        <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Legal AI Chatbot</h1>
          <button
            onClick={toggleLanguage}
            className="p-2 px-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-100 transition"
            aria-label="Toggle language"
          >
            {language === "en" ? "தமிழ்" : "English"}
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
          {conversation.map((msg, index) => (
            <div key={index} className={`mb-4 ${msg.type === "user" ? "text-right" : "text-left"}`}>
              <div
                className={`inline-block p-3 rounded-lg max-w-[80%] ${
                  msg.type === "user"
                    ? "bg-indigo-600 text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-200"
                }`}
              >
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* FAQs Section Above Input */}
        <div className="bg-gray-100 p-4 border-t border-gray-300 flex flex-wrap gap-2 justify-center">
          {faqs.map((question, index) => (
            <button
              key={index}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-md border border-gray-300 hover:bg-indigo-600 hover:text-white transition"
              onClick={() => setMessage(question)}
            >
              {question}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={language === "en" ? "Type your legal question..." : "உங்கள் சட்டக் கேள்வியை உள்ளிடவும்..."}
              className="flex-1 border border-gray-300 rounded-l-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button onClick={handleSend} className="bg-indigo-600 text-white p-3 rounded-tr-lg rounded-br-lg">
              <Send className="h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-center mt-3">
            <button
              onClick={startListening}
              className="flex items-center bg-indigo-600 text-white hover:bg-indigo-700 py-2 px-5 rounded-lg transition focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <Mic className="h-5 w-5 mr-2" />
              {isListening ? "Listening..." : "Speak your question"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotScreen;
