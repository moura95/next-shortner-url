"use client";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [urls, setUrls] = useState([]);
  async function handlerDeleteUrl(id) {
    try {
      await axios.delete(`http://127.0.0.1:4000/${id}`);
      await getUrls();
    } catch (err) {
      console.log(err);
    }
  }

  async function getUrls() {
    try {
      const res = await axios.get("http://127.0.0.1:4000");
      console.log(res.data);
      setUrls(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUrls();
  }, []);

  return (
    <main className="flex justify-center items-center mt-10 flex-wrap gap-4">
      {urls.map((url, i) => (
        <div key={i}>
          <Card
            onClick={(id) => {
              handlerDeleteUrl(id);
            }}
            props={url}
          />
        </div>
      ))}
    </main>
  );
}
