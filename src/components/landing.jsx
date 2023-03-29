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
                        {/* <div className="line"> */}

                        <p id="land-txt">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        {/* </div> */}

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