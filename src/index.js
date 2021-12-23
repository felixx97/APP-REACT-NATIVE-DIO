import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Routes from './routes';

const App = () => (
  <>
    <StatusBar barStyle='light-content' backgroundColor='#312e38'/>
    <Routes />
  </>
);

export default App;
