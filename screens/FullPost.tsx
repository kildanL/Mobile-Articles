import { View } from "react-native"
import styled from "styled-components"
import { Loading } from "../components/Loading";
import { useState, useEffect } from "react";
import axios from 'axios';
import { IArticle } from "../models/IArticle";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchArcticles } from "../store/reducers/ActionCreators";


const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
  
`;
const PostTitle = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;
    

export const FullPost = ({route, navigation}) => {

    const [Article, setArticle] = useState<IArticle>();
    // const [isLoading, setisLoading] = useState(true);
  
    const {id, title} = route.params;
    const dispatch = useAppDispatch();
    const {articles, isLoading} = useAppSelector(state => state.articleReducer);

     function  GetArticle(id:number) {
       setArticle((prev) => prev = articles[id]);
    }

      
      useEffect(() => {
        navigation.setOptions({
            title,
        });
        dispatch(fetchArcticles());
        GetArticle(id);
        
      }, [])
      
        if(isLoading) {
          return(
            <Loading/>
          )
        }

    return (
    <>
      <View style={{padding:20}}>
        <PostImage source={{ uri: Article?.imageUrl }} />
        <PostTitle>{Article?.text}</PostTitle>
      </View>
    </>
    )    
}