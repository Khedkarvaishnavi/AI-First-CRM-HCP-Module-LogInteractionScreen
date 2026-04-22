

// import { useSelector, useDispatch } from "react-redux";
// import { updateField } from "../redux/interactionSlice";

// export default function InteractionForm() {
//   const { data, editableFields } = useSelector((state) => state.interaction);
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     dispatch(updateField({ name: e.target.name, value: e.target.value }));
//   };

//   const Input = ({ name, placeholder }) => (
//     <input
//       name={name}
//       value={data[name] || ""}
//       placeholder={placeholder}
//       onChange={handleChange}
//       readOnly={!editableFields[name]}
//       className={editableFields[name] ? "input editable" : "input"}
//     />
//   );

//   return (
//     <div className="card">
//       <h2>Log HCP Interaction</h2>

//       <div className="row">
//         <Input name="hcp_name" placeholder="HCP Name" />
//         <Input name="interaction_type" placeholder="Interaction Type" />
//       </div>

//       <div className="row">
//         <Input name="date" placeholder="Date" />
//         <Input name="time" placeholder="Time" />
//       </div>

//       <textarea
//         name="topics"
//         value={data.topics || ""}
//         placeholder="Topics Discussed"
//         onChange={handleChange}
//         readOnly={!editableFields["topics"]}
//         className={editableFields["topics"] ? "textarea editable" : "textarea"}
//       />

//       <Input name="follow_up" placeholder="Follow Up" />

//       <button className="submit-btn">Submit</button>
//     </div>
//   );
// }






// import { useSelector, useDispatch } from "react-redux";
// import { updateField } from "../redux/interactionSlice";
// import "../styles.css";

// export default function InteractionForm() {
//   const { data, editableFields } = useSelector((state) => state.interaction);
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     dispatch(updateField({ name: e.target.name, value: e.target.value }));
//   };

//   // 🔷 Input Component
//   const Input = ({ name, placeholder }) => (
//     <input
//       name={name}
//       value={data[name] || ""}
//       placeholder={placeholder}
//       onChange={handleChange}
//       readOnly={!editableFields[name]}
//       className={editableFields[name] ? "input editable" : "input"}
//     />
//   );

//   return (
//     <div className="card">
//       <h2>Log HCP Interaction</h2>

//       {/* Row 1 */}
//       <div className="row">
//         <Input name="hcp_name" placeholder="HCP Name" />
//         <Input name="interaction_type" placeholder="Interaction Type" />
//       </div>

//       {/* Row 2 */}
//       <div className="row">
//         <Input name="date" placeholder="Date" />
//         <Input name="time" placeholder="Time" />
//       </div>

//       {/* Topics */}
//       <textarea
//         name="topics"
//         value={data.topics || ""}
//         placeholder="Topics Discussed"
//         onChange={handleChange}
//         readOnly={!editableFields["topics"]}
//         className={editableFields["topics"] ? "textarea editable" : "textarea"}
//       />

//       {/* Follow up */}
//       <Input name="follow_up" placeholder="Follow Up" />

//       {/* 🔥 Sentiment Radio Buttons */}
//       <div style={{ marginTop: "15px" }}>
//         <label><b>Sentiment:</b></label>

//         <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
          
//           <label className="sentiment-positive">
//             <input
//               type="radio"
//               name="sentiment"
//               value="Positive"
//               checked={data.sentiment === "Positive"}
//               onChange={handleChange}
//               disabled={!editableFields["sentiment"]}
//             />
//             Positive 😊
//           </label>

//           <label className="sentiment-neutral">
//             <input
//               type="radio"
//               name="sentiment"
//               value="Neutral"
//               checked={data.sentiment === "Neutral"}
//               onChange={handleChange}
//               disabled={!editableFields["sentiment"]}
//             />
//             Neutral 😐
//           </label>

//           <label className="sentiment-negative">
//             <input
//               type="radio"
//               name="sentiment"
//               value="Negative"
//               checked={data.sentiment === "Negative"}
//               onChange={handleChange}
//               disabled={!editableFields["sentiment"]}
//             />
//             Negative 😞
//           </label>

//         </div>
//       </div>

//       {/* Submit Button */}
//       <button className="submit-btn" style={{ marginTop: "20px" }}>
//         Submit
//       </button>
//     </div>
//   );
// }












// import { useSelector, useDispatch } from "react-redux";
// import { updateField } from "../redux/interactionSlice";
// import "../styles.css";

// export default function InteractionForm() {
//   const { data, editableFields } = useSelector((state) => state.interaction);
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     dispatch(updateField({ name: e.target.name, value: e.target.value }));
//   };

//   // safer check (IMPORTANT FIX)
//   const isEditable = (field) => editableFields?.[field] ?? true;

//   const Input = ({ name, placeholder }) => (
//     <input
//       name={name}
//       value={data[name] || ""}
//       placeholder={placeholder}
//       onChange={handleChange}
//       readOnly={!isEditable(name)}
//       className={isEditable(name) ? "input editable" : "input"}
//     />
//   );

//   return (
//     <div className="card">
//       <h2>Log HCP Interaction</h2>

//       {/* Row 1 */}
//       <div className="row">
//         <Input name="hcp_name" placeholder="HCP Name" />
//         <Input name="interaction_type" placeholder="Interaction Type" />
//       </div>

//       {/* Row 2 */}
//       <div className="row">
//         <Input name="date" placeholder="Date" />
//         <Input name="time" placeholder="Time" />
//       </div>

//       {/* Topics */}
//       <textarea
//         name="topics"
//         value={data.topics || ""}
//         placeholder="Topics Discussed"
//         onChange={handleChange}
//         readOnly={!isEditable("topics")}
//         className={isEditable("topics") ? "textarea editable" : "textarea"}
//       />

//       {/* Follow up */}
//       <Input name="follow_up" placeholder="Follow Up" />

//       {/* Sentiment Radio Buttons */}
//       <div style={{ marginTop: "15px" }}>
//         <label><b>Sentiment:</b></label>

//         <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
          
//           <label className="sentiment-positive">
//             <input
//               type="radio"
//               name="sentiment"
//               value="Positive"
//               checked={data.sentiment === "Positive"}
//               onChange={handleChange}
//               disabled={!isEditable("sentiment")}
//             />
//             Positive 😊
//           </label>

//           <label className="sentiment-neutral">
//             <input
//               type="radio"
//               name="sentiment"
//               value="Neutral"
//               checked={data.sentiment === "Neutral"}
//               onChange={handleChange}
//               disabled={!isEditable("sentiment")}
//             />
//             Neutral 😐
//           </label>

//           <label className="sentiment-negative">
//             <input
//               type="radio"
//               name="sentiment"
//               value="Negative"
//               checked={data.sentiment === "Negative"}
//               onChange={handleChange}
//               disabled={!isEditable("sentiment")}
//             />
//             Negative 😞
//           </label>

//         </div>
//       </div>

//       {/* Submit Button */}
//       <button className="submit-btn" style={{ marginTop: "20px" }}>
//         Submit
//       </button>
//     </div>
//   );
// }








// import { useSelector, useDispatch } from "react-redux";
// import { updateField } from "../redux/interactionSlice";
// import { useEffect } from "react";
// import "../styles.css";

// export default function InteractionForm() {
//   const { data, editableFields } = useSelector((state) => state.interaction);
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     dispatch(updateField({ name: e.target.name, value: e.target.value }));
//   };

//   const isEditable = (field) => editableFields?.[field] ?? true;

//   // -------- AI SENTIMENT LOGIC (SIMULATED) ----------
//   const getAISentiment = (text = "") => {
//     const lowerText = text.toLowerCase();

//     const positiveWords = ["good", "great", "excellent", "improve", "satisfied", "happy"];
//     const negativeWords = ["bad", "poor", "issue", "problem", "worst", "angry"];

//     let score = 0;

//     positiveWords.forEach((word) => {
//       if (lowerText.includes(word)) score++;
//     });

//     negativeWords.forEach((word) => {
//       if (lowerText.includes(word)) score--;
//     });

//     if (score > 0) return "Positive";
//     if (score < 0) return "Negative";
//     return "Neutral";
//   };

//   // -------- AUTO AI UPDATE ----------
//   useEffect(() => {
//     const sentiment = getAISentiment(data.topics || "");

//     dispatch(
//       updateField({
//         name: "sentiment",
//         value: sentiment,
//       })
//     );
//   }, [data.topics, dispatch]);

//   const Input = ({ name, placeholder }) => (
//     <input
//       name={name}
//       value={data[name] || ""}
//       placeholder={placeholder}
//       onChange={handleChange}
//       readOnly={!isEditable(name)}
//       className={isEditable(name) ? "input editable" : "input"}
//     />
//   );

//   return (
//     <div className="card">
//       <h2>Log HCP Interaction (AI Assisted)</h2>

//       <div className="row">
//         <Input name="hcp_name" placeholder="HCP Name" />
//         <Input name="interaction_type" placeholder="Interaction Type" />
//       </div>

//       <div className="row">
//         <Input name="date" placeholder="Date" />
//         <Input name="time" placeholder="Time" />
//       </div>

//       <textarea
//         name="topics"
//         value={data.topics || ""}
//         placeholder="Topics Discussed (AI will analyze sentiment)"
//         onChange={handleChange}
//         readOnly={!isEditable("topics")}
//         className={isEditable("topics") ? "textarea editable" : "textarea"}
//       />

//       <Input name="follow_up" placeholder="Follow Up" />

//       {/* SENTIMENT (AUTO AI GENERATED) */}
//       <div style={{ marginTop: "15px" }}>
//         <label><b>AI Sentiment:</b> {data.sentiment}</label>

//         <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
//           <label>
//             <input type="radio" checked={data.sentiment === "Positive"} readOnly />
//             Positive 😊
//           </label>

//           <label>
//             <input type="radio" checked={data.sentiment === "Neutral"} readOnly />
//             Neutral 😐
//           </label>

//           <label>
//             <input type="radio" checked={data.sentiment === "Negative"} readOnly />
//             Negative 😞
//           </label>
//         </div>
//       </div>

//       <button className="submit-btn" style={{ marginTop: "20px" }}>
//         Submit
//       </button>
//     </div>
//   );
// }















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