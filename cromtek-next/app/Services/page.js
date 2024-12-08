import Navbar from '../components/Navbar'
import '../css/animations/animate.css'
import '../css/responsive.css'
import '../revolution_slider/css/revslider.css'
import '../css/menu.css'
import '../css/style.css'
import '../bootstrap/css/bootstrap.min.css'
import Footersection from '../components/Footersection'
import Socialsection from '../components/Socialsection'
import Partnersection from '../components/Partnersection'
export default function Services(){
    return (
        <>
        <Navbar/>
       
      <section className="title-section">
            <div className="container">
                {/* <!-- crumbs --> */}
                <div className="row crumbs">
                    <div className="col-md-12">
                        <a href="index.html">Home</a> / Services
                    </div>
                </div>
                {/* <!-- End crumbs --> */}

                {/* <!-- Title - Search--> */}
                <div className="row title">
                    {/* <!-- Title --> */}
                    <div className="col-md-9">
                        <h1>Services
                            <span className="subtitle-section">
                                Valuable Services
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
                        <i className="fa fa-briefcase"></i>
                    </div>
                    <div className="col-md-10">
                        <p className="service-p">Cromtek Solutions Pvt. Ltd. is a leading Mobility, Digital and ERP/CRM(SAP, Infor, Custom) consulting firm based in Delhi, India with global presence in Canada, Singapore, and Europe& Middle East. We enable companies to achieve world-class
                            business performance by providing solutions on platforms which best suites the needs by virtue of catering entire gamut from traditional ERPs to online/offline mobile applications. We are ISO 9001:2022 Certified company with
                            deep focus on quality and customer satisfaction.</p>
                        <a id="web_application"></a>
                    </div>
                </div>
                {/* <!-- End info-title-section - optional --> */}

            </div>
        </section>
        <section className="content_info padding-bottom-50 padding-top-50">
            <div className="paddings">
                <div className="container">

                    <div className="row" id='Services#webDevelopment'>
                        <div className="col-md-8">
                            <div id="web_cont">
                                <h2>Web Application Development</h2>
                                <p className="service-p">We are into web development since last 14 years having delivered numerous high quality websites which work equally well on browsers and mobiles phones. We have been quick to adopt technology which is providing enhanced
                                    capabilities and better visitor experience. We provide quality and affordable services of Web development, Content Management System, E-Commerce Solutions, Enterprise Portal solutions and all type of Custom Web services
                                    to various clients across the globe.</p>
                                <div id="mobile_app"></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div id="web_img" className="content-img" ><img src="/services_lang.jpeg" alt="Web Application Development" /></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div id="mobile_img" className="content-img"><img src="/page_mobile_app.png" alt="Mobile Application Development" /></div>
                        </div>
                        <div className="col-md-8" id='Services#mobiledevelopment'>
                            <div id="mobile_cont">
                                <h2>Mobile Application Development</h2>
                                <p className="service-p">We specialize in development of Mobile Applications Native or Hybrid Technologies as suitable to given business needs and use cases. We created application which can work online or offline as per need by storing the data
                                    locally with synchronization when network is available. Development of Mobiles Applications which integrate in back end with ERPs, CRMs or any other custom solution is our expertise. We have created applications which
                                    are helping corporate in tracking vehicles, transport operators, school administration, field sales forces, police forces etc. We help clients in dealing changing business and technology in smooth manner. We believe
                                    adopting disruptive technologies with minimal disturbance to the businesses. We have been developing mobile application in the most of the platforms like android , phonegap , native, iphone, blackberry .</p>
                                <div id="custom_solution"></div>
                            </div>
                        </div>
                    </div>


                    <div className="row" id='services#custom_solution'>
                        <div className="col-md-8">
                            <div id="application_cont">
                                <h2>Custom ERP Solution Developments</h2>
                                <p className="service-p">Often, the software that suits your specific needs simply isnt available on the market. When packaged solutions and software aren't sufficient or flexible enough for your enterprise, we can custom-build to your specifications
                                    efficiently and deliver on its promise of certainty. The customer is facing ever-evolving business and technology requirements. We provide scalable and extensible architectures that supports 24/7 business availability
                                    for global customers as it reduces development cycles and risks to a minimum. We provide Time and cost-effective customized applications that help organizations address functional gaps and achieve business goals effectively.</p>
                                <div
                                    id="Enterprise"></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div id="application_img" className="content-img"><img src="/erp.png" alt="Custom ERP Solution Developments" /></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="content-img"><img src="/enterprise_final_img.svg" alt="Enterprise Solution Implementations" /></div>
                    </div>
                    <div className="col-md-8">
                        <h2>Enterprise Solution Implementations</h2>
                        <p className="service-p">We have proven records of successful execution of end-to-end SAP/Infor implementations across diverse industries and enterprise functions. Our implementation experience, in-depth knowledge of business processes and SAP/Infor product
                            functionality, ready to deploy solution accelerators and tools to shorten implementation cycle makes us the right sized partner to add value to your enterprise application implementation efforts. Our established processes combined
                            with proven SAP ASAP implementation methodology is the hallmark of our SAP implementation services, in the process providing a consistent and quality delivery model, minimal risk, as well as enhanced productivity to every client
                            engagement. Our implementation and deployment services provide strategic business and technical counsel to our customers by way of:
                        </p>
                        <div id="maintenance_and_support"></div>
                        <ul className="su_menu">
                            <li>Business process design and harmonization</li>
                            <li>Data standardization and consolidations</li>
                            <li>Global template solution development and rollouts</li>
                            <li>Legacy data conversion and migration</li>
                            <li>Independent Testing manual and automated testing</li>
                            <li>Product Training Content development and delivery</li>
                        </ul>

                    </div>
                </div>


                <div className="row">
                    <div className="col-md-8">
                        <h2>Application Maintenance and Support</h2>
                        <p className="service-p">IT Infrastructure is backbone of an organization. To derive optimal performance it is not enough to design IT Infrastructure and application to desired business outcomes. We must also ensure high availability, high performance
                            and high service levels by putting in place robust IT Services. Our services ensure that your business is managed and operated on 24x7 basis to provide secure and high performance platform for businesses. Our application management(AMS)
                            model has following elements:</p>
                        <div id="advisory"></div>
                        <ul className="su_menu">
                            <li>Enabling clients to be Hands-Off on routine operational issues</li>
                            <li>Focusing on user satisfaction rather and transactions by proactively surveying users at set intervals to understand their issues and take proactive actions.</li>
                            <li>Process streamlining and stabilization based on ITIL Practices </li>
                            <li>Service Level Agreement(SLA) Driven matrices with Penalty and Bonus options </li>
                            <li>A structured approach to transitions, managing applications and sun setting old applications. </li>
                            <li>Formal process of Governance, Change Management and Communications </li>
                            <li>Addressing scalability, resource efficiency and cost controls by consolidating and rationalizing services, resource utilization and shift load balancing etc.</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="content-img"><img src="/app2_maintain_img.svg" alt="Application Maintenance and Support" /></div>
                    </div>
                </div>



                <div className="row">
                    {/* <!--<div className="col-md-4">
<a id="advisory"><div className="content-img"><img src="images/web-development.png" alt="IT Advisory Services" /></div></a></div>--> */}
                    <div className="col-sm-12">
                        <h2>IT Advisory Services</h2>
                        <p className="service-p">An effective, well-managed IT system is one of the most valuable business advantages an organization can secure. The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in
                            growth and efficiency. It is essential to get sound business advice to ensure right technology is deployed, projects are well conceived, deliveries are , time &amp; cost budgets and technology risks are managed. IT is challenging
                            to get right always and expensive to get wrong not only in terms of money spent on direct and direct costs, but also in lost efficiency and potential regulatory infringements. We guide customer in following areas:
                        </p>
                        <div id="Business"></div>

                        <ul className="su_menu">
                            <li>Development of appropriate IT Strategy</li>
                            <li>Support IT Sourcing and Cost Optimizations </li>
                            <li>Logistics and Supply Chain Issues/Challenges </li>
                            <li>Regulatory and Compliances </li>
                            <li>Support in Program Management </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <h2>Business Process Transformations</h2>
                            <p className="service-p">Information technology is proving continuously changing possibilities for business improve their productivity, effectiveness, controls and be more goal oriented in running the business operations. As business keep on adding
                                new products &amp; services on ongoing basis, people keep changing, knowledge of developed solutions gets lost, processes loose relevance over times once needs to keep evolving the practices to make business more efficient.
                                With these needs and have goal specific programs to support businesses.
                            </p>
                            <div id="Governance"></div>
                            <ul className="su_menu">
                                <li>Business Process Reengineering(BPR) Consulting</li>
                                <li>System Effectiveness Audits and Improvement Programs System Needs </li>
                                <li>Evaluation and Development of Technology Roadmap </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!--<div className="col-md-4"><a id="Business" className="content-img"><div><img src="images/web-development.png" alt="Business Process Transformations" /></div></a></div>--> */}
                </div>

                <div className="row">
                    {/* <!--<div className="col-md-4">
	<a id="Governance"><div className="content-img"><img src="images/web-development.png" alt="Application Governance and Compliances" /></div></a></div>--> */}
                    <div className="col-md-12">
                        <div>
                            <div id="Resource"></div>
                            <h2>Application Governance and Compliances</h2>
                            <p className="service-p">An effective project &amp; program management can help organization in achieving 30-40% higher efficiencies in managing project costs and schedules. An effective project management practice can lead to much better control and
                                directed approach to managing the changes and improvements in organization. Setting up right processes for handling and introducing changes, process stake holder involvement, concurrence and effective evaluation is key
                                to developing an efficient organization. We offer guidance, support, hand holding and also ready to take the entire job a service for organization which find difficult to develop such skills in house.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <h2>Resource Augmentations</h2>
                            <p className="service-p">IT Division within organizations need some 30-40 skills to management operations in smooth way. Most of the time these skills are required for short durations and having in house is challenging in terms of retaining and upskilling
                                of the talent. Getting many of these niche skills in timely manner is challenging and costly affair to take care of redundancy needs of the organization.This the need we are addressing by our Resource Augmentation Services
                                wherein we do following for you:
                            </p>
                            <ul className="su_menu">
                                <li>Identifying resource, categorizing them in skill types and levels taking of Technical, and Leadership needs.</li>
                                <li>Maintaining a pool of resources who can be deployed on short notice at fraction of cost you would pay to acquire and retain such talents.</li>
                                <li>Ensuring the resource have all legal clearances and verifications done in advance to ensure that they can be deployed in geography/projects.</li>
                                <li>Keeping the skills upgraded by having rotated among project requiring multiple of exposure in terms of functional and technical knowledge.</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!--<div className="col-md-4"><a id="Resource"><div className="content-img"><img src="images/web-development.png" alt="Resource Augmentations" /></div></a></div>--> */}
                </div>
                <div class="row" id="Web3">
                    <div class="col-md-12">
                        <div>
                            <h2>Web3 Solution With Smart Wallet</h2>
                            <p class="service-p">Decentralizing the digital landscape with cutting-edge blockchain technology, secure smart contracts, and innovative dApps. 
                                Web3 is a revolution leading us toward a new digital era, powered by blockchain technology. It liberates users from centralized systems 
                                while ensuring complete data security and transparency. With Web3, you can leverage smart contracts, decentralized applications (DApps), and 
                                crypto-based services seamlessly. Our services help you understand Web3, integrate it into your website or 
                                application, and deliver secure, efficient solutions. Let’s take your business to new heights with the power of Web3!
                            </p>
                            <ul class="su_menu">
                                <li>Design and implement secure, scalable blockchain networks tailored to your needs, ensuring transparency and efficiency.</li>
                                <li>Automate processes and enforce trust with robust, tamper-proof smart contracts that deliver seamless execution.</li>
                                <li>Build user-centric, decentralized applications that redefine how users interact with the digital world.</li>
                                <li>Protect your Web3 ecosystem with advanced security protocols and threat mitigation strategies.</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!--<div class="col-md-4"><a id="Resource"><div class="content-img"><img src="images/web-development.png" alt="Resource Augmentations" /></div></a></div>--> */}
                </div>

                <div class="row" id="fintech">
                    <div class="col-md-12" >
                        <div>
                            <h2>Fintech Solutions</h2>
                            <p class="service-p">Welcome to Our Fintech Services
                                Revolutionizing Financial Technology for You
                                In today’s fast-paced world, financial technology (Fintech) services have become essential for businesses and
                                 individuals. Our cutting-edge solutions make financial transactions faster, safer, and more efficient, ensuring you stay ahead in the digital era.
                            </p>
                            <ul class="su_menu">
                                <li>P2P lending, or Peer-to-Peer lending , is a revolutionary fintech service that connects borrowers and lenders directly through digital platforms</li>
                                <li>Seamlessly process payments through secure digital platforms.</li>
                                <li>Convenient loans for individuals and businesses.</li>
                                <li>Experience hassle-free insurance solutions with simplified policy purchases and claim management, powered by advanced AI and data analytics.</li>
                                <li>Non-Banking Financial Companies (NBFCs) are pivotal in the fintech ecosystem, offering tailored financial solutions without the constraints of traditional banking. They leverage advanced technologies to provide loans, insurance, investment opportunities, and credit products to underserved segments.</li>
                                
                            </ul>
                        </div>
                    </div>
                    {/* <!--<div class="col-md-4"><a id="Resource"><div class="content-img"><img src="images/web-development.png" alt="Resource Augmentations" /></div></a></div>--> */}
                </div>

                <div class="row"id="fintech" >
                    <div class="col-md-12">
                        <div>
                            <h2>Power BI Developer</h2>
                            <p class="service-p">Transform Your Data into Actionable Insights with Our Power BI Development Services.
                                Unlock the true potential of your data with our expert Power BI development services. Our skilled developers 
                                specialize in creating custom dashboards, data models, and interactive reports that empower businesses to make informed decisions.
                                 Whether you need seamless data integration, real-time analytics, or advanced data visualization, we deliver tailored solutions to 
                                 meet your unique needs. With a focus on performance optimization and scalability, our Power BI services are perfect for businesses 
                                 of all sizes. Partner with us to transform complex data into meaningful insights and drive your business forward with confidence.
                            </p>
                            <ul class="su_menu">
                                <li>We create interactive and visually stunning dashboards tailored to your specific business needs.</li>
                                <li>Seamlessly integrate data from multiple sources to provide a unified view of your business performance.</li>
                                <li>Leverage our expertise in DAX (Data Analysis Expressions) and Power Query to uncover deep insights into your data.</li>
                                <li>Leverage our expertise in DAX (Data Analysis Expressions) and Power Query to uncover deep insights into your data.</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!--<div class="col-md-4"><a id="Resource"><div class="content-img"><img src="images/web-development.png" alt="Resource Augmentations" /></div></a></div>--> */}
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