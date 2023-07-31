// import { useState } from "react";
import "../App.css";
import "./style.css";

export default function SignIn() {
  return (
    <div className="mx-auto mt-20">
      <div className="flex justify-center align-middle">
        <ul className="flex flex-row py-4 gap-2 bg-slate-100 rounded-lg font-semibold">
          <li className="">
            <a href="#h" className="px-2 h-12 w-32 cursor-text hover:bg-blue-950 hover:text-white  hover:p-4 hover:rounded border-r border-slate-900"> 1. Select Flight</a> 
            
          </li>
          <li>
            <a href="#h" className="px-2 h-12 w-32 cursor-text hover:bg-blue-950 hover:text-white  hover:p-4 hover:rounded border-r border-slate-900"> 2. Passengers </a>
          </li>
          <li>
            <a href="#h" className="px-2 h-12 w-32 cursor-text hover:bg-blue-950 hover:text-white  hover:p-4 hover:rounded border-r border-slate-900"> 3. Services</a>

          </li>
          <li>
            <a href="#h" className="px-2 h-12 w-32 cursor-text hover:bg-blue-950 hover:text-white  hover:p-4 hover:rounded border-r border-slate-900 "> 4. Seat Map </a>

          </li>
          <li>
            <a href="#h" className="px-2 h-12 w-32 cursor-text hover:bg-blue-950 hover:text-white  hover:p-4 hover:rounded border-r border-slate-900"> 5. Payment </a>

          </li>
          <li className="">
            <a href="#h" className="px-2 h-12 w-32 cursor-text hover:bg-blue-950 hover:text-white hover:p-4 hover:rounded"> 6. Confirmation </a>

          </li>
        </ul>   
      </div>

      <div className="mt-10"> 
        
        
      </div>
    </div>
  );
}
