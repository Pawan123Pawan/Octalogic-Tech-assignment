import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import courseReducer from './slice/courseListSlice';
import bestStudentReducer from './slice/bestStudentSlice';
import enrolmentReducer from './slice/enrolmentSlice';

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Combine your reducers
const rootReducer = combineReducers({
  course: courseReducer,
  enrolment: enrolmentReducer,
  beststudent: bestStudentReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
