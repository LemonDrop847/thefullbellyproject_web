import { Link} from "react-router-dom";

const Foots = () => {
    return ( 
        <footer>
                <div className="row" id="footer">
                    <div className="col">
                        <h1 style={{color:"#FFF"}}>FullBelly</h1>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.. Exercitation veniam consequat sunt nostrud amet.</p>
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
                    <div className="col" style={{paddingLeft:"2rem"}}>
                        <h2>Navigate</h2>
                        <a href="#home" className="ll">Home</a><br />
                        <a href="#home" className="ll">About Us</a><br />
                        <a href="#gallery" className="ll">Gallery</a><br />
                        <a href="#blogs" className="ll">Blogs</a><br />
                        <a href="#blogs" className="ll">News & Updates</a><br />
                        <a href="#hero" className="ll">Get Involved</a><br />
                        <a href="#hero" className="ll">Donate</a><br />
                    </div>
                    <div className="col" style={{paddingLeft:"2rem"}}>
                        <h2>About Us</h2>
                        <Link to="#home" className="ll">Contact Us</Link><br/>
                        <Link to="#home" className="ll">FAQ</Link><br/>
                        <Link to="#home" className="ll">Help</Link><br/>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <p>FullBelly&#169;2023. All rights reserved</p>
                        </div>
                        <div className="col">
                            <p>Privacy Policy</p>
                        </div>
                        <div className="col">
                            <p>Terms & conditions</p>
                        </div>
                    </div>
                </div>  
        </footer>
     );
}
 
export default Foots;