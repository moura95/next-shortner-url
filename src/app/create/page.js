"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function CreateUrl() {
  const [input, setInput] = useState("");
  const router = useRouter();

  async function handlerCreateUrl() {
    try {
      const res = await axios.post("http://127.0.0.1:4000", { full: input });
      if (res.status !== 201) {
        alert(`Failed to Create Url ${res.data}`);
        return;
      }
      setInput("");
      alert("Url Created!");
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className="flex flex-col justify-center items-center gap-2 mt-2">
      <div className="flex gap-1">
        FullUrl:
        <input
          required
          placeholder="Typing full url"
          className="border border-cyan-800"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <button onClick={handlerCreateUrl} className="border border-black">
        Create
      </button>
    </main>
  );
}
