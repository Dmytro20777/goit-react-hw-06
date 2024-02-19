import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css"

const ContactList = ({items, onDelete}) => {
    return (
        <ul className={css.list}>
            <Contact items={ items } onDelete={onDelete} />
        </ul>
    )
}

export default ContactList