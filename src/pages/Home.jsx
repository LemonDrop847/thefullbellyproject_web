import "./styles/Home.css";
import Foots from "../components/Footer";
import News from "../components/News";
import Gallery from "../components/gallery";
import Landing from "../components/landing";
import AppLinkButton from "../components/appButton";
import Content from "../components/readMore";

const Home = () => {
    return ( 
        <>
            <Landing/>
            

        <div className="container-fluid" id="home">
            <div className="container">

                <div className="row adjust">
                    <div className="col">
                        <h1>Our Mission</h1>
                        <p>
                        The Full Belly Project is a non-profit organization that is committed to reducing food waste and addressing hunger issues in communities around the world. Through their various initiatives, the organization collects surplus food from local businesses and distributes it to those in need. By doing so, they are not only reducing food waste but also providing a sustainable solution to address food insecurity. The Full Belly Project is working tirelessly to ensure that no one goes hungry by redirecting surplus food to where it is most needed. Their efforts have had a significant impact on reducing food waste and helping to feed those who are struggling to make ends meet. By addressing hunger in a holistic manner, the Full Belly Project is making a meaningful difference in the lives of people around the world.
                        </p>
                        <button className="bttn home-btn">Learn More</button>
                    </div>
                    <div className="col"style={{textAlign:"center"}}>
                        <img style={{maxHeight:"400px",maxWidth:"400px",marginLeft:"2rem",zIndex:"5"}} src="https://i.postimg.cc/mkMSjBFF/Untitled-design.png" alt="" />
                    </div>
                </div>
                <div className="row adjust" style={{marginBottom:"8rem"}}>
                    <div className="col">
                                <img className="goals" id="goal1" src="https://i.postimg.cc/1RdVzG64/goal-01-480-2.png" alt="" />
                                <img className="goals" id="goal2" src="https://i.postimg.cc/d0Pkwwb1/20EE-1.jpg" alt="" />
                                <br/>
                                <img  className="goals" id="goal3" src="https://i.postimg.cc/D0Hf6cFZ/goal-11-480-1.png" alt="" />
                                <img className="goals" id="goal4" src="https://i.postimg.cc/qvX06rtg/goal-12-480-2.png" alt="" />
                    </div>
                    <div className="col">
                        <h1>Our Vision</h1>
                        
                        <p>
                        The Full Belly Project's vision is a world where every person has access to healthy, nutritious food and is free from hunger and malnutrition. The organization firmly believes that no one should go hungry, and that food is a basic human right. To achieve this vision, the Full Belly Project is committed to developing and promoting sustainable solutions to address food insecurity, poverty, and other systemic issues that contribute to hunger. They strive to empower communities to grow their own food and create self-sustaining systems that can address food insecurity over the long term. By working towards this vision, the Full Belly Project is creating a world where everyone has the opportunity to thrive and reach their full potential, free from the burdens of hunger and malnutrition.
                        </p>
                        <button className="bttn home-btn">Learn More</button>
                    </div>
                </div>
            </div>
            <Gallery/>
            <div className="container">
                <div className="row adjust" id="hero">
                    <div className="col">
                        <h1>Apply To Be A Hero</h1>
                        <p id="ita">“Alone you can do so little 
                            but together we can do so much.” </p>
                        <p>
                        Do you want to make a genuine impact in your community? Join our charity volunteer squad and help us bring about positive change in underserved areas.                    </p>
                        <button className="bttn home-btn">As NGOs</button>
                        <button className="bttn home-btn ">As individual</button>
                    </div>
                    <div className="col" style={{textAlign:"right"}}>
                        <img style={{height:"350px"}} src="https://i.postimg.cc/bY2pQWd0/sts2.png" alt="" />
                        {/* <img style={{height:"350px"}} src="https://i.postimg.cc/nc7gztr5/sts-1.png" alt="" /> */}
                    </div>
                </div>
                <div className="row adjust">
                    <div className="col" >
                        <img style={{maxHeight:"350px",borderRadius:"12px"}} src="https://i.postimg.cc/2y3sSqMN/gallery-light5-1.jpg" alt="" />
                    </div>
                    <div className="col">
                        <h1>HOW FULLBELLY APP WORKS </h1>
                        {/* <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p> */}
                        <Content/>
                    </div>
                </div>
                <div className="row adjust">
                    <div className="col">
                        <h1>FullBelly Application  </h1>
                        <p>
                            Designed with users in mind, "FullBelly" is an initiative, easy-to-use application. Here are the steps to use "FullBelly" for food procurement and donation
                            <br/>
                            1.Enter the App and Login 
                            <br/>
                            2. Fill up profile
                            <br/>
                            3. You can now donate food / Procure food for    distribution    
                            <br/>       
                            <AppLinkButton/>         
                        </p>
                    </div>
                    <div className="col" style={{textAlign:"center"}}>
                        <img style={{maxHeight:"460px",maxWidth:"460px"}} src="https://i.postimg.cc/d3VjcRXT/Picsart-23-03-30-10-31-44-200.jpg" alt="" />
                    </div>
                </div>
                <div className="row adjust" id="blogs">
                    <div className="col">
                        <h1>Latest Campaign</h1>
                    </div>
                    <div className="col">
                    <p>

                        <strong>FEEDING  THE NEEDY MASSES   ALL AROUND THE CORNERS TO ACHIEVE SUSTAINABLE GOALS.</strong>
                        <br />
                        {/* <button className="bttn home-btn">See all news</button> */}
                    </p>
                    </div>
                </div>
                
            </div>
            <News/>
            <Foots/>
        </div>
        </>
     );
}
 
export default Home;