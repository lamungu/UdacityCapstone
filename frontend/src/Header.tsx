import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className="header_sticky">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <div id="logo_home">
                            <h1><Link to="/" title="Findoctor">Findoctor</Link></h1>
                        </div>
                    </div>
                    <nav className="col-lg-9 col-6">
                        <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="#0"><span>Menu mobile</span></a>
                        <ul id="top_access">
                            {true ? (
                                <li id="">
                                    <Link to="/login">
                                        <i className="pe-7s-user"></i>
                                    </Link>
                                </li>
                            ) : (
                                <li id="user">
                                    <Link to="/my">
                                        <figure><img src="http://via.placeholder.com/150x150.jpg" alt=""/></figure>
                                        Ben Loaf
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <div className="main-menu">
                            <ul>
                                <li><Link to="/listings">Listings</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;