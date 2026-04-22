

# import json
# import re
# from ai_agent.groq_client import call_groq


# # 🔷 Helper: Extract JSON safely from LLM response
# def extract_json(text):
#     try:
#         # Extract JSON block from response
#         match = re.search(r"\{.*\}", text, re.DOTALL)
#         if match:
#             json_str = match.group(0)
#             return json.loads(json_str)
#         else:
#             return {
#                 "error": "No JSON found in response",
#                 "raw_output": text
#             }
#     except Exception as e:
#         return {
#             "error": str(e),
#             "raw_output": text
#         }


# # 🔷 TOOL 1: Log Interaction (MAIN REQUIRED TOOL)
# def log_interaction_tool(state):
#     prompt = f"""
#     You are a medical CRM assistant.

#     Extract structured CRM data from the text below.

#     STRICT RULES:
#     - Return ONLY valid JSON
#     - Do NOT include explanation
#     - Do NOT use markdown (no ```json)

#     Required fields:
#     hcp_name, interaction_type, date, time, topics, follow_up

#     Text:
#     {state['message']}
#     """

#     response = call_groq(prompt)

#     # Handle API error
#     if isinstance(response, dict) and "error" in response:
#         return response

#     # Extract JSON safely
#     data = extract_json(response)

#     # Convert topics list → string (optional)
#     if isinstance(data.get("topics"), list):
#         data["topics"] = ", ".join(data["topics"])

#     return data


# # 🔷 TOOL 2: Edit Interaction
# def edit_interaction_tool(existing_data, update_text):
#     prompt = f"""
#     Update the following JSON based on new input.

#     Existing Data:
#     {existing_data}

#     Update Instruction:
#     {update_text}

#     Return ONLY updated JSON.
#     """

#     response = call_groq(prompt)

#     return extract_json(response)


# # 🔷 TOOL 3: Summarize Interaction
# def summarize_tool(text):
#     prompt = f"Summarize this medical interaction briefly:\n{text}"
#     return call_groq(prompt)


# # 🔷 TOOL 4: Sentiment Analysis
# def sentiment_tool(text):
#     prompt = f"Give sentiment (positive/negative/neutral):\n{text}"
#     return call_groq(prompt)


# # 🔷 TOOL 5: Follow-up Suggestion
# def followup_tool(text):
#     prompt = f"Suggest a follow-up action for this interaction:\n{text}"
#     return call_groq(prompt)














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