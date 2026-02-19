import { Route, Routes } from "react-router-dom";
import EmptyLayout from "./layouts/empty";
import ClientLayout from "./layouts/client";
import Login from "./pages/login";
import Home from "./pages/home";
import TodosPage from "./pages/todos";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmptyLayout />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/client" element={<ClientLayout />}>
        <Route index element={<TodosPage />} />
        <Route path="todos" element={<TodosPage />} />
      </Route>

    </Routes>
  );
}

export default App;
