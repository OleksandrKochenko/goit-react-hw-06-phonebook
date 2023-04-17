import { createSlice, nanoid } from '@reduxjs/toolkit';
const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) ?? [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (
          state.some(
            contact =>
              contact.name.toLowerCase() === action.payload.name.toLowerCase()
          )
        ) {
          alert(`${action.payload.name} is already in contacts!`);
        } else {
          state.push(action.payload);
        }
        localStorage.setItem('contacts', JSON.stringify(state));
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
      const nextState = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(nextState));
      return nextState;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
