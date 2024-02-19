import { useDispatch, useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css"
import { deleteContact } from "../../redux/contacsSlice";
import { useEffect } from "react";
import { selectContacts, selectFilter } from "../../redux/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));


  const deleteUser = (userId) => {
    dispatch(deleteContact(userId));
  };

    useEffect(() => { }, [filter]);
    
    return (
<ul className={css.list}>
      {visibleContacts.map((item) => (
        <li key={item.id} className={css.item}>
          <Contact item={item} onDelete={deleteUser} />
        </li>
      ))}
    </ul>
    )
}

export default ContactList