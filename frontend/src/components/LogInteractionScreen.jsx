
import InteractionForm from "./InteractionForm";
import AIChat from "./AIChat";
import "../styles.css";

export default function LogInteractionScreen() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      
      <div style={{ width: "70%" }}>
        <InteractionForm />
      </div>

      <div style={{ width: "30%" }}>
        <AIChat />
      </div>

    </div>
  );
}