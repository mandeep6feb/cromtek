import Navbar from "../components/Navbar";
// import '../css/animations/animate.css'
// import '../css/responsive.css'
// import '../revolution_slider/css/revslider.css'
// import '../css/menu.css'
import '../css/style.css'
// import '../bootstrap/css/bootstrap.min.css'
import Socialsection from "../components/Socialsection";
import Footersection from "../components/Footersection";
import Partnersection from "../components/Partnersection";
export default function Mobileapp(){
    return (
        <>
        <Navbar/>
        <section className="title-section">
            <div className="container">
                {/* <!-- crumbs --> */}
                <div className="row crumbs">
                    <div className="col-md-12">
                        <a href="../index.html">Home</a> / Mobile Application Development
                    </div>
                </div>
                {/* <!-- End crumbs --> */}

                {/* <!-- Title - Search--> */}
                <div className="row title">
                    {/* <!-- Title --> */}
                    <div className="col-md-9">
                        <h1>Mobile Application Development
                            <span className="subtitle-section">
                                Smart Work
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
                        <i className="fa fa-mobile-phone"></i>
                    </div>
                    <div className="col-md-10">
                        <p className="service-p">Mobile Platform represents both a unique opportunity and a unique challenge. The opportunity is in development of games, general utility applications, and business applications that reach out to millions of users eager to tap into
                            companies products and services. While the challenge is in providing "great" user experience and appropriate value added services for the various mobile platforms. Mobile application has made data capturing and usage beyond
                            limits of offices, work space and times. Growing mobiles networks and their quality is making people highly dependent on mobile applications for meeting day to office and business needs.Cromtek Solutions Pvt Ltd , Mobile Application
                            Development Company in delhi india, Provide Service for Mobile Apps Development . </p>
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
                            <h2> Mobile App Development Services </h2>
                            <ul>
                                <li>Android App Development</li>
                                <li>iPhone App Development</li>
                                <li>iPad App Development</li>
                                <li>Tizen App Development</li>
                                <li>Windows App Development</li>
                                <li>Mobile Design &#038; Development</li>
                                <li>Custom Mobile Apps Development</li>
                            </ul>
                            <div className="row">
                                <div className="col-md-12">
                                    <h3> Why Us as a Mobile App Development Company ? </h3>
                                    <ul>
                                        <li className="service-p">We have a strong focus and expertise in Mobile Application Development having developed over 100 apps for iOS, Android and Windows.</li>
                                        <li className="service-p">We are listed among the <strong>top 100 mobile app development companies in India,</strong> which has close to 3 lakh developers.</li>
                                        <li className="service-p">We have a strong client base, serving clients from <strong>USA,CANADA,FRANCE,GEREMANY,SWITZERLAND, UK, SINGAPORE AND AUSTRALIA.</strong></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="about-know"><img src="/page_mobile_app.png" alt="mobile application development" /></div>
                                </div>



                                <div className="col-md-9">
                                    <h3> Mobile Based Field Force Automation </h3>
                                    <ul>
                                        <li> Auto login when the app is launched </li>
                                        <li> Display stats (number of leads today, yesterday, etc...) and graphs </li>
                                        <li> View company's leads (last ones and search a particular leads by its ref</li>
                                        <li> View reports (monthly PDF reports are generated and stored online) </li>
                                        <li> Generate a custom report (they can generate custom reports of their leads from a timeframe)</li>
                                        <li> Your account (view account informations such as name, email, phone, etc... and change their password) </li>
                                        <li> Enable/Disable push notifications when a new lead is available for the company</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="about-know"><a href="http://www.upark.in"><img src="/Smart-parking.png" alt="mobile app development company in india " /></a></div>
                                </div>
                                <div className="colo-md-9">
                                    <h3>Vehicle Parking Management Solution </h3>
                                    <p className="service-p">We have created solution for managing different parking properties where the users can locate available parking slots based on proximityand availability, view timing, charges etc and book the parking slots using mobile
                                        applications. The provider of parking facility can in turn see the demands, inventory, billing, collections, receipts etc. This is complete parking management solution working for few customers and a promising solution
                                        for many infrastructure management companies.</p>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3">
                                    <div className="about-know"> <a href=""><img src="/Online-eBook-store.jpeg" alt="Collaborative Platform for Book Stores and Readers " /></a></div>
                                </div>
                                <div className="colo-md-9">
                                    <h3>Collaborative Platform for Book Stores and Readers</h3>
                                    <p className="service-p">This solution is create book Entry, Search, Buy, student exchange, store information feature. The application basically allow user to search for a book using Keying Barcode or scanning barcode, and then match the information
                                        with database. The user scan the barcode, then the app gets the ISBN number that is taken from the barcode, then search in database using ISBN number.</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3">
                                    <div className="about-know"> <a href="https://play.google.com/store/apps/details?id=com.logtaxiparis"> <img src="/TaxiApp1.png" alt="mobile application development company" /></a></div>
                                </div>
                                <div className="colo-md-9">
                                    <h3>Taxi Booking Mobile Application</h3>
                                    <p className="service-p">This Mobile Application Consists of three modules for Taxi Rider, Taxi Driver and Taxi Service Provider Companies. Rider Module: Mobile application allows client place an order for the car with Car Service Company.
                                        First client enters pick up address (address where he wants car to be send). Next client enters Drop off address (address where he wants to go). When both pick up and drop off addresses entered, client click on
                                        "Place order" button. "Place order" button submits order for the car to the local car service company. When car is send to the client application displays confirmation, and details of the order.</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- End Container--> */}
                    </div>
                    </div>
                    </div>
        </section>
        <Partnersection/>
<Socialsection/>
<Footersection/>
        </>
    )
}