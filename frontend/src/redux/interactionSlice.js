


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   data: {
//     hcp_name: "",
//     interaction_type: "",
//     date: "",
//     time: "",
//     topics: "",
//     follow_up: "",
//     sentiment: ""
//   },
//   editableFields: {}
// };

// const interactionSlice = createSlice({
//   name: "interaction",
//   initialState,
//   reducers: {
//     setInteraction: (state, action) => {
//       state.data = { ...state.data, ...action.payload };

//       Object.keys(action.payload).forEach((key) => {
//         state.editableFields[key] = true;
//       });
//     },

//     // 🔥 THIS WAS MISSING
//     updateField: (state, action) => {
//       const { name, value } = action.payload;
//       state.data[name] = value;
//     }
//   }
// });

// export const { setInteraction, updateField } = interactionSlice.actions;
// export default interactionSlice.reducer;









import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    hcp_name: "",
    interaction_type: "",
    date: "",
    time: "",
    topics: "",
    follow_up: "",
    sentiment: ""   // 🔥 REQUIRED
  },
  editableFields: {}
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState,
  reducers: {
    setInteraction: (state, action) => {
      state.data = { ...state.data, ...action.payload };

      Object.keys(action.payload).forEach((key) => {
        state.editableFields[key] = true;
      });
    },

    updateField: (state, action) => {
      const { name, value } = action.payload;
      state.data[name] = value;
    }
  }
});

export const { setInteraction, updateField } = interactionSlice.actions;
export default interactionSlice.reducer;