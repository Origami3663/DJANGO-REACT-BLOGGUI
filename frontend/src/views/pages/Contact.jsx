import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
function Contact() {
    return (
        <>
            <Header />
            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 mx-auto text-center">
                            <h1 className="fw-bold">Contactanos</h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* =======================
Inner intro END */}
            {/* =======================
Contact info START */}
            <section className="pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <iframe
                                className="w-100 h-300 grayscale"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.0044538667184!2d-93.207318422875!3d16.871613436217466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecdd90e8e3df73%3A0x4a0e5ca7d87d8e!2sParque%20Central%20de%20San%20Fernando!5e1!3m2!1ses-419!2smx!4v1744676999368!5m2!1ses-419!2smx"
                                height={500}
                                style={{ border: 0 }}
                                aria-hidden="false"
                                tabIndex={0}
                            />
                            <div className="row mt-5">
                                <div className="col-sm-6 mb-5 mb-sm-0">
                                    <h3>Address Informations</h3>
                                    <address>2492 Centennial NW, Acworth, GA, 30102</address>
                                    <p>
                                        Call:{" "}
                                        <a href="#" className="text-reset">
                                            <u>+123 4567 890 (Toll-free)</u>
                                        </a>
                                    </p>
                                    <p>
                                        Email:{" "}
                                        <a href="#" className="text-reset">
                                            <u>desphixs@gmail.com</u>
                                        </a>
                                    </p>
                                    <p>
                                        Support time: Monday to Saturday
                                        <br />
                                        9:30 am to 6:00 pm
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <h3>Contact Information </h3>
                                    <p>Get in touch with us to see how we can help you with your query</p>
                                    <address>750 Sing Sing Rd, Horseheads, NY, 14845</address>
                                    <p>
                                        Call:{" "}
                                        <a href="#" className="text-reset">
                                            <u>+123 4567 890 (Toll-free)</u>
                                        </a>
                                    </p>
                                    <p>
                                        Email:{" "}
                                        <a href="#" className="text-reset">
                                            <u>desphixs@gmail.com</u>
                                        </a>
                                    </p>
                                    <p>
                                        Support time: Monday to Saturday
                                        <br />
                                        9:00 am to 5:30 pm
                                    </p>
                                </div>
                            </div>
                            <hr className="my-5" />
                            <div className="row mb-5">
                                <div className="col-12">
                                    <h2 className="fw-bold">Send us a message</h2>
                                    <p>Please fill in the form below and we will contact you very soon. Your email address will not be published.</p>
                                    {/* Form START */}
                                    <form className="contact-form" id="contact-form" name="contactform" method="POST">
                                        {/* Main form */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                {/* name */}
                                                <div className="mb-3">
                                                    <input required="" id="con-name" name="name" type="text" className="form-control" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                {/* email */}
                                                <div className="mb-3">
                                                    <input required="" id="con-email" name="email" type="email" className="form-control" placeholder="E-mail" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                {/* Subject */}
                                                <div className="mb-3">
                                                    <input required="" id="con-subject" name="subject" type="text" className="form-control" placeholder="Subject" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                {/* Message */}
                                                <div className="mb-3">
                                                    <textarea required="" id="con-message" name="message" cols={40} rows={6} className="form-control" placeholder="Message" defaultValue={""} />
                                                </div>
                                            </div>
                                            {/* submit button */}
                                            <div className="col-md-12 text-start">
                                                <button className="btn btn-primary w-100" type="submit">
                                                    Send Message <i className="fas fa-paper-plane"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    {/* Form END */}
                                </div>
                            </div>
                        </div>{" "}
                        {/* Col END */}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;