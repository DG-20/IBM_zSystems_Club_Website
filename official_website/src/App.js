import "./App.css";
import Landing from "./Components/Landing";
import MainPoints from "./Components/MainPoints";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div className="landCont">
              <Navigation />
              <Landing />
              <MainPoints />
            </div>
          }
        />
        <Route
          path="/about"
          exact
          element={
            <>
              <Navigation />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
