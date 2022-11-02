import React from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from '../state/index';



export default function Home() {

const dispatch = useDispatch();
const {withdrawMoney, dipositMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <>
    <Navbar/>
      <h1 className="mt-20 text-5xl font-semibold shadow-md"> Bank Deposite</h1>
      <br />
      <div className="flex items-center justify-center">
      <button className="px-4 py-2 bg-sky-600 text-white rounded-lg" onClick={()=>{withdrawMoney(100)}}>-</button>{" "}
      <h1 className="mx-4 text-xl font-semibold"> Deposite cash </h1>{" "}
      <button className="px-4 py-2 bg-sky-600 text-white rounded-lg" onClick={()=>{dipositMoney(100)}}>+</button>
      </div>
    </>
  );
}
