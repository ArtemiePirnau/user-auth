import './settings.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { NavLink } from 'react-router-dom';
import { logout, setCredentials } from '../../features/auth/authSlice';
import { useGetUserDetailsQuery } from '../../../services/auth/authService';
import { useEffect } from 'react';

const Settings = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { userInfo } = useSelector((state: RootState) => state.auth);
   const { data, isFetching } = useGetUserDetailsQuery(undefined, {
      pollingInterval: 900000,
   });

   useEffect(() => {
      if (data) dispatch(setCredentials(data));
   }, [data, isFetching]);

   const handleBackClick = () => {
      navigate(-1);
   };

   return (
      <div className="sidebar">
         <div className="header">
            <button className="back-button" aria-label="Go back to home" onClick={handleBackClick}>
               ←
            </button>
            <h2>Settings</h2>
         </div>
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
                  <NavLink className="user-profile__button" to="/authentication/login">
                     Login
                  </NavLink>
               )}
            </div>
         </div>
         {/* <div className="profile">
            <div className="avatar">
               {userInfo?.name ? `${userInfo?.name.charAt(0).toUpperCase()}` : ''}
            </div>
            <div className="info">
               <p className="info__name">
                  {userInfo?.name ? `Logged in as ${userInfo.email}` : `You are not logged in`}
               </p>
            </div>
         </div> */}
         <ul className="settings-menu">
            <li>
               <span className="settings__icon">
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M6.44784 7.96942C6.76219 5.14032 9.15349 3 12 3V3C14.8465 3 17.2378 5.14032 17.5522 7.96942L17.804 10.2356C17.8072 10.2645 17.8088 10.279 17.8104 10.2933C17.9394 11.4169 18.3051 12.5005 18.8836 13.4725C18.8909 13.4849 18.8984 13.4973 18.9133 13.5222L19.4914 14.4856C20.0159 15.3599 20.2782 15.797 20.2216 16.1559C20.1839 16.3946 20.061 16.6117 19.8757 16.7668C19.5971 17 19.0873 17 18.0678 17H5.93223C4.91268 17 4.40291 17 4.12434 16.7668C3.93897 16.6117 3.81609 16.3946 3.77841 16.1559C3.72179 15.797 3.98407 15.3599 4.50862 14.4856L5.08665 13.5222C5.10161 13.4973 5.10909 13.4849 5.11644 13.4725C5.69488 12.5005 6.06064 11.4169 6.18959 10.2933C6.19123 10.279 6.19283 10.2645 6.19604 10.2356L6.44784 7.96942Z"
                        stroke="#17181a"
                        stroke-width="2"
                     />
                     <path
                        d="M9.10222 17.6647C9.27315 18.6215 9.64978 19.467 10.1737 20.0701C10.6976 20.6731 11.3396 21 12 21C12.6604 21 13.3024 20.6731 13.8263 20.0701C14.3502 19.467 14.7269 18.6215 14.8978 17.6647"
                        stroke="#17181a"
                        stroke-width="2"
                        stroke-linecap="round"
                     />
                  </svg>
               </span>
               Notifications
            </li>
            <li>
               <span className="settings__icon">
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M18 3.00001V3.00001C19.6569 3.00001 21 4.34315 21 6.00001L21 8.14286C21 8.47698 21 8.64405 20.9234 8.76602C20.8834 8.82962 20.8296 8.8834 20.766 8.92336C20.644 9 20.477 9 20.1429 9L15 9M18 3.00001V3.00001C16.3431 3.00001 15 4.34315 15 6.00001L15 9M18 3.00001L7 3.00001C5.11438 3.00001 4.17157 3.00001 3.58579 3.58579C3 4.17158 3 5.11439 3 7.00001L3 21L6 20L9 21L12 20L15 21L15 9"
                        stroke="#17181a"
                        stroke-width="2"
                     />
                     <path d="M7 7L11 7" stroke="#17181a" stroke-width="2" stroke-linecap="round" />
                     <path d="M8 11H7" stroke="#17181a" stroke-width="2" stroke-linecap="round" />
                     <path
                        d="M7 15L10 15"
                        stroke="#17181a"
                        stroke-width="2"
                        stroke-linecap="round"
                     />
                  </svg>
               </span>
               Privacy
            </li>
            <li>
               <span className="settings__icon">
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M11.4033 2.17871C11.8563 2.03712 12.3478 2.0613 12.7881 2.25L18.7119 4.78906L18.8604 4.85938C19.5328 5.21517 19.9461 5.92407 19.9238 6.68457L19.9121 6.84766L19.2607 12.71C19.0735 14.3947 18.2818 15.9502 17.0391 17.0918L16.7852 17.3145L13.2803 20.2344C12.585 20.8138 11.5945 20.8507 10.8623 20.3438L10.7197 20.2344L7.21484 17.3145C5.91279 16.2293 5.05221 14.711 4.78516 13.0449L4.73926 12.71L4.08789 6.84766C3.99065 5.97195 4.47825 5.13617 5.28809 4.78906L11.2119 2.25L11.4033 2.17871Z"
                        stroke="#17181a"
                        stroke-width="2"
                        stroke-linecap="round"
                     />
                  </svg>
               </span>
               Security
            </li>
            <li>
               <span className="settings__icon">
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M7 5H17C17.9711 5 18.599 5.00227 19.0615 5.06445C19.4951 5.12277 19.6309 5.21686 19.707 5.29297C19.7831 5.36908 19.8772 5.50493 19.9355 5.93848C19.9977 6.40098 20 7.02892 20 8V16H4V8C4 7.02892 4.00227 6.40098 4.06445 5.93848C4.12277 5.50493 4.21686 5.36908 4.29297 5.29297C4.36908 5.21686 4.50493 5.12277 4.93848 5.06445C5.40098 5.00227 6.02892 5 7 5Z"
                        stroke="#17181a"
                        stroke-width="2"
                     />
                     <path
                        d="M20.333 16C21.2535 16 22 16.7465 22 17.667C21.9998 18.9554 20.9554 19.9998 19.667 20H4.33301C3.0446 19.9998 2.00018 18.9554 2 17.667C2 16.7465 2.74652 16 3.66699 16H20.333Z"
                        stroke="#17181a"
                        stroke-width="2"
                     />
                  </svg>
               </span>
               Theme
            </li>
            <li>
               <span className="settings__icon">
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <circle cx="12" cy="12" r="9" stroke="#17181a" stroke-width="2" />
                     <path
                        d="M12.5 7.5C12.5 7.77614 12.2761 8 12 8C11.7239 8 11.5 7.77614 11.5 7.5C11.5 7.22386 11.7239 7 12 7C12.2761 7 12.5 7.22386 12.5 7.5Z"
                        fill="#CCD2E3"
                        stroke="#17181a"
                     />
                     <path d="M12 17V10" stroke="#17181a" stroke-width="2" />
                  </svg>
               </span>
               Help
            </li>
         </ul>
      </div>
   );
};
export default Settings;
