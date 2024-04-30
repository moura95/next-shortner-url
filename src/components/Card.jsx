import React from "react";
import axios from "axios";

export default function Card({ props, onClick }) {
  return (
    <div className="flex justify-between flex-col w-[240px] h-[170px] bg-blue-200 ">
      <div>
        <div className="flex justify-center items-center">
          <h1>Short: {props.short}</h1>
        </div>
        <div className="flex flex-col p-2">
          <h2>ID:{props.id}</h2>
          <h2>Url:{props.full}</h2>
          <span>Count:{props.count}</span>
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
          <button className="border p-2 bg-blue-700 text-white">
            Redirect
          </button>
        </a>
      </div>
    </div>
  );
}
