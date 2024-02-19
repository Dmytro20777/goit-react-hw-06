import { useState, useEffect } from "react";
import  ContactList  from "./components/ContactList/ContactList";
import  SearchBox  from "./components/SearchBox/SearchBox";
import  ContactForm  from "./components/ContactForm/ContactForm";
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, setFilter } from "./redux/contacsSlice";

export const App = () => {
  const dispatch = useDispatch();
  const contactsPersons = useSelector(state => state.persons.contacts.items);
  const filter = useSelector(state => state.persons.filters.name);

  const [inputValue, setInputValue] = useState("");

  const visibleUser = contactsPersons.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const addNewUser = (newName, newNumber) => {
    dispatch(addContact({ id: nanoid(), name: newName, number: newNumber }));
  };

  const deleteUser = (userId) => {
    dispatch(deleteContact(userId));
  };

  useEffect(() => {
    setInputValue(filter);
  }, [filter]);

   const handleFilterChange = (value) => {
      dispatch(setFilter(value));
    };

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto"}}>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm addNewUser={addNewUser} />
      <SearchBox value={inputValue} onChange={handleFilterChange} />
      <ContactList items={visibleUser} onDelete={deleteUser} />
    </div>
  );
};
