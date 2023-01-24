import { useDispatch } from "react-redux";
import { logOutThunk } from "redux/auth/authSlice";

const UserMenu = ()=>{

    const dispatch = useDispatch();
    const handleLogOut = () => {
        console.log('click')
        dispatch(logOutThunk())
    };

    return (
        <div>
  <p>mango@mail.com</p>
  <button type="button" onClick={handleLogOut}>Logout</button>
</div>
    )
}

export default UserMenu;