import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div class="card lg:w-1/4 w-ful bg-base-100 shadow-xl mx-auto lg:mt-10">
      <div class="card-body">
        <h2 class="card-title justify-center">Login</h2>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Your Email</span>
          </label>

          <input
            type="email"
            placeholder="example@example.com"
            class="input input-bordered"
          />

          <label class="label">
            <span class="label-text">Password</span>
          </label>

          <input
            type="password"
            placeholder="******"
            class="input input-bordered"
          />
          <Link to="" className="text-accent text-xs mt-1">Forgot Password ?</Link>
        </div>

        <div class="card-actions justify-end">
          <button class="btn btn-accent w-full mt-3 text-white">Login</button>
        </div>
        <p className="text-xs">
          New to Doctors Portal ? <Link to="/signup" className="text-secondary ">Create Account</Link>
        </p>
        <div class="flex flex-col w-full border-opacity-50">
        <div class="divider">OR</div>
        <button class="btn btn-outline w-full mt-3">Continue with Google</button>
      </div>
      </div>
      
    </div>
  );
};

export default Login;
