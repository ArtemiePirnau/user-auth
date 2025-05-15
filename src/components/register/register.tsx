import React from 'react';
import { useForm } from 'react-hook-form';
import Error from '../error/error';
import Spinner from '../spinner/spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../features/auth/authRegisterActions';

import { RootState, AppDispatch } from '../../store/store'; // ✅ Fix import

import './register.scss';

interface RegisterFormInputs {
   firstName: string;
   email: string;
   password: string;
   confirmPassword: string;
}

const Register: React.FC = () => {
   const { loading, error, userInfo, success } = useSelector((state: RootState) => state.auth);
   const dispatch = useDispatch<AppDispatch>();
   const { register, handleSubmit } = useForm<RegisterFormInputs>();
   const navigate = useNavigate();

   useEffect(() => {
      if (success) navigate('/authentication/login');
   }, [navigate, success]);

   const submitForm = (data: RegisterFormInputs) => {
      if (data.password !== data.confirmPassword) {
         alert('Password mismatch');
         return;
      }
      const userData = {
         ...data,
         email: data.email.toLowerCase(),
      };

      dispatch(registerUser(userData));
   };

   return (
      <form className="pt register-form" onSubmit={handleSubmit(submitForm)}>
         {error && <Error>{error}</Error>}

         <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
               type="text"
               className="form-input"
               {...register('firstName')}
               placeholder="Name"
               required
            />
         </div>

         <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
               type="email"
               className="form-input"
               {...register('email')}
               placeholder="Email"
               required
            />
         </div>

         <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
               type="password"
               className="form-input"
               {...register('password')}
               placeholder="Password"
               required
            />
         </div>

         <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
               type="password"
               className="form-input"
               {...register('confirmPassword')}
               placeholder="Confirm"
               required
            />
         </div>

         <button type="submit" className="register-form__button" disabled={loading}>
            {loading ? <Spinner /> : 'Register'}
         </button>
      </form>
   );
};
export default Register;
