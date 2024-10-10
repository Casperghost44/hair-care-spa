import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/QuizPage";
import Login from "./pages/FirstQuestionPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/question/1" element={<Login />} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
