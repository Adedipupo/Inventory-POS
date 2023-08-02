// import { useState } from "react";
import "../App.css";
import "./style.css";
import {Link} from 'react-router-dom';


export default function Register() {
  return (
    <>
    <div className="mx-auto">
      <div className="bg-white text-indigo-700  ml-5 p-3 flex-col">
        <h1 className="text-3xl" >Inventory</h1>
        <p className=" font-mono">system</p>
      </div>
      <div className="flex justify-center items-center h-screen bg-indigo-600">
     
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center font-semibold"><i className="fa-solid fa-user"></i> Registration Page</h1>
          
          <div className="mt-3">
              <label htmlFor="email" className="block text-base mb-2">Email</label>
              <input type="email" id="email" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Email..." />
          </div>
          <div className="mt-3">
              <label htmlFor="username" className="block text-base mb-2">Choose Username</label>
              <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="choose Username..." />
          </div>
          <div className="mt-3">
              <label htmlFor="password" className="block text-base mb-2">Password</label>
              <input type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
          </div>
          <div className="mt-3">
              <label htmlFor="password" className="block text-base mb-2">Confirm Password</label>
              <input type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Confirm Password..." />
          </div>
          
          <div className="mt-5">
            <Link to='/home'><button type="submit" className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Register</button></Link>
              
          </div>
          <div className="mt-3 flex justify-between items-center">
              <div>
              </div>
              <div>
                <p>Already a user? </p>  <Link to="/" className="text-indigo-800 font-semibold">LogIn</Link>
              </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
}
