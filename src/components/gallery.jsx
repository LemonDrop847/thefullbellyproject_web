const Gallery = () => {
    // const piclist=["https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg"];
    return ( 
        <div className="row adjust1" id="gallery">
                <h1>Photo Gallery</h1>
                <h4>See the smile brought by your attention</h4>
                <div className="col">
                    <img className="galimg" src="https://i.postimg.cc/Px14zdDv/img2.jpg" alt="" />
                    <br />
                    <img className="galimg" src="https://i.postimg.cc/jd9D0vrb/stock-photo-santa-lucia-kwazulu-natal-south-africa-february-needy-schoolchildren-in-a-village-near-1.jpg" alt="" />
                    </div>
                    <div className="col">
                    <img className="galimg" src="https://i.postimg.cc/2SRC7tDV/12345.jpg" alt="" />
                    <br />
                    <img className="galimg" src="https://i.postimg.cc/G25C87K3/1234.jpg" alt="" />
                </div>
            </div>
     );
}
 
export default Gallery;