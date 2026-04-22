


import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../redux/interactionSlice";
import "../styles.css";

export default function InteractionForm() {
  const { data, editableFields } = useSelector((state) => state.interaction);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateField({ name: e.target.name, value: e.target.value }));
  };

  const Input = ({ name, placeholder }) => (
    <input
      name={name}
      value={data[name] || ""}
      placeholder={placeholder}
      onChange={handleChange}
      className="input"
    />
  );

  return (
    <div className="card">
      <h2>Log HCP Interaction</h2>

      <div className="row">
        <Input name="hcp_name" placeholder="HCP Name" />
        <Input name="interaction_type" placeholder="Interaction Type" />
      </div>

      <div className="row">
        <Input name="date" placeholder="Date" />
        <Input name="time" placeholder="Time" />
      </div>

      <textarea
        name="topics"
        value={data.topics || ""}
        placeholder="Topics Discussed"
        onChange={handleChange}
        className="textarea"
      />

      <Input name="follow_up" placeholder="Follow Up" />

      {/* 🔥 SENTIMENT RADIO BUTTONS */}
      <div style={{ marginTop: "15px" }}>
        <label><b>Sentiment:</b></label>

        <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
          
          <label>
            <input
              type="radio"
              name="sentiment"
              value="Positive"
              checked={data.sentiment === "Positive"}
              onChange={handleChange}
            />
            Positive 😊
          </label>

          <label>
            <input
              type="radio"
              name="sentiment"
              value="Neutral"
              checked={data.sentiment === "Neutral"}
              onChange={handleChange}
            />
            Neutral 😐
          </label>

          <label>
            <input
              type="radio"
              name="sentiment"
              value="Negative"
              checked={data.sentiment === "Negative"}
              onChange={handleChange}
            />
            Negative 😞
          </label>

        </div>
      </div>

      <button className="submit-btn" style={{ marginTop: "20px" }}>
        Submit
      </button>
    </div>
  );
}