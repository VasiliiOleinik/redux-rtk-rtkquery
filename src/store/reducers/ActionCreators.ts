import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { IUser } from "../../models/IUser"
import { AppDispatch } from "../stote";
import { userSlice } from "./UserSlice"

// export const fetchUsers = () => async(dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.userFetching());
//         const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//         dispatch(userSlice.actions.userFetchingSuccess(responce.data));
//     } catch (e) {
//         dispatch(userSlice.actions.userFetchingError(e.message));
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async(_, thunkApi) => {
        try {
            const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return responce.data;
        } catch (e) {
            return thunkApi.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)