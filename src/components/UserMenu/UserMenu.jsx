import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/authSlice';
import css from '../UserMenu/UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state?.auth?.userData?.name);

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <>
      <div className={css.userMenu}>Welcome {userName} !</div>
      <button type="button" onClick={handleLogOut} className={css.userMenuBtn}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
