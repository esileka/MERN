import logo from "./logo.svg";
import "./App.css";
import Contact from "./Contact";
import Create from "./CRUD/Create";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import Home from "./Home";
import ReadAll from "./CRUD/ReadAll";
import ReadOne from "./CRUD/ReadOne";
import Update from "./CRUD/Update";
function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create" element={<Create />} />
        <Route path="/readAll" element={<ReadAll />} />
        <Route path="/readOne/:id" element={<ReadOne />} />
        <Route path="/update/:id" element={<Update/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
