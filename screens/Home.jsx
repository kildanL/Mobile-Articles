// import { StatusBar } from 'expo-status-bar';
import { Text, View, StatusBar, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Post } from '../components/Post';
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function HomeScreen() {

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
      <View style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ActivityIndicator size='large'/>
        <Text style={{marginTop:15}}>Загрузка...</Text>
      </View>
    )
  }

  return (
    <View >
      <FlatList
          data={Articles}
          refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() =>{fetchPosts()}} />}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Post title={item.title} 
                    imageSrc={item.imageUrl}
                    date={item.createdAt}/>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id} />
    </View>
  );
}

