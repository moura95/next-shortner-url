import React from "react";
import axios from "axios";

export default function Card({ props, onClick, onRedirect }) {
  async function handlerRedirect(short) {
    try {
      console.log(short);
      await axios.get(`http://127.0.0.1:4000/redirect/${short}`);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="flex justify-between flex-col w-[260px] h-[190px] border border-blue-850 bg-slate-100 ">
      <div>
        <div className="text-gray-800 mt-2 flex justify-center items-center">
          <h1 className="text-blue-950 font-bold">Short: {props.short}</h1>
        </div>
        <div className="flex flex-col p-2">
          <h2>ID: {props.id}</h2>
          <h2>Url: {props.full}</h2>
          <span>Count: {props.count}</span>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => onClick(props.id)}
          className="border p-2 bg-red-700 text-white"
        >
          Delete
        </button>

        <a href={props.full}>
          <button
            onClick={handlerRedirect(props.short)}
            className="border p-2 bg-blue-700 text-white"
          >
            Redirect
          </button>
        </a>
      </div>
    </div>
  );
}
