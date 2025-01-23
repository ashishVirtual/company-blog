import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: [],
};

export const getBlogData = createAsyncThunk("getBlogData", async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages/api/product`);
  return await result.json();
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBlogData.fulfilled, (state, action) => {
      state.blog = action.payload;
    });
  },
});

export default blogSlice.reducer;
