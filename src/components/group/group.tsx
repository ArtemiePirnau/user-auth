import React from 'react';
import profile from '../../../public/profile.svg';

import './group.scss';

const Group: React.FC = () => {
   return (
      <section className="group pt">
         <div className="group__left ">
            <h5 className="group__title">Groups</h5>
            <form className="group__search">
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
            <h6 className="group__label">All Groups</h6>
            <ul className="group__list">
               <li className="group__item">
                  <img src={profile} alt="user" className="group__item-img" />
                  <div className="group__item-info">
                     <p className="group__item-name">Artemie</p>
                     <p className="group__item-msg">Let's go for a walk</p>
                  </div>
                  <p className="group__item-time">12:02</p>
               </li>
               <li className="group__item">
                  <img src={profile} alt="user" className="group__item-img" />
                  <div className="group__item-info">
                     <p className="group__item-name">Pizdet</p>
                     <p className="group__item-msg">Caroci azi go gym</p>
                  </div>
                  <p className="group__item-time">12:02</p>
               </li>
               <li className="group__item">
                  <img src={profile} alt="user" className="group__item-img" />
                  <div className="group__item-info">
                     <p className="group__item-name">Vitalie</p>
                     <p className="group__item-msg">Let's go for a walk</p>
                  </div>
                  <p className="group__item-time">12:02</p>
               </li>
            </ul>
         </div>
      </section>
   );
};
export default Group;
