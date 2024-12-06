// import '../css/animations/animate.css'
import '../css/style.css'
// import '../bootstrap/css/bootstrap.min.css'
import Navbar from "../components/Navbar"
import Footersection from '../components/Footersection'
import Socialsection from '../components/Socialsection'
import Partnersection from '../components/Partnersection'
export default function Aboutus(){
    return (
        <>
        <Navbar/>
        <section className="title-section">
            <div className="container">
                {/* <!-- crumbs --> */}
                <div className="row crumbs">
                    <div className="col-md-12">
                        <a href="index.html">Home</a> / About
                    </div>
                </div>
                {/* <!-- End crumbs --> */}

                {/* <!-- Title - Search--> */}
                <div className="row title">
                    {/* <!-- Title --> */}
                    <div className="col-md-9">
                        <h1>About Us
                            <span className="subtitle-section">
                                Great Company
                                <span className="left"></span>
                            <span className="right"></span>
                            </span>
                            <span className="line-title"></span>
                        </h1>
                    </div>
                    {/* <!-- End Title--> */}
                </div>
                {/* <!-- End Title -Search --> */}

                {/* <!-- info-title-section - optional --> */}
                <div className="row info-title-section">
                    <div className="col-md-2 incon-title">
                        <i className="fa fa-coffee"></i>
                    </div>
                    <div className="col-md-10">
                        <p className="service-p">Cromtek Solutions Pvt. Ltd. is a leading Mobility, Digital and ERP/CRM(SAP, Infor, Custom) consulting firm based in Delhi, India with global presence in Canada, Singapore, and Europe& Middle East. We enable companies to achieve world-class
                            business performance by providing solutions on platforms which best suites the needs by virtue of catering entire gamut from traditional ERPs to online/offline mobile applications. We are ISO 9001:2022 Certified company with
                            deep focus on quality and customer satisfaction.</p>
                    </div>
                </div>
                {/* <!-- End info-title-section - optional --> */}

            </div>
        </section>
        <section className="content_info padding-bottom-50 padding-top-50">
            <div className="paddings">
                <div className="container">
                    <div className="row">

                        <div className="col-md-9">
                            <h3>WHO WE ARE</h3>
                            <p className="service-p">We focus to be a trusted partner and strategic technology advisor to Our Projects. We provide leading solutions, innovation, and technical capabilities that enable efficiently, enhance and improve their operations and embracing
                                technologies to suite the changing business needs.</p>
                            <p className="service-p">We act as your partner in handling real world business problems and delivering IT solutions which best handle those needs. We work with Our Projects very closely to reduce cost, complexities & risk while improving operational
                                efficiency & accelerating business growth through improved fact based decision making at CXO level. We are passionate team of highly experienced resources with experience on range of technologies and domain expertise. We
                                are curious to learn about your problems and challenges and ready to take them head on.</p>
                            <h3>Core Strengths</h3>
                            <ul>
                                <li className="service-p">Solution portfolio cover entire suite of Enterprise Solutions from SAP and Infor as well as custom solutions to cater needs of SMBs.</li>
                                <li className="service-p">We specialize in delivering digital solutions, connecting machines, using machine data intelligently and creation of holistic solutions using different technologies, mediums and devices like Portal, ERPs, CRMs, Mobile Applications
                                    etc.</li>
                                <li className="service-p">Development of Point Solution using Mobility and Portal as backbones like Travel Solutions, GPS tracking based solutions, Phone Camera Based Solutions, e-Commerce Platforms with Mobile Application working in online/offline
                                    mode etc.</li>
                                <li className="service-p">We specialize in business process transformation and value engineering by providing professional services which includes:
                                    <ul>
                                        <li className="service-p">Pre-Implementation Assessment & Evaluation</li>
                                        <li className="service-p">Implementation</li>
                                        <li className="service-p">Sizing</li>
                                        <li className="service-p">Upgrade</li>
                                        <li className="service-p">Migration</li>
                                        <li className="service-p">Reactive & Proactive Help Desk Support</li>
                                        <li className="service-p">Performance Tuning</li>
                                        <li className="service-p">Technology & Database Support</li>
                                        <li className="service-p">Integration Development & Customizations</li>
                                        <li className="service-p">Post-Implementation Audit</li>
                                        <li className="service-p">Project Governance and Compliances</li>
                                        <li className="service-p">Knowledge Management</li>
                                        <li className="service-p">Training and education services</li>
                                        <li className="service-p">Change Management Advisory services</li>
                                    </ul>
                                </li>
                                <li className="service-p">An array of Onsite, Offsite, Offshore and Custom-designed Distributed Delivery Model.</li>
                                <li className="service-p">Supported by a highly-skilled team of SMEs, solution architects, technology experts and program/project heads.</li>
                                <li className="service-p">Delivering enterprise solutions covering business portfolios ranging from Product Lifecycle Management, Supply Chain Planning, Procurement, Manufacturing, Order Management & Logistics, Financials & Projects, Asset Lifecycle
                                    Management, Human Capital Management, MIS and Business Intelligence.
                                </li>
                            </ul>

                        </div>

                        <div className="col-md-3">
                            <div className="about-know">
                                <img src="/about-us.jpeg" alt="Cromtek Solutions Pvt Ltd" />
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- End Container--> */}
            </div>
        </section>
        <Partnersection/>
        <Socialsection/>
        <Footersection/>
        </>
    )
}