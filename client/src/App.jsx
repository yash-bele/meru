import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store } from "./store";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Outstation from "./pages/Outstation";
import About from "./pages/About";
import MeruBizz from "./pages/MeruBizz";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/outstation/:outstation" element={<Outstation />} />
            <Route path="about/:query" element={<About />} />
            <Route path="/meru-biz" element={<MeruBizz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
