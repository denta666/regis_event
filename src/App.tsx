import { BrowserRouter, Route, Routes } from "react-router-dom";

import Competition from "./pages/Competition";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Beranda from "./pages/Beranda";
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
import Workshop from "./pages/Workshop";

import MainLayout from "./layouts/MainLayouts";
import AuthLayout from "./layouts/AuthLayouts";

import CreateCategories from "./pages/dashboard/Categories/CreateCategories";
import EventList from "./pages/dashboard/Event/EventList";
import CreateSpeakers from "./pages/dashboard/Speaker/Speaker";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Layout */}
        <Route element={<MainLayout />}>
          
          {/* Public Pages */}
          <Route path="/" element={<Beranda />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/talkshow" element={<Talkshow />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/workshop" element={<Workshop />} />

          {/* Dashboard Pages */}
          <Route
            path="/dashboard/categories"
            element={<CreateCategories />}
          />

          <Route
            path="/dashboard/event"
            element={<EventList />}
          />

          <Route
            path="/dashboard/speaker"
            element={<CreateSpeakers />}
          />
        </Route>

        {/* Auth Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;