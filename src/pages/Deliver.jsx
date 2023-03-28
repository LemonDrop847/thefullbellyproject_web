import Foots from "../components/Footer";

const Deliver = () => {
    return ( 
        <>
            <div className="container">
                <div className="row adjust">
                    <div className="col">
                        <img src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" alt="" />
                    </div>
                    <div className="col">
                        <h2>
                            Delivered
                        </h2>
                        <h3>Location</h3>
                        <h3>date and time</h3>
                    </div>
                </div>
            </div>
            <Foots/>
        </>
     );
}
 
export default Deliver;