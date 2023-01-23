// import HomePage from 'pages/HomePage/HomePage';

// import LoginPage from 'pages/LoginPage/LoginPage';
// import RegisterPage from 'pages/RegisterPage/RegisterPage';
// import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { lazy, Suspense } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, Routes } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
// import { fetchContacts } from 'redux/operations';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { Loader } from './Loader/Loader';
import css from '../App/App.module.css'
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(()=>import('pages/ContactsPage/ContactsPage'))
export const App = () => {
  // const dispatch = useDispatch();
  // const loader = useSelector(state => state.contacts.contacts.isLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
    <div>
      <header className={css.container}>
      <nav className={css.nav}>
      {/* <NavLink to="/" className={css.nav__item}>Home </NavLink> */}
      <NavLink to="/"  className={({ isActive }) =>
              isActive ? css.nav__item && css.active : css.nav__item
            }>Home </NavLink>
      <NavLink to="/register" className={({ isActive }) =>
              isActive ? css.nav__item && css.active : css.nav__item
            }>Register</NavLink>
      <NavLink to="/login" className={({ isActive }) =>
              isActive ? css.nav__item && css.active : css.nav__item
            }>Login</NavLink>
      <NavLink to="/contacts" className={({ isActive }) =>
              isActive ? css.nav__item && css.active : css.nav__item
            }>Contacts</NavLink>
      <UserMenu/>
      </nav>
      </header>
      <Suspense>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
      </div>
      {/* <div>
        <h1>Phonebook:</h1>
        <ContactForm />

        <h2>Contacts:</h2>
        <Filter />
        {loader ? <Loader /> : <ContactList />}
      </div> */}
    </>
  );
};
