import data from "../portfolioData";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from "./Card";




const Portfolio = ( ) => {

    



    return (
        <div id="portfolio">

        <h1>Portfolio</h1>
    
        <div className="portfolio-tab">

        <Tabs
      defaultActiveKey="social-media"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab  eventKey="social-media" title="Social Media Ads Design">

      <div className="row">

            {data?.filter(item => item.section === "socialMedia").map(item => {

                    return (

                           <Card 
                             key={item.id}
                             img={item?.imageURL}
                             alt={item.jobTitle}
                             jobTitle={item.jobTitle}
                            />     
                        

                    )
                })}    
            
            </div>
      </Tab>


      <Tab  eventKey="brand" title="Brand Identity Design">

      <div className="row">

{data?.filter(item => item.section === "brandIdentity").map(item => {

        return (

               <Card 
                 key={item.id}
                 img={item?.imageURL}
                 jobTitle={item.jobTitle}
                />     
            

        )
    })}    

</div>
          
      </Tab>


      <Tab eventKey="product-design" title="Product Design">
        
      <div  className="row">

{data?.filter(item => item.section === "productDesign").map(item => {

        return (

               <Card 
                 key={item.id}
                 img={item?.imageURL}
                 jobTitle={item.jobTitle}
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