import { HashRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/Public";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import MyCharacteres from "../pages/MyCharacteres";

const Router = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="my-characters" element={<MyCharacteres />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default Router;
