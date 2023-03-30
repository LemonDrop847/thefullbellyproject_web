import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';

const News = () => {
    return ( 
        <Carousel variant="dark">
            <Carousel.Item interval={3000}>
            <div className="container">
                    <div className="row adjust">
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" />
                                <Card.Body>
                                    <Badge style={{float:"right"}} bg='success'>Successful</Badge>
                                    <Card.Text>Jan 03,2023</Card.Text>
                                    <Card.Title>Food from Hotels will go straight to the needy</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    {/* <button className="bttn home-btn">Read More</button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.postimg.cc/XvsGFMqt/foodBank.jpg" />
                                <Card.Body>
                                    <Badge style={{float:"right"}} bg='success'>Successful</Badge>
                                    <Card.Text> March 10, 2022</Card.Text>
                                    <Card.Title>Local Food Bank Receives 1000 lbs of Fresh Produce Donation</Card.Title>
                                    <Card.Text>
                                    1000 lbs of fresh produce donated to local food bank to support families in need.
                                    </Card.Text>
                                    {/* <button className="bttn home-btn">Read More</button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.postimg.cc/Y0Y6BpfT/hurricane-relief.jpg" />
                                <Card.Body>
                                    <Badge style={{float:"right"}} bg='success'>Successful</Badge>
                                    <Card.Text>August 5, 2022</Card.Text>
                                    <Card.Title>Community Comes Together to Support Hurricane Relief Efforts in Caribbean</Card.Title>
                                    <Card.Text>
                                    Following a devastating hurricane in the Caribbean, the community rallied together to provide support and donations totaling $10,000.
                                    </Card.Text>
                                    {/* <button className="bttn home-btn">Read More</button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.postimg.cc/85rWL13s/note-thanun-CYl-Pyk-F-q-AM-unsplash.jpg" />
                                <Card.Body>
                                    <Badge style={{float:"right"}} bg='success'>Successful</Badge>
                                    <Card.Text>September 22, 2022</Card.Text>
                                    <Card.Title>Local Elementary School Receives Donation of School Supplies</Card.Title>
                                    <Card.Text>
                                    A donation of much-needed school supplies was made to a local elementary school, providing support for students and teachers.
                                    </Card.Text>
                                    {/* <button className="bttn home-btn">Read More</button> */}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <div className="container">
                    <div className="row adjust">
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" />
                                <Card.Body>
                                    <Badge style={{float:"right"}} bg='success'>Successful</Badge>
                                    <Card.Text>Jan 03,2023</Card.Text>
                                    <Card.Title>Food from Hotels will go straight to the needy</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    {/* <button className="bttn home-btn">Read More</button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.postimg.cc/XvsGFMqt/foodBank.jpg" />
                                <Card.Body>
                                    <Badge style={{float:"right"}} bg='success'>Successful</Badge>
                                    <Card.Text> March 10, 2022</Card.Text>
                                    <Card.Title>Local Food Bank Receives 1000 lbs of Fresh Produce Donation</Card.Title>
                                    <Card.Text>
                                    1000 lbs of fresh produce donated to local food bank to support families in need.
                                    </Card.Text>
                                    {/* <button className="bttn home-btn">Read More</button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.postimg.cc/Y0Y6BpfT/hurricane-relief.jpg" />
                                <Card.Body>
                                    <Badge style={{float:"right"}} bg='success'>Successful</Badge>
                                    <Card.Text>August 5, 2022</Card.Text>
                                    <Card.Title>Community Comes Together to Support Hurricane Relief Efforts in Caribbean</Card.Title>
                                    <Card.Text>
                                    Following a devastating hurricane in the Caribbean, the community rallied together to provide support and donations totaling $10,000.
                                    </Card.Text>
                                    {/* <button className="bttn home-btn">Read More</button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.postimg.cc/85rWL13s/note-thanun-CYl-Pyk-F-q-AM-unsplash.jpg" />
                                <Card.Body>
                                    <Badge style={{float:"right"}} bg='success'>Successful</Badge>
                                    <Card.Text>September 22, 2022</Card.Text>
                                    <Card.Title>Local Elementary School Receives Donation of School Supplies</Card.Title>
                                    <Card.Text>
                                    A donation of much-needed school supplies was made to a local elementary school, providing support for students and teachers.
                                    </Card.Text>
                                    {/* <button className="bttn home-btn">Read More</button> */}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <div className="container">
                    <div className="row adjust">
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.postimg.cc/Prw6rwpw/a3ee095fdba51b3503f6fa41b811564a.jpg" />
                                <Card.Body>
                                    <Badge style={{float:"right"}} bg='success'>Successful</Badge>
                                    <Card.Text>Jan 03,2023</Card.Text>
                                    <Card.Title>Food from Hotels will go straight to the needy</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    {/* <button className="bttn home-btn">Read More</button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.postimg.cc/XvsGFMqt/foodBank.jpg" />
                                <Card.Body>
                                    <Badge style={{float:"right"}} bg='success'>Successful</Badge>
                                    <Card.Text> March 10, 2022</Card.Text>
                                    <Card.Title>Local Food Bank Receives 1000 lbs of Fresh Produce Donation</Card.Title>
                                    <Card.Text>
                                    1000 lbs of fresh produce donated to local food bank to support families in need.
                                    </Card.Text>
                                    {/* <button className="bttn home-btn">Read More</button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.postimg.cc/Y0Y6BpfT/hurricane-relief.jpg" />
                                <Card.Body>
                                    <Badge style={{float:"right"}} bg='success'>Successful</Badge>
                                    <Card.Text>August 5, 2022</Card.Text>
                                    <Card.Title>Community Comes Together to Support Hurricane Relief Efforts in Caribbean</Card.Title>
                                    <Card.Text>
                                    Following a devastating hurricane in the Caribbean, the community rallied together to provide support and donations totaling $10,000.
                                    </Card.Text>
                                    {/* <button className="bttn home-btn">Read More</button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.postimg.cc/85rWL13s/note-thanun-CYl-Pyk-F-q-AM-unsplash.jpg" />
                                <Card.Body>
                                    <Badge style={{float:"right"}} bg='success'>Successful</Badge>
                                    <Card.Text>September 22, 2022</Card.Text>
                                    <Card.Title>Local Elementary School Receives Donation of School Supplies</Card.Title>
                                    <Card.Text>
                                    A donation of much-needed school supplies was made to a local elementary school, providing support for students and teachers.
                                    </Card.Text>
                                    {/* <button className="bttn home-btn">Read More</button> */}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
        
     );
}
 
export default News;