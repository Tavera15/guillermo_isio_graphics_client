import React from "react";
import "./PortfolioPage.css";
import PortfolioCard from "../../Components/PortfolioCard/PortfolioCard";

function PortfolioPage()
{
    return(
        <div className="d-flex m-0 row justify-content-start">
            <div className="col-12 d-flex justify-content-center banner">
                <img src="https://www.diabetes.ie/wp-content/uploads/2021/05/logo-Placeholder.jpg" alt="logo"/>
            </div>

            <div className="scrollmenu">
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="#support">Support</a>
                <a href="#blog">Blog</a>
                <a href="#tools">Tools</a>  
                <a href="#base">Base</a>
                <a href="#custom">Custom</a>
                <a href="#more">More</a>
                <a href="#logo">Logo</a>
                <a href="#friends">Friends</a>
                <a href="#partners">Partners</a>
                <a href="#people">People</a>
                <a href="#work">Work</a>
            </div>

            <div className="d-flex justify-content-center">

                <div className="col-10 d-flex justify-content-start align-items-stretch row mt-4 mb-4">
                    <PortfolioCard photo="https://marketplace.canva.com/EAFQHkE0bec/1/0/1600w/canva-red-black-creative-modern-business-card-LqUfJRUvvrI.jpg" />
                    <PortfolioCard photo="https://marketplace.canva.com/EAFUj7uKPZI/1/0/1600w/canva-modern-creative-business-card-WtpSYS6bMZ4.jpg" />
                    <PortfolioCard photo="https://templates.designwizard.com/75442f90-1550-11e8-a532-41cc5dc1baad.jpg" />
                    <PortfolioCard photo="https://designshifu.com/wp-content/uploads/2022/11/Ad-banner-design-ideas-examples-that-get-the-maximum-clicks.jpg" />
                    <PortfolioCard photo="https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/restaurant-menu-design-1.jpg" />
                    <PortfolioCard photo="https://insightsigncompany.com/wp-content/uploads/magnetic-sign-1.jpg" />
                    <PortfolioCard photo="https://blog.photoadking.com/wp-content/uploads/2023/04/1682070770785.jpg" />
                    <PortfolioCard photo="https://blog.photoadking.com/wp-content/uploads/2023/04/1682070770785.jpg" />
                    <PortfolioCard photo="https://blog.photoadking.com/wp-content/uploads/2023/04/1682070770785.jpg" />
                    <PortfolioCard photo="https://blog.photoadking.com/wp-content/uploads/2023/04/1682070770785.jpg" />
                    <PortfolioCard photo="https://blog.photoadking.com/wp-content/uploads/2023/04/1682070770785.jpg" />
                    <PortfolioCard photo="https://blog.photoadking.com/wp-content/uploads/2023/04/1682070770785.jpg" />
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;

// https://authory.com/blog/content/images/2023/03/26-Pam-Moore-1.png