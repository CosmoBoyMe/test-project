import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: {},
  selectedDate: new Date().getDate(),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addNewEvent(state, actions) {
      if (!state.events[actions.payload.date]) {
        state.events[actions.payload.date] = [];
      }
      state.events[actions.payload.date].push(actions.payload.formData);
    },
    setSelectedDate(state, actions) {
      state.selectedDate = actions.payload;
    },
  },
});

export const { addNewEvent, setSelectedDate } = calendarSlice.actions;
export default calendarSlice.reducer;
