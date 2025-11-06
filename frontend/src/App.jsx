import { Routes, Route } from "react-router-dom";
import { logIn, signUp, verify, index, forgotPass } from "./Routes/Routes";

import { Login, Signup, Verify } from "./components/index.components";
import { Home, Auth } from "./pages/index.pages";

function App() {
  return (
    <div className="bg-[#cdcdef] text-[#212529] w-full min-h-screen font-[poppins]">
      <Routes>
        <Route path={index} element={<Home />} />
        <Route path={logIn} element={<Auth />} />
        <Route path={verify} element={<Auth />} />
        <Route path={forgotPass} element={<Auth />} />
        <Route path={signUp} element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
