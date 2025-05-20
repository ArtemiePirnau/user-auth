import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { userLogin } from '../../features/auth/authLoginActions';
import { LogInParams } from '../../features/auth/authLoginActions';
import { AppDispatch } from 'store/store';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';
import './login.scss';

//TODO: De inteles ce e asta din TS
interface LoginFormInputs {
   email: string;
   password: string;
}

// //TODO: De inteles ce e asta din TS
const Login: React.FC = () => {
   const { loading, userInfo, error } = useSelector((state: RootState) => state.auth);
   const { register, handleSubmit } = useForm<LoginFormInputs>();
   const dispatch = useDispatch<AppDispatch>();
   const navigate = useNavigate();

   useEffect(() => {
      if (userInfo) {
         navigate('/user-profile');
      }
   }, [navigate, userInfo]);

   const submitData: SubmitHandler<LoginFormInputs> = (data: LogInParams) => {
      console.log(`${data.email} - ${data.password}`);

      dispatch(userLogin(data));
   };
   return (
      <form onSubmit={handleSubmit(submitData)}>
         <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-input" {...register('email', { required: true })} />
         </div>
         <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
               type="password"
               className="form-input"
               {...register('password', { required: true })}
            />
         </div>
         <button type="submit" className="button" disabled={loading}>
            {loading ? <Spinner /> : 'Login'}
         </button>
      </form>
   );
};
export default Login;
