import { createSlice } from "@reduxjs/toolkit";


const contacsSlice = createSlice({
    name: 'persons',
    initialState: {
        contacts: {
            items: [ ],
        },
        filters: {
            name: ''
        }
    },
    reducers: {
        addContact: (state, action) => {
            state.contacts.items.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
        },
        setFilter: (state, action) => {
            state.filters.name = action.payload
        }
    },
});

export const { addContact, deleteContact, setFilter } = contacsSlice.actions;
export const contactsReducer = contacsSlice.reducer;