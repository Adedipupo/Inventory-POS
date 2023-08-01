// import { useState } from "react";
import "../App.css";
import "./style.css";
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <>
    <div className="flex flex-col ml-5 p-3 mb-8 space-y-2">
        <div>
            <div className="bg-white text-indigo-700  flex-col">
                <h1 className="text-3xl" >Inventory</h1>
                <p className=" font-mono">system</p>
            </div>
        </div>
        <div>
            <nav>
                <ul className="flex flex-row">
                    <li className="hover:bg-slate-400 p-2 rounded">
                        <Link to='#'>Master</Link>
                    </li>
                    <li className="hover:bg-slate-400 p-2 rounded">
                        <Link to='#'>Invoice</Link>
                    </li> <li className="hover:bg-slate-400 p-2 rounded">
                        <Link to='#'>Account</Link>
                    </li> <li className="hover:bg-slate-400 p-2 rounded">
                        <Link to='#'>Special</Link>
                    </li> <li className="hover:bg-slate-400 p-2 rounded">
                        <Link to='#'>Periodical</Link>
                    </li> <li className="hover:bg-slate-400 p-2 rounded">
                        <Link to='#'>Utility</Link>
                    </li> <li className="hover:bg-slate-400 p-2 rounded">
                        <Link to='#'>Printers</Link>
                    </li> <li className="hover:bg-slate-400 p-2 rounded">
                        <Link to='#'>ActiveWork</Link>
                    </li> <li className="hover:bg-slate-400 p-2 rounded">
                        <Link to='#'>Infoserver</Link>
                    </li> <li className="hover:bg-slate-400 p-2 rounded">
                        <Link to='#'>Exit</Link>
                    </li>
                </ul>

            </nav>
        </div>
        <div className="border-b border-slate-900 "> 
        <nav>
            <ul className="flex flex-row ">
                <li className="p-2
            cursor-text hover:bg-indigo-700 hover:text-white 
              hover:rounded border-r border-slate-900">
                    <Link to='#'>Master</Link>
                </li>
                <li className="p-2
            cursor-text hover:bg-indigo-700 hover:text-white 
             hover:p-2 hover:rounded border-r border-slate-900">
                    <Link to='#'>Invoice</Link>
                </li> 
                <li className="p-2
            cursor-text hover:bg-indigo-700 hover:text-white 
             hover:p-2 hover:rounded border-r border-slate-900">
                    <Link to='#'>Account</Link>
                </li>
                 <li className="p-2
            cursor-text hover:bg-indigo-700 hover:text-white 
             hover:p-2 hover:rounded border-r border-slate-900">
                    <Link to='#'>Special</Link>
                </li>
                 <li className="p-2
            cursor-text hover:bg-indigo-700 hover:text-white 
             hover:p-2 hover:rounded border-r border-slate-900">
                    <Link to='#'>Periodical</Link>
                </li> 
                <li className="p-2
            cursor-text hover:bg-indigo-700 hover:text-white 
             hover:p-2 hover:rounded border-r border-slate-900">
                    <Link to='#'>Utility</Link>
                </li>
                 <li className="p-2
            cursor-text hover:bg-indigo-700 hover:text-white 
             hover:p-2 hover:rounded border-r border-slate-900" >
                    <Link to='#'>Calculator</Link>
                </li> 
                 <li className="p-2
            cursor-text hover:bg-indigo-700 hover:text-white 
             hover:p-2 hover:rounded">
                    <Link to='#'>Exit</Link>
                </li>
            </ul>

            </nav>
        </div>
    </div>
  
    </>
    
  );
}
