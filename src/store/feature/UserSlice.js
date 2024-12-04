import { createSlice } from "@reduxjs/toolkit";

// Initialize image count as a number or a meaningful default value
const initialImageCount = false;

export const userSlice = createSlice({
  name: "user",
  initialState: {
    imagecount: initialImageCount,
  },
  reducers: {
    // Correctly handle the payload logic for numeric or string types
    setImageCount: (state, action) => {
      state.imagecount = action.payload; // Directly set the payload to imagecount
    },
    incrementImageCount: (state, action) => {
      state.imagecount += action.payload; // Add to the existing imagecount
    },
  },
});

// Action creators are generated for each case reducer function
export const { setImageCount, incrementImageCount } = userSlice.actions;

// Selector to access the user state
export const selectUser = (state) => state.user;

export default userSlice.reducer;
