import React from "react";
import { Icons } from "../Icons";

const items = [
  {
    title: "Simplifiez",
    Icons: <Icons.SandWatch />,
    id: 1,
  },
  {
    title: "Optimisez",
    Icons: <Icons.Chart />,
    id: 2,
  },
  {
    title: "Centralisez",
    Icons: <Icons.puzzel />,
    id: 3,
  },
  {
    title: "Centralisez",
    Icons: <Icons.Money />,
    id: 4,
  },
];

const Stats = () => {
  return (
    <div className="flex items-center justify-center w-full py-10 px-4">
      <div className="text-primary-blue min-w-[800px] max-w-[800px] flex flex-col gap-6 items-center">
        <p className="text-center text-3xl font-bold leading-[48px] min-w-[600px] max-w-[600px]">
          Une plateforme complète qui simplifie chaque aspect de votre gestion
          et surtout, c'est entièrement gratuite !{" "}
        </p>
        <div className="flex items-center justify-between w-full">
          {items.map((item) => (
            <div
              className="flex items-center justify-center flex-col gap-4"
              key={item.id}
            >
              <div className="flex items-center justify-center bg-secondary-gray-300 rounded-xl  w-24 h-24">
                {item.Icons}
              </div>
              <span className="text-lg text-center font-bold ">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
