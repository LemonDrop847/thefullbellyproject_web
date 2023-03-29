import Card from 'react-bootstrap/Card';
import { Accordion } from "react-bootstrap";
import Foots from '../components/Footer';
import "./styles/about.css";

const About = () => {
    return ( 
        <>
            <div className="container">
                <h1>
                    About Us
                </h1>
                <div className="row adjust">
                    <h2>Our Mission</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </p>
                </div>
                <div className="row adjust">
                    <div className="col">
                        <img className="children"style={{maxHeight:"350px"}} src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" alt="" />
                    </div>
                    <div className="col">
                        <img className="children"style={{maxHeight:"350px"}} src="https://i.postimg.cc/j5sjMXz2/img2.jpg" alt="" />
                    </div>
                </div>
                <div className="row adjust">
                    <h2>Our Vision</h2>
                    <div className="sub adjust">

                    <img className="goals1"src="https://i.postimg.cc/1RdVzG64/goal-01-480-2.png" alt="" />
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className="sub adjust">

                    <img className="goals2"src="https://i.postimg.cc/d0Pkwwb1/20EE-1.jpg" alt="" />
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className="sub adjust">

                    <img className="goals1"src="https://i.postimg.cc/D0Hf6cFZ/goal-11-480-1.png" alt="" />
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className="sub adjust">

                    <img className="goals2"src="https://i.postimg.cc/qvX06rtg/goal-12-480-2.png" alt="" />
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="row">
                    <h1>Meet The Team</h1>
                    <Card style={{ width: '18rem',marginRight:"1rem",marginLeft:"1rem" }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/L5GxQptx/tapanuli-orangutan.webp" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem',marginRight:"1rem",marginLeft:"1rem" }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/L5GxQptx/tapanuli-orangutan.webp" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem',marginRight:"1rem",marginLeft:"1rem" }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/L5GxQptx/tapanuli-orangutan.webp" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem',marginRight:"1rem",marginLeft:"1rem" }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/L5GxQptx/tapanuli-orangutan.webp" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="row adjust">
                    <div className="col">
                        <h1>Contact Us</h1>
                        <p>2464 Royal Ln. Mesa, New Jersey 45463 <br/>
                        Donority Widing. 4215 Grove<br/>
                        FrmciE0. US<br/>
                        S80-3S8-676S<br/>
                        ku.santos2k2@gmail.com
                        </p>
                    </div>
                    <div className="col">
                        <h3>Socials</h3>
                        <div className="row">
                            <div className="col">
                                <img width={"50px"} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt=""/>
                            </div>
                            <div className="col">
                                <img width={"50px"} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="" />
                            </div>
                            <div className="col">
                                <img width={"50px"} src="https://i.postimg.cc/SRbzzqWm/instagram.png" alt="" />
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"20px"}}>
                            <div className="col">
                                <a href="https://www.freepnglogos.com/pics/google-play-png-logo" title="Image from freepnglogos.com">
                                    <img width={"160px"} src="https://www.freepnglogos.com/uploads/app-store-logo-png/available-the-app-store-logo-png-images-14.png" alt="get it on google play, google play badge png logos" />
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://www.freepnglogos.com/pics/google-play-png-logo" title="Image from freepnglogos.com">
                                    <img width={"110px"} src="https://www.freepnglogos.com/uploads/google-play-png-logo/get-it-on-google-play-google-play-badge-png-logos-23.png" alt="get it on google play, google play badge png logos" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row adjust" style={{marginBottom:"1rem"}}>
                    <h1>FAQ</h1>
                    <div className="App">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                            <Accordion.Header>What is Full Belly project?</Accordion.Header>
                            <Accordion.Body style={{textAlign:"left"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body style={{textAlign:"left"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        {/* <h1>Hello CodeSandbox</h1>
                        <h2>Start editing to see some magic happen!</h2> */}
                        </div>
                </div>
            </div>
            <Foots/>
        </>
     );
}
 
export default About;