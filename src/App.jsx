import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import Resource from "./pages/Resource/Resource";
import SalesPage from "./pages/SalesPage/SalesPage";
import Login from "./pages/Auth/Login/Login";
import Rootlayout from "./layout/Rootlayout";
import WhatWeDo from "./pages/About/WhatWeDO";
import Adminlayout from "./layout/AdminLayout";
import Dashboard from "./components/Dashboard";
import Library from "./components/Library";
import Settings from "./pages/Admin/Settings/Settings"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Rootlayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/resource" element={<Resource />} />
            <Route path="/about" element={<WhatWeDo />} />
            <Route path="/sales" element={<SalesPage />} />
          </Route>

          <Route element={<Adminlayout />}>
            <Route path="/admin/home" element={<Dashboard />} />
            <Route path="/admin/library" element={<Library />} />
            <Route path="/admin/settings" element={<Settings />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
