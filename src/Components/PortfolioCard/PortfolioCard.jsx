import React, {useEffect, useState} from "react";
import { Button, Modal } from "react-bootstrap";

function PortfolioCard({name, category, src})
{
    const projectsDir = "/Projects/"
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        setPhoto(new URL(`${projectsDir}${category}/${src}`, import.meta.url).href);
    }, [])
    
    const [modalShow, setModalShow] = useState(false);

    return(
        <div className="card col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <Modal
                show={modalShow}
                onHide={setModalShow}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <img className="col-12" src={photo} alt={"modal " + name}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
                </Modal>

            <div onClick={() => setModalShow(true)}>
                {
                    <img className="card-img-top border" src={photo} style={{"height": "15rem", "objectFit": "cover"}} alt={name} />
                }
                <div className="card-body mt-2 mb-2">
                    <h4 className="card-text">{name}</h4>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;