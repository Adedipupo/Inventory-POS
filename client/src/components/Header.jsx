import { useState,useEffect } from "react";
import "../App.css";
import "./style.css";
import {Link} from 'react-router-dom';

export default function Header() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() =>{
        const interval = setInterval(()=>{
            setCurrentDateTime(new Date());
        },1000);

        return () =>{
            clearInterval(interval);
        };
    }, [])
  return (
    <>
    <div className="flex flex-col p-3 mb-8 space-y-2 ">
        <div className="bg-white text-indigo-700 font-lobster text-2xl">
            <Link to="/">  
            <h1 className="">Inventory System</h1>
            </Link>
      
        </div>
        <div className="font-abel">
            <nav>
                <ul className="flex flex-row">
                  {/*  <li className="hover:bg-slate-400 p-2 rounded">
                        <Link to='#'>Master</Link>
                    </li>
                    <li className="hover:bg-slate-400 p-2 rounded">
                        <Link to='#'>Invoice</Link>
                    </li> 
                     <li className="hover:bg-slate-400 p-2 rounded">
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
                    </li> */}
                </ul>

            </nav>
        </div>
        <div className="border-b border-slate-900 font-abel"> 
        <nav>
            <ul className="flex flex-row">
                <button className="p-2
             hover:bg-indigo-700 hover:text-white 
              hover:rounded border-r border-slate-900 active:bg-red-700">
                    <Link to='/master' className="">Master</Link>                 
                   
                </button>
                <li className="p-2 active:bg-red-700
             hover:bg-indigo-700 hover:text-white 
             hover:p-2 hover:rounded border-r border-slate-900 ">
                    <Link to='/invoice'>Invoice</Link>
                </li>  
                <li className="p-2
            cursor-text hover:bg-indigo-700 hover:text-white 
             hover:p-2 hover:rounded border-r border-slate-900 focus:bg-indigo-700 focus:text-white">
                    <Link to='/stock'>Stock</Link>
                </li>
                 <li className="p-2
            cursor-text hover:bg-indigo-700 hover:text-white 
             hover:p-2 hover:rounded border-r border-slate-900 focus:bg-indigo-700 focus:text-white">
                    <Link to='/productinfo'>Product Info</Link>
                </li>


                

                {/* <li className="p-2
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
                </li> */}
            </ul>


            </nav>
             
        </div>
        <div className="flex justify-end">
                    <h1 className=' font-lobster text-2xl'>{currentDateTime.toLocaleString()}</h1>
        </div>
    </div>
  
    </>
    
  );
}
