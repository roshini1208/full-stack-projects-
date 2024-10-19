import { configureStore } from '@reduxjs/toolkit';
import eventReducer1 from './component/EventSlice1';

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('events1');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from local storage", err);
    return undefined;
  }
};

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('events1', serializedState);
  } catch (err) {
    console.error("Could not save state to local storage", err);
  }
};

const persistedState = loadState();

const store1 = configureStore({
  reducer: {
    events1: eventReducer1,
  },
  preloadedState: {
    events1: persistedState || [],
  },
});

// Subscribe to store updates to save the state to local storage
store1.subscribe(() => {
  saveState(store1.getState().events1);
});

export default store1;
