import "../../../src/App.css";
import { Link } from "react-router-dom";

export default function AssignRole() {
  return (
    <div className="mx-auto flex justify-center">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            <p className="text-3xl block text-center "><i className="fa-solid fa-user"></i>Assign Role</p>
            
            <div className="mt-3">
                <label htmlFor="email" className="block text-base mb-2">Email</label>
                <input type="email" id="email" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Email..." />
            </div>
            
            <div className="mt-3">
                <label htmlFor="roles" className="block text-base mb-2">Role</label>
                <select id="roles" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Select a role..." >
                    <option selected>Select a Role</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="Manager">Manager</option>
                    <option value="Rep">Sales Rep</option>
                </select>
            </div>

  
            <div className="mt-5">
            <Link to='/home'><button type="submit" className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">Assign</button></Link>
                
            </div>
    
        </div>
    </div>
        
  )
}
