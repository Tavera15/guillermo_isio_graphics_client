import React from "react";
import { Button, Carousel, Form } from "react-bootstrap";
import "./HomePage.css";


function HomePage()
{
    return(
        <div className="d-flex row justify-content-center home-bg">
            <div className="col-12 home-intro">
                <div className="col-12 col-md-12 p-4 text-center">
                    <h1 className="display-1">Guillermo Isio</h1>

                    <p className="display-6 align-self-end">Diseñador Gráfico</p>
                </div>
            </div>

            <div className="col-10 p-4 home-services">
                <p className="display-6">Servicios de diseños para tarjetas de precentacion, flyers, camisetas, banners y mucho mas!</p>

                <Carousel className="col-12 border">
                    <Carousel.Item >
                        <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                        <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                        <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                        <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                        <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                        <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                        <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                    </Carousel.Item>
                </Carousel>

                <Button className="mt-4 mb-4 btn-lg">Ver Portfolio</Button>
            </div>

            <div id='contact' className="bg-dark">
                <div className="container contact-form p-4">
                    <h1>Contact</h1>

                    <form className="col-md-6">
                        <div className="row">

                            <div className="mb-3 col-md-6">
                                <input type="text" className="form-control" id="validationCustom01" name="client_name" placeholder="Name" required />
                            </div>

                            <div className="mb-3 col-md-6">
                                <input type="email" className="form-control" id="validationCustom02" name="client_email" placeholder="Email" required />
                            </div>
                        </div>

                        <div className="mb-3">
                            <input type="text" className="form-control" id="validationCustom03" name="subject" placeholder="Subject" required />
                        </div>

                        <div className="mb-3">
                            <textarea className="form-control" rows={4} name="message" placeholder="Message"></textarea>
                        </div>

                        <div className="d-flex justify-content-between">
                            <button className="btn btn-success col-5" type="submit">Send</button>
                            <button className="btn btn-outline-light col-5" type="reset">Clear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HomePage;