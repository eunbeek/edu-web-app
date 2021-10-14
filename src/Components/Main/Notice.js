import React  from 'react';
import '../../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Card, Button, CardColumns} from 'react-bootstrap';

class Notice extends React.Component{
    render(){
        const courses = [
                            {
                                title:'New Node Class Open',
                                content:'Sep 12-Dec 20',
                                image: 'course01.png'
                            },
                            {
                                title:'New React Class Open',
                                content:'Sep 12-Dec 20',
                                image: 'course02.png'
                            },
                            {
                                title:'New Angular Class Open',
                                content:'Sep 12-Dec 20',
                                image: 'course03.png'
                            },
                            {
                                title:'New Node Class Open',
                                content:'Sep 12-Dec 20',
                                image: 'course04.png'
                            },
                        ];
        return(
            <div>
                <Carousel
                autoPlay='true'
                infiniteLoop='true'
                interval={2000}
                stopOnHover='false'
                showThumbs='false'
                >
                    <div>
                        <img src="/resource/holder/newcourse01.png" alt=""/>
                    </div>
                    <div>
                        <img src="/resource/holder/newcourse02.png" alt=""/>
                    </div>
                    <div>
                        <img src="/resource/holder/holder03.png" alt=""/>
                    </div>
                </Carousel>
                <CardColumns>
                    {courses.map((result)=>(
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={'/resource/image/'+result.image} />
                        <Card.Body>
                            <Card.Title>{result.title}</Card.Title>
                            <Card.Text>
                                {result.content}
                            </Card.Text>
                            <Button variant="primary">Detail</Button>
                        </Card.Body>
                    </Card>
                    ))}
                </CardColumns>
            </div>
        );
    }
}

export default Notice;