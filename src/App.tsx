import { Route, Routes } from "react-router-dom";
import EmptyLayout from "./layouts/empty";
import ClientLayout from "./layouts/client";
import Login from "./pages/login";
import Home from "./pages/home";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmptyLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/client" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
