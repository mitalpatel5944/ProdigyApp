import React, { Fragment } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Screens from './src/navigation';
import { store } from './src/redux/store';


export default function App() {
  return (
    <SafeAreaProvider>
       <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
          <Screens />
      </SafeAreaView>
      </Provider>
    </SafeAreaProvider>
  );
}