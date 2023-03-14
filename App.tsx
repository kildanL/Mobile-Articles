// import { StatusBar } from 'expo-status-bar';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { FullPost } from './screens/FullPost';
import HomeScreen from './screens/Home';
import { Navigation } from './screens/Navigation';
import { setupStore } from './store/store';



export default function App() {

  const store = setupStore();

  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

