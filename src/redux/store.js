import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { contactsReducer } from "./contacsSlice";
import { persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};



const rootReducer = combineReducers({
  persons: contactsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
