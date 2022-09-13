import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import SignIn from "./components/sign-in/sign-in";
import SignUp from "./components/sign-up/sign-up";
import Scrumboard from './components/scrumboard/Scrumboard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/scrumboard" element={<Scrumboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
