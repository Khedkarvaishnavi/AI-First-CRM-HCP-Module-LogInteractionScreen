# AI-First CRM HCP Module – LogInteractionScreen

An AI-powered Customer Relationship Management (CRM) module designed for Life Sciences field representatives to efficiently log and manage interactions with Healthcare Professionals (HCPs).

This system leverages LLMs + LangGraph to convert unstructured conversation into structured CRM data with sentiment analysis.

# Features
🔹 AI-Assisted Interaction Logging
Users can describe interactions in natural language
AI extracts:
HCP Name
Interaction Type
Date & Time
Topics Discussed
Follow-up Actions
Sentiment (Positive / Neutral / Negative)
🔹 Dual Input Mode
📋 Structured Form Input
💬 Conversational AI Chat Interface
🔹 Sentiment Analysis (AI-Based)
Automatically detects sentiment using LLM
Displays using radio buttons
Editable by user
🔹 Editable CRM Form
AI auto-fills data
Users can manually edit before saving
🔹 LangGraph AI Agent
Manages workflow of interaction processing
Uses multiple tools for CRM intelligence
🏗️ Tech Stack
🔹 Frontend
React.js
Redux Toolkit (State Management)
CSS (Custom Styling)
Google Inter Font
🔹 Backend
FastAPI (Python)
LangGraph (AI Agent Framework)
Groq API (LLM Inference)
Model: llama-3.3-70b-versatile
🔹 Database (Planned / Optional)
PostgreSQL / MySQL
📁 Project Structure
AI-CRM-HCP/
│
├── backend/
│   ├── main.py
│   ├── ai_agent/
│   │   ├── graph.py
│   │   ├── tools.py
│   │   ├── groq_client.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AIChat.jsx
│   │   │   ├── InteractionForm.jsx
│   │   ├── redux/
│   │   │   ├── interactionSlice.js
│   │   ├── styles.css
│
├── .env
├── README.md
⚙️ Installation & Setup
🔹 1. Clone Repository
git clone https://github.com/your-username/ai-crm-hcp.git
cd ai-crm-hcp
🔹 2. Backend Setup
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
🔹 3. Setup Environment Variables

Create .env file inside backend/

GROQ_API_KEY=your_api_key_here
🔹 4. Run Backend
uvicorn main:app --reload

👉 Open: http://127.0.0.1:8000/docs

🔹 5. Frontend Setup
cd frontend
npm install
npm start

👉 Open: http://localhost:3000

🔄 Application Flow
User Input (Chat)
        ↓
FastAPI Endpoint (/chat-log)
        ↓
LangGraph Agent
        ↓
LLM (Groq - Llama Model)
        ↓
Structured JSON Output
        ↓
Redux Store Update
        ↓
Auto-filled Form UI
🤖 LangGraph Agent Design

The LangGraph agent orchestrates the AI workflow by managing states and invoking tools.

🔧 Tools Used:
Log Interaction Tool
Extracts structured data from user input
Performs sentiment analysis
Edit Interaction Tool
Updates previously captured interaction data
Summarization Tool
Generates concise interaction summary
Sentiment Tool
Classifies sentiment (Positive/Negative/Neutral)
Follow-up Suggestion Tool
Recommends next actions
🧪 Example Input & Output
📝 Input
Met Dr. Sharma, discussed diabetes medicine. He was happy and agreed for follow-up.
📦 Output
{
  "hcp_name": "Dr. Sharma",
  "interaction_type": "Meeting",
  "topics": "Diabetes medicine",
  "follow_up": "Next meeting",
  "sentiment": "Positive"
}
🎯 Key Highlights
AI-first design approach
Real-world CRM use case (Life Sciences)
Combines structured + conversational UI
LLM-powered data extraction
Editable UI for user control
Scalable architecture
⚠️ Known Limitations
Date/time may be approximated if not provided
Requires internet for LLM API
Database persistence optional (can be extended)
🚀 Future Enhancements
📊 Dashboard & Analytics
📅 Follow-up Reminders
💾 Database Integration
🔔 Alerts for Negative Sentiment
🎤 Voice Input Support
👩‍💻 Author

Vaishnavi Khedkar
Full Stack Developer (Fresher)
Project: AI-First CRM (HCP Module)

📜 License

This project is for educational and evaluation purposes.
