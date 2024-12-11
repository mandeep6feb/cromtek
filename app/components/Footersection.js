import '../css/animations/animate.css'
import '../css/responsive.css'
import '../revolution_slider/css/revslider.css'
import '../css/menu.css'
import '../bootstrap/css/bootstrap.min.css'
import Link from 'next/link'
export default function Footersection() {
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
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/Aboutus">About Us</Link></li>
                            <li><Link href="/Services">Services</Link></li>
                            <li><Link href="/Solution">Solutions</Link></li>
                            <li><Link href="/Mobileapp">Mobility</Link></li>
                            <li><Link href="/Ecommerce">E-commerce</Link></li>
                            <li><Link href="/Contact">Contact Us</Link></li>
                            <li><a target="_blank" href="https://www.linkedin.com/company/cromtek-solutions-pvt-ltd/">Linkdin</a></li>
                            <li><a target="_blank" href="https://www.instagram.com/cromteksolutions?igsh=ZDhtYXh6ZzZ4eG95">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 margin-bottom-30">
                    <div className="footer-widget-title">
                        <h5>Services</h5>
                    </div>
                    <div className="footer-menu">
                        <ul className="su_menu">
                            <li><a href="/Services">ERP Solutions</a></li>
                            <li><a href="/Services">Web Development</a></li>
                            <li><Link href="/Mobileapp">Mobile Application</Link></li>
                            <li><a href="/Services">Maintenance and Support</a></li>
                            <li><a href="/Services">Enterprise Solution</a></li>
                            <li><a href="/Services">IT Advisory Services</a></li>
                            <li><a href="/Services">Business Process</a></li>
                            <li><a href="/Services">Governance and Compliances</a></li>
                            <li><a href="/Services">Resource Augmentations</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 margin-bottom-30">
                    <div className="footer-widget-title">
                        <h5>Solutions</h5>
                    </div>
                    <div className="footer-menu">
                        <ul className="su_menu">
                            <li><a href="/Solution">SAP Solutions</a></li>
                            <li><a href="/Solution">Omni Channel Solutions</a></li>
                            <li><a href="/Solution">HRMS and Payroll</a></li>
                            <li><a href="/Solution">School Management System</a></li>
                            <li><a href="/Solution">Hospital Management System</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-3 col-sm-3 col-xs-12 margin-bottom-30">
                    <div className="footer-widget-title">
                        <h5>Others</h5>
                    </div>
                    <div className="footer-menu">
                        <ul className="su_menu">
                            <li><Link href="/Domain">Domain Expertise</Link></li>
                            <li><Link href="/">Career</Link></li>
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
                        <p>&copy; Copyright 2023 <a href="/">Cromtek Solutions Pvt Ltd</a>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    </div>
  )
}

