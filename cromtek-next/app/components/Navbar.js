"use client"
import Link from "next/link";
import { useState,useEffect } from "react";
import '../css/animations/animate.css'
import '../css/responsive.css'
import '../revolution_slider/css/revslider.css'
import '../css/menu.css'
// import '../css/font-awesome.css'
// import '../css/style.css'
import '../bootstrap/css/bootstrap.min.css'
import Image from 'next/image'
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    // Function to toggle sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    const [showSecondNavbar, setShowSecondNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSecondNavbar(true);
      } else {
        setShowSecondNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (


        <div>

            <div>
                {/* <!--<div className="preloader"><span className="preloader-gif"></span></div>--> */}
                <div  >
                    {/* <!--================================responsive log and menu==========================================--> */}
                    {/* <div className="wsmenucontent overlapblackbg sidenavbar"><span></span></div> */}
                    <div className="wsmenuexpandermain slideRight">
                        {
                            !isOpen && (
                                <div id="navToggle" className="animated-arrow slideLeft hamburgur" onClick={toggleSidebar}><span></span></div>
                            )
                        }

                        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                            <button className="close-btn" onClick={toggleSidebar}>&times;</button>
                            <ul className="menu">

                                <li><Link href="/" className='humlink'>Home</Link></li>
                                <li><Link href="/Aboutus" className='humlink'>About Us</Link></li>
                                <li>
                               
                                    <Link href="/Services" className="humlink">Services <span className=" arrownav"> <i className="wsmenu-arrow fa fa-angle-down"> </i></span></Link>
                                    <ul className="wsmenu-submenu humlink">
                                        <li><a href="services#web_application">Web Application Development</a></li>
                                        <li><a href="Mobileapp">Mobile Application Development</a></li>
                                        <li><a href="services#custom_solution">Custom ERP Solution Developments</a></li>
                                        <li><a href="services#Enterprise">Enterprise Solution Implementations</a></li>
                                        <li><a href="services#maintenance_and_support">Application Maintenance and Support</a></li>
                                        <li><a href="services#advisory">IT Advisory Services</a></li>
                                        <li><a href="services#Business">Business Process Transformations</a></li>
                                        <li><a href="services#Governance">Application Governance and Compliances</a></li>
                                        <li><a href="services#Resource">Resource Augmentations</a></li>
                                    </ul>
                                </li>
                                <li>
                              
                                    <Link href="/Solution" className="humlink">Solutions <span className="arrownav"> <i className="wsmenu-arrow fa fa-angle-down"> </i></span></Link>
                                    <ul className="wsmenu-submenu">
                                        <li><a href="Solution">SAP Solutions</a></li>
                                        <li><a href="solutions#omni_channel_solutions">Omni Channel Solutions</a></li>
                                        <li><a href="solutions#HRMS_and_Payroll">HRMS and Payroll</a></li>
                                        <li><a href="solutions#School_Management_System">School Management System</a></li>
                                        <li><a href="solutions.html#Hospital_Management_System">Hospital Management System</a></li>
                                    </ul>
                                </li>
                                <li><Link href="/Mobileapp" className="humlink">Mobility <span className="arrow"></span></Link></li>
                                <li>
                              
                                    <Link href="/Ecommerce" className="humlink">E-commerce <span className=" arrownav"> <i className="wsmenu-arrow fa fa-angle-down"> </i></span></Link>
                                    <ul className="wsmenu-submenu">
                                        <li><a href="Ecommerce">Magento development</a></li>
                                        <li><a href="Ecommerce">PrestaShop</a></li>
                                        <li><a href="Ecommerce">Classic PHP</a></li>
                                        <li><a href="Ecommerce">nopCommerce development</a></li>

                                    </ul>
                                </li>
                                <li><Link href="/Contact" className="humlink">Contact Us <span className="arrow"></span></Link></li>

                            </ul>
                        </div>
                        <Image src='/logo_2.png' width={258} height={50} alt="C Solutions Pvt Ltd" />
                    </div>
                    {/* <!--================================HEADER==========================================--> */}
                    <div className="header nav-wrapper ">
                    {!showSecondNavbar && (
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
                        )}
                        {/* <!--header toolbar end--> */}
                        <div className="sticky-wrapper navstick"  style={{
          ...styles.secondNavbar,
          position: showSecondNavbar ? "fixed" : "relative",
          top: showSecondNavbar ? 0 : "auto",
        }}>
                            <div className="nav-wrapper">
                                {/* <!--main navigation--> */}
                                <div className="container">
                                    {/* <!--Main Menu HTML Code--> */}
                                    <nav className="wsmenu slideLeft clearfix">
                                        <div className="logo pull-left"><a href="index.html" title=""><Image src="/logo_2.png" width="258" height="50" alt="Cromtek Solutions Pvt Ltd" /></a></div>
                                        <ul className="mobile-sub wsmenu-list pull-right">
                                            <li><Link href="/" className="">Home</Link></li>
                                            <li><Link href="/Aboutus" className="">About Us <span className="arrow"></span></Link>
                                            </li>
                                            <li><Link href="/Services">Services <span className="arrow"></span></Link>
                                                <ul className="wsmenu-submenu">
                                                    <li><a href="services#web_application">Web Application Development</a></li>
                                                    <li><a href="Mobileapp">Mobile Application Development</a></li>
                                                    <li><a href="services#custom_solution">Custom ERP Solution Developments</a></li>
                                                    <li><a href="services#Enterprise">Enterprise Solution Implementations</a></li>
                                                    <li><a href="services#maintenance_and_support">Application Maintenance and Support</a></li>
                                                    <li><a href="services#advisory">IT Advisory Services</a></li>
                                                    <li><a href="services#Business">Business Process Transformations</a></li>
                                                    <li><a href="services#Governance">Application Governance and Compliances</a></li>
                                                    <li><a href="services#Resource">Resource Augmentations</a></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/Solution">Solutions <span className="arrow"></span></Link>
                                                <ul className="wsmenu-submenu">
                                                    <li><a href="Solution">SAP Solutions</a></li>
                                                    <li><a href="solutions#omni_channel_solutions">Omni Channel Solutions</a></li>
                                                    <li><a href="solutions#HRMS_and_Payroll">HRMS and Payroll</a></li>
                                                    <li><a href="solutions#School_Management_System">School Management System</a></li>
                                                    <li><a href="solutions.html#Hospital_Management_System">Hospital Management System</a></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/Mobileapp">Mobility <span className="arrow"></span></Link></li>
                                            <li><Link href="/Ecommerce">E-commerce <span className="arrow"></span></Link>
                                                <ul className="wsmenu-submenu">
                                                    <li><a href="Ecommerce">Magento development</a></li>
                                                    <li><a href="Ecommerce">PrestaShop</a></li>
                                                    <li><a href="Ecommerce">Classic PHP</a></li>
                                                    <li><a href="Ecommerce">nopCommerce development</a></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/Contact">Contact Us <span className="arrow"></span></Link></li>
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
        </div>
    )
}

const styles = {
    topNavbar: {
      background: "#333",
      color: "white",
      padding: "10px 20px",
      textAlign: "center",
    },
    secondNavbar: {
       background:"white",
      color: "white",
      padding: "10px 20px",
      textAlign: "center",
      width: "100%",
      zIndex: 1000,
    },
    content: {
      padding: "20px",
      background: "#f9f9f9",
      height: "200vh", // To allow scrolling
    },
  };
  
