import './settings.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Settings = () => {
   const navigate = useNavigate();
   const { userInfo, userToken } = useSelector((state: RootState) => state.auth);
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
         <div className="profile">
            <div className="avatar">
               {userInfo?.name ? `${userInfo?.name.charAt(0).toUpperCase()}` : ''}
            </div>
            <div className="info">
               <p className="info__name">
                  {userInfo?.name ? `Logged in as ${userInfo.email}` : `You are not logged in`}
               </p>
            </div>
         </div>
         <ul className="settings-menu">
            <li>
               <span className="icon">🔔</span> Notifications
            </li>
            <li>
               <span className="icon">🔒</span> Privacy
            </li>
            <li>
               <span className="icon">🛡️</span> Security
            </li>
            <li>
               <span className="icon">🅰️</span> Theme
            </li>
            <li>
               <span className="icon">🖼️</span> Chat Wallpaper
            </li>
            <li>
               <span className="icon">📄</span> Request Account Info
            </li>
            <li>
               <span className="icon">⌨️</span> Keyboard Shortcuts
            </li>
            <li>
               <span className="icon">ℹ️</span> Help
            </li>
         </ul>
      </div>
   );
};
export default Settings;
