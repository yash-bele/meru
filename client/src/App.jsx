import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store } from "./store";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Outstation from "./pages/Outstation";
import About from "./pages/About";
import MeruBizz from "./pages/MeruBizz";
import CollaboratewithUs from "./pages/CollaboratewithUs";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:outstation/:route" element={<Outstation />} />
            <Route path="about/:query" element={<About />} />
            <Route path="/meru-biz" element={<MeruBizz />} />
            <Route path="/collobrate-with-us" element={<CollaboratewithUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
