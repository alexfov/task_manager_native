import { AppRegistry, StatusBar } from "react-native";
import { Provider } from "react-redux";
import React from "react";
import App from "./App";
import { name as appName } from "./app.json";
import rootReducer from "./Reducers/rootReducer";
import { createStore } from "redux";
import ActionBtn from "./components/ActionBtn";

Array.prototype.getElemById = function (id) {
    return this[this.findIndex((elem) => elem.id === id)];
};

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App1() {
    return (
        <Provider store={store}>
            <StatusBar backgroundColor="#1e1e1e" />
            <App />
            <ActionBtn />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => App1);
