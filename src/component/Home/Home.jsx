import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import boyimg from '../../img/boy.png';


const Home = () => {
    return (
        <>
            <Navbar></Navbar>

            {/* style={{backgroundImage: "url('../../img/banner.jpg')"}} */}
            <div className="banner_part" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h5>Hello, I'm</h5>
                            <h1>James Smith</h1>
                            <h2>A Creative Designer From New York</h2>
                            <p>I'm creative designer based in New York, and I'm very passionate and dedicated to my work.</p>
                            <div className="b_btn">
                                <button class="btn btn-sm btn-secondary mybtn" type="button">about me</button>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img src={boyimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;