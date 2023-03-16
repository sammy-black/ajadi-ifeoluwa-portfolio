import data from "../../portfolioData";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from "../Card/Card";
import "./Portfolio.css"




const Portfolio = ( ) => {

    return (
        <div id="portfolio">

        <h1>Portfolio</h1>
    
        <div className="portfolio-tab">

        <Tabs
      defaultActiveKey="product-design"
      id="uncontrolled-tab-example"
      className="mb-3"
    >

<Tab eventKey="product-design" title="Product Design">
        
        <div  className="row row-cols-2 row-cols-md-3 justify-content-center">
  
  {data?.filter(item => item.section === "productDesign").map(item => {
  
                let backgroundColor = null
  
              if((item.id % 2) === 0) {
                backgroundColor = "dark-brown"
              } 
  
          return (
  
                 <Card 
                   key={item.id}
                   bg={backgroundColor}
                   companyName={item.companyName}
                   jobDesc={item.jobDesc}
                  />     
  
          )
      })}    
  
  </div>
  
        </Tab>

      
      <Tab  eventKey="brand" title="Brand Identity">

      <div className="row row-cols-2 row-cols-md-3 justify-content-center">

            {data?.filter(item => item.section === "brandIdentity").map(item => {
                           let backgroundColor = null

                           if((item.id % 2) === 0) {
                              backgroundColor = "dark-brown"
                           } 
                            
                    return (

                           <Card 
                              key={item.id}
                              bg={backgroundColor}
                              companyName={item.companyName}
                              jobDesc={item.jobDesc}
                            />     
                        

                    )
                })}    
            
            </div>
      </Tab>


      <Tab  eventKey="social-media" title="Social Media & Illustration">

      <div className="row row-cols-2 row-cols-md-3 justify-content-center">

{data?.filter(item => item.section === "socialMedia").map(item => {

                  let backgroundColor = null

                if((item.id % 2) === 0) {
                  backgroundColor = "dark-brown"
                } 

        return (

               <Card 
                 key={item.id}
                 bg={backgroundColor}
                 companyName={item.companyName}
                 jobDesc={item.jobDesc}
                />     
            

        )
    })}    

</div>
          
      </Tab>

    </Tabs>
    
        </div>

        </div>

    )
}

export default Portfolio;