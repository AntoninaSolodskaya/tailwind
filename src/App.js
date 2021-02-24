import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./styles.css";
import "./styles/tailwind-pre-build.css";

import Modal from "./components/Modal";
import Todo from "./components/Todo";
import ButtonPage from "./pages/ButtonPage";
import Main from "./pages/Main";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/modal" component={Modal} />
          <Route path="/todo" component={Todo} />
          <Route path="/page" component={ButtonPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
