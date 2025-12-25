import { BrowserRouter, Route, Routes } from "react-router";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";
import PagesComponents from "./pages/pages-components";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/components" element={<PagesComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
