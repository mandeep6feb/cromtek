import React from 'react'
import { Link } from 'react-router'

function Footersection() {
  return (
    <div className="clearfix">
      
      {/* <!--================================ FOOTER AREA ==========================================--> */}

<footer className="footer style-1 padding-top-60 bg222">
    <div className="container">
        <div className="footer-main padding-bottom-10">
            <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-12 margin-bottom-30">
                    <div className="footer-widget-title">
                        <h5>MAIN LINKS</h5>
                    </div>
                    <div className="footer-menu">
                        <ul className="su_menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About Us</Link></li>
                            <li><Link to="/Services">Services</Link></li>
                            <li><Link to="/Solution">Solutions</Link></li>
                            <li><Link to="/MobileApp">Mobility</Link></li>
                            <li><Link to="/E-commerce">E-commerce</Link></li>
                            {/* <!-- <li><a href="groupcompany.html">Group Companies</a></li> --> */}
                            <li><Link to="/Contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 margin-bottom-30">
                    <div className="footer-widget-title">
                        <h5>Services</h5>
                    </div>
                    <div className="footer-menu">
                        <ul className="su_menu">
                            <li><a href="services.html#custom_solution">ERP Solutions</a></li>
                            <li><a href="services.html#web_application">Web Development</a></li>
                            <li><Link to="/MobileApp">Mobile Application</Link></li>
                            <li><a href="services.html#maintenance_and_support">Maintenance and Support</a></li>
                            <li><a href="services.html#Enterprise">Enterprise Solution</a></li>
                            <li><a href="services.html#advisory">IT Advisory Services</a></li>
                            <li><a href="services.html#Business">Business Process</a></li>
                            <li><a href="services.html#Governance">Governance and Compliances</a></li>
                            <li><a href="services.html#Resource">Resource Augmentations</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 margin-bottom-30">
                    <div className="footer-widget-title">
                        <h5>Solutions</h5>
                    </div>
                    <div className="footer-menu">
                        <ul className="su_menu">
                            <li><a href="solutions.html">SAP Solutions</a></li>
                            {/* <!-- <li><a href="solutions.html#infor solutions">Infor Solutions</a></li> --> */}
                            <li><a href="solutions.html#omni_channel_solutions">Omni Channel Solutions</a></li>
                            <li><a href="solutions.html#HRMS_and_Payroll">HRMS and Payroll</a></li>
                            <li><a href="solutions.html#School_Management_System">School Management System</a></li>
                            <li><a href="solutions.html#Hospital_Management_System">Hospital Management System</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-3 col-sm-3 col-xs-12 margin-bottom-30">
                    <div className="footer-widget-title">
                        <h5>Others</h5>
                    </div>
                    <div className="footer-menu">
                        <ul className="su_menu">
                            {/* <!--<li><a href="our_work.html">Our Work</a></li>
                          <li><a href="groupcompany.html">Group Companies</a></li>--> */}
                            <li><Link to="/DomainExpert">Domain Expertise</Link></li>
                            <li><Link to="/">Career</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- .container end --> */}
    <div className="footer-bottom">
        <div className="container">
            <div className="row clearfix">
                <div className="col-xs-12 pull-left margin-bottom-20">
                    <div className="footer-copyright">
                        <p>&copy; Copyright 2023 <a href="index.html">Cromtek Solutions Pvt Ltd</a>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footersection
