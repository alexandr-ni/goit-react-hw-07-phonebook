const { createSlice } = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterContacts } = slice.actions;
export const filterReducer = slice.reducer;

export const getFilterValue = state => state.filter;
