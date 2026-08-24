import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "../ScrollToTop/ScrollToTop";

import Home from "../../pages/Home/Home";
import FormOne from "../../pages/FormOne/FormOne";
import FormTwo from "../../pages/FormTwo/FormTwo";
import FormThree from "../../pages/FormThree/FormThree";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario-1" element={<FormOne />} />
        <Route path="/formulario-2" element={<FormTwo />} />
        <Route path="/formulario-3" element={<FormThree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
