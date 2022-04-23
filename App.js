import React from 'react';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </Provider>
  );
}
