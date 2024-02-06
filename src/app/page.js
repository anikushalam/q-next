"use client";
import "./styles/variables.css";
import React, { useEffect, useState } from "react";
import "./page.css";
import Homee from "@/components/Home/Homee";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Home() {
  const [theme, setTheme] = useState("light-theme");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <React.StrictMode>
      <Provider store={store}>
        <main className="body">
          <div className="App">
            <Homee />
          </div>
        </main>
      </Provider>
    </React.StrictMode>
  );
}
