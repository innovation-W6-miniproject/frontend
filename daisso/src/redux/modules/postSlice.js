import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  post: [],
  isLoading: false,
  // success: true,
  error: null,
};

export const __getPost = createAsyncThunk("post/getPost", async (payload, thunkAPI) => {
  try {
    const data = await axios.get(`http://15.164.224.94/api/post/`);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __getPostDetail = createAsyncThunk("post/getPost", async (payload, thunkAPI) => {
  try {
    const data = await axios.get(`http://15.164.224.94/api/post/${payload}`);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPostDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPostDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPostDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPostDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
