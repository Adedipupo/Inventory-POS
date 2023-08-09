// import { useState } from "react";
import "../App.css";
import "./style.css";
// import {Link} from 'react-router-dom';
import Header from "./Header";

export default function Invoice() {
    return (
        <>

            <div className="ml-5">
                <Header />

                <div className="relative bg-indigo-700 h-screen font-abel p-10 overflow-hidden">
                    <div className="bg-white flex flex-col p-2 shadow-md">

                        <h1 className=" text-2xl text-center font-lobster">Sales Invoice</h1>

                        <div className="flex flex-1 gap-2">
                            <div className="">
                                <div className="flex flex-row gap-1 mt-3">
                                    <div className="flex flex-row gap-1 mt-3">
                                        <label htmlFor="username" className="block text-base mb-2">Billing</label>
                                        <input type="text" id="username" className="w-20 border border-black text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="" />
                                    </div>
                                   

                                    <div className="flex flex-row gap-1 mt-3">
                                        <label htmlFor="username" className="block text-base mb-2">Bill No</label>
                                        <input type="text" id="username" className=" w-20 border border-black text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="" />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-1 mt-3">
                                    <label htmlFor="password" className="block text-base mb-2">Area</label>
                                    <input type="password" id="password" className="border border-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="" />
                                </div>
                                <div className="flex flex-row gap-1 mt-3">
                                    <label htmlFor="username" className="block text-base mb-2">Account</label>
                                    <input type="text" id="username" className="border border-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="" />
                                </div>
                                <div className="flex flex-row gap-1 mt-3">
                                    <label htmlFor="password" className="block text-base mb-2">Customer</label>
                                    <input type="password" id="password" className="border border-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="" />
                                </div>
                              
                          
                            </div>

                            <div className="">
                                <div className="flex flex-row gap-1 mt-3">
                                    <label htmlFor="username" className="block text-base mb-2">Date</label>
                                    <input type="text" id="username" className="border border-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="" />
                                </div>
                                <div className="flex flex-row gap-1 mt-3">
                                    <label htmlFor="password" className="block text-base mb-2">Rate</label>
                                    <input type="password" id="password" className="border border-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="" />
                                </div>
                                
                            </div>
                            <div className="flex flex-col flex-grow gap-1 mt-3">
                                    <label htmlFor="username" className="block text-base mb-2">Note</label>
                                    <textarea type="text" id="username" className="bg-slate-400 w-full h-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white">
                        <table className="border border-black w-full h-full">
                            <thead>
                                <tr>
                                    <th>
                                        S/n
                                    </th>
                                    <th>
                                        Product Name
                                    </th>
                                    <th>
                                        Pack
                                    </th>
                                    <th>
                                        MRP
                                    </th>
                                    <th>
                                        Expiry
                                    </th>
                                    <th>
                                        Quantity
                                    </th>
                                    <th>
                                        Free
                                    </th>
                                    <th>
                                        Rate
                                    </th>
                                    <th>
                                        Amount
                                    </th>
                                </tr>
                                
                            </thead>
                        </table>
                    </div>
                    <div className="absolute bottom-0 bg-white w-full">
                        <div className="flex flex-row flex-grow">
                            <div className="w-1/3">
                                <button className="bg-white">Save</button>

                            </div>
                            <div className="flex flex-row gap-1 mt-3 w-1/3 justify-end">
                                    <label htmlFor="password" className="block text-base mb-2">Total Amount</label>
                                    <input type="password" id="password" className="border border-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="" />
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    );
}
