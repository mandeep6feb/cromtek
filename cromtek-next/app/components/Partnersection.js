"use client"
import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/animations/animate.css'
import '../css/responsive.css'
// import '../bootstrap/css/bootstrap.min.css'
import React, { useState, useEffect, useRef } from 'react';
export default function Partnersection() {

    const slides = [
        { content: '/partner/ii.png' },
        { content: '/partner/atam1.png' },
        { content: '/partner/hospitallogo1.png' },
        { content: '/partner/abhiyan.png' },
        { content: '/partner/sambha.png' },
    ];
    // console.log(slides)
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const nextSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000); // Adjust the interval as needed

        return () => clearInterval(intervalId);
    }, [slides]);

    return (
        <div>

            {/* <!--================================ PARTNER SECTION ==========================================--> */}

           

            <section className="section-gray partner-section padding-top-70 padding-bottom-40">
                    <div className="container">
                        {/* <!-- section container --> */}
                        <div className="section-title-wrap margin-bottom-50">
                            {/* <!-- section title --> */}
                            <h3 className='ourproject'>Our Projects</h3>
                            <div className="title-divider">
                                <div className="line"></div>
                                <i className="fa fa-star-o"></i>
                                <div className="line"></div>
                            </div>
                        </div>
                        {/* <!-- section title end --> */}

                        <div className="carousel"  >
                <div
                    ref={slideRef}
                    className="carousel-inner"
                >
                 {slides?.map((slide)=>{
                        return(
                            <>
                            <div  style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                <img src={slide.content} className='sliderimg'></img>
                            </div>
                            </>
                        )
                    })
                 }
                  {/* console.log(data) */}
                 
                </div>
               <div className='slidebtns'>
               <button onClick={prevSlide}><img src="/small_left.png" alt="rbfjhrb" /></button>
               <button onClick={nextSlide}><img src="/small_right.png" alt="rbfjhrb" /></button>
               </div>
            </div>
                    </div>
                    {/* <!-- container end --> */}
                </section>

        </div>
    )
}

