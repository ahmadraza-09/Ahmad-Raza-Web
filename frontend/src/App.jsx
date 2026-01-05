import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import { Toaster } from "react-hot-toast";
import SocialMediaFixed from "./components/SocialMediaFixed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
        <Footer />
        <SocialMediaFixed />
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 5000,
            style: { background: "#fff", color: "#000" },
            success: {
              duration: 3000,
              iconTheme: { primary: "green", secondary: "white" },
            },
          }}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
