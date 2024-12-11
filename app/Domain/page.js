import Navbar from "../components/Navbar";
import '../css/animations/animate.css'
import '../css/responsive.css'
import '../revolution_slider/css/revslider.css'
import '../css/menu.css'
import '../css/style.css'
import '../bootstrap/css/bootstrap.min.css'
import Partnersection from "../components/Partnersection";
import Socialsection from "../components/Socialsection";
import Footersection from "../components/Footersection";
export default function Domain(){
    return(
        <>
        <Navbar/>
      <section className="title-section">
            <div className="container">
                {/* <!-- crumbs --> */}
                <div className="row crumbs">
                    <div className="col-md-12">
                        <a href="index.html">Home</a> / Domain
                    </div>
                </div>
                {/* <!-- End crumbs --> */}

                {/* <!-- Title - Search--> */}
                <div className="row title empty">
                    {/* <!-- Title --> */}
                    <div className="col-md-9">
                        <h1>Domain<span className="line-title"></span></h1>
                    </div>
                    {/* <!-- End Title--> */}
                </div>
                {/* <!-- End Title -Search --> */}
            </div>
        </section>
        <section className="content_info padding-bottom-50 padding-top-50">
            <div className="paddings">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">

                            <h3>ERP Solutions</h3>
                            <p className="service-p">Our suite of ERP products equips companies of all sizes with powerful capabilities to manage enterprise-wide systems, teams, and data. Built to ensure integrated information management and automated operations across the organization
                                for a range of industries , Orion ERP gives companies complete control over the value chain and instant access to actionable and critical business information.</p>


                            <h3>Mobile Applications</h3>
                            <p className="service-p">Mobile Platform represents both a unique opportunity and a unique challenge. The opportunity is in development of games, general utility applications, and business applications that reach out to millions of users eager to tap
                                into companies products and services. While the challenge is in providing "great" user experience and appropriate value added services for the various mobile platforms. CROMTEK has development expertise in the following platform-
                                android , phonegap , native , iphone , blackberry.</p>
                            <h3>Health Care Management</h3>
                            <p className="service-p">AROGYA is a Web Based Hospital Management system which has been developed targeting various requirements of a multi-specalty Hospital ranging from enquiry,admission, diagnosis, prescription to discharge of a patient. The functionality
                                of the software has been organized through different modules.</p>
                            <h3>Education Management</h3>
                            <p className="service-p">STUMAN is very rich product that enables plugging into many new features as per specific requirements in a very short time. Our expert team of software professionals understands user requirements and translates into software
                                quickly. There are a few features that we have already done for some schools.</p>
                            <h3>e-Learning</h3>
                            <p className="service-p">E-learning is a broadly inclusive term that describes educational technology that electronically or technologically supports learning and teaching. Bernard Luskin, a pioneer of e-learning, advocates that the "e" should be interpreted
                                to mean "exciting, energetic, enthusiastic, emotional, extended, excellent, and educational" in addition to "electronic."</p>
                        </div>

                        {/* <!-- <div className="col-md-3">
                            <div className="about-know">
                                <img src="images/domain-expert.png" alt="Domain Expertise" />
                            </div>
                        </div> --> */}

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