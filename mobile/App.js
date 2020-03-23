import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Deprecation in',
  "Can't perform a React"
]);

export default function App() {
  return (
  <> 
    <StatusBar barStyle="light-content"/>
    <Routes />
  </>  
  );
}
