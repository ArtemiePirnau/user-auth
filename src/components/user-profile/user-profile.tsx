import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useGetUserDetailsQuery } from '../../../services/auth/authService';
import { RootState } from 'store/store';
import { logout, setCredentials } from '../../features/auth/authSlice';
import './user-profile.scss';

const UserProfile = () => {
   const { userInfo } = useSelector((state: RootState) => state.auth);
   const dispatch = useDispatch();
   // in loc de undefined trebuie sa fie userDetails
   const { data, isFetching } = useGetUserDetailsQuery(undefined, {
      pollingInterval: 900000,
   });
   console.log(data);

   useEffect(() => {
      if (data) dispatch(setCredentials(data));
   }, [data, dispatch]);

   return (
      <div className="pt user-profile">
         <div className="header-status">
            <span className="user-profile__title">
               {isFetching
                  ? `Fetching your profile...`
                  : userInfo !== null
                  ? `Logged in as ${userInfo.email}`
                  : "You're not logged in"}
            </span>
            <div className="cta">
               {userInfo ? (
                  <button className="user-profile__button" onClick={() => dispatch(logout())}>
                     Logout
                  </button>
               ) : (
                  <NavLink className="user-profile__button" to="/login">
                     Login
                  </NavLink>
               )}
            </div>
         </div>
      </div>
   );
};
export default UserProfile;
