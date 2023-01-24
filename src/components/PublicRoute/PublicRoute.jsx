import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

 const PublicRoute = ({ restricted = false, redirectTo = '/' })=> {
    const token = useSelector(state => state.auth.token);
  
    return token ? <Navigate to={redirectTo} /> : <Outlet />;
  }

  export default PublicRoute