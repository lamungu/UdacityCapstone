import React from 'react';
import Header from './Header';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
//import Home from './pages/Home';
import Listings from './pages/Listings';
import ViewListing from './pages/ViewListing';
import Bookings from './pages/ViewListing';
import ViewBooking from './pages/ViewBooking';
import Login from './pages/Login';
import Register from './pages/Register';
import Auth, { AuthContext } from './Auth';

function App() {
  return (
        <Auth>
            <Router>
                <Header/>	
                <AuthContext.Consumer>
                    {({isAuthenticated}) => (
                        <Switch>
                            {!isAuthenticated() ? (
                                <>
                                    <Route path="/login" component={Login} />
                                    <Route path="/register" component={Register} />
                                    <Route component={Login} />
                                </>
                            ) : (
                                <>
                                    <Route path="/listings" component={Listings} />
                                    <Route path="/listings/:listingId" component={ViewListing} />
                                    <Route path="/bookings" component={Bookings} />
                                    <Route path="/bookings/:bookingId" component={ViewBooking} />
                                    <Route component={Listings} />
                                </>
                            )}
                        </Switch>
                    )}
                </AuthContext.Consumer>
            </Router>
        </Auth>
      
  );
}

export default App;
