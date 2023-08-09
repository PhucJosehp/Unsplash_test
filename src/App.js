import { Route, Routes } from "react-router";
import Screen from "./screens/Screen";
import ScreenDetail from "./screens/ScreenDetail";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Screen />} />
      <Route path="/:Id" element={<Screen />} />
      <Route path="/photos/:ID" element={<ScreenDetail />} />
      <Route />
    </Routes>
  );
}

export default App;
