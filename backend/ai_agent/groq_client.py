# import requests

# API_KEY = "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"

# def call_groq(prompt):
#     url = "https://api.groq.com/openai/v1/chat/completions"

#     headers = {
#         "Authorization": f"Bearer {API_KEY}",
#         "Content-Type": "application/json"
#     }

#     data = {
#         "model": "gemma2-9b-it",
#         "messages": [
#             {"role": "user", "content": prompt}
#         ]
#     }

#     response = requests.post(url, headers=headers, json=data)
#     return response.json()["choices"][0]["message"]["content"]













import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("GROQ_API_KEY")

def call_groq(prompt, model="llama-3.3-70b-versatile"):
    url = "https://api.groq.com/openai/v1/chat/completions"

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": model,
        "messages": [
            {"role": "user", "content": prompt}
        ]
    }

    response = requests.post(url, headers=headers, json=data)

    print("FULL RESPONSE:", response.text)  # 👈 ADD THIS

    res_json = response.json()

    # ✅ SAFE HANDLING
    if "choices" not in res_json:
        return {"error": res_json}

    return res_json["choices"][0]["message"]["content"]