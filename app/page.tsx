"use client"
import 'animate.css';
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
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })])

    return (
        <>
            <Navbar />
            <div >
                {/* <!--================================Revolution SLIDER SECTION==========================================--> */}

                <div className="embla" ref={emblaRef}>
                    <div className="embla__container" >

                        <div className="embla__slide slide1">
                            <img src="/slider/slide-3.jpg" alt="Mobile Application" />
                            <img src="/slider/slide-3-1.png" alt="Web Development Company" className='animate__animated animate__fadeInRight slideimg1' style={{ animationDuration: '1s', animationDelay: '0.5s' }} />
                            <img src="/slider/slide-3-2.png" alt="slide" className='animate__animated animate__fadeInRight slide1img2' style={{ animationDuration: '1.5s', animationDelay: '0.5s' }} />
                            <img src="/slider/slide-3-3.png" alt="slide" className='animate__animated animate__fadeInRight slide1img3' style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                            <p className="animate__animated animate__fadeInLeft slide1p1" style={{ animationDuration: '1s', animationDelay: '1s' }}>Mobile Applications</p>
                            <p className='animate__animated animate__fadeInLeft slide1p2' style={{ animationDuration: '1.5s', animationDelay: '1s' }}>IOS, Android, <br /> Blackberry, Windows</p>
                            <p className='animate__animated animate__fadeInLeft slide1p3' style={{ animationDuration: '2s', animationDelay: '1s' }}> "Handy"solutions you can carry in your pocket. <br /> We design robust native and mobile web applications.</p>
                            <a className="animate__animated animate__fadeInLeft button1 btn-fs-18 bg-blue white fwn lh1 btn-tfc btn-br4 hblue hbgwhit" href="/Services" style={{ animationDuration: '1.5s', animationDelay: '2s' }}>Learn More</a>
                        </div>

                        <div className="embla__slide slide2">
                            <img src="/slider/development.jpg" alt="development" className='slidesecond' />
                            <p className='animate__animated animate__fadeInLeft  slide2p1' style={{ animationDuration: '1s', animationDelay: '7s' }}>Content Management Systems</p>
                            <p className='animate__animated animate__fadeInLeft slide2p2' style={{ animationDuration: '1.5s', animationDelay: '7s' }}>Joomla, Wordpress, <br />Drupal, Custom</p>
                            <p className='animate__animated animate__fadeInLeft slide2p3' style={{ animationDuration: '2s', animationDelay: '7s' }}>Skins for open source or custom developed <br />solutions, we design and you control</p>
                            <a className="animate__animated animate__fadeInLeft button1 btn-fs-18 bg-blue white fwn lh1 btn-tfc btn-br4 hblue hbgwhite" href="/Services" style={{ animationDuration: '2s', animationDelay: '8s' }}>Learn More</a>
                        </div>

                        <div className="embla__slide slide3">
                            <img src="/slider/slide-3.jpg" alt="slide" />
                            <img src="/slider/laptop.png" alt="laptop" className='animate__animated animate__fadeInRight slide3img1' style={{ animationDuration: '1s', animationDelay: '14s' }} />
                            <img src="/slider/e-commerce.png" alt="e-commerce" className='animate__animated animate__fadeInRight slide3img2' style={{ animationDuration: '2s', animationDelay: '15s' }} />
                            <p className='animate__animated animate__fadeInLeft slide3p1' style={{ animationDuration: '1s', animationDelay: '14s' }}>E Commerce</p>
                            <p className='animate__animated animate__fadeInLeft slide3p2' style={{ animationDuration: '1.5s', animationDelay: '14s' }}>Maximize Your online business</p>
                            <p className='animate__animated animate__fadeInLeft slide3p3' style={{ animationDuration: '2s', animationDelay: '14s' }}> We help you convert ideas into an online business, <br />weather it be a custom solution or harnessing the <br />power of an open source solution</p>
                            <a className="animate__animated animate__fadeInLeft button1 btn-fs-18 bg-blue white fwn lh1 btn-tfc btn-br4 hblue hbgwhite" href="/Ecommerce" style={{ animationDuration: '1.5s', animationDelay: '15s' }}>Learn More</a>
                        </div>

                        <div className="embla__slide slide4">
                            <img src="/slider/slider-bg.jpg" alt="slide" className='slideforthimg' />
                            <p className='animate__animated animate__fadeInLeft slide4p1' style={{ animationDuration: '1s', animationDelay: '21s' }}>Software Outsourcing</p>
                            <p className='animate__animated animate__fadeInLeft slide4p2' style={{ animationDuration: '1.5s', animationDelay: '21s' }}> Development, <br />Maintenance, Migration</p>
                            <p className='animate__animated animate__fadeInLeft slide4p3' style={{ animationDuration: '2s', animationDelay: '21s' }}> Creative and cost effective custom software solutions in <br /> multiple technologies. We partner with you to provide reliable and <br /> quality services to enable you to focus and develop <br /> your core business.</p>
                            <a className="animate__animated animate__fadeInLeft button1 btn-fs-18 blue-1 fwn lh1 bg-blue btn-tfc btn-br4 hwhite hbgblue" href="/Services" style={{ animationDuration: '1.5s', animationDelay: '22s' }}>Learn More</a>
                        </div>
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
                                    <i className="fa fa-star ourservicesstar" ></i>
                                    <div className="line"></div>
                                </div>
                            </div>
                            {/* <!-- section title end -->

            <!-- Row fuid--> */}
                            <div className="row padding-top ">
                                {/* <!-- Item service - 01 --> */}
                                <div className="col-sm-12 col-md-4 wow  fadeInLeft serviceleft "  >
                                    <div className="item-service border-right animated ">
                                        <a href="/Services" >
                                            <div className="row head-service ">
                                                <div className="col-md-2">
                                                    <i className="fa fa-mobile-phone"></i>
                                                </div>
                                                <div className="col-md-10 servicecenter">
                                                    <h4>Mobile Applications</h4>
                                                </div>
                                            </div>
                                            <div className='servicecenter'> <p >We specialize in development of Mobile Applications Native or Hybrid Technologies as suitable to given.... </p></div>
                                            <div className="readmore servicecenter"><a href="/Services">read more...</a></div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Item service-->

                <!-- Item service - 02 --> */}
                                <div className="col-sm-12 col-md-4 wow fadeInUp serviceup">
                                    <div className="item-service  border-right serviceitem">
                                        <a href="/Services">
                                            <div className="row head-service">
                                                <div className="col-md-2">
                                                    <i className="fa fa-globe"></i>
                                                </div>
                                                <div className="col-md-10 servicecenter">
                                                    <h4>Web Development</h4>
                                                </div>
                                            </div>
                                            <div className='servicecenter'>
                                                <p >We have been quick to adopt technology which is providing enhanced capabilities and better visitor experience.</p>
                                            </div>

                                            <div className="readmore servicecenter">read more...</div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Item service-->

                <!-- Item service - 03 --> */}
                                <div className="col-sm-12 col-md-4 wow fadeInRight serviceright">
                                    <div className="item-service">
                                        <a href="/Services">
                                            <div className="row head-service">
                                                <div className="col-md-2">
                                                    <i className="fa fa-cogs"></i>
                                                </div>
                                                <div className="col-md-10 servicecenter ">
                                                    <h4>Custom ERP Solution</h4>
                                                </div>
                                            </div>
                                            <p className='servicecenter'>Often, the software that suits your specific needs simply isnt available on the market. When packaged solutions and....</p>
                                            <div className="readmore servicecenter">read more...</div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Item service -->

                <!-- Item service - 04 --> */}
                                <div className="col-sm-12 col-md-4 wow fadeInRight serviceright">
                                    <div className="item-service border-right">
                                        <a href="/Services">
                                            <div className="row head-service">
                                                <div className="col-md-2">
                                                    <i className="fa fa-industry"></i>
                                                </div>
                                                <div className="col-md-10 servicecenter">
                                                    <h4>Enterprise Solution</h4>
                                                </div>
                                            </div>
                                            <p className='servicecenter'>We have proven records of successful execution of end-to-end SAP/Infor implementations across diverse...</p>
                                            <div className="readmore servicecenter">read more...</div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Item service -->

                <!-- Item service - 05 --> */}
                                <div className="col-sm-12 col-md-4 wow fadeInLeft serviceleft">
                                    <div className="item-service border-right">
                                        <a href="/Services">
                                            <div className="row head-service">
                                                <div className="col-md-2">
                                                    <i className="fa fa-wrench"></i>
                                                </div>
                                                <div className="col-md-10 servicecenter">
                                                    <h4>Maintenance and Support</h4>
                                                </div>
                                            </div>
                                            <p className='servicecenter'>IT Infrastructure is backbone of an organization. To derive optimal performance it is not enough to design....</p>
                                            <div className="readmore servicecenter">read more...</div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Item service  -->

                <!-- Item service - 06 --> */}
                                <div className="col-sm-12 col-md-4 wow fadeInRight serviceright">
                                    <div className="item-service">
                                        <a href="/Services">
                                            <div className="row head-service">
                                                <div className="col-md-2">
                                                    <i className="fa fa-mixcloud"></i>
                                                </div>
                                                <div className="col-md-10 servicecenter">
                                                    <h4>IT Advisory Services</h4>
                                                </div>
                                            </div>
                                            <p className='servicecenter'>An effective, well-managed IT system is one of the most valuable business advantages an organization can secure. ....</p>
                                            <div className="readmore servicecenter">read more...</div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Item service -->

                <!-- Item service - 07 --> */}
                                <div className="col-sm-12 col-md-4 wow fadeInRight serviceright">
                                    <div className="item-service border-right">
                                        <a href="/Services">
                                            <div className="row head-service">
                                                <div className="col-md-2">
                                                    <i className="fa fa-signal"></i>
                                                </div>
                                                <div className="col-md-10 servicecenter">
                                                    <h4>Business Process Transformations</h4>
                                                </div>
                                            </div>
                                            <p className='servicecenter'>Information technology is proving continuously changing possibilities for business improve their productivity....</p>
                                            <div className="readmore servicecenter">read more...</div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Item service -->

                <!-- Item service - 08 --> */}
                                <div className="col-sm-12 col-md-4 wow fadeInUp serviceup">
                                    <div className="item-service border-right">
                                        <a href="/Services">
                                            <div className="row head-service">
                                                <div className="col-md-2">
                                                    <i className="fa fa-plane"></i>
                                                </div>
                                                <div className="col-md-10 servicecenter">
                                                    <h4>Governance and Compliances</h4>
                                                </div>
                                            </div>
                                            <p className='servicecenter'>An effective project & program management can help organization in achieving 30-40% higher efficiencies in...</p>
                                            <div className="readmore servicecenter">read more...</div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Item service -->

                <!-- Item service - 09 --> */}
                                <div className="col-sm-12 col-md-4 wow fadeInRight serviceright">
                                    <div className="item-service">
                                        <a href="/Services">
                                            <div className="row head-service">
                                                <div className="col-md-2">
                                                    <i className="fa fa-pencil"></i>
                                                </div>
                                                <div className="col-md-10 servicecenter">
                                                    <h4>Resource Augmentations</h4>
                                                </div>
                                            </div>
                                            <p className='servicecenter'>IT Division within organizations need some 30-40 skills to management operations in smooth way. Most of the time these skills....</p>
                                            <div className="readmore servicecenter">read more...</div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Item service - 01 --> */}
                                {/* <!-- Item service - 10 --> */}
                                <div className="col-sm-12 col-md-4 wow  serviceleft">
                                    <div className="item-service">
                                        <a href="services.html#Web3">
                                            <div className="row head-service">
                                                <div className="col-md-2">
                                                    <i className="fa-solid fa-infinity"></i>
                                                </div>
                                                <div className="col-md-10 servicecenter">
                                                    <h4>Web3 Solution With Smart Wallet</h4>
                                                </div>
                                            </div>
                                            <p>Decentralizing the digital landscape with cutting-edge blockchain technology, secure smart contracts, and innovative dApps.....</p>
                                            <div className="readmore servicecenter">read more...</div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Item service - 01 --> */}
                                {/* <!-- Item service - 11 --> */}
                                <div className="col-sm-12 col-md-4 wow  serviceup">
                                    <div className="item-service">
                                        <a href="services.html#fintech">
                                            <div className="row head-service">
                                                <div className="col-md-2">
                                                    <i className="fa-brands fa-connectdevelop"></i>
                                                </div>
                                                <div className="col-md-10 servicecenter">
                                                    <h4>Fintech Solutions</h4>
                                                </div>
                                            </div>
                                            <p>Revolutionizing Financial Technology for You, in today’s fast-paced world, financial technology (Fintech) .....</p>
                                            <div className="readmore servicecenter">read more...</div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Item service - 11 --> */}

                                {/* <!-- Item service - 12 --> */}
                                <div className="col-sm-12 col-md-4 wow fadeInRight serviceright">
                                    <div className="item-service">
                                        <a href="services.html#fintech">
                                            <div className="row head-service">
                                                <div className="col-md-2">
                                                    <i className="fa-brands fa-superpowers"></i>
                                                </div>
                                                <div className="col-md-10 servicecenter">
                                                    <h4>Power BI Developer</h4>
                                                </div>
                                            </div>
                                            <p>
                                                Transform Your Data into Actionable Insights with Our Power BI Development Services, unlock the true potential.....</p>
                                            <div className="readmore servicecenter">read more...</div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Item service - 12 --> */}
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
                                    <ul className="feature-element element-featire" >
                                        {/* <!-- Item feature-element  --> */}
                                        <li className="element-featire animated">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="line-feature "><i className="fa fa-angle-left"></i></div>
                                                    <i className="fa fa-mobile cirle-feature "></i>
                                                </div>
                                                <div className="col-md-7 ">
                                                    <div className="text-feature ">
                                                        <a href="/Solution" >
                                                            <h4 >SAP Solutions</h4>
                                                            <p >
                                                                Our SAP Practice has a large pool of functional and technical consultants with many man years of combined experience in SAP Consulting,..</p></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* <!-- End Item feature-element  -->

                                <!-- Item feature-element  --> */}
                                        <li className=" element-featire">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="line-feature"><i className="fa fa-angle-left"></i></div>
                                                    <i className="fa fa-hand-point-right cirle-feature"></i>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="text-feature">
                                                        <a href="/Solution">
                                                            <h4 >Omni Channel Solutions</h4>
                                                            <p>We have been working with different customers to provide solution which take care of their Omni channel strategies and enable...</p></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* <!-- End Item feature-element  -->

                                <!-- Item feature-element  --> */}
                                        <li className=" element-featire">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="line-feature servicecenter"><i className="fa fa-angle-left"></i></div>
                                                    <i className="fa fa-bookmark cirle-feature aligncenter"></i>
                                                </div>
                                                <div className="col-md-7 ">
                                                    <div className="text-feature">
                                                        <a href="/Solution">
                                                            <h4 >HRMS and Payroll</h4>
                                                            <p>Over period of time we studied needs of companies and realized that organization need a web based platform which can cater...</p></a>
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
            <Partnersection />
            <Socialsection />
            <Footersection />
        </>
    );
}
