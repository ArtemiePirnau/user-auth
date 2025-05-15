import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { RootState } from '../store/store';

const ProtectedRoute = () => {
   const userInfo = useSelector((state: RootState) => state.auth);
   if (!userInfo) {
      return (
         <div className="unauthorized">
            <h1>Unauthorized :/</h1>
            <span>
               <NavLink to="/login">Login</NavLink> to gain access
            </span>
         </div>
      );
   }
   return <Outlet />;
};
export default ProtectedRoute;
