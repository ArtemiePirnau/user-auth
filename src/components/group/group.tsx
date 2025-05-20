import React from 'react';
import profile from '../../../public/profile.svg';

import './group.scss';

const Group: React.FC = () => {
   return (
      <section className="chat pt">
         <div className="chat__left ">
            <h5 className="chat__title">Groups</h5>
            <form className="chat__search">
               <div className="form__search">
                  <button className="form__btn">
                     <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M17 17L21 21"
                           stroke="#141B34"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                        <path
                           d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
                           stroke="#141B34"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                  </button>
                  <input className="form__input" type="text" name="name" placeholder="Search..." />
               </div>
            </form>
            <h6 className="chat__label">All Groups</h6>
            <ul className="chat__list">
               <li className="chat__item">
                  <img src={profile} alt="user" className="chat__item-img" />
                  <div className="chat__item-info">
                     <p className="chat__item-name">Artemie</p>
                     <p className="chat__item-msg">Let's go for a walk</p>
                  </div>
                  <p className="chat__item-time">12:02</p>
               </li>
               <li className="chat__item">
                  <img src={profile} alt="user" className="chat__item-img" />
                  <div className="chat__item-info">
                     <p className="chat__item-name">Pizdet</p>
                     <p className="chat__item-msg">Caroci azi go gym</p>
                  </div>
                  <p className="chat__item-time">12:02</p>
               </li>
               <li className="chat__item">
                  <img src={profile} alt="user" className="chat__item-img" />
                  <div className="chat__item-info">
                     <p className="chat__item-name">Vitalie</p>
                     <p className="chat__item-msg">Let's go for a walk</p>
                  </div>
                  <p className="chat__item-time">12:02</p>
               </li>
            </ul>
         </div>
      </section>
   );
};
export default Group;
