import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'events',
  initialState: [],
  reducers: {
    addEvent: (state, action) => {
      state.push(action.payload);
    },
    editEvent: (state, action) => {
      const { id, updatedEvent } = action.payload;
      const index = state.findIndex(event => event.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedEvent };
      }
    },
    deleteEvent: (state, action) => {
      return state.filter(event => event.id !== action.payload);
    }
  },
});

export const { addEvent, editEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
