import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Services from "containers/pages/Services";
import About from "containers/pages/About";
import Contact from "containers/pages/Contact";

function App() {
  return (
    <Provider store={store}>

      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />
      
          {/* Home Display */}
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />

        </Routes>
      </Router>

    </Provider>
  );
}

export default App;
