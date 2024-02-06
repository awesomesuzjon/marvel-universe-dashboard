import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';
import md5 from 'md5';
import {Character, MarvelState} from "../interfaces/interface";

const MARVEL_API_BASE_URL = process.env.REACT_APP_MARVEL_API_BASE_URL || '';
const MARVEL_API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY || '';

const generateTimestamp = () => {
    return Math.floor(new Date().getTime() / 1000).toString();
};


const generateHash = (timestamp: string) => {
    const privateKey = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY || '';
    const publicKey = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY || '';

    const hash = md5(timestamp + privateKey + publicKey);
    return hash;
};

export const fetchCharacters = createAsyncThunk<Character[]>(
    'marvel/fetchCharacters',
    async () => {
        const timestamp = generateTimestamp();
        const hash = generateHash(timestamp);

        try {
            const response: AxiosResponse<{
                data: { results: Character[] };
            }> = await axios.get(`${MARVEL_API_BASE_URL}/characters`, {
                params: {
                    apikey: MARVEL_API_PUBLIC_KEY,
                    ts: timestamp,
                    hash: hash,
                },
            });
            return response.data.data.results;
        } catch (error: any) {
            console.error('Error in API call:', error);
            throw error.response?.data.message || 'Unknown error';
        }
    }
);

const marvelSlice = createSlice({
    name: 'marvel',
    initialState: {
        characters: [],
        status: 'idle',
        error: null,
    } as MarvelState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, (state: MarvelState) => {
                state.status = 'loading';
            })
            .addCase(fetchCharacters.fulfilled, (state: MarvelState, action: PayloadAction<Character[]>) => {
                state.status = 'succeeded';
                state.characters = action.payload;
            })
            .addCase(fetchCharacters.rejected, (state: MarvelState, action) => {
                if (action.payload) {
                    state.status = 'failed';
                    // @ts-ignore
                    state.error = action.payload;
                } else {
                    state.status = 'failed';
                    state.error = 'Unknown error';
                }
            });
    },
});

export default marvelSlice.reducer;
