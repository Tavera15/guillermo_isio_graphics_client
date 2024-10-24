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
            {/* <ul class="nav justify-content-center services-nav" style={{"overflow": "auto", "overflowX": "scroll"}}>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
            </ul> */}

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
                <a href="#work">Work</a>
                <a href="#work">Work</a>
                <a href="#work">Work</a>
                <a href="#work">Work</a>
                <a href="#work">Work</a>
                <a href="#work">Work</a>
                <a href="#work">Work</a>
                <a href="#work">Work</a>
                <a href="#work">Work</a>
                <a href="#work">Work</a>
                <a href="#work">Work</a>
                <a href="#work">Work</a>
                <a href="#work">Work</a>
                <a href="#work">Work</a>
                <a href="#work">Work</a>
                <a href="#work">Work</a>
                <a href="#work">Work</a>
            </div>

            <div className="d-flex justify-content-center">

                <div className="col-10 d-flex justify-content-start align-items-center row mt-4 mb-4">
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;

// https://authory.com/blog/content/images/2023/03/26-Pam-Moore-1.png