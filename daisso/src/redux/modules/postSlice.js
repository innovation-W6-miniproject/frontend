import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../utils/Cookie";

const REACT_APP_API_POST_URL = `http://15.164.224.94/api/post`;
const REACT_APP_API_LIKES_URL = `http://15.164.224.94/api/auth/like/post`;

const initialState = {
  post: [],
  detail: [],
  data: false,
  isLoading: false,
  error: null,
};

export const __getPost = createAsyncThunk("post/getPost", async (payload, thunkAPI) => {
  try {
    const data = await axios.get(REACT_APP_API_POST_URL);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __getPostDetail = createAsyncThunk(
  "post/getPostDetail",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(REACT_APP_API_POST_URL + `/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __likesPost = createAsyncThunk("likesPost", async (payload, thunkAPI) => {
  try {
    const access = getCookie("access_token");
    const refresh = getCookie("refresh_token");

    axios.defaults.headers.common["authorization"] = access;
    axios.defaults.headers.common["refresh-token"] = refresh;
    console.log("??:", payload);

    const data = await axios.post(REACT_APP_API_LIKES_URL + `/${payload}`);
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
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPostDetail.fulfilled]: (state, action) => {
      state.detail = action.payload;
    },
    [__likesPost.fulfilled]: (state, action) => {
      console.log("성공true 실패false:", action.payload);
      // return action.payload.like;
    },
  },
});

export const { likespost } = postSlice.actions;
export default postSlice.reducer;
