import LocalStorage from "../../constants/LocalStorage";
import authService from "../../services/authService";
import localStoragePlus from "../../utils/localStoragePlus";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  account: {},
  isLogined: false,
  isLoading: false,
};

const login = createAsyncThunk(
  "auth/login",
  async ({ data }, { rejectWithValue }) => {
    try {
      return await authService.login(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const slice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    resetState: () => initialState,
  },

  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [login.fulfilled]: (state, { payload }) => {
      const { token, refreshToken, user: account } = payload;
      const authStorage = localStoragePlus.createStorage(LocalStorage.Auth.key);

      authStorage.setItem(LocalStorage.Auth.token, token);
      authStorage.setItem(LocalStorage.Auth.refreshToken, refreshToken);

      state.account = account;
      state.isLogined = true;
      state.isLoading = false;
    },
  },
});

const persistConfig = {
  keyPrefix: "c2Shop",
  key: "Auth",
  storage,
};

export const authActions = slice.actions;
export const authAsyncActions = { login };
export const authReducer = persistReducer(persistConfig, slice.reducer);
