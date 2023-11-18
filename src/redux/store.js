import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contacts/contacts.reducer"; 




const contactsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
  
};

export const store = configureStore({
    reducer: {
        contactsStore: persistReducer(contactsConfig,contactsReducer),
    },
     middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
     
});

export const persistor = persistStore(store);








// import { combineReducers, createStore } from "redux";
// import { contactsReducer } from './contacts/contacts.reducer';
// import { devToolsEnhancer } from "@redux-devtools/extension";


// const rootReducer = combineReducers({
//     contactsStore: contactsReducer,
// })

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

