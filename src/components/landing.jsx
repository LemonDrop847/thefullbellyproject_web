import "../pages/styles/landing.css";
const Landing = () => {
    return ( 
        <div className="landing">
            <div className="container-fluid">
                <div className="row">
                    <div className="col" style={{marginLeft:"1rem"}}>
                        <h1 className="title">FULL BELLY</h1>
                        <br />
                        <br />
                        <p id="land-txt">Together, we can make a difference in decreasing hunger and supporting those in need. Join us in our efforts to help make the world a better place.</p>

                    </div>
                    <div className="col" style={{textAlign:"right"}}>
                        <img className="img-fluid" style={{maxHeight:"100%",textAlign:"right"}}src="https://i.postimg.cc/L5kjnqKM/20230330-000359.png" alt="" />
                    </div>
                </div>
            </div>
            <a href="./#home">

            <img id="scro" src="https://i.postimg.cc/jSzH9VNn/Scroll-Down.png" alt="" />
            </a>
        </div>
     );
}
 
export default Landing;