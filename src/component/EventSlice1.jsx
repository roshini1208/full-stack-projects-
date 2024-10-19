import { createSlice } from '@reduxjs/toolkit';

const eventSlice1 = createSlice({
  name: 'events1',
  initialState: [],
  reducers: {
    addEvent: (state, action) => {
      state.push({ ...action.payload, booked: false });
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
    },
    bookEvent: (state, action) => {
      const index = state.findIndex(event => event.id === action.payload);
      if (index !== -1) {
        state[index].booked = true;
      }
    }
  },
});

export const { addEvent, editEvent, deleteEvent, bookEvent } = eventSlice1.actions;
export default eventSlice1.reducer;
