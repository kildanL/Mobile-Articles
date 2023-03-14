import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../models/IArticle"

interface ArticleState {
    articles: IArticle[];
    isLoading: boolean;
    error: string;
}
const initialState: ArticleState = {
    articles: [],
    isLoading: false,
    error: ''
}

export const articleSlice = createSlice({
    name:'article',
    initialState,
    reducers: {
        articlesFetching(state) {
            isLoading:true;
        },
        articlesFetchingSuccess(state,action: PayloadAction<IArticle[]>) {
            isLoading:false;
            state.error='';
            state.articles = action.payload;
        },
        articlesFetchingError(state, action: PayloadAction<string>) {
            isLoading:false;
            state.error = action.payload;
        },
    }
}) 

export const articleReducer = articleSlice.reducer;