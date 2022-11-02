import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/OTP-Authentication-Security.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
  const {loginWithEmail} = useContext(AuthContext);
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmail(email, password)
        .then(result=> console.log(result.user))
        .catch(error => console.error(error))



    }
    return (
        <div>
            <div>
            <div className="hero my-5 ">
  <div className="hero-content grid gap-3 md:grid-cols-2  lg:flex-row">
    <div className="text-center lg:text-left">
        <img className='w-3/4' src={img} alt="" />
    </div>
    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-5xl text-center font-bold">Login now!</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link href="#"  className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Login" />
        </div>
      <p className='text-center'>New to Car Doctor? <Link className='text-lg font-semibold' to={'/signup'} >Sign Up</Link>  </p>
      </form>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Login;