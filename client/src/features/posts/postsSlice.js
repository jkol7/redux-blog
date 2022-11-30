import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things about Redux.",
  },
  {
    id: "2",
    title: "Slices",
    content: "I like slices and pieces of it",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
