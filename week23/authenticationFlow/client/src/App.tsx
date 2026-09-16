import { Route, Routes } from "react-router";
import Layout from "./Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/auto/login" element={<Login />} />
          <Route path="/auto/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  )
}
