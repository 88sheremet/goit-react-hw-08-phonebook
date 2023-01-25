import { lazy, Suspense, useEffect } from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import css from '../App/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { Layout } from 'components/Layout/Layout';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { getCurrentData } from 'redux/auth/authSlice';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    dispatch(getCurrentData());
  }, [dispatch]);

  return (
    <>
      <div>
        <header className={css.container}>
          <nav className={css.nav}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? css.nav__item && css.active : css.nav__item
              }
            >
              Home{' '}
            </NavLink>
            {!token && (
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? css.nav__item && css.active : css.nav__item
                }
              >
                Register
              </NavLink>
            )}
            {!token && (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? css.nav__item && css.active : css.nav__item
                }
              >
                Login
              </NavLink>
            )}
            {token && (
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? css.nav__item && css.active : css.nav__item
                }
              >
                My Contacts{' '}
              </NavLink>
            )}
            {token && <UserMenu />}
          </nav>
        </header>
        <Suspense>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />

              <Route path="/" element={<PrivateRoute redirectTo="/login" />}>
                <Route path="contacts" element={<ContactsPage />} />
              </Route>

              <Route
                path="/"
                element={<PublicRoute restricted redirectTo="/contacts" />}
              >
                <Route path="register" element={<RegisterPage />} />
                <Route path="login" element={<LoginPage />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
