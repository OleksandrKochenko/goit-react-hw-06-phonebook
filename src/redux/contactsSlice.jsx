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
        if (
          state.data.some(
            contact =>
              contact.name.toLowerCase() === action.payload.name.toLowerCase()
          )
        ) {
          alert(`${action.payload.name} is already in contacts!`);
        } else {
          state.data.push(action.payload);
        }
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
