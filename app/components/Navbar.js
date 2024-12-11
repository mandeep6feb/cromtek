"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import '../css/animations/animate.css'
import '../css/responsive.css'
import '../revolution_slider/css/revslider.css'
import '../css/menu.css'
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
    const [isserviceOpen, setIsserviceOpen] = useState(false);
    const toggleservicedown = (e) => {
        e.preventDefault(); // Prevent default navigation for links
        setIsserviceOpen(!isserviceOpen); // Toggle dropdown state
    };
    const [issolutionOpen, setIssolutionOpen] = useState(false);
    const togglesolutiondown = (e) => {
        e.preventDefault(); // Prevent default navigation for links
        setIssolutionOpen(!issolutionOpen); // Toggle dropdown state
    };
    const [iscomOpen, setIscomOpen] = useState(false);
    const togglecomdown = (e) => {
        e.preventDefault(); // Prevent default navigation for links
        setIscomOpen(!iscomOpen); // Toggle dropdown state
    };
    return (
        <div>
            {/* <!--================================responsive log and menu==========================================--> */}
            <div className="sidesmall">
                <div className="wsmenuexpandermain slideRight sidemenu">
                    <div className="navbarforsmallscreen">
                        {
                            !isOpen && (
                                <div id="navToggle" className="animated-arrow slideLeft " onClick={toggleSidebar}><span></span>

                                    <div className="imgsidebar"> <img src='/logo_2.png' className="logomenu" alt="C Solutions Pvt Ltd" /></div></div>
                            )}
                    </div>
                    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                        <button className="close-btn" onClick={toggleSidebar}>&times;</button>
                        <ul className="menu">
                            <li><Link href="/" className='humlink'>Home</Link></li>
                            <li><Link href="/Aboutus" className='humlink'>About Us</Link></li>
                            <li>
                                <Link href="/Services" className="humlink">Services </Link>
                                <span className="arrownav" onClick={toggleservicedown}
                                    style={styles.dropdownToggle}>
                                    <i className={`wsmenu-arrow fa ${isserviceOpen ? "fa-angle-up" : "fa-angle-down"
                                        }`}> </i>
                                </span>
                                {isserviceOpen && (
                                    <ul className="" style={styles.dropdown}>
                                        <li><a href="#services#web_application" className="dropdownlink">Web Application Development</a></li>
                                        <li><a href="/Mobileapp" className="dropdownlink">Mobile Application Development</a></li>
                                        <li><a href="#services#custom_solution" className="dropdownlink">Custom ERP Solution Developments</a></li>
                                        <li><a href="#services#Enterprise" className="dropdownlink">Enterprise Solution Implementations</a></li>
                                        <li><a href="#services#maintenance_and_support" className="dropdownlink">Application Maintenance and Support</a></li>
                                        <li><a href="#services#advisory" className="dropdownlink">IT Advisory Services</a></li>
                                        <li><a href="#services#Business" className="dropdownlink">Business Process Transformations</a></li>
                                        <li><a href="#services#Governance" className="dropdownlink">Application Governance and Compliances</a></li>
                                        <li><a href="#services#Resource" className="dropdownlink">Resource Augmentations</a></li>
                                        <li><a href="#service#Web3" className="dropdownlink">Web3 solutions with smart wallet</a></li>
                                        <li><a href="#service#fintech" className="dropdownlink">Fintech Solutions</a></li>
                                        <li><a href="#service#powerbi" className="dropdownlink">Power BI Developer</a></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link href="/Solution" className="humlink">Solution</Link>
                                <span className="arrownav" onClick={togglesolutiondown}
                                    style={styles.dropdownToggle}>
                                    <i className={`wsmenu-arrow fa ${issolutionOpen ? "fa-angle-up" : "fa-angle-down"
                                        }`}> </i>
                                </span>
                                {issolutionOpen && (
                                    <ul className="" style={styles.dropdown}>
                                        <li><a href="#solution#sap_solution" className="dropdownlink">SAP Solutions</a></li>
                                        <li><a href="#solution#omnisolution" className="dropdownlink">Omni Channel Solutions</a></li>
                                        <li><a href="#solution#HRM_solution" className="dropdownlink">HRMS and Payroll</a></li>
                                        <li><a href="#solution#School_management" className="dropdownlink">School Management System</a></li>
                                        <li><a href="#solution#Hospital_management" className="dropdownlink">Hospital Management System</a></li>
                                    </ul>
                                )}
                            </li>
                            <li><Link href="/Mobileapp" className="humlink">Mobility</Link> <span className="arrow"></span></li>
                            <li>
                                <Link href="/Ecommerce" className="humlink">E-commerce</Link>
                                <span className="arrownav" onClick={togglecomdown}
                                    style={styles.dropdownToggle}>
                                    <i className={`wsmenu-arrow fa ${iscomOpen ? "fa-angle-up" : "fa-angle-down"
                                        }`}> </i>
                                </span>
                                {iscomOpen && (
                                    <ul className="" style={styles.dropdown}>
                                        <li><a href="#Ecommerce#Magento_development" className="dropdownlink">Magento developmen</a></li>
                                        <li><a href="#Ecommerce#Prestashop" className="dropdownlink">PrestaShop</a></li>
                                        <li><a href="#Ecommerce#classic_php" className="dropdownlink">Classic PHP</a></li>
                                        <li><a href="#Ecommerce#nop_development" className="dropdownlink">nopCommerce development</a></li>
                                    </ul>
                                )}
                            </li>
                            <li><Link href="/Contact" className="humlink">Contact Us <span className="arrow"></span></Link></li>
                        </ul>
                    </div>
                </div>
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
                                            <li className="toolbar-email ">
                                                <a target="_blank" href="https://www.linkedin.com/company/cromtek-solutions-pvt-ltd/" className="linkedin-icon" >
                                                    <i className="fab fa-linkedin " ></i>
                                                </a>
                                                <a target="_blank" href="https://www.instagram.com/cromteksolutions/" className="instaicon" >
                                                    <i className="fa fa-instagram"
                                                    ></i>
                                                </a>
                                                <i className="fa fa-envelope"></i> <a href="mailto:cromtek@cromteksolutions.info" style={{ color: "#337ab7" }}>cromtek@cromteksolutions.info</a>
                                            </li>
                                            <li className="toolbar-contact"><i className="fa fa-phone"></i>+91 8168616807</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* <!--header toolbar end--> */}
                <div className="sticky-wrapper navstick navbarcontainer" style={{
                    ...styles.secondNavbar,
                    position: showSecondNavbar ? "fixed" : "relative",
                    top: showSecondNavbar ? 0 : "auto",
                }}>
                    <div className="nav-wrapper navbarmenu">
                        {/* <!--main navigation--> */}
                        <div className="container">
                            {/* <!--Main Menu HTML Code--> */}
                            <nav className="wsmenu slideLeft clearfix">
                                <div className="logo pull-left"><a href="index.html" ><Image src="/logo_2.png" width="258" height="50" alt="Cromtek Solutions Pvt Ltd" /></a></div>
                                <ul className="mobile-sub wsmenu-list pull-right">
                                    <li><Link href="/" className="">Home</Link></li>
                                    <li><Link href="/Aboutus" className="">About Us <span className="arrow"></span></Link>
                                    </li>
                                    <li><Link href="/Services">Services <span className="arrow"></span></Link>

                                        <ul className="wsmenu-submenu">
                                            <li><a href="#Services#webDevelopment">Web Application Development</a></li>
                                            <li><a href="/Mobileapp">Mobile Application Development</a></li>
                                            <li><a href="#services#custom_solution">Custom ERP Solution Developments</a></li>
                                            <li><a href="#services#Enterprise">Enterprise Solution Implementations</a></li>
                                            <li><a href="#services#maintenance_and_support">Application Maintenance and Support</a></li>
                                            <li><a href="#services#advisory">IT Advisory Services</a></li>
                                            <li><a href="#services#Business">Business Process Transformations</a></li>
                                            <li><a href="#services#Governance">Application Governance and Compliances</a></li>
                                            <li><a href="#services#Resource">Resource Augmentations</a></li>
                                            <li><a href="#services#Web3">Web3 solutions with smart wallet</a></li>
                                            <li><a href="#services#fintech">Fintech Solutions</a></li>
                                            <li><a href="#services#powerbi">Power BI Developer</a></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/Solution">Solutions <span className="arrow"></span></Link>
                                        <ul className="wsmenu-submenu">
                                            <li><a href="#solution#sap_solution">SAP Solutions</a></li>
                                            <li><a href="#solution#omnisolution">Omni Channel Solutions</a></li>
                                            <li><a href="#solution#HRM_solution">HRMS and Payroll</a></li>
                                            <li><a href="#solution#School_management">School Management System</a></li>
                                            <li><a href="#solution#Hospital_management">Hospital Management System</a></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/Mobileapp">Mobility <span className="arrow"></span></Link></li>
                                    <li><Link href="/Ecommerce">E-commerce <span className="arrow"></span></Link>
                                        <ul className="wsmenu-submenu">
                                            <li><a href="#Ecommerce#Magento_development">Magento development</a></li>
                                            <li><a href="#Ecommerce#Prestashop">PrestaShop</a></li>
                                            <li><a href="#Ecommerce#classic_php">Classic PHP</a></li>
                                            <li><a href="#Ecommerce#nop_development">nopCommerce development</a></li>
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
    )
}
const styles = {
    sidebar: {
        width: "250px",
        height: "100vh",
        background: "#333",
        color: "#fff",
        padding: "20px",
        position: "fixed",
        top: "0",
        left: "0",
    },
    menu: {
        listStyle: "none",
        padding: "0",
    },
    dropdownToggle: {
        cursor: "pointer",
        display: "inline-block",
        color: "grey",
        textDecoration: "none",
    },
    arrow: {
        marginLeft: "10px",
        cursor: "pointer",
        fontSize: "16px",
        color: "#fff",
    },
    dropdown: {
        listStyle: "none",
        paddingLeft: "0px",
        marginTop: "0px",
        background: "white",
        borderRadius: "5px",
        padding: "10px",
    },

};

