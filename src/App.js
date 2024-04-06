import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
