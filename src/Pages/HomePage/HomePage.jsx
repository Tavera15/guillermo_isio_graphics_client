import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomePage.css";
import { Link } from "react-router-dom";

import fav1 from "/Projects/Business Cards/HartzChickenBuffetCard.png"
import fav2 from "/Projects/Business Cards/EustorgioBarrientosBusinessCard.png"
import fav3 from "/Projects/Business Cards/JaimitoAutoBodyShop.png"
import fav4 from "/Projects/Menus/LasLomasMenu.png"
import fav5 from "/Projects/Magnetic Signs/JairoTowingService.png"


function HomePage()
{
    return(
        <div className="d-flex row justify-content-center m-0">
            <div className="d-flex justify-content-center align-items-end align-content-end">

                <div className="col-12 d-flex row justify-content-center align-items-end p-4 home-intro ">
                    <div className="col-12 col-md-12 text-center">
                        <h1 className="display-1">Jose Guillermo Isio</h1>

                        <p className="display-3 ">Diseñador Gráfico</p>
                    </div>

                    <div className="col-12 col-md-8 d-flex justify-content-center">
                        <h3 className="">Servicios Graficos Para Tarjetas de Presentacion, Flyers, Posters, Camisetas, Menus, Banners y Mucho Mas!</h3>
                    </div>
                </div>
            </div>

            <div className="m-0 p-0 mt-4 mb-4 col-10 d-flex row justify-content-center" >
                <div className="col-12 p-0 d-flex row home-services">
                    <h1>Proyectos</h1>

                    {/* <div className="col-12 p-0 mt-4 mb-4 d-flex justify-content-center" >
                        <Carousel className="col-12 col-lg-5 m-0 p-lg-4">
                            <Carousel.Item >
                            <div className="col-12 border d-flex flex-wrap align-content-center">
                                <h2 className="p-4">Servicios de diseños para tarjetas de precentacion, flyers, camisetas, banners y mucho mas!</h2>
                            </div>
                            </Carousel.Item>
                            <Carousel.Item >
                            <div className="col-12 border d-flex flex-wrap align-content-center">
                                <h2 className="p-4">Servicios de diseños para tarjetas de precentacion, flyers, camisetas, banners y mucho mas!</h2>
                            </div>
                            </Carousel.Item>
                            <Carousel.Item >
                            <div className="col-12 border d-flex flex-wrap align-content-center">
                                <h2 className="p-4">Servicios de diseños para tarjetas de precentacion, flyers, camisetas, banners y mucho mas!</h2>
                            </div>
                            </Carousel.Item>

                        </Carousel>
                    </div> */}

                    <div className="col-0 col-lg-1"></div>

                    <div className="col-12 p-0 mt-2 d-none d-lg-block" >
                        <Carousel className="col-12 m-0">
                            <Carousel.Item className="carouselItem">
                                <img src={fav1} alt="fav1" className="col-4" />
                                <img src={fav2} alt="fav2" className="col-4" />
                                <img src={fav3} alt="fav3" className="col-4" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src={fav4} alt="fav4" className="col-4" />
                                <img src={fav5} alt="fav5" className="col-4" />
                                <img src={fav1} alt="fav6" className="col-4" />
                            </Carousel.Item>

                        </Carousel>
                    </div>

                    <div className="col-12 p-0 d-none d-sm-block d-lg-none">
                        <Carousel className="col-12 m-0">
                            <Carousel.Item className="carouselItem">
                                <img src={fav1} alt="fav1" className="col-6" />
                                <img src={fav2} alt="fav2" className="col-6" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src={fav3} alt="fav3" className="col-6" />
                                <img src={fav4} alt="fav4" className="col-6" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src={fav5} alt="fav5" className="col-6" />
                                <img src={fav1} alt="fav1" className="col-6" />
                            </Carousel.Item>

                        </Carousel>
                    </div>

                    <div className="col-12 p-0 d-block d-sm-none">
                        <Carousel className="col-12 m-0">
                            <Carousel.Item className="carouselItem">
                                <img src={fav1} alt="fav1" className="col-12" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src={fav2} alt="fav2" className="col-12" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src={fav3} alt="fav3" className="col-12" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src={fav4} alt="fav4" className="col-12" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src={fav5} alt="fav5" className="col-12" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src={fav1} alt="fav6" className="col-12" />
                            </Carousel.Item>

                        </Carousel>
                    </div>

                </div>
                <div className="mt-2">
                    <Link to='/Portfolio' className="btn btn-primary btn-lg">Ver Portfolio</Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;