"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";

export default function Home() {
  const [items, setItems] = useState([
    {
      name: "test",
      price: 100,
    },
    {
      name: "test2",
      price: 795,
    },
    {
      name: "test3",
      price: 485,
    },
  ]);
  const [newItem, setNewItem] = useState<{
    name: string;
    price: number;
  }>({
    name: "",
    price: 0,
  });
  const [total, setTotal] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Expense Tracker
        </p>
      </div>
      <form className="flex gap-4 mb-4">
        <input
          className=""
          placeholder="Enter here"
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          value={newItem.name}
        />
        <input
          type="number"
          placeholder="Enter here"
          onChange={(e) =>
            setNewItem({ ...newItem, price: parseInt(e.target.value) })
          }
          value={newItem.price}
        />
        <button className="bg-gray-200 dark:bg-zinc-800/30">Add</button>
      </form>
      <ul>
        {items.map((item, index) => {
          return (
            <li className="flex justify-between gap-4 w-full my-4" key={index}>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <button className="bg-gray-200 dark:bg-zinc-800/30">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-between w-full max-w-5xl">
        <p>Total</p>
        <p>${total}</p>
      </div>
    </main>
  );
}
