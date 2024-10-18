import React from "react";
import Aux from '../Auxilliary/Auxilliary';
import TopBar from "../../components/Navigation/TopBar";
import NavBar from "../../components/Navigation/NavBar";
import ScrolltoTop from "../../components/ScrollTop/ScrollTop";
import Footer from "../../components/Footer/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";

const Layout = (props) => {
    const location = window.location.pathname;
    console.log(location);
    const headerPages = [
        '/error',
        '/comingsoon',
        '/resetpassword',
        '/signup',
        '/signin',
    ]
    const footerPages = [
        '/error',
        '/signup',
        '/signin',
        '/comingsoon',
        '/resetpassword',
    ]

    const postJobPages = [
        'payment'
    ]
    // console.log(headerPages.indexOf(location), footerPages.indexOf(location));
    return (
        <Aux>
            {(headerPages.indexOf(location) > 0) ? <Aux></Aux> : <Aux><header>
                <TopBar />
                <NavBar />
            </header></Aux>}
            <main>
                {props.children}
            </main>
            {(footerPages.indexOf(location) > 0) ? <Aux></Aux> : <Aux>
                <ScrolltoTop postJobPages={postJobPages} location={location} />
                <footer className="projectb-layout-footer">
                    <Subscribe />
                    <Footer />
                </footer>
            </Aux>}
        </Aux>
    )
}

export default Layout;