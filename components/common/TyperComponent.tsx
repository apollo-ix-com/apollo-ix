"use client";

import { TypeAnimation } from "react-type-animation";

const demostrings: string[] = [""];

interface TyperComponentProps {
  strings?: string[]; // Optional prop with a default value
}

export default function TyperComponent({ strings = demostrings }: TyperComponentProps) {
  return (
    <TypeAnimation
      sequence={[...strings.flatMap((element) => [element, 2000])]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
}
