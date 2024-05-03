import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class Carr extends Component {
	state = {};
	render() {
		return (
			<>
				<style>
					{`
                        .carousel-container {
                            max-width: 100%;
                            height: 300px;
                            margin: 0 auto;
                            text-shadow: 2px 2px 4px #000000;
                            border-radius: 10px;
                        }

                        .carousel-item {
                            height: 300px;
                            width: 100%;
                            overflow: hidden;
                            border-radius: 10px;
                        }

                        .carousel-item img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }

                        @media (min-width: 768px) {
                            .carousel-container {
                                max-width: 600px;
                            }
                        }
                    `}
				</style>
				<Carousel className="carousel-container">
					<Carousel.Item className="carousel-item">
						<img
							className="d-block w-100"
							src="https://pagaronline.net/wp-content/uploads/Iberdrola-600x300-1.jpg"
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item className="carousel-item">
						<img
							className="d-block w-100"
							src="https://cdn.capitalradio.es/embed/714d108c467b3226854723c895f691701782142/Planta-de-Iberdrola-de-Hidrogeno-Verde.jpg"
							alt="Second slide"
						/>
						<Carousel.Caption>
							<p>Planta energética de Iberdrola en España</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item className="carousel-item">
						<img
							className="d-block w-100"
							src="https://media.eitb.eus/multimedia/images/2018/04/05/2270577/20180405214508_torre-iberdrola-luces_amp_w1200.jpg"
							alt="Third slide"
						/>
						<Carousel.Caption>
							<p>Oficinas Iberdrola en Madrid, España</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<hr />
			</>
		);
	}
}

export default Carr;
