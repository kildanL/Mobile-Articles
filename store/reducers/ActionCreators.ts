import axios from "axios";
import { IArticle } from "../../models/IArticle";
import { AppDispatch } from "../store";
import { articleSlice } from "./ArticleSlice";

export const fetchArcticles = () => async (dispatch: AppDispatch) => {
   
    dispatch(articleSlice.actions.articlesFetching());
    await axios.get<IArticle[]>('https://640b464f65d3a01f98163e62.mockapi.io/article')
    .then(response => dispatch(articleSlice.actions.articlesFetchingSuccess(response.data)))
    .catch(error => dispatch(articleSlice.actions.articlesFetchingError(error.message)))
    
}

