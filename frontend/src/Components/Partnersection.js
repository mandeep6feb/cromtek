import React from 'react'
import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/animations/animate.css'
import '../css/responsive.css'
import '../bootstrap/css/bootstrap.min.css'
function Partnersection() {
    return (
        <body className="home">


            <div className="clearfix">

                {/* <!--================================ PARTNER SECTION ==========================================--> */}

                <section className="section-gray partner-section padding-top-70 padding-bottom-40">
                    <div className="container">
                        {/* <!-- section container --> */}
                        <div className="section-title-wrap margin-bottom-50">
                            {/* <!-- section title --> */}
                            <h3>Our Projects</h3>
                            <div className="title-divider">
                                <div className="line"></div>
                                <i className="fa fa-star-o"></i>
                                <div className="line"></div>
                            </div>
                        </div>
                        {/* <!-- section title end --> */}

                        <ul className="row partner-wrap style-1 clearfix owl-carousel owl-theme owl-responsive-0 owl-loaded">

                            <div className='owl-stage-outer'>
                                <div className="owl-stage">
                                    <div className="owl-item cloned">
                                        <li className="col-xs-12 margin-bottom-30 item">
                                            <div className="partner shadow-1 clearfix">
                                                <a href="http://iibs.ca/" target="_blank"><img src="images/partner/ii.png" alt="iibs" /></a>
                                            </div>
                                        </li>
                                    </div>
                                    <div className="owl-item cloned">
                                        <li className="col-xs-12 margin-bottom-30 item">
                                            <div className="partner shadow-1 clearfix"><a href="http://www.atdcindia.co.in/" target="_blank"><img src="images/partner/atam1.png" alt="Web Application" /></a>
                                            </div>
                                        </li>
                                    </div>
                                    <div className="owl-item cloned">
                                        <li className="col-xs-12 margin-bottom-30 item">
                                            <div className="partner shadow-1 clearfix"><a href="http://surbhihospital.com/" target="_blank"><img src="images/partner/hospitallogo1.png" alt="Hospital Management System" /></a>
                                            </div>
                                        </li>
                                    </div>
                                    <div className="owl-item cloned">
                                        <li className="col-xs-12 margin-bottom-30 item">
                                            <div className="partner shadow-1 clearfix"><a href="http://www.kailashmanasarovar.org/contact-us.html" target="_blank"><img src="images/partner/abhiyan.png" alt="WebSite" /></a>
                                            </div>
                                        </li>
                                    </div>
                                    <div className="owl-item cloned">
                                        <li className="col-xs-12 margin-bottom-30 item">
                                            <div className="partner shadow-1 clearfix"><a href="http://sambhaconstruction.com/" target="_blank"><img src="images/partner/sambha.png" alt="WebSite" /></a>
                                            </div>
                                        </li>
                                    </div>

                                </div>
                            </div>


                        </ul>
                    </div>
                    {/* <!-- container end --> */}
                </section>
            </div>
        </body>
    )
}

export default Partnersection
