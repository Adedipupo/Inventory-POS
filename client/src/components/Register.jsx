// import { useState } from "react";
import "../App.css";
import "./style.css";
import {Link} from 'react-router-dom';


export default function Register() {
  return (
    <>
    <div className="mx-auto">
      
      <div className="bg-white text-indigo-700 font-lobster text-2xl  ml-5 p-3">
        <Link to="/">  
        <h1>Inventory System</h1>
        </Link>      
      </div>

      <div className="flex justify-center items-center h-screen bg-indigo-600 font-abel">
     
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center font-semibold"><i className="fa-solid fa-user"></i> Registration Page</h1>
          <div className="mt-3">
              <label htmlFor="FirstName" className="block text-base mb-2">First Name</label>
              <input type="text" id="FirstName" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter First Name..." />
          </div><div className="mt-3">
              <label htmlFor="LastName" className="block text-base mb-2">Last Name</label>
              <input type="text" id="LastName" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Last Name..." />
          </div>
          <div className="mt-3">
              <label htmlFor="email" className="block text-base mb-2">Email</label>
              <input type="email" id="email" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Email..." />
          </div>
          <div className="mt-3">
              <label htmlFor="phone" className="block text-base mb-2">Phone Number</label>
              <input type="text" id="phone" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Phone Number..." />
          </div>
          {/* <div className="mt-3">
          <label htmlFor="roles" className="block text-base mb-2">Select a role</label>
            <select id="roles" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Select a role..." >
              <option selected>Select a role</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Manager">Manager</option>
              <option value="Rep">Rep</option>
            </select>
          </div> */}
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
          <div className="mt-3 flex justify-end">
             
              <div>
                <p>Already a user?<Link to="/" className="text-indigo-800 font-semibold">LogIn</Link></p>
              </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
}
