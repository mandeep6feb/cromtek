"use client"
import { useState } from 'react'
import './css/animations/animate.css'
import './css/responsive.css'
// import './revolution_slider/css/revslider.css'
import './css/menu.css'
import './bootstrap/css/bootstrap.min.css'
import './css/style.css'
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navbar'
import Footersection from './components/Footersection'
import Partnersection from './components/Partnersection'
import Socialsection from './components/Socialsection'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
export default function Home() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])

   

    const sliderdata = [
        {
            id:1,
            image: "/slider/slide-3.jpg",
            p1: "Mobile Applications", 
            p2: "IOS, Android, <br /> Blackberry, Windows",
            p3: "Hands solutions you can carry in your pocket. <br /> We design robust native and mobile web applications.",
            image1: "/slider/slide-3-1.png",
            image2: "/slider/slide-3-2.png",
            image3: "/slider/slide-3-3.png",
            btn:"Learn More"
        },
        {
            id:2,
            image: "/slider/development.jpg",
            p1:"Content Management Systems",
            p2:"Joomla, Wordpress, <br />Drupal, Custom",
            p3:"Skins for open source or custom developed <br />solutions, we design and you control",
            btn:"Learn More"
        },
        {
            id:3,
            image: "/slider/slide-3.jpg",
            p1: "E Commerce",
            p2: "Maximize Your online business",
            p3: "We help you convert ideas into an online business, <br />weather it be a custom solution or harnessing the <br />power of an open source solution.",
            image1: "/slider/laptop.png",
            image2: "/slider/e-commerce.png",
            btn:"Learn More"
        },
        {
            id:4,
          image: "/slider/slider-bg.jpg",
          p1:"Software Outsourcing",
          p2:"Development, <br />Maintenance, Migration",
          p3:"Creative and cost effective custom software solutions in <br /> multiple technologies. We partner with you to provide reliable and <br /> quality services to enable you to focus and develop <br /> your core business.",
          btn:"Learn More"
        }
    ]

    return (
        <>
            <Navbar />
            <div >
                {/* <!--================================Revolution SLIDER SECTION==========================================--> */}


                <div className="embla" ref={emblaRef}>
                    <div className="embla__container" >
                        {sliderdata.map((data,index) => {
                            return (
                                <>
                                    <div key={data.id} className="embla__slide">
                                        <img src={data.image} alt="" />
                                        <img src={data.image1} alt="" className='slide1img2' />
                                        <img src={data.image2} alt="" className='slide1img3'/>
                                        <img src={data.image3} alt="" className='slideimg1'/>
                                        <p className="slide1p1">{data.p1}</p>
                                        <p className="slide1p2">{data.p2}</p>
                                        <p className="slide1p3">{data.p3}</p>
                                        <a  className="button1 btn-fs-18 bg-blue white fwn lh1 btn-tfc btn-br4 hblue hbgwhite" href="/Services">{data.btn}</a>
                                    </div>
                                </>
                            )
                        })}

                        {/* <img src="/slider/slide-3.jpg" alt="Mobile Application" /> */}
                        {/* <img src="/slider/slide-3-1.png" alt="Web Development Company" />
                            <img src="/slider/slide-3-2.png" alt="slide" />
                            <img src="/slider/slide-3-3.png" alt="slide" /> */}
                        {/* <p className="slide1p1">Mobile Applications</p>
                            <p className='slide1p2'>IOS, Android, <br /> Blackberry, Windows</p>
                            <p className='slide1p3'> "Handy"solutions you can carry in your pocket. <br /> We design robust native and mobile web applications.</p>
                            <a className="button1 btn-fs-18 bg-blue white fwn lh1 btn-tfc btn-br4 hblue hbgwhite" href="/Services">Learn More</a> */}

                        {/* {slideData.map((data) => {
                                return (
                                    <>
                                        <img src={data.image1} alt="" />
                                        <img src={data.image2} alt="" />
                                        <img src={data.image3} alt="" />
                                        <h1 className='slide1p1'>{data.p1}</h1>
                                        <p className='slide1p2'>{data.p2}</p>
                                        <p className='slide1p3'>{data.p3}</p>

                                    </>
                                )
                            })} */}


                        {/* <div className="embla__slide slide2">
                            <img src="/slider/development.jpg" alt="development" />
                            <p className='slide2p1'>Content Management Systems</p>
                            <p className='slide2p2'>Joomla, Wordpress, <br />Drupal, Custom</p>
                            <p className='slide2p3'>Skins for open source or custom developed <br />solutions, we design and you control</p>
                            <a className="button1 btn-fs-18 bg-blue white fwn lh1 btn-tfc btn-br4 hblue hbgwhite" href="/Services">Learn More</a>
                        </div> */}

                        {/* <div className="embla__slide slide3"> */}
                        {/* <img src="/slider/slide-3.jpg" alt="slide" /> */}
                        {/* <img src="/slider/laptop.png" alt="laptop" />
                            <img src="/slider/e-commerce.png" alt="e-commerce" /> */}
                        {/* <p className='slide3p1'>E Commerce</p>
                            <p className='slide3p2'>Maximize Your online business</p>
                            <p className='slide3p3'> We help you convert ideas into an online business, <br />weather it be a custom solution or harnessing the <br />power of an open source solution</p>
                            <a className="button1 btn-fs-18 bg-blue white fwn lh1 btn-tfc btn-br4 hblue hbgwhite" href="/Ecommerce">Learn More</a> */}
                        {/* {carousalslide3.map((data) => {
                                return (
                                    <>
                                        <img src={data.image1} alt="" />
                                        <img src={data.image2} alt="" />
                                        <h1 className='slide3p1'>{data.p1}</h1>
                                        <p className='slide3p2'>{data.p2}</p>
                                        <p className='slide3p3'>{data.p3}</p>

                                    </>
                                )
                            })} */}


                        {/* </div> */}




                        {/* <div className="embla__slide slide4">  
                            <img src="/slider/slider-bg.jpg" alt="slide" />
                            <p className='slide4p1'>Software Outsourcing</p>
                            <p className='slide4p2'> Development, <br />Maintenance, Migration</p>
                            <p className='slide4p3'> Creative and cost effective custom software solutions in <br /> multiple technologies. We partner with you to provide reliable and <br /> quality services to enable you to focus and develop <br /> your core business.</p>
                            <a className="button1 btn-fs-18 blue-1 fwn lh1 bg-blue btn-tfc btn-br4 hwhite hbgblue" href="/Services">Learn More</a>
                        </div> */}
                    </div>
                </div>
                {/* <Carousal /> */}


                <section className=" content_info padding-top-40 clearfix">
                    <div className="paddings">
                        <div className="container">
                            {/* <!-- Icon Big --> */}
                            <i className="fa fa-cogs icon-section top right animated bounceInUp a2" ></i>
                            {/* <!-- End Icon Big --> */}
                            <div className="section-title-wrap margin-bottom-50">
                                {/* <!-- section title --> */}
                                <h1 className='ourservices'>Our Services</h1>
                                <div className="title-divider">
                                    <div className="line"></div>
                                    <i className="fa fa-star-o ourservicesstar" ></i>
                                    <div className="line"></div>
                                </div>
                            </div>
                            {/* <!-- section title end -->

            <!-- Row fuid--> */}
                            <div className="row padding-top">
                                {/* <!-- Item service - 01 --> */}
                                <div className="col-sm-12 col-md-4 wow  fadeInLeft serviceleft "  >
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
                                            <div className="readmore"><a href="#mobiledevelopment">read more...</a></div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Item service-->

                <!-- Item service - 02 --> */}
                                <div className="col-sm-12 col-md-4 wow fadeInUp serviceup">
                                    <div className="item-service  border-right serviceitem">
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
                                <div className="col-sm-12 col-md-4 wow fadeInRight serviceright">
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
                                <div className="col-sm-12 col-md-4 wow fadeInRight serviceright">
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
                                <div className="col-sm-12 col-md-4 wow fadeInLeft serviceleft">
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
                                <div className="col-sm-12 col-md-4 wow fadeInRight serviceright">
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
                                <div className="col-sm-12 col-md-4 wow fadeInRight serviceright">
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
                                <div className="col-sm-12 col-md-4 wow fadeInUp serviceup">
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
                                <div className="col-sm-12 col-md-4 wow fadeInRight serviceright">
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

                {/* <!--================================Solution Section==========================================--> */}
                <section className="content_info">
                    <div className="section-gray  padding-top-70 borders animation-services">

                        <div className="container">
                            <div className="row">
                                {/* <!-- image-animations  --> */}
                                <div className="col-md-5 image-animations padding-top wow fadeInUp">
                                    <img src="/quality.png" alt="quality" className="image-big animated bounceInUp a2" />
                                </div>
                                {/* <!-- End image-animations  --> */}

                                {/* <!-- features-elementns  --> */}
                                <div className="col-md-7 padding-top-60 wow fadeInRight serviceright">
                                    <ul className="feature-element">
                                        {/* <!-- Item feature-element  --> */}
                                        <li className="animated">
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
                                                    <i className="fa fa-hand-point-right cirle-feature"></i>
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
            </div >
            <Partnersection  />
            <Socialsection />
            <Footersection />
        </>
    );
}
