import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrls } from '../actions';

export interface AppState {
	loading: boolean;
	error: any;
}

const initialState: AppState = {
	loading: false,
	error: '',
};

const voyatekSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder;
	},
});

export default voyatekSlice.reducer;
