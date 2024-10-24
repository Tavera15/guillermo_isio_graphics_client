import React from "react";
import { Button, Carousel, Form } from "react-bootstrap";
import "./HomePage.css";


function HomePage()
{
    return(
        <div className="d-flex row justify-content-center home-bg">

            <div className="col-12 home-intro">
                <div className="col-12 col-md-12 p-4 text-center">
                    <h1 className="display-1">Jose Guillermo Isio</h1>

                    <p className="display-6 align-self-end">Diseñador Gráfico</p>
                </div>
            </div>

            <div className="m-0 p-0 mt-4 mb-4 col-10 d-flex row justify-content-center" >
                <div className="col-12 p-0 d-flex row home-services">

                    <div className="col-12 col-md-4 p-2 p-md-4 border d-flex flex-wrap align-content-center">
                        <h4 className="">Servicios de diseños para tarjetas de precentacion, flyers, camisetas, banners y mucho mas!Servicios de diseños para tarjetas de precentacion, flyers, camisetas, banners y mucho mas!</h4>
                    </div>
                    <div className="col-12 col-md-4 p-2 p-md-4 border d-flex flex-wrap align-content-center">
                        <h4 className="">Servicios de diseños para tarjetas de precentacion, flyers, camisetas, banners y mucho mas!</h4>
                    </div>
                    <div className="col-12 col-md-4 p-2 p-md-4 border d-flex flex-wrap align-content-center">
                        <h4 className="">Servicios de diseños para tarjetas de precentacion, flyers, camisetas, banners y mucho mas!</h4>
                    </div>

                    <div className="col-0 col-lg-1"></div>

                    <div className="col-12 col-lg-12 p-0 mt-4" >
                        <Carousel className="col-12 m-0">
                            <Carousel.Item >
                                <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                                <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                                <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                                <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                                <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                                <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                                <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="placeholder" className="col-4" />
                            </Carousel.Item>

                        </Carousel>
                    </div>

                </div>
                <div className="mt-4">
                    <Button className="btn-lg">Ver Portfolio</Button>
                </div>
            </div>

            <div id='contact' className="bg-dark">
                <div className="container contact-form p-4">
                    <h1>Contactar</h1>

                    <form className="col-md-6">
                        <div className="row">

                            <div className="mb-3 col-md-6">
                                <input type="text" className="form-control" id="validationCustom01" name="client_name" placeholder="Nombre" required />
                            </div>

                            <div className="mb-3 col-md-6">
                                <input type="email" className="form-control" id="validationCustom02" name="client_email" placeholder="Email" required />
                            </div>
                        </div>

                        <div className="mb-3">
                            <input type="text" className="form-control" id="validationCustom03" name="subject" placeholder="Sujeto" required />
                        </div>

                        <div className="mb-3">
                            <textarea className="form-control" rows={4} name="message" placeholder="Mensaje"></textarea>
                        </div>

                        <div className="d-flex justify-content-between">
                            <button className="btn btn-success col-5" type="submit">Enviar</button>
                            <button className="btn btn-outline-light col-5" type="reset">Borrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HomePage;