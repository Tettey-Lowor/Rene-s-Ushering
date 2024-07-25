import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutSection from "./Components/AboutSection";
import Contact from "./Components/Contact";
import HeroSection from "./Components/Hero-Section";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";


const router = createBrowserRouter([
  {path: "/Contact", element: <Contact/>},
  {path: "/AboutSection", element: <AboutSection/>},
  {path: "/Contact", element: <Contact/>},


])
function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <Services/>
    
    <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
