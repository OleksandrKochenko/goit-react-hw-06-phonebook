import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  data: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.data.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            name: data.name,
            tel: data.tel,
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.data.findIndex(
        contact => contact.id === action.payload
      );
      state.data.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
