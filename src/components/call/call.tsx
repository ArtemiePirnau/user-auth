import profile from '../../../public/profile.svg';
import React from 'react';
import './call.scss';

const Call: React.FC = () => {
   return (
      <section className="call-log pt">
         <div className="call-log__left ">
            <h5 className="call-log__title">Call Logs</h5>
            <form className="call-log__search">
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
            <h6 className="call-log__label">All Logs</h6>
            <ul className="call-log__list">
               <li className="call-log__item">
                  <img src={profile} alt="user" className="call-log__item-img" />
                  <div className="call-log__item-info">
                     <p className="call-log__item-name">Artemie</p>
                     <p className="call-log__item-msg">Let's go for a walk</p>
                  </div>
                  <p className="call-log__item-time">12:02</p>
               </li>
               <li className="call-log__item">
                  <img src={profile} alt="user" className="call-log__item-img" />
                  <div className="call-log__item-info">
                     <p className="call-log__item-name">Pizdet</p>
                     <p className="call-log__item-msg">Caroci azi go gym</p>
                  </div>
                  <p className="call-log__item-time">12:02</p>
               </li>
               <li className="call-log__item">
                  <img src={profile} alt="user" className="call-log__item-img" />
                  <div className="call-log__item-info">
                     <p className="call-log__item-name">Vitalie</p>
                     <p className="call-log__item-msg">Let's go for a walk</p>
                  </div>
                  <p className="call-log__item-time">12:02</p>
               </li>
            </ul>
         </div>
         <div className="call-log__right">
            <div className="call-log__right-info">
               <img src={profile} alt="user" className="call-log__item-img" />
               <div className="call-log__right-user">
                  <p className="call-log__right-name">Devin O'Reilly</p>
                  <p className="call-log__right-state">Online</p>
               </div>
               <div className="call-log__right-menu">
                  <button className="call-log__menu-item">
                     <svg
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M15 5L11 8L15 11V5Z"
                           stroke="black"
                           stroke-width="1"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                        <path
                           d="M9.57143 3H2.42857C1.63959 3 1 3.63959 1 4.42857V11.5714C1 12.3604 1.63959 13 2.42857 13H9.57143C10.3604 13 11 12.3604 11 11.5714V4.42857C11 3.63959 10.3604 3 9.57143 3Z"
                           stroke="black"
                           stroke-width="1"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                  </button>
                  <button className="call-log__menu-item">
                     <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#17181a"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M17.7071 13.7071L20.3552 16.3552C20.7113 16.7113 20.7113 17.2887 20.3552 17.6448C18.43 19.57 15.3821 19.7866 13.204 18.153L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L5.84701 10.796C4.21341 8.61788 4.43001 5.56999 6.35523 3.64477C6.71133 3.28867 7.28867 3.28867 7.64477 3.64477L10.2929 6.29289C10.6834 6.68342 10.6834 7.31658 10.2929 7.70711L9.27175 8.72825C9.10946 8.89054 9.06923 9.13846 9.17187 9.34373C10.3585 11.7171 12.2829 13.6415 14.6563 14.8281C14.8615 14.9308 15.1095 14.8905 15.2717 14.7283L16.2929 13.7071C16.6834 13.3166 17.3166 13.3166 17.7071 13.7071Z"
                           stroke="transparent"
                           strokeWidth="1"
                        />
                     </svg>
                  </button>
                  <button className="call-log__menu-item">
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
                           stroke-width="1"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                        <path
                           d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
                           stroke="#141B34"
                           stroke-width="1"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};
export default Call;
