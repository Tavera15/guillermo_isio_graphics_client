import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Footer()
{
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();

    function onClear(e)
    {
        e.preventDefault();

        setName("");
        setPhone("");
        setSubject("");
        setMessage("");
    }

    function onSent(e)
    {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_ID
        })
        .then(
            () => 
            {
                alert("Mensaje Enviado!");
                setName("");
                setPhone("");
                setSubject("");
                setMessage("");
            },
            () => 
            {
                alert("No se pudo enviar este mensaje en este momento")
            }
        )
    }

    return(
        <div id='contact' className="bg-dark">
            <div className="container contact-form p-4">
                <h1>Contactar</h1>

                <form ref={form} onSubmit={(e) => onSent(e)} onReset={(e) => onClear(e)} className="col-md-6">
                    <div className="row">

                        <div className="mb-3 col-md-6">
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="validationCustom01" name="client_name" placeholder="Nombre" required />
                        </div>

                        <div className="mb-3 col-md-6">
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="validationCustom02" name="client_phone" placeholder="Telefono" required />
                        </div>
                    </div>

                    <div className="mb-3">
                        <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" className="form-control" id="validationCustom03" name="subject" placeholder="Sujeto" required />
                    </div>

                    <div className="mb-3">
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" rows={4} name="message" placeholder="message" required></textarea>
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