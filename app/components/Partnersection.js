import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/animations/animate.css'
import '../css/responsive.css'
export default function Partnersection() {
    return (
        <div>
            {/* <!--================================ PARTNER SECTION ==================================--> */}
            <section className="section-gray partner-section padding-top-70 padding-bottom-40">
                <div className="container">
                    {/* <!-- section container --> */}
                    <div className="section-title-wrap margin-bottom-50">
                        {/* <!-- section title --> */}
                        <h3 className='ourproject'>Our Projects</h3>
                        <div className="title-divider">
                            <div className="line"></div>
                            <i className="fa fa-star"></i>
                            <div className="line"></div>
                        </div>
                    </div>
                    {/* <!-- section title end --> */}
                    <div className='slider'>
                      <div className="slide-track">
                        <div className='slide'>
                           <img src="/partner/ii.png" alt="" />
                        </div>
                        <div className='slide'>
                           <img src="/partner/atam1.png" alt="" />
                        </div>
                        <div className='slide'>
                           <img src="/partner/hospitallogo1.png" alt="" />
                        </div>
                        <div className='slide'>
                           <img src="/partner/abhiyan.png" alt="" />
                        </div>
                        <div className='slide'>
                           <img src="/partner/sambha.png" alt="" />
                        </div>
                        <div className='slide'>
                           <img src="/partner/ii.png" alt="" />
                        </div>
                        <div className='slide'>
                           <img src="/partner/atam1.png" alt="" />
                        </div>
                        <div className='slide'>
                           <img src="/partner/hospitallogo1.png" alt="" />
                        </div>
                      </div>
                    </div>

                </div>
                {/* <!-- container end --> */}
            </section>

        </div>
    )
}

