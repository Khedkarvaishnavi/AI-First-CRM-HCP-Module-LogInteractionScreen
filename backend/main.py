

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from ai_agent.graph import run_agent

# 🔷 Create FastAPI app
app = FastAPI()

# 🔷 ✅ CORS Middleware (MUST be before routes)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # you can restrict to ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],  # 🔥 allows OPTIONS, POST, etc.
    allow_headers=["*"],
)

# 🔷 Request schema
class ChatInput(BaseModel):
    message: str


# 🔷 Root route (for testing)
@app.get("/")
def home():
    return {"message": "AI CRM Backend Running 🚀"}


# 🔷 MAIN API (AI Chat → Log Interaction)
@app.post("/chat-log")
def chat_log(input: ChatInput):
    try:
        result = run_agent(input.message)
        return result
    except Exception as e:
        return {
            "error": str(e)
        }



@app.post("/log-interaction")
def save_interaction(data: dict):
    print("Saved Interaction:", data)
    return {
        "status": "success",
        "data": data
    }