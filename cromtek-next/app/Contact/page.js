"use client"
import { useState } from "react";
import Navbar from "../components/Navbar";
import '../css/animations/animate.css'
import '../css/responsive.css'
import '../revolution_slider/css/revslider.css'
import '../css/menu.css'
import '../bootstrap/css/bootstrap.min.css'
import Socialsection from "../components/Socialsection";
import Footersection from "../components/Footersection";
import Partnersection from "../components/Partnersection";
export default function Contact() {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        comp: "",
        query: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        try {
            const response = await fetch("http://localhost:3000/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
           
           
            if (response.ok) {
                setStatus("Email sent successfully!");
                alert("sent",response);
                console.log("sent",response);
                setFormData({ name: "", email: "", mobile: "", comp: "", query: "" });
            } else {
                setStatus("Failed to send email.");
                console.log("fail to sent")
            }
        } catch (error) {
            console.error(error);
            setStatus("An error occurred.");
        }
    };



    return (
        <>
            <Navbar />
            <section className="title-section">
                <div className="container">
                    {/* <!-- crumbs --> */}
                    <div className="row crumbs">
                        <div className="col-md-12">
                            <a href="index.html">Home</a> / Contact
                        </div>
                    </div>
                    {/* <!-- End crumbs --> */}

                    {/* <!-- Title - Search--> */}
                    <div className="row title empty">
                        {/* <!-- Title --> */}
                        <div className="col-md-9">
                            <h1>Contact
                                <span className="subtitle-section">
                                    Reach us
                                    <span className="right"></span>
                                </span>
                                <span className="line-title"></span>
                            </h1>
                        </div>
                        {/* <!-- End Title--> */}
                    </div>
                    {/* <!-- End Title -Search --> */}


                </div>
            </section>
            <div className="map-banner">

                <div id="googleMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111235.51466135739!2d76.89408065327369!3d29.396342892441854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dda457afbe651%3A0x41d3f6feacaa74d4!2sPanipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1683482231369!5m2!1sen!2sin" width="1600" height="420" title='page' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <section className="content_info padding-bottom-50 padding-top-50">
                    <div className="paddings">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact_info">
                                        <h3>Head Office</h3>
                                        <p><i className="fa fa-map-marker"></i> Cromtek Solutions pvt. Ltd <br /> (943 / 23 , Krishanpura Panipat - 132103 , Haryana - India</p>

                                        <p><i className="fa fa-mobile-phone"></i> <a href="tel:+91-8168616807">+91- 8168616807</a> </p>
                                        <p><i className="fa fa-envelope"></i> <a href="mailto:cromtek@cromteksolutions.info">cromtek@cromteksolutions.info</a></p>

                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <input type="text" value={formData.name}
                                                    onChange={handleChange} name="name" id="qname" className="form-control" placeholder="Your Name*" required />
                                            </div>
                                            <div className="col-sm-6">
                                              
                                                <input type="email" value={formData.email}
          onChange={handleChange} name="email" id="qemail" className="form-control" placeholder="Your Email*" required />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                               
                                                <input type="text"  value={formData.comp}
          onChange={handleChange} name="comp" id="qsubject" className="form-control" placeholder="Your Company Name" />
                                            </div>
                                            <div className="col-sm-6">
                                               
                                                <input type="number" value={formData.mobile}
          onChange={handleChange} name="mobile" id="Text1" className="form-control" placeholder="Your Mobile No" />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-sm-12">
                                               
                                                <textarea id="qmessage" name="query"  value={formData.query}
          onChange={handleChange} cols="27" rows="3" className="form-control" placeholder="Message"></textarea></div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-sm-12">
                                                <button type="submit" className="btn btn-primary btn-sm">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <p>{status}</p>
                            </div>
                        </div>
                        {/* <!-- End Container--> */}
                    </div>
                </section>
            </div>
            <Partnersection />
            <Socialsection />
            <Footersection />
        </>
    )
}