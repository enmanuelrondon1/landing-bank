"use client";
import { MotionTransition } from "../MotionTransition";
import { dataCounter } from "./CounterData.data";
import CountUp from "react-countup";

export const CounterData = () => {
  return (
    <MotionTransition className="max-w-5xl py-10 mx-auto md:py-64">
      <div className="justify-between md:flex">
        {dataCounter.map(({ id, text, startNumber, endNumber }) => (
          <div key={id} className="py-5 text-2xl text-center md:text-left">
            +
            <CountUp
              start={startNumber}
              end={endNumber}
              duration={1.5}
              enableScrollSpy
            />
            <span className="degradedBlue bg-blueLight">{text}</span>
          </div>
        ))}
      </div>
    </MotionTransition>
  );
};
