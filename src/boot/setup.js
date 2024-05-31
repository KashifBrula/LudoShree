import React from 'react';
import { StatusBar } from 'react-native';

import store from '../redux/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//local imports
import App from './app';
import Colors from '../constants/ColorConstants';

let persistor = persistStore(store);
const Setup = () => {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaProvider>
                    <StatusBar backgroundColor={Colors.theme} />
                    <App />
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
    );
};

export default Setup;
