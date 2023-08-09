// import { useState } from "react";
import "../App.css";
import "./style.css";
// import {Link} from 'react-router-dom';
import Header from "./Header";


export default function Home() {
  return (
    <>
    
    <div className=" mx-auto">
        <Header/>

        <div className=" bg-indigo-700 h-screen">
            <p className=" text-6xl font-abel text-center text-white">Welcome...</p>
        </div>
    </div>
    </>
  );
}
