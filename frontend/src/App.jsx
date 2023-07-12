import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import UserCreate from "./pages/UserCreate";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/new_user" element={<UserCreate />} />
          <Route path="/users/:id" element={<UserCreate />} />
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
