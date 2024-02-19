import { useDispatch, useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css"
import { deleteContact } from "../../redux/contacsSlice";
import { useEffect } from "react";

const ContactList = () => {
    const dispatch = useDispatch();
  const contactsPersons = useSelector(state => state.persons.contacts.items);
  const filter = useSelector(state => state.persons.filters.name);

  const visibleUser = contactsPersons.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));


  const deleteUser = (userId) => {
    dispatch(deleteContact(userId));
  };

    useEffect(() => { }, [filter]);
    
    return (
        <ul className={css.list}>
            <Contact items={ visibleUser } onDelete={deleteUser} />
        </ul>
    )
}

export default ContactList