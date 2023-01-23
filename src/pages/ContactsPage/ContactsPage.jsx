import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";


const ContactsPage = ()=>{

    const dispatch = useDispatch();
    const loader = useSelector(state => state.contacts.contacts.isLoading);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  

    return (
        <div>
        <h1>Phonebook:</h1>
        <ContactForm />

        <h2>Contacts:</h2>
        <Filter />
        {loader ? <Loader /> : <ContactList />}
      </div>
    )
}

export default ContactsPage