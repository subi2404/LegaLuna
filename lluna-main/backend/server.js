import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import translate from "google-translate-api-x"; // Importing translation API

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Load API keys from env
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("❌ ERROR: GEMINI_API_KEY is missing in .env file");
  process.exit(1);
}

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

// Route to handle chatbot requests
app.post("/chat", async (req, res) => {
  try {
    let { message, language } = req.body;
    if (!message) return res.status(400).json({ error: "❌ Message is required" });

    console.log(`📩 User input received: "${message}" | Language: ${language}`);

    // **STEP 1: Detect & Translate Tamil Input to English**
    if (language === "ta") {
      console.log("🌐 Translating Tamil to English...");
      const translatedInput = await translate(message, { from: "ta", to: "en" });
      message = translatedInput.text; // Update message to English
      console.log(`✅ Translated Input: "${message}"`);
    }

    // **STEP 2: Prepare the AI Prompt**
    const formattedPrompt = `
You are an AI legal assistant specializing in **Indian law**. Minimize the hallucination and give the reality input in your response and if you really don't know the answer for the question asked just say "I don't know".Answer in simple, clear language. If you don't know the answer based on the provided information, say so instead of making up information
**Always** format responses clearly with bullet points, spacing, and markdown-like formatting. 
Here’s how you should format your response:

---

**Example Response Formatting:**

**Steps to File an FIR in India:**
1. **Visit the nearest police station** – Go to the station in the jurisdiction where the incident occurred.
2. **Explain your complaint** – Provide details to the officer in writing or verbally.
3. **Obtain an FIR copy** – The officer will register your complaint and provide a copy.

---

Now, format the following **user query** in the same structured way:

**User Query:** "${message}"
`;

    // **STEP 3: Send Request to Gemini AI**
    console.log("🤖 Sending request to Gemini AI...");
    const response = await axios.post(GEMINI_URL, {
      contents: [{ parts: [{ text: formattedPrompt }] }],
    });

    let reply =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "⚠️ Sorry, I can only provide guidance on Indian legal matters.";

    console.log(`✅ Gemini AI Response: "${reply}"`);

    // **STEP 4: Translate Response to Tamil if Needed**
    if (language === "ta") {
      console.log("🌐 Translating response to Tamil...");
      const translatedOutput = await translate(reply, { from: "en", to: "ta" });
      reply = translatedOutput.text; // Update reply to Tamil
      console.log(`✅ Translated Output: "${reply}"`);
    }

    res.json({ reply });
  } catch (error) {
    console.error("❌ ERROR:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to get AI response from Gemini" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
