import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import portimg from '../../img/girls.png';

import aboutimg from '../../img/about.png';
// import skillimg from '../../svg';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>

            {/* style={{backgroundImage: "url('../../img/banner.jpg')"}} */}
            <div className="banner_part" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 content">
                            <h5>WELCOME TO MY WORLD</h5>
                            <h1>Hi, I’m <span>Jone Lee</span></h1>
                            <h2>A Creative Designer From New York</h2>
                            <p>I'm creative designer based in New York, and I'm very passionate and dedicated to my work.</p>
                            {/* <div className="b_btn">
                                <button class="btn btn-sm btn-secondary mybtn" type="button">Contact now</button>
                            </div> */}

                            <div className="confarence">
                                <div className="social">
                                    <p>FIND WITH ME</p>
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </div>
                                <div className="social">
                                    <p>BEST SKILL ON</p>
                                    <i class="fa-brands fa-react"></i>
                                    <i class="fa-brands fa-html5"></i>
                                    <i class="fa-brands fa-css3"></i>
                                    <i class="fa-brands fa-square-js"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="portfolio_area">
                                <img src={portimg} alt="" />

                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {/* banner part end here */}


            {/* about part start here */}

            <section className='about_part'>
                <div className="container">
                    <h2>What I Do</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="s_card">
                                <i class="fa-solid fa-code"></i>
                                <h3>Web Development</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="s_card">
                                <i class="fa-brands fa-apple"></i>
                                <h3>ios Development</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="s_card">
                                <i class="fa-light fa-mobile"></i>
                                <h3>android Development</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="s_card">
                                <i class="fa-solid fa-window-restore"></i>
                                <h3>seo Development</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="s_card">
                                <i class="fa-solid fa-pen-nib"></i>
                                <h3>ux/ui Development</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="s_card">
                                <i class="fa-solid fa-window-restore"></i>
                                <h3>business Development</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>


                </div>
            </section>



            {/* skils part start here */}

            <section className='portfolio'>
                <div className="container">
                    <div className="row">
                        <div className="col-ld-6 col-sm-12">
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="s_card">
                                <i class="fa-brands fa-apple"></i>
                                <h3>ios Development</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                        </div>
                          
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;