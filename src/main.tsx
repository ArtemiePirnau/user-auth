import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import './main.scss';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </React.StrictMode>,
);

// UI - https://react-chat-app-kohl.vercel.app/app
// guide - https://blog.logrocket.com/handling-user-authentication-redux-toolkit/
//TODO: DE VERIFICAT LOGICA LA TOT SI ... DUPA A RAMAS SA CONTINUU UI SI SA ADAUG STIL CEVA SI DUPA VEDEM))
