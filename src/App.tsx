import { Route, Routes } from "react-router-dom";
import EmptyLayout from "./layouts/empty";
import ClientLayout from "./layouts/client";
import Login from "./pages/login";
import TodosPage from "./pages/todos";
import withAuth from "./hoc/withAuth";
import AdminLayout from "./layouts/admin";
import { AuthProvider } from "./providers/authProvider/index";

import "./App.css";

const ProtectedClientLayout = withAuth(ClientLayout, { allowedRoles: ["client", "admin"] });
const ProtectedAdminLayout = withAuth(AdminLayout, { allowedRoles: ["admin"] });

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<EmptyLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/client" element={<ProtectedClientLayout />}>
          <Route index element={<TodosPage />} />
          <Route path="todos" element={<TodosPage />} />
        </Route>

        <Route path="/admin" element={<ProtectedAdminLayout />}>
          <Route index element={<TodosPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
