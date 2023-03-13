import { Text, View, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const PostView = styled.View`
display: flex;
flex-direction: row;
  padding: 15px;
  padding-right: 80px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(0,0,0,0.1);
`;
const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-right: 12px;
  
`;
const PostTitle = styled.Text`
  font-size: 15px;
  font-weight: 700;
  display: flex;
`;
const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0,0,0,0.4);
  margin-top: 2px;
`;
const PostDetails = styled.View`
  justify-content: center;
`;

const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0,50) + '...';
  }
  return str;
}

export const Post = ({title, imageSrc, date}) => {

    return(
    <PostView>
      <PostImage source={{uri: imageSrc}} />
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostDate>{new Date(date).toLocaleDateString()}</PostDate>
      </PostDetails>
    </PostView>
    )
}
