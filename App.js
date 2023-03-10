// import { StatusBar } from 'expo-status-bar';
import { Text, View, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Post } from './components/Post';



export default function App() {
  return (
    <View >
      <Post title="Первая запись" 
            imageSrc='https://memepedia.ru/wp-content/uploads/2023/02/chat-gpt-memy.jpg'
            date="03/03/2023"/>
      <StatusBar theme="auto" />
    </View>
  );
}

