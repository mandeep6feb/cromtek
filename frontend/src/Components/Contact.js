import React from 'react'

function Contact() {
  return (
    <div>
      
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111235.51466135739!2d76.89408065327369!3d29.396342892441854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dda457afbe651%3A0x41d3f6feacaa74d4!2sPanipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1683482231369!5m2!1sen!2sin" width="1600" height="420" title='page'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <section className="content_info padding-bottom-50 padding-top-50">
            <div className="paddings">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact_info">
                                <h3>Head Office</h3>
                                <p><i className="fa fa-map-marker"></i> Cromtek Solutions pvt. Ltd <br/> (943 / 23 , Krishanpura Panipat - 132103 , Haryana - India</p>

                                <p><i className="fa fa-mobile-phone"></i> <a href="tel:+91-8168616807">+91- 8168616807</a> </p>
                                <p><i className="fa fa-envelope-o"></i> <a href="mailto:cromtek@cromteksolutions.info">cromtek@cromteksolutions.info</a></p>

                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form method="POST" action="mail.php" name="myform">
                                <div className="row form-group">
                                    <div className="col-sm-6">
                                        <input type="text" value="" name="name" id="qname" className="form-control" placeholder="Your Name*" required />
                                    </div>
                                    <div className="col-sm-6">
                                        {/* <!--<label for="qemail">Your Email (required)</label>--> */}
                                        <input type="email" value="" name="email" id="qemail" onchange="fun();" className="form-control" placeholder="Your Email*" required />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-6">
                                        {/* <!--<label for="qsubject">Your Company Name</label> --> */}
                                        <input type="text" value="" name="comp" id="qsubject" className="form-control" placeholder="Your Company Name" />
                                    </div>
                                    <div className="col-sm-6">
                                        {/* <!--<label for="qsubject">Your Mobile No</label> --> */}
                                        <input type="number" value="" name="mobile" id="Text1" className="form-control" placeholder="Your Mobile No" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-12">
                                        {/* <!--<label for="qsmessage">Your Message</label>--> */}
                                        <textarea id="qmessage" name="query" cols="27" rows="3" className="form-control" placeholder="Message"></textarea></div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-12">
                                        <button type="submit" name="submit" className="btn btn-primary btn-sm">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                {/* <!-- End Container--> */}
            </div>
        </section>
     


    </div>
    </div>
  )
}

export default Contact
