import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <div>
      {/* <!--<div className="preloader"><span className="preloader-gif"></span></div>--> */}
    <div className="clearfix">
        {/* <!--================================responsive log and menu==========================================--> */}
        <div className="wsmenucontent overlapblackbg"></div>
        <div className="wsmenuexpandermain slideRight">
            <a id="navToggle" className="animated-arrow slideLeft"><span></span></a>
            <a href="#" className="smallogo"><img src="images/logo_2.png" alt="Cromtek Solutions Pvt Ltd" /></a>
        </div>
        {/* <!--================================HEADER==========================================--> */}
        <div className="header">
            <div className="top-toolbar">
                {/* <!--header toolbar--> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12 pull-left">
                            <div className="social-content">
                             
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 pull-right">
                            <div className="top-contact-info">
                                <ul>
                                    <li className="toolbar-email"><i className="fa fa-envelope-o"></i> <a href="mailto:cromtek@cromteksolutions.info">cromtek@cromteksolutions.info</a></li>
                                    <li className="toolbar-contact"><i className="fa fa-phone"></i>+91 8168616807</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--header toolbar end--> */}
            <div className="sticky-wrapper">
                <div className="nav-wrapper">
                    {/* <!--main navigation--> */}
                    <div className="container">
                        {/* <!--Main Menu HTML Code--> */}
                        <nav className="wsmenu slideLeft clearfix">
                            <div className="logo pull-left"><a href="index.html" title=""><img src="../images/logo_2.png" width="258" height="50" alt="Cromtek Solutions Pvt Ltd" /></a></div>
                            <ul className="mobile-sub wsmenu-list pull-right">
                                <li><Link to="/" className="">Home</Link></li>
                                <li><Link to="/About" className="">About Us <span className="arrow"></span></Link>
                                    {/* <!--	<ul className="wsmenu-submenu">
									<li><a href="our-team.html">Management Team</a></li>
									</ul> --> */}
                                </li>
                                <li><Link to="/Services">Services <span className="arrow"></span></Link>
                                    <ul className="wsmenu-submenu">
                                        <li><a href="services.html#web_application">Web Application Development</a></li>
                                        <li><a href="services/mobile-apps.html">Mobile Application Development</a></li>
                                        <li><a href="services.html#custom_solution">Custom ERP Solution Developments</a></li>
                                        <li><a href="services.html#Enterprise">Enterprise Solution Implementations</a></li>
                                        <li><a href="services.html#maintenance_and_support">Application Maintenance and Support</a></li>
                                        <li><a href="services.html#advisory">IT Advisory Services</a></li>
                                        <li><a href="services.html#Business">Business Process Transformations</a></li>
                                        <li><a href="services.html#Governance">Application Governance and Compliances</a></li>
                                        <li><a href="services.html#Resource">Resource Augmentations</a></li>
                                    </ul>
                                </li>
                                <li><Link to="/Solution">Solutions <span className="arrow"></span></Link>
                                    <ul className="wsmenu-submenu">
                                        <li><a href="solutions.html">SAP Solutions</a></li>
                                        {/* <!-- <li><a href="solutions.html#infor solutions">Infor Solutions</a></li> --> */}
                                        <li><a href="solutions.html#omni_channel_solutions">Omni Channel Solutions</a></li>
                                        <li><a href="solutions.html#HRMS_and_Payroll">HRMS and Payroll</a></li>
                                        <li><a href="solutions.html#School_Management_System">School Management System</a></li>
                                        <li><a href="solutions.html#Hospital_Management_System">Hospital Management System</a></li>
                                    </ul>
                                </li>
                                <li><Link to="/MobileApp">Mobility <span className="arrow"></span></Link></li>
                                <li><Link to="/E-commerce">E-commerce <span className="arrow"></span></Link>
                                    <ul className="wsmenu-submenu">
                                        <li><a href="E-commerce.html">Magento development</a></li>
                                        <li><a href="E-commerce.html">PrestaShop</a></li>
                                        <li><a href="E-commerce.html">Classic PHP</a></li>
                                        <li><a href="E-commerce.html">nopCommerce development</a></li>

                                    </ul>
                                </li>
                                <li><Link to="/Contact">Contact Us <span className="arrow"></span></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* <!--main navigation end--> */}
            </div>
        </div>
        {/* <!-- header end --> */}
        </div>
    </div>
  )
}

export default Header
