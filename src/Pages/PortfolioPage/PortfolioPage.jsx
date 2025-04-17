import React, { useEffect, useState } from "react";
import "./PortfolioPage.css";
import PortfolioCard from "../../Components/PortfolioCard/PortfolioCard";
import logo from "/jgi-logo.png";
import data from "../../projects.json";
import { Link } from "react-router-dom";

function PortfolioPage()
{
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState(new Set());
    const [filterCategory, setFilter] = useState("");

    useEffect(() => {
        if(!categories.has(filterCategory) || filterCategory.trim() === "")
        {
            setProjects(data);
        }
        else
        {
            setProjects(data.filter((d) => d.category === filterCategory));
        }

    }, [filterCategory])

    useEffect(() => {
        data.map((d) => {
            setCategories(prev => new Set([...prev, d.category]))
        })
    }, [])

    return(
        <div className="d-flex m-0 row justify-content-start">
            <div className="col-12 d-flex align-items-center justify-content-center banner">
                <Link to="/" className="col-12 col-sm-6"><img src={logo} className="col-12" alt="logo"/></Link>
            </div>

            <div className="scrollmenu">
                <button onClick={(e) => setFilter("")} href="#home">Todo</button>
                {
                    [...categories].map((c, i) => (<button onClick={(e) => setFilter(c)} key={i}>{c}</button>))
                }
            </div>

            <div className="d-flex justify-content-center">

                <div className=" container justify-content-start align-items-stretch row mt-4 mb-4">

                    {
                        projects.map((d, i) => {
                            return (<PortfolioCard name={d.name} category={d.category} src={d.src} key={d.name + i}/>)
                        })
                    }

                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;

// https://authory.com/blog/content/images/2023/03/26-Pam-Moore-1.png