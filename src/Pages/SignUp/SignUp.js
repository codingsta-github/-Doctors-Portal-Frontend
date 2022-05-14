import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="card lg:w-1/4 w-ful bg-base-100 shadow-xl mx-auto lg:mt-10">
        <div className="card-body">
          <h2 className="card-title justify-center">Create Your Account</h2>
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
  
            <input
              type="text"
              placeholder="example@example.com"
              className="input input-bordered"
            />
  
            <label className="label">
              <span className="label-text">Password</span>
            </label>
  
            <input
              type="text"
              placeholder="******"
              className="input input-bordered"
            />
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
  
            <input
              type="text"
              placeholder="******"
              className="input input-bordered"
            />
          </div>
  
          <div className="card-actions justify-end">
            <button className="btn btn-accent w-full mt-3 text-white">Sign Up</button>
          </div>
          <p className="text-xs">
            Have you any account ? <Link to="/login" className="text-secondary ">Login</Link>
          </p>
          <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full mt-3">Continue with Google</button>
        </div>
        </div>
        
      </div>
    );
};

export default SignUp;