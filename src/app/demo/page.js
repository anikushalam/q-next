"use client";
import Demo from "@/components/Demo/Demo";
import "@/app/styles/variables.css";
import "../styles/fonts.css";
import React, { useEffect, useState } from "react";

function Demopage() {
  const [theme, setTheme] = useState("light-theme");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <Demo />
    </div>
  );
}

export default Demopage;
