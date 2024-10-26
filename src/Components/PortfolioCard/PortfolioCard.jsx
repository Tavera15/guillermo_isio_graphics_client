import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";

function PortfolioCard({photo})
{
    const [modalShow, setModalShow] = useState(false);

    return(
        <div className="card col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Modal
                show={modalShow}
                onHide={setModalShow}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <img className="col-12" src={photo} alt={"modal " + photo}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
                </Modal>

            <div onClick={() => setModalShow(true)}>
                <img className="card-img-top" style={{"height": "15rem", "objectFit": "cover"}} src={photo} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;