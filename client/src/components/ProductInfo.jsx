// import { useState } from "react";
import "../App.css";
import "./style.css";
// import {Link} from 'react-router-dom';
import Header from "./Header";

export default function ProductInfo() {
    return (
        <>

            <div className="ml-5">
                <Header />

                <div className="relative bg-indigo-700 h-screen font-abel p-10 overflow-hidden">
                    <div className="bg-white flex flex-col p-2 shadow-md h-full">

                        <h1 className=" text-2xl text-center font-lobster">Product Information</h1>

                        <div className="flex flex-col gap-2">
                           

                           
                                <div className="flex flex-row gap-1 mt-3 w-1/2">
                                    <label htmlFor="username" className="block text-base mb-2">Product Name</label>
                                    <input type="text" id="username" className="border border-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Search a Product" />
                                </div>
                               <div className=" h-full w-full justify-between flex flex-col">
                                <div>
                                    <table className="w-full h-full border border-black">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Product Name
                                                </th>
                                                <th>
                                                    Pack
                                                </th>
                                            </tr>
                                        </thead>

                                    </table>
                                </div>
                                <div className="md:mt-36">
                                    <table className="h-full w-full border border-black">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Cost
                                                </th>
                                                <th>
                                                    Expiry Date
                                                </th>
                                                <th>
                                                    Stock
                                                </th>
                                            </tr>
                                        </thead>

                                    </table>

                                </div>
                                   
                               </div>
                            
                           
                        </div>
                    </div>
                   


                </div>
            </div>
        </>
    );
}
