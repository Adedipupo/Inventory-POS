import "../App.css";
import "./style.css";
import Header from "./Header";
import { useState } from "react";
import AddNewStock from "./master/AddNewStock";
import AssignRole from "./master/AssignRole";
import EditInvoice from "./master/EditInvoice";
import SalesChart from "./master/SalesChart";

export default function Master() {
 const [buttonState, setButtonState] = useState(<AssignRole/>);      
 
 const handleClick = (newState) =>{
    setButtonState(newState)
 }

  return (
    <div className="ml-5">
        <Header />

        <div className="relative bg-indigo-700 h-screen font-abel p-10 overflow-hidden">
            <div className="flex justify-center align-middle">
                <ul className="flex flex-row py-4 gap-2 bg-slate-200 rounded-lg font-semibold">
                <li className="">
                    <button onClick={() => handleClick(<AssignRole/>)} className="px-2 h-12 w-32 
                    hover:bg-blue-950 hover:text-white 
                    hover:rounded border-r border-slate-900
                     focus:text-purple-700 focus:shadow-lg active:bg-red-500 ">Assign Roles</button> 
                    
                </li>
                <li>
                    <button onClick={() => handleClick(<AddNewStock/>)} className="px-2 h-12 w-32
                    hover:bg-blue-950 hover:text-white 
                    hover:rounded border-r border-slate-900 focus:text-purple-700 focus:shadow-lg">Add New Product</button>
                </li>
                <li>
                    <button onClick={() => handleClick(<EditInvoice/>)} className="px-2 h-12 w-32 
                    hover:bg-blue-950 hover:text-white 
                    hover:rounded border-r border-slate-900 focus:text-purple-700 focus:shadow-lg">Edit Invoice/Sales</button>
                </li>
                <li>
                    <button onClick={() => handleClick(<SalesChart/>)} className="px-2 h-12 w-32 
                    hover:bg-blue-950 hover:text-white  
                     hover:rounded focus:text-purple-700 focus:shadow-lg">Sales Chat</button>
                </li>
                
                </ul>   
            </div>

            <div className="mt-10"> 
                
                {buttonState}
                
        
            </div>
        </div>

    </div>

  )
}
