import Navbar from "./components/layout/NavBar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home /> {/* ✅ THIS WAS MISSING */}
      <Footer />
    </>
  );
}

export default App;