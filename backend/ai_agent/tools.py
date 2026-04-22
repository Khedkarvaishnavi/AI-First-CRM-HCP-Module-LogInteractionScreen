



import json
import re
from ai_agent.groq_client import call_groq


def extract_json(text):
    try:
        match = re.search(r"\{.*\}", text, re.DOTALL)
        if match:
            return json.loads(match.group(0))
    except Exception as e:
        print("JSON error:", e)

    return {
        "hcp_name": "",
        "interaction_type": "",
        "date": "",
        "time": "",
        "topics": "",
        "follow_up": "",
        "sentiment": "Neutral"
    }


# 🔥 MAIN TOOL
def log_interaction_tool(state):
    prompt = f"""
You are a medical CRM assistant.

Extract structured CRM data from text.

Return ONLY JSON:

{{
  "hcp_name": "",
  "interaction_type": "",
  "date": "",
  "time": "",
  "topics": "",
  "follow_up": "",
  "sentiment": ""
}}

Rules:
- sentiment must be Positive, Negative or Neutral
- Positive → happy / interested
- Negative → rejected / unhappy
- Neutral → normal discussion

Text:
{state['message']}
"""

    response = call_groq(prompt)

    data = extract_json(response)

    # Fix topics format
    if isinstance(data.get("topics"), list):
        data["topics"] = ", ".join(data["topics"])

    # Ensure sentiment exists
    if not data.get("sentiment"):
        data["sentiment"] = "Neutral"

    return data


# 🔧 EDIT TOOL
def edit_interaction_tool(existing_data, update_text):
    prompt = f"""
Update this JSON:

{existing_data}

Based on:
{update_text}

Return ONLY JSON.
"""

    response = call_groq(prompt)
    return extract_json(response)