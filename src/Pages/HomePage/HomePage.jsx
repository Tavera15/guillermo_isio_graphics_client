import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomePage.css";
import { Link } from "react-router-dom";


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
                        <h3 className="display-6s">Servicios Graficos Para Tarjetas de Presentacion, Flyers, Posters, Camisetas, Menus, Banners y Mucho Mas!</h3>
                    </div>
                </div>
            </div>

            <div className="m-0 p-0 mt-4 mb-4 col-10 d-flex row justify-content-center" >
                <div className="col-12 p-0 d-flex row home-services">

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

                    <div className="col-12 p-0 mt-4 d-none d-lg-block" >
                        <Carousel className="col-12 m-0">
                            <Carousel.Item className="carouselItem">
                                <img src="https://marketplace.canva.com/EAFQHkE0bec/1/0/1600w/canva-red-black-creative-modern-business-card-LqUfJRUvvrI.jpg" alt="placeholder" className="col-4" />
                                <img src="https://marketplace.canva.com/EAFUj7uKPZI/1/0/1600w/canva-modern-creative-business-card-WtpSYS6bMZ4.jpg" alt="placeholder" className="col-4" />
                                <img src="https://templates.designwizard.com/75442f90-1550-11e8-a532-41cc5dc1baad.jpg" alt="placeholder" className="col-4" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src="https://designshifu.com/wp-content/uploads/2022/11/Ad-banner-design-ideas-examples-that-get-the-maximum-clicks.jpg" alt="placeholder" className="col-4" />
                                <img src="https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/restaurant-menu-design-1.jpg" alt="placeholder" className="col-4" />
                                <img src="https://blog.photoadking.com/wp-content/uploads/2023/04/1682070770785.jpg" alt="placeholder" className="col-4" />
                            </Carousel.Item>

                        </Carousel>
                    </div>

                    <div className="col-12 p-0 d-none d-sm-block d-lg-none">
                        <Carousel className="col-12 m-0">
                            <Carousel.Item className="carouselItem">
                                <img src="https://marketplace.canva.com/EAFQHkE0bec/1/0/1600w/canva-red-black-creative-modern-business-card-LqUfJRUvvrI.jpg" alt="placeholder" className="col-6" />
                                <img src="https://marketplace.canva.com/EAFUj7uKPZI/1/0/1600w/canva-modern-creative-business-card-WtpSYS6bMZ4.jpg" alt="placeholder" className="col-6" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src="https://templates.designwizard.com/75442f90-1550-11e8-a532-41cc5dc1baad.jpg" alt="placeholder" className="col-6" />
                                <img src="https://designshifu.com/wp-content/uploads/2022/11/Ad-banner-design-ideas-examples-that-get-the-maximum-clicks.jpg" alt="placeholder" className="col-6" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src="https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/restaurant-menu-design-1.jpg" alt="placeholder" className="col-6" />
                                <img src="https://blog.photoadking.com/wp-content/uploads/2023/04/1682070770785.jpg" alt="placeholder" className="col-6" />
                            </Carousel.Item>

                        </Carousel>
                    </div>

                    <div className="col-12 p-0 d-block d-sm-none">
                        <Carousel className="col-12 m-0">
                            <Carousel.Item className="carouselItem">
                                <img src="https://marketplace.canva.com/EAFQHkE0bec/1/0/1600w/canva-red-black-creative-modern-business-card-LqUfJRUvvrI.jpg" alt="placeholder" className="col-12" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src="https://marketplace.canva.com/EAFUj7uKPZI/1/0/1600w/canva-modern-creative-business-card-WtpSYS6bMZ4.jpg" alt="placeholder" className="col-12" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src="https://templates.designwizard.com/75442f90-1550-11e8-a532-41cc5dc1baad.jpg" alt="placeholder" className="col-12" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src="https://designshifu.com/wp-content/uploads/2022/11/Ad-banner-design-ideas-examples-that-get-the-maximum-clicks.jpg" alt="placeholder" className="col-12" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src="https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/restaurant-menu-design-1.jpg" alt="placeholder" className="col-12" />
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src="https://blog.photoadking.com/wp-content/uploads/2023/04/1682070770785.jpg" alt="placeholder" className="col-12" />
                            </Carousel.Item>

                        </Carousel>
                    </div>

                </div>
                <div className="mt-4">
                    <Link to='/Portfolio' className="btn btn-primary btn-lg">Ver Portfolio</Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;