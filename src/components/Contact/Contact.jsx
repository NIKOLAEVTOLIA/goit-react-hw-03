import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
// import css from './Contact.module.css';

function Contact({ contact, onDeleteContact }) {
  const { id, name, number } = contact;

  function handleDelete() {
    onDeleteContact(id);
  }

  return (
    <li>
      <div>
        <FaPhone size={22} />
        <IoPersonSharp size={22} />
      </div>
      <div>
        <p> {name}</p>
        <p> {number}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Contact;
