import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="card lg:w-1/4 w-ful bg-base-100 shadow-xl mx-auto lg:mt-10">
      <div className="card-body">
        <h2 className="card-title justify-center">Login</h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>

          <input
            type="email"
            placeholder="example@example.com"
            className="input input-bordered"
          />

          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input
            type="password"
            placeholder="******"
            className="input input-bordered"
          />
          <Link to="" className="text-accent text-xs mt-1">Forgot Password ?</Link>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-accent w-full mt-3 text-white">Login</button>
        </div>
        <p className="text-xs">
          New to Doctors Portal ? <Link to="/signup" className="text-secondary ">Create Account</Link>
        </p>
        <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full mt-3">Continue with Google</button>
      </div>
      </div>
      
    </div>
  );
};

export default Login;
