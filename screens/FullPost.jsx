import { View } from "react-native"
import styled from "styled-components"
import { Loading } from "../components/Loading";
import { useState, useEffect } from "react";
import axios from 'axios';

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

    const [Articles, setArticles] = useState();
    const [isLoading, setisLoading] = useState(true);
    const {id, title} = route.params;
      
      useEffect(() => {
        navigation.setOptions({
            title,
        });

        axios.get('https://640b464f65d3a01f98163e62.mockapi.io/article/' + id)
        .then(response => {
          setArticles(response.data);
        })
        .catch(error => {
          alert('Ты ошибка,бро :(');
          console.log(error);
        }).finally(()=> {setisLoading(false)});
      }, [])
      
        if(isLoading) {
          return(
            <Loading/>
          )
        }

    return (
    <>
      <View style={{padding:20}}>
        <PostImage source={{ uri: Articles.imageUrl }} />
        <PostTitle>{Articles.text}</PostTitle>
      </View>
    </>
    )    
}