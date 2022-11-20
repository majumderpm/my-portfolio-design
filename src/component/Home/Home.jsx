import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import portimg from '../../img/girls.png';
import webPort from '../../img/web-1.jpg';
import webtwo from '../../img/web-2.jpg';
import webthree from '../../img/web-3.jpg';
import appone from '../../img/app-1.jpg';
import apptwo from '../../img/app-3.jpg';
import appthree from '../../img/app-4.jpg';




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

            <section className='about_part common'>
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

            <section className='portfolio common'>
                <div className="container">
                    <h5>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h5>
                    <h2>My Portfolio</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="s_card port_card">
                                <img src={webPort} alt="" />
                                <h3>Agency Website Design and Development. </h3>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="s_card port_card">
                                <img src={webtwo} alt="" />
                                <h3>Fitness Website Design and Development. </h3>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="s_card port_card">
                                <img src={webthree} alt="" />
                                <h3>Degital Marketing Design Creativity & Application</h3>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="s_card port_card">
                                <img src={appone} alt="" />
                                <h3>Restaurant App Design Creativity & Application. </h3>

                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="s_card port_card">
                                <img src={apptwo} alt="" />
                                <h3>Travel Mobile Application Figma Design. </h3>

                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="s_card port_card">
                                <img src={appthree} alt="" />
                                <h3>Mobile Application Landing Page Design. </h3>

                            </div>
                        </div>


                    </div>
                </div>
            </section>


            {/* resume part start here */}

            <section className='portfolio resume common'>
                <div className="container">
                    <h5>7+ YEARS OF EXPERIENCE</h5>
                    <h2>My Resume</h2>
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                                </li>

                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">


                                    {/* .... */}
                                    <div class="page-section" id="about">
                                        <div class="text-center">
                                            <h2 class="section-heading text-uppercase">Education Quality</h2>
                                            {/* <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                                        </div>
                                  

                                    <ul class="timeline">
                                        <li>
                                            <div class="timeline-image"></div>
                                            <div class="timeline-panel">
                                                <div class="timeline-heading">
                                                    <h4>2009-2011</h4>
                                                    <h4 class="subheading">Our Humble Beginnings</h4>
                                                </div>
                                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                                            </div>
                                        </li>

                                        <li class="timeline-inverted">
                                            <div class="timeline-image"></div>
                                            <div class="timeline-panel">
                                                <div class="timeline-heading">
                                                    <h4>March 2011</h4>
                                                    <h4 class="subheading">An Agency is Born</h4>
                                                </div>
                                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="timeline-image"></div>
                                            <div class="timeline-panel">
                                                <div class="timeline-heading">
                                                    <h4>December 2015</h4>
                                                    <h4 class="subheading">Transition to Full Service</h4>
                                                </div>
                                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                                            </div>
                                        </li>


                                        <li class="timeline-inverted">
                                            <div class="timeline-image">
                                                <a className='' href="">     <h4>
                                                    view
                                                    <br />
                                                    Our
                                                    <br />
                                                    catalog
                                                </h4></a>
                                            </div>
                                        </li>
                                    </ul>
                                    </div>
                                    {/* ================== */}

                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
                                <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;