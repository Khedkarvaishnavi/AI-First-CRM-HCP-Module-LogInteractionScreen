# AI-First CRM HCP Module – LogInteractionScreen

An AI-powered Customer Relationship Management (CRM) module designed for Life Sciences field representatives to efficiently log and manage interactions with Healthcare Professionals (HCPs).

This system leverages LLMs + LangGraph to convert unstructured conversation into structured CRM data with sentiment analysis.


# Features

#AI-Assisted Interaction Logging

#AI extracts:

1.HCP Name
2.Interaction Type
3.Date & Time
4.Topics Discussed
5.Follow-up Actions
6.Sentiment (Positive / Neutral / Negative)



#Sentiment Analysis (AI-Based)

1.Automatically detects sentiment using LLM
2.Displays using radio buttons
3.Editable by user



#Editable CRM Form

1.AI auto-fills data
2.Users can manually edit before saving


#LangGraph AI Agent
1.Manages workflow of interaction processing
2.Uses multiple tools for CRM intelligence


#Frontend
1.React.js
2.Redux Toolkit (State Management)
3.CSS (Custom Styling)
4.Google Inter Font



#Backend
1.FastAPI (Python)
2.LangGraph (AI Agent Framework)
3.Groq API (LLM Inference)
4.Model: llama-3.3-70b-versatile



#Database 
PostgreSQL / MySQL


#Installation & Setup

1.cd backend 
python -m venv venv 
venv\Scripts\activate
pip install -r requirements.txt



#Create .env file inside backend/

GROQ_API_KEY=your_api_key_here


Run Backend
uvicorn main:app --reload

👉 Open: http://127.0.0.1:8000/docs



2.Frontend Setup
cd frontend
npm install
npm start

👉 Open: http://localhost:3000



#Application Flow

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



#LangGraph Agent Design

The LangGraph agent orchestrates the AI workflow by managing states and invoking tools.

# Tools Used:
Log Interaction Tool

Edit Interaction Tool

Summarization Tool

Sentiment Tool

Follow-up Suggestion Tool

#Input

Met Dr. Sharma, discussed diabetes medicine. He was happy and agreed for follow-up.

📦 Output
{
  "hcp_name": "Dr. Sharma",
  "interaction_type": "Meeting",
  "topics": "Diabetes medicine",
  "follow_up": "Next meeting",
  "sentiment": "Positive"
}
