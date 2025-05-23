import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { useGetUserDetailsQuery } from '../../../services/auth/authService';
import { NavLink } from 'react-router-dom';
import { logout, setCredentials } from '../../features/auth/authSlice';
import './profile-screen.scss';
import { useEffect } from 'react';
const ProfileScreen = () => {
   const { userInfo } = useSelector((state: RootState) => state.auth);
   const dispatch = useDispatch();

   const { data, isFetching } = useGetUserDetailsQuery(undefined, {
      pollingInterval: 900000,
   });

   useEffect(() => {
      if (data) dispatch(setCredentials(data));
   }, [data, isFetching]);

   return (
      <div className="pt profile-screen">
         <div className="header-status">
            <h3 className="profile-screen__title">
               {isFetching
                  ? `Fetching your profile...`
                  : userInfo !== null
                  ? `Logged in as ${userInfo.email}`
                  : "You're not logged in"}
            </h3>
            <div className="cta">
               {userInfo ? (
                  <button className="profile-screen__button" onClick={() => dispatch(logout())}>
                     Logout
                  </button>
               ) : (
                  <NavLink className="profile-screen__button" to="/authentication/login">
                     Login
                  </NavLink>
               )}
            </div>
         </div>
         {/* <div>
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
         )} */}
      </div>
   );
};
export default ProfileScreen;
