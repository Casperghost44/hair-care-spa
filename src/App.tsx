import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/QuizPage";
import FirstQ from "./pages/FirstQuestionPage";
import SecondQ from "./pages/SecondQuestionPage";
import ThirdQ from "./pages/ThirdQuestionPage";
import FourthQ from "./pages/FourthQuestionPage";
import FithQ from "./pages/FithQuestionPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/question/1" element={<FirstQ />} />
      <Route path="/question/2" element={<SecondQ />} />
      <Route path="/question/3" element={<ThirdQ />} />
      <Route path="/question/4" element={<FourthQ />} />
      <Route path="/question/5" element={<FithQ />} />
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
