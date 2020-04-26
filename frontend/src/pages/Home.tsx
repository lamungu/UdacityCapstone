import React from 'react';

function Home() {
    return (
        <main>
            <div className="hero_home version_1">
                <div className="content">
                    <h3>Find a Doctor!</h3>
                    <p>
                        Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.
                    </p>
                    <form method="post" action="list.html">
                        <div id="custom-search-input">
                            <div className="input-group">
                                <input type="text" className=" search-query" placeholder="Ex. Name, Specialization ...."/>
                                <input type="submit" className="btn_search" value="Search"/>
                            </div>
                            <ul>
                                <li>
                                    <input type="radio" id="all" name="radio_search" value="all" checked/>
                                    <label htmlFor="all">All</label>
                                </li>
                                <li>
                                    <input type="radio" id="doctor" name="radio_search" value="doctor"/>
                                    <label htmlFor="doctor">Doctor</label>
                                </li>
                                <li>
                                    <input type="radio" id="clinic" name="radio_search" value="clinic"/>
                                    <label htmlFor="clinic">Clinic</label>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container margin_120_95">
                <div className="main_title">
                    <h2>Discover the <strong>online</strong> appointment!</h2>
                    <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie. Sed ad debet scaevola, ne mel.</p>
                </div>
                <div className="row add_bottom_30">
                    <div className="col-lg-4">
                        <div className="box_feat" id="icon_1">
                            <span></span>
                            <h3>Find a Doctor</h3>
                            <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box_feat" id="icon_2">
                            <span></span>
                            <h3>View profile</h3>
                            <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box_feat" id="icon_3">
                            <h3>Book a visit</h3>
                            <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>
                        </div>
                    </div>
                </div>
                
                <p className="text-center"><a href="list.html" className="btn_1 medium">Find Doctor</a></p>

            </div>
            

            <div className="bg_color_1">
                <div className="container margin_120_95">
                    <div className="main_title">
                        <h2>Most Viewed doctors</h2>
                        <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri.</p>
                    </div>
                    <div id="reccomended" className="owl-carousel owl-theme">
                        <div className="item">
                            <a href="detail-page.html">
                                <div className="views"><i className="icon-eye-7"></i>140</div>
                                <div className="title">
                                    <h4>Dr. Julia Holmes<em>Pediatrician - Cardiologist</em></h4>
                                </div><img src="http://via.placeholder.com/350x500.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="item">
                            <a href="detail-page.html">
                                <div className="views"><i className="icon-eye-7"></i>120</div>
                                <div className="title">
                                    <h4>Dr. Julia Holmes<em>Pediatrician</em></h4>
                                </div><img src="http://via.placeholder.com/350x500.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="item">
                            <a href="detail-page.html">
                                <div className="views"><i className="icon-eye-7"></i>115</div>
                                <div className="title">
                                    <h4>Dr. Julia Holmes<em>Pediatrician</em></h4>
                                </div><img src="http://via.placeholder.com/350x500.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="item">
                            <a href="detail-page.html">
                                <div className="views"><i className="icon-eye-7"></i>98</div>
                                <div className="title">
                                    <h4>Dr. Julia Holmes<em>Pediatrician</em></h4>
                                </div><img src="http://via.placeholder.com/350x500.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="item">
                            <a href="detail-page.html">
                                <div className="views"><i className="icon-eye-7"></i>98</div>
                                <div className="title">
                                    <h4>Dr. Julia Holmes<em>Pediatrician</em></h4>
                                </div><img src="http://via.placeholder.com/350x500.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            

            <div className="container margin_120_95">
                <div className="main_title">
                    <h2>Find your doctor or clinic</h2>
                    <p>Nec graeci sadipscing disputationi ne, mea ea nonumes percipitur. Nonumy ponderum oporteat cu mel, pro movet cetero at.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-5 col-md-6">
                        <div className="list_home">
                            <div className="list_title">
                                <i className="icon_pin_alt"></i>
                                <h3>Search by City or Zone</h3>
                            </div>
                            <ul>
                                <li><a href="#0"><strong>23</strong>Albany</a></li>
                                <li><a href="#0"><strong>23</strong>Albuquerque</a></li>
                                <li><a href="#0"><strong>23</strong>Atlanta</a></li>
                                <li><a href="#0"><strong>23</strong>Baltimore</a></li>
                                <li><a href="#0"><strong>23</strong>Baton Rouge</a></li>
                                <li><a href="#0"><strong>23</strong>Birmingham</a></li>
                                <li><a href="#0"><strong>23</strong>Boston</a></li>
                                <li><a href="#0"><strong>23</strong>Buffalo</a></li>
                                <li><a href="#0"><strong>23</strong>Charleston</a></li>
                                <li><a href="#0">More...</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6">
                        <div className="list_home">
                            <div className="list_title">
                                <i className="icon_archive_alt"></i>
                                <h3>Search by type</h3>
                            </div>
                            <ul>
                                <li><a href="#0"><strong>23</strong>Allergist</a></li>
                                <li><a href="#0"><strong>23</strong>Cardiologist</a></li>
                                <li><a href="#0"><strong>23</strong>Chiropractor</a></li>
                                <li><a href="#0"><strong>23</strong>Dentist</a></li>
                                <li><a href="#0"><strong>23</strong>Dermatologist</a></li>
                                <li><a href="#0"><strong>23</strong>Gastroenterologist</a></li>
                                <li><a href="#0"><strong>23</strong>Ophthalmologist</a></li>
                                <li><a href="#0"><strong>23</strong>Optometrist</a></li>
                                <li><a href="#0"><strong>23</strong>Pediatrician</a></li>
                                <li><a href="#0">More....</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="app_section">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-md-5">
                            <p><img src="img/app_img.svg" alt="" className="img-fluid" width="500" height="433"/></p>
                        </div>
                        <div className="col-md-6">
                            <small>Application</small>
                            <h3>Download <strong>Findoctor App</strong> Now!</h3>
                            <p className="lead">Tota omittantur necessitatibus mei ei. Quo paulo perfecto eu, errem percipit ponderum no eos. Has eu mazim sensibus. Ad nonumes dissentiunt qui, ei menandri electram eos. Nam iisque consequuntur cu.</p>
                            <div className="app_buttons wow" data-wow-offset="100">
                                <a href="#0" className="fadeIn"><img src="img/apple_app.png" alt="" width="150" height="50" data-retina="true"/></a>
                                <a href="#0" className="fadeIn"><img src="img/google_play_app.png" alt="" width="150" height="50" data-retina="true"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>	
    )
}

export default Home;