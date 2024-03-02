import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./Pages/HomePage";
import AuthCallbackPage from "./Pages/AuthCallbackPage";

import UserProfilepage from "./Pages/UserProfilepage";
import ProtectedRoute from "./auth/ProtectedRoute";


const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero={true}>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />

      <Route element={<ProtectedRoute/>}>
      <Route path="/user-profile" element={<Layout ><UserProfilepage/></Layout>} />

      </Route>
   
      <Route path="*" element={<Navigate to={"/"} />}></Route>
    </Routes>
  );
};

export default AppRoutes;
