import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

export default function App() {
  return (
    <>
      <Modal />
      <Todo />
    </>
  );
}
