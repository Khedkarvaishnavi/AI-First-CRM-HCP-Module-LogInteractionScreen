

from langgraph.graph import StateGraph
from typing import TypedDict
from ai_agent.tools import log_interaction_tool


# 🔹 Step 1: Define State Schema
class GraphState(TypedDict):
    message: str
    result: dict


# 🔹 Step 2: Create agent function
def run_agent(message):

    # initial state
    state = {
        "message": message,
        "result": {}
    }

    # 🔹 Step 3: Node function
    def log_node(state: GraphState):
        output = log_interaction_tool(state)
        return {"result": output}

    # 🔹 Step 4: Create Graph WITH schema
    graph = StateGraph(GraphState)

    graph.add_node("log", log_node)
    graph.set_entry_point("log")

    # 🔹 Step 5: Compile
    app = graph.compile()

    # 🔹 Step 6: Run
    result = app.invoke(state)

    return result["result"]