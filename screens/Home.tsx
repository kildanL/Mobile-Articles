// import { StatusBar } from 'expo-status-bar';
import { Text, View, StatusBar, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Post } from '../components/Post';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Loading } from '../components/Loading';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchArcticles } from '../store/reducers/ActionCreators';


export default function HomeScreen({navigation}) {

const dispatch = useAppDispatch();
const {articles, isLoading, error} = useAppSelector(state => state.articleReducer);

useEffect(() => {
  
  dispatch(fetchArcticles());
}, [])

  if(isLoading) {
    return(
      <Loading/>
    )
  }

  return (
    <View >
      <FlatList
          data={articles}
          refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() =>{dispatch(fetchArcticles())}} />}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title})}>
              <Post title={item.title} 
                    imageSrc={item.imageUrl}
                    date={item.createdAt}/>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => String(item.id)} />
    </View>
  );
}

