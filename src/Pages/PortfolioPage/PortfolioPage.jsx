import React, { useEffect, useState } from "react";
import "./PortfolioPage.css";
import PortfolioCard from "../../Components/PortfolioCard/PortfolioCard";
import logo from "../../assets/logo.png";
import data from "../../assets/Projects/projects.json";

function PortfolioPage()
{
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState(new Set());

    useEffect(() => {
        data.map((d, i) => {
            setCategories(prev => new Set([...prev, d.category]))
        })
    }, [])

    return(
        <div className="d-flex m-0 row justify-content-start">
            <div className="col-12 d-flex justify-content-center banner">
                <img src={logo} className="col-12 col-sm-4" alt="logo"/>
            </div>

            <div className="scrollmenu">
                <a href="#home">Home</a>
                {
                    [...categories].map((c, i) => (<a href={c} key={i}>{c}</a>))
                }
            </div>

            <div className="d-flex justify-content-center">

                <div className=" container justify-content-start align-items-stretch row mt-4 mb-4">

                    {
                        data.map((d, i) => {
                            return (<PortfolioCard name={d.name} category={d.category} src={d.src} key={i}/>)
                        })
                    }

                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;

// https://authory.com/blog/content/images/2023/03/26-Pam-Moore-1.png