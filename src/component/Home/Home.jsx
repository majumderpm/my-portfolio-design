import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import portimg from '../../img/port_img.png';
import htmllogo from '../../img/html-5.png';
import jslogo from '../../img/js-file.png';
import reactlogo from '../../img/physics.png';
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
                            {/* <h5>Hello,<br/> I'm</h5> */}
                            <h1>Hello,<br /> I'm James Smith</h1>
                            {/* <h2>A Creative Designer From New York</h2> */}
                            <p>I'm creative designer based in New York, and I'm very passionate and dedicated to my work.</p>
                            <div className="b_btn">
                                <button class="btn btn-sm btn-secondary mybtn" type="button">Contact now</button>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="portfolio_area">
                                <img src={portimg} alt="" />
                                <div className="html_img">
                                    <img src={htmllogo} alt="" />
                                </div>
                                <div className="js_img">
                                    <img src={jslogo} alt="" />
                                </div>
                                <div className="reat_img">
                                    <img src={reactlogo} alt="" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {/* banner part end here */}


            {/* about part start here */}

            <section className='about_part'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 about_img">
                            <div className="aboutArea">
                                <img src={aboutimg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">

                            <div className="content">
                                <h2>My clients know, that I always provide top-level services</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus augue, facilisis blandit vulputate sed, euismod egestas ex. Ut ac tellus et velit luctus pellentesque.</p>
                                <div className="b_btn">
                                    <button class="btn btn-sm btn-secondary mybtn" type="button">download CV</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>



            {/* skils part start here */}

            <section className='skils'>
                <div className="container">
                    <div className="row">
                        <div className="col-ld-6 col-sm-12">

                        </div>
                        <div className="col-ld-6 col-sm-12">
                            {/* <img src={skillimg} alt="" /> */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;