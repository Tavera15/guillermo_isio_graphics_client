import React from "react";

function PortfolioCard()
{
    return(
        <div className="card col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
            <img className="card-img-top" src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="Card image cap" />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}

export default PortfolioCard;