import React, { useState } from 'react'
import '../css/animations/animate.css'
import '../css/responsive.css'
import '../bootstrap/css/bootstrap.min.css'
import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function ServicesSection() {
    // const [style, setstyle] =useState("item-service border-right animated")
    // if(style == "item-service border-right animated"){
    //     setstyle("item-service border-right animated")
    // }else{
    //     setstyle("item-service border-right pulse")
    // }
  return (
    <div className="clearfix">
      
      {/* <!--================================Services Section==========================================--> */}

<section className=" content_info padding-top-40">
    <div className="paddings">
        <div className="container">
            {/* <!-- Icon Big --> */}
            <i className="fa fa-cogs icon-section top right animated bounceInUp a2" ></i>
            {/* <!-- End Icon Big --> */}
            <div className="section-title-wrap margin-bottom-50">
                {/* <!-- section title --> */}
                <h1>Our Services</h1>
                <div className="title-divider">
                    <div className="line"></div>
                    <i className="fa fa-star-o"></i>
                    <div className="line"></div>
                </div>
            </div>
            {/* <!-- section title end -->

            <!-- Row fuid--> */}
            <div className="row padding-top">
                {/* <!-- Item service - 01 --> */}
                <div className="col-sm-12 col-md-4 wow fadeInLeft " style={{visibility: "visible", animationName:"fadeInLeft"}}>
                    <div className="item-service border-right animated">
                        <a href="services.html#mobile_app">
                            <div className="row head-service">
                                <div className="col-md-2">
                                    <i className="fa fa-mobile-phone"></i>
                                </div>
                                <div className="col-md-10">
                                    <h4>Mobile Applications</h4>
                                </div>
                            </div>
                            <p>We specialize in development of Mobile Applications Native or Hybrid Technologies as suitable to given.... </p>
                            <div className="readmore">read more...</div>
                        </a>
                    </div>
                </div>
                {/* <!-- End Item service-->

                <!-- Item service - 02 --> */}
                <div className="col-sm-12 col-md-4 wow fadeInUp">
                    <div className="item-service border-right">
                        <a href="services.html#web_application">
                            <div className="row head-service">
                                <div className="col-md-2">
                                    <i className="fa fa-globe"></i>
                                </div>
                                <div className="col-md-10">
                                    <h4>Web Development</h4>
                                </div>
                            </div>
                            <p>We have been quick to adopt technology which is providing enhanced capabilities and better visitor experience.</p>
                            <div className="readmore">read more...</div>
                        </a>
                    </div>
                </div>
                {/* <!-- End Item service-->

                <!-- Item service - 03 --> */}
                <div className="col-sm-12 col-md-4 wow fadeInRight">
                    <div className="item-service">
                        <a href="services.html#custom_solution">
                            <div className="row head-service">
                                <div className="col-md-2">
                                    <i className="fa fa-cogs"></i>
                                </div>
                                <div className="col-md-10">
                                    <h4>Custom ERP Solution</h4>
                                </div>
                            </div>
                            <p>Often, the software that suits your specific needs simply isnt available on the market. When packaged solutions and....</p>
                            <div className="readmore">read more...</div>
                        </a>
                    </div>
                </div>
                {/* <!-- End Item service -->

                <!-- Item service - 04 --> */}
                <div className="col-sm-12 col-md-4 wow fadeInRight">
                    <div className="item-service border-right">
                        <a href="services.html#Enterprise">
                            <div className="row head-service">
                                <div className="col-md-2">
                                    <i className="fa fa-industry"></i>
                                </div>
                                <div className="col-md-10">
                                    <h4>Enterprise Solution</h4>
                                </div>
                            </div>
                            <p>We have proven records of successful execution of end-to-end SAP/Infor implementations across diverse...</p>
                            <div className="readmore">read more...</div>
                        </a>
                    </div>
                </div>
                {/* <!-- End Item service -->

                <!-- Item service - 05 --> */}
                <div className="col-sm-12 col-md-4 wow fadeInLeft">
                    <div className="item-service border-right">
                        <a href="services.html#maintenance_and_support">
                            <div className="row head-service">
                                <div className="col-md-2">
                                    <i className="fa fa-wrench"></i>
                                </div>
                                <div className="col-md-10">
                                    <h4>Maintenance and Support</h4>
                                </div>
                            </div>
                            <p>IT Infrastructure is backbone of an organization. To derive optimal performance it is not enough to design....</p>
                            <div className="readmore">read more...</div>
                        </a>
                    </div>
                </div>
                {/* <!-- End Item service  -->

                <!-- Item service - 06 --> */}
                <div className="col-sm-12 col-md-4 wow fadeInRight">
                    <div className="item-service">
                        <a href="services.html#advisory">
                            <div className="row head-service">
                                <div className="col-md-2">
                                    <i className="fa fa-mixcloud"></i>
                                </div>
                                <div className="col-md-10">
                                    <h4>IT Advisory Services</h4>
                                </div>
                            </div>
                            <p>An effective, well-managed IT system is one of the most valuable business advantages an organization can secure. ....</p>
                            <div className="readmore">read more...</div>
                        </a>
                    </div>
                </div>
                {/* <!-- End Item service -->

                <!-- Item service - 07 --> */}
                <div className="col-sm-12 col-md-4 wow fadeInRight">
                    <div className="item-service border-right">
                        <a href="services.html#Business">
                            <div className="row head-service">
                                <div className="col-md-2">
                                    <i className="fa fa-signal"></i>
                                </div>
                                <div className="col-md-10">
                                    <h4>Business Process Transformations</h4>
                                </div>
                            </div>
                            <p>Information technology is proving continuously changing possibilities for business improve their productivity....</p>
                            <div className="readmore">read more...</div>
                        </a>
                    </div>
                </div>
                {/* <!-- End Item service -->

                <!-- Item service - 08 --> */}
                <div className="col-sm-12 col-md-4 wow fadeInUp">
                    <div className="item-service border-right">
                        <a href="services.html#Governance">
                            <div className="row head-service">
                                <div className="col-md-2">
                                    <i className="fa fa-plane"></i>
                                </div>
                                <div className="col-md-10">
                                    <h4>Governance and Compliances</h4>
                                </div>
                            </div>
                            <p>An effective project & program management can help organization in achieving 30-40% higher efficiencies in...</p>
                            <div className="readmore">read more...</div>
                        </a>
                    </div>
                </div>
                {/* <!-- End Item service -->

                <!-- Item service - 09 --> */}
                <div className="col-sm-12 col-md-4 wow fadeInRight">
                    <div className="item-service">
                        <a href="services.html#Resource">
                            <div className="row head-service">
                                <div className="col-md-2">
                                    <i className="fa fa-pencil"></i>
                                </div>
                                <div className="col-md-10">
                                    <h4>Resource Augmentations</h4>
                                </div>
                            </div>
                            <p>IT Division within organizations need some 30-40 skills to management operations in smooth way. Most of the time these skills....</p>
                            <div className="readmore">read more...</div>
                        </a>
                    </div>
                </div>
                {/* <!-- End Item service - 01 --> */}
            </div>
            {/* <!-- End Row fuid--> */}
        </div>
        {/* <!-- End Container--> */}
    </div>
</section>
    </div>
  )
}

export default ServicesSection
