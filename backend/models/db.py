from pydantic import BaseModel
from typing import Optional


# 🔹 Input schema for chat API
class ChatInput(BaseModel):
    message: str


# 🔹 Main Interaction schema (used for AI + form data)
class Interaction(BaseModel):
    hcp_name: str
    interaction_type: str
    date: str
    time: Optional[str] = None
    attendees: Optional[str] = None
    topics: str
    follow_up: Optional[str] = None


# 🔹 Response schema (optional but good practice)
class InteractionResponse(BaseModel):
    status: str
    data: Interaction