import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Darkmode from 'darkmode-js';
import Aside from '../aside/aside';
import Chat from '../chat/chat';
import Group from '../group/group';
import Authentication from '../authentication/authentication';
import Login from '../login/login';
import Settings from '../settings/settings';
import Register from '../register/register';
import Call from '../call/call';
import UserProfile from '../user-profile/user-profile';
import './app.scss';
import ProfileScreen from '../profile-screen/profile-screen';

const App: React.FC = () => {
   useEffect(() => {
      const options = {
         bottom: '32px', // Position from the bottom
         right: 'unset', // Position from the right
         left: '10px', // Position from the left
         time: '0.5s', // Transition time
         mixColor: '#fff', // Background color during dark mode
         backgroundColor: '#fff', // Default background color
         buttonColorDark: '#100f2c', // Dark mode button color
         buttonColorLight: '#fff', // Light mode button color
         saveInCookies: true, // Save user preference in cookies
         label: '🌓', // Button label
         autoMatchOsTheme: true, // Automatically match OS theme
      };

      const darkmode = new Darkmode(options);
      darkmode.showWidget();
   }, []);
   return (
      <div className="App">
         <Aside />

         <Routes>
            <Route path="/" element={<ProfileScreen />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/group" element={<Group />} />
            <Route path="/call" element={<Call />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/authentication/*" element={<Authentication />} />
            <Route path="/authentication/login" element={<Login />} />
            <Route path="/authentication/register" element={<Register />} />
            <Route path="/user-profile" element={<UserProfile />} />
         </Routes>
      </div>
   );
};
export default App;
