import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "./Home.css"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
    return (
        <>
            <div className='hero-section' style={{ height: "50vh" }}>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide style={{ position: "relative" }}>
                        <img src="https://preview.colorlib.com/theme/hexa/images/slider-1.jpg" style={{ width: "100%", height: "80vh", }} />
                        <div className='hero-section_desc' style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
                            <h1 style={{ color: "white" }}>Creative Design</h1>
                            <p style={{ color: "white" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias obcaecati natus reiciendis ab nulla, voluptate possimus quae voluptatum similique quaerat?</p>
                            <div className='buttons' style={{ display: "flex", gap: 20 }}>
                                <button style={{ color: "white", borderColor: "white", background: "none", outline: "none", padding: "5px 5px" }}>Get Started</button>
                                <button style={{ border: "none", background: "none", color: "white" }}>Download</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ position: "relative" }}><img src="https://preview.colorlib.com/theme/hexa/images/slider-2.jpg.webp" style={{ width: "100%", height: "80vh" }} />
                        <div className='hero-section_desc' style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
                            <h1 style={{ color: "white" }}>Modern Design</h1>
                            <p style={{ color: "white" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias obcaecati natus reiciendis ab nulla, voluptate possimus quae voluptatum similique quaerat?</p>
                            <div className='buttons' style={{ display: "flex", gap: 20 }}>
                                <button style={{ color: "white", borderColor: "white", background: "none", outline: "none", padding: "5px 5px" }}>Get Started</button>
                                <button style={{ border: "none", background: "none", color: "white" }}>Download</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='second-section' style={{ display: "flex", justifyContent: "space-evenly", marginTop:300 }}>
                <div style={{ marginLeft: 50, width: "300px" }}>
                    <i class="fa-regular fa-bell"></i>
                    <h2>Modern Design</h2>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
                <div style={{ width: "300px" }}>
                    <i class="fa-regular fa-heart"></i>
                    <h2>Build With Love</h2>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
                <div style={{ width: "300px" }}>
                    <i class="fa-solid fa-bolt"></i>
                    <h2>Fast Loading</h2>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
            </div>
            <div className='third-section'>
                <div style={{ display: "flex", marginTop: 50, justifyContent: "space-evenly", paddingBottom: 100 }}>
                    <div style={{ width: 300, marginTop: 100 }}>
                        <h1>Let's Build Together</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                    <div>
                        <img src="https://preview.colorlib.com/theme/hexa/images/img_1_long.jpg" style={{ height: "70vh" }} />
                    </div>
                </div>
            </div>
            <div className='fourth-section'>
                <div style={{ display: "flex", paddingTop: 100, justifyContent: "space-evenly", paddingBottom: 100 }}>
                    <div>
                        <img src="https://preview.colorlib.com/theme/hexa/images/img_2_long.jpg" style={{ height: "70vh" }} />
                    </div>
                    <div style={{ width: 300, marginTop: 100 }}>
                        <h1>Let's Build Together</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>

                </div>
            </div>
            <div className='fifth-section'>
                <div className='fifth-section_desc'>
                    <h1>Projects</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
                </div>
            </div>
            <div className='sixth-section'>
                <div className='sixth-section_imgs'>
                    <img src='https://preview.colorlib.com/theme/hexa/images/img_1.jpg' />
                    <img src='https://preview.colorlib.com/theme/hexa/images/slider-1.jpg' />
                    <img src='https://preview.colorlib.com/theme/hexa/images/img_1.jpg' />
                    <img src='https://preview.colorlib.com/theme/hexa/images/img_4.jpg' />
                    <img src='https://preview.colorlib.com/theme/hexa/images/img_5.jpg' />
                    <img src='https://preview.colorlib.com/theme/hexa/images/img_6.jpg' />
                </div>
            </div>
            <div className='seventh-section'>
                <div className='seventh-section_desc'>
                    <h1>Testimonial</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
                </div>
                <div className='cards'>
                    <div className='first-card'>
                        <h1>John Smith</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam explicabo, animi dignissimos, assumenda labore veniam officia tempore maxime, voluptatibus sunt libero cumque quae magni ut eveniet illo recusandae laboriosam nam.</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home
