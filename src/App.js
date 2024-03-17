import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
