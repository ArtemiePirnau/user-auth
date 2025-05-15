import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';
import './profile-screen.scss';
const ProfileScreen = () => {
   const { userInfo, userToken } = useSelector((state: RootState) => state.auth);
   const dispatch = useDispatch();
   return (
      <div className="pt profile-screen">
         <div>
            <h3 className="profile-screen__title">
               {userInfo?.name
                  ? `Logged in as ${userInfo.email} and your name is ${userInfo.name}`
                  : `You're not logged in 😔`}
            </h3>
         </div>
         {userInfo?.name ? (
            <button className="profile-screen__button" onClick={() => dispatch(logout())}>
               Logout
            </button>
         ) : (
            <NavLink className="profile-screen__button" to="/authentication/login">
               Login
            </NavLink>
         )}
      </div>
   );
};
export default ProfileScreen;
