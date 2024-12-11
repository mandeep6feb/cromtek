import '../css/animations/animate.css'
import '../css/responsive.css'
import '../revolution_slider/css/revslider.css'
import '../css/menu.css'
import '../bootstrap/css/bootstrap.min.css'
export default function Socialsection(){
    return(
        <>
        <div className="clearfix">
      {/* <!--================================ SOCIAL SECTION ==========================================--> */}
        <section className="social-list">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 wow fadeInDown">
                        <h3>+91 8168616807</h3>
                    </div>
                    <div className="col-md-3 wow fadeInDown">
                        <h3><a href="mailto:cromtek@cromteksolutions.info">Support</a> - <a href="mailto:cromtek@cromteksolutions.info">Sales</a></h3>
                    </div>
                    <div className="col-md-3 wow fadeInDown">
                        <h3><a href="mailto:cromtek@cromteksolutions.info" target="_blank">cromtek@cromteksolutions.info</a></h3>
                    </div>
                    <div className="col-md-3 wow fadeInDown">
                        <h3>24x7x365</h3>
                    </div>
                </div>
            </div>
            <div className="connects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 item-center">
                            <span className="arrow_footer"></span>
                            <i className="fa fa-phone"></i>
                            <h4><a href="tel:+918168616807">Talk to us</a></h4>
                        </div>
                        <div className="col-md-3 item-center">
                            <span className="arrow_footer"></span>
                            <i className="fa fa-comment"></i>
                            <h4>Live Chat</h4>
                        </div>
                        <div className="col-md-3 item-center">
                            <span className="arrow_footer"></span>
                            <i className="fa fa-envelope"></i>
                            <h4><a href="mailto:cromtek@cromteksolutions.info">Email Us</a></h4>
                        </div>
                        <div className="col-md-3 item-center">
                            <span className="arrow_footer"></span>
                            <i className="fa fa-thumbs-up"></i>
                            <h4><a href="tel:+918168616807">Good Support</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
        </>
    )
}