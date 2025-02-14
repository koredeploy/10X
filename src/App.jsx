import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/external/Home/Home"));
const Resource = lazy(() => import("./pages/external/Resource/Resource"));
const SalesPage = lazy(() => import("./pages/external/SalesPage/SalesPage"));
const Login = lazy(() => import("./pages/Auth/Login/Login"));
const WhatWeDo = lazy(() => import("./pages/external/About/WhatWeDO"));
const Library = lazy(() => import("./pages/internal/Admin/library/Library"));
const Settings = lazy(() => import("./pages/internal/Admin/Settings/Settings"));
const Dashboard = lazy(() => import("./pages/internal/Admin/Home/Dashboard"));
const Edit = lazy(() => import("./pages/internal/Admin/Edit-Course/Edit"));
const ForgotPassword = lazy(() =>
  import("./pages/Auth/ResetPassword/ForgotPassword")
);
const ResetPassword = lazy(() =>
  import("./pages/Auth/ResetPassword/ResetPassword")
);
const CourseDetail = lazy(() =>
  import("./pages/internal/Admin/coursedetail/CourseDetail")
);
const Adminlogin = lazy(() => import("./pages/internal/Auth/Adminlogin"));
const CreateCourse = lazy(() =>
  import("./pages/internal/Admin/create/CreateCourse")
);
const MyCourses = lazy(() =>
  import("./pages/internal/user/Mycourses/MyCourses")
);
const SingleCourseView = lazy(() =>
  import("./pages/internal/user/Mycourses/singleCourseView")
);
const UserSettings = lazy(() =>
  import("./pages/internal/user/Usersetting/UserSettings")
);
const PageNotFound = lazy(() =>
  import("./pages/external/ErrorPage/PageNotFound")
);

import Rootlayout from "./layout/Rootlayout";
import Adminlayout from "./layout/AdminLayout";
import PrivateRoute from "./utils/PrivateRoute";
import AdminPrivateRoute from "./utils/AdminPrivateRoute";
import PageLoader from "./components/loader/PageLoader";

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <PageLoader />
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route element={<Rootlayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/resource" element={<Resource />} />
              <Route path="/about" element={<WhatWeDo />} />
              <Route path="/sales/:id" element={<SalesPage />} />
              {/* Private Routes */}
              <Route element={<PrivateRoute />}>
                <Route path="/settings" element={<UserSettings />} />
                <Route path="/mycourses" element={<MyCourses />} />
              </Route>
            </Route>
            <Route
              path="/mycourses-resume/:id"
              element={<SingleCourseView />}
            />

            <Route path="*" element={<PageNotFound />} />
            <Route element={<Adminlayout />}>
              <Route element={<AdminPrivateRoute />}>
                <Route path="/admin/home" element={<Dashboard />} />
                <Route path="/admin/library" element={<Library />} />
                <Route path="coursedetail/:id" element={<CourseDetail />} />
                <Route path="/admin/settings" element={<Settings />} />
                <Route path="/admin/edit-course/:id" element={<Edit />} />
                <Route path="/admin/create" element={<CreateCourse />} />a
              </Route>
            </Route>
            <Route path="/admin/login" element={<Adminlogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
