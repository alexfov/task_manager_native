import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import React from "react";
import App from "./App";
import { name as appName } from "./app.json";
import rootReducer from "./Reducers/rootReducer";
import { createStore } from "redux";

const store = createStore(rootReducer);

function App1() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => App1);
