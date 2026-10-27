import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SplashPage } from "@/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
