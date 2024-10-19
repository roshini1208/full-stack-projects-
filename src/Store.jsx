import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './component/EventSlice';
import eventReducer1 from './component/EventSlice1';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('events');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from local storage", err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('events', serializedState);
  } catch (err) {
    console.error("Could not save state to local storage", err);
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    events: eventReducer,
    events1: eventReducer1,
  },
  preloadedState: persistedState || {},
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
