import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import DetailProduct from "./pages/detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prod/:id" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
