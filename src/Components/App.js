 import Navbar from "./NavBar/Navbar";
import Hero from "./Hero/Hero";
 import Partners from "./Partners/Partners";
 import Tools from "./ToolsSection/Tools";
 import Portfolio from "./Portfolio/Portfolio";
 import Testimonial from "./Testimonial";
 import Footer from "./Footer";
 import AOS from "aos"
import { useEffect } from "react";


function App() {

  useEffect(() => {
     AOS.init({
      duration: 2000,
      delay: 100,
     })
  })
  return (

    <div>
        <Navbar/>
 
        <Hero />

        <Partners />

        <Tools />
    
        <Portfolio />

        <Testimonial />

        <Footer />

        

    </div>
 
      
       
         
        
  
  );
}

export default App;
