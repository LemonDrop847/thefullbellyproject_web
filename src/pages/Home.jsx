import "./styles/Home.css";
import Card from 'react-bootstrap/Card';
import Foots from "../components/Footer";

const Home = () => {
    return ( 
        <div className="container-fluid" id="home">
            <div className="container">

                <div className="row adjust">
                    <div className="col">
                        <h1>Our Mission</h1>
                        <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <button className="bttn home-btn">Learn More</button>
                    </div>
                    <div className="col">
                        <img style={{maxHeight:"350px"}} src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" alt="" />
                    </div>
                </div>
                <div className="row adjust" style={{marginBottom:"8rem"}}>
                    <div className="col">
                        <img style={{height:"350px"}} src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" alt="" />
                    </div>
                    <div className="col">
                        <h1>Our Vision</h1>
                        
                        <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <button className="bttn home-btn">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="row adjust1" id="gallery">
                <h1>Photo Gallery</h1>
                <h4>See the smile brought by your attention</h4>
                <div className="col">
                    <img style={{height:"200px"}} src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" alt="" />
                    <br />
                    <img style={{height:"200px"}} src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" alt="" />
                    </div>
                    <div className="col">
                    <img style={{height:"200px"}} src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" alt="" />
                    <br />
                    <img style={{height:"200px"}} src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" alt="" />
                </div>
            </div>
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
                    <div className="col">
                        <img style={{height:"350px"}} src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" alt="" />
                    </div>
                </div>
                <div className="row adjust">
                    <div className="col">
                        <img style={{height:"350px"}} src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" alt="" />
                    </div>
                    <div className="col">
                        <h1>HOW FULLBELLY APP WORKS </h1>
                        <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
                <div className="row adjust">
                    <div className="col">
                        <h1>FULLBELLY Application  </h1>
                        <p>
                            Designed with users in mind, "FullBelly" is an initiative, easy-to-use application. Here are the steps to use "FullBelly" for food procurement and donation
                            <br/>
                            1.Enter the App and Login 
                            <br/>
                            2. Fill up profile
                            <br/>
                            3. You can now donate food / Procure food for    distribution    
                            <br/>                
                        </p>
                    </div>
                    <div className="col">
                        <img style={{height:"350px"}} src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" alt="" />
                    </div>
                </div>
                <div className="row adjust" id="blogs">
                    <div className="col">
                        <h1>News and Updates</h1>
                    </div>
                    <div className="col">
                    <p>

                        <strong>Stay informed with the latest developments on charity campaigns to
                        keep you engaged.</strong>
                        <br />
                        <button className="bttn home-btn">See all news</button>
                    </p>
                    </div>
                </div>
                <div className="row adjust">
                    <div className="col">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" />
                            <Card.Body>
                                <Card.Text>Jan 03,2023</Card.Text>
                                <Card.Title>Food from Hotels will go straight to the needy</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <button className="bttn home-btn">Read More</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" />
                            <Card.Body>
                                <Card.Text>Jan 03,2023</Card.Text>
                                <Card.Title>Food from Hotels will go straight to the needy</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <button className="bttn home-btn">Read More</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" />
                            <Card.Body>
                                <Card.Text>Jan 03,2023</Card.Text>
                                <Card.Title>Food from Hotels will go straight to the needy</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <button className="bttn home-btn">Read More</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" />
                            <Card.Body>
                                <Card.Text>Jan 03,2023</Card.Text>
                                <Card.Title>Food from Hotels will go straight to the needy</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <button className="bttn home-btn">Read More</button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <Foots/>
        </div>
     );
}
 
export default Home;