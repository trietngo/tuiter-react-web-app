import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
    "auth/login", async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
    const response = authService.profile();
    return response.data;
});

export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
    return await authService.logout();
});

export const updateUserThunk = createAsyncThunk(
    "auth/updateUser", async (user) => {
      const status = await authService.updateUser(user._id, user);
      return user;
});

export const registerThunk = createAsyncThunk(
    "auth/register", async (credentials) => {
        const user = await authService.register(credentials);
        return user;
    }
)