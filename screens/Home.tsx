// import { StatusBar } from 'expo-status-bar';
import { Text, View, StatusBar, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Post } from '../components/Post';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Loading } from '../components/Loading';


export default function HomeScreen({navigation}) {

const [Articles, setArticles] = useState();
const [isLoading, setisLoading] = useState(true);

const fetchPosts = () => {
  setisLoading(true);
  
  axios.get('https://640b464f65d3a01f98163e62.mockapi.io/article')
  .then(response => {
    setArticles(response.data);
  })
  .catch(error => {
    alert('Ты ошибка,бро :(');
    console.log(error);
  }).finally(()=> {setisLoading(false)});
}

useEffect(() => {
  fetchPosts();
}, [])

  if(isLoading) {
    return(
      <Loading/>
    )
  }

  return (
    <View >
      <FlatList
          data={Articles}
          refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() =>{fetchPosts()}} />}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title})}>
              <Post title={item.title} 
                    imageSrc={item.imageUrl}
                    date={item.createdAt}/>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id} />
    </View>
  );
}

