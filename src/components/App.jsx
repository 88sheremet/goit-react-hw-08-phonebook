import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const loader = useSelector(state => state.contacts.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook:</h1>
        <ContactForm />

        <h2>Contacts:</h2>
        <Filter />
        {loader ? <Loader /> : <ContactList />}
      </div>
    </>
  );
};
