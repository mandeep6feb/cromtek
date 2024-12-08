import Navbar from "../components/Navbar";
import '../css/animations/animate.css'
import '../css/responsive.css'
import '../revolution_slider/css/revslider.css'
import '../css/menu.css'
import '../css/style.css'
import '../bootstrap/css/bootstrap.min.css'
import Socialsection from "../components/Socialsection";
import Footersection from "../components/Footersection";
import Partnersection from "../components/Partnersection";
export default function Ecommerce(){
    return(
        <>
        <Navbar/>
        <section className="title-section">
            <div className="container">
                {/* <!-- crumbs --> */}
                <div className="row crumbs">
                    <div className="col-md-12">
                        <a href="/">Home</a> / E-COMMERCE DESIGN AND DEVELOPMENT
                    </div>
                </div>
                {/* <!-- End crumbs --> */}

                {/* <!-- Title - Search--> */}
                <div className="row title">
                    {/* <!-- Title --> */}
                    <div className="col-md-10">
                        <h1>E-COMMERCE DESIGN AND DEVELOPMENT
                            <span className="subtitle-section">
                                Your Store Online
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
                        <i className="fa fa-shopping-cart"></i>
                    </div>
                    <div className="col-md-10">
                        <p className="service-p">E-commerce has a much better reach and is the one of the highly effective mediums to reach out to new markets, varied customer base and niche segments. E-Commerce is today is enabling innovative business model to serve customers.</p>
                    </div>
                </div>
                {/* <!-- End info-title-section - optional --> */}

            </div>
        </section>
        <section className="content_info padding-bottom-50 padding-top-50">
            <div className="paddings">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <p className="service-p">We at Cromteck Solutions carefully understand your business, your products, your customers and then bring a comprehensive e-commerce solution customized to your business requirements. We have successfully implemented online commerce
                                in different industries for our global clients. Our strength lies in integrating an attractive design that is beneficial to your brand backed with the latest technology development platform to extend your business on the
                                web. We are also enabling the user by suitable Mobile Applications to extend the reach beyond boundaries of time and locations.</p>
                            <p className="service-p">Our Ecommerce Web Solutions provide you with dynamic functionalities, enabling quick, easy and smooth transactions combined with a safe, convenient & secure shopping experience for your users. We have developed a customized
                                platform that includes a database driven shopping cart system with multi and unlimited level of products that can be managed through effective online catalogues suitably enables with suitable enablement for mobility users.</p>
                        </div>
                        {/* <!-- <div className="col-md-3">
                            <div className="about-know">
                                <img src="images/ecommerce.png" alt="Online Store for Cromteck Solutions PVT LTD" />
                            </div>
                        </div> --> */}

                    </div>
                    <h3>STANDARD E-COMMERCE FEATURES COMMON:</h3>
                    <div className="row">
                        <div className="col-sm-7">
                            <ul>
                                <li>Support for static and dynamic banners with full statistics</li>
                                <li>Address book for multiple shipping and billing address</li>
                                <li>Contact customers directly via email or newsletters</li>
                                <li>Product Categories & Multi-Level sub categories</li>
                                <li>Statistics for products and customers</li>
                                <li>Breadcrumbs for easy site navigation</li>
                                <li>Reviews on Products & their ratings</li>
                                <li>Advanced Product Search facility</li>
                                <li>MIS reporting for Sales, Stock</li>
                                <li>Logistic / courier integration</li>
                                <li>Secure transactions with SSL</li>
                            </ul>
                        </div>
                        <div className="col-sm-5">
                            <ul>
                                <li>Shipping module integration</li>
                                <li>Payment gateway integration</li>
                                <li>User Account maintenance</li>
                                <li>SMS gateway integration</li>
                                <li>Multiple search options</li>
                                <li>User Account creation</li>
                                <li>Multicurrency support</li>
                                <li>Multilingual support</li>
                                <li>E-mail notifications</li>
                                <li>Shopping cart status</li>
                                <li>Products on Sale</li>
                            </ul>
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