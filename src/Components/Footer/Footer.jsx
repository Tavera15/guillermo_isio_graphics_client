import React from "react";
import { Form } from "react-bootstrap";

function Footer()
{
    return(
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
    )
}

export default Footer;