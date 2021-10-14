import { createStore, applyMiddleware, AnyAction } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk, { ThunkAction } from 'redux-thunk';
import logger from "redux-logger";
import { RootReducer } from "./rootReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";


const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    blacklist: ["Login", "app"], // navigation will not be persisted
};

// Redux persist
const persistedReducer = persistReducer(persistConfig, RootReducer);
// const middlewares = [thunk, logger];
const middleware = applyMiddleware(thunk, logger);

export const store = createStore(
    persistedReducer,
    middleware
);

export type ThunkPromise = ThunkAction<Promise<void>, {}, {}, AnyAction>;
export const persistor = persistStore(store);
