import React from 'react'
import '../css/animations/animate.css'
import '../css/responsive.css'
import '../css/menu.css'
import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../bootstrap/css/bootstrap.min.css'
function SolutionSection() {
  return (
    <div className="clearfix">
      
      {/* <!--================================Solution Section==========================================--> */}
        <section className="content_info">
            <div className="section-gray  padding-top-70 borders animation-services">

                <div className="container">
                    <div className="row">
                        {/* <!-- image-animations  --> */}
                        <div className="col-md-5 image-animations padding-top wow fadeInUp">
                            <img src="images/quality.png" alt="quality" className="image-big animated bounceInUp a2"  />
                        </div>
                        {/* <!-- End image-animations  --> */}

                        {/* <!-- features-elementns  --> */}
                        <div className="col-md-7 padding-top-60 wow fadeInRight">
                            <ul className="feature-element">
                                {/* <!-- Item feature-element  --> */}
                                <li className="">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="line-feature"><i className="fa fa-angle-left"></i></div>
                                            <i className="fa fa-mobile cirle-feature"></i>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="text-feature">
                                                <a href="solutions.html">
                                                    <h4>SAP Solutions</h4>
                                                    Our SAP Practice has a large pool of functional and technical consultants with many man years of combined experience in SAP Consulting,...</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <!-- End Item feature-element  -->

                                <!-- Item feature-element  --> */}
                                <li className="">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="line-feature"><i className="fa fa-angle-left"></i></div>
                                            <i className="fa fa-hand-o-right cirle-feature"></i>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="text-feature">
                                                <a href="solutions.html#omni_channel_solutions">
                                                    <h4>Omni Channel Solutions</h4>
                                                    We have been working with different customers to provide solution which take care of their Omni channel strategies and enable...</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <!-- End Item feature-element  -->

                                <!-- Item feature-element  --> */}
                                <li className="">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="line-feature"><i className="fa fa-angle-left"></i></div>
                                            <i className="fa fa-bookmark cirle-feature"></i>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="text-feature">
                                                <a href="solutions.html#HRMS_and_Payroll">
                                                    <h4>HRMS and Payroll</h4>
                                                    Over period of time we studied needs of companies and realized that organization need a web based platform which can cater...</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <!-- End Item feature-element  --> */}
                            </ul>
                        </div>
                        {/* <!-- End feature-elements  --> */}
                    </div>
                    {/* <!-- End Row  --> */}
                </div>
                {/* <!-- End Container  --> */}

            </div>
        </section>
    </div>
  )
}

export default SolutionSection
