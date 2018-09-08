import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class PageContainer extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a className="js-scroll-trigger" href="#page-top">Digital Builder</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem className="js-scroll-trigger" eventKey={1} href="#about">About</NavItem>
              <NavItem className="js-scroll-trigger" eventKey={1} href="#services">Services</NavItem>
              <NavItem className="js-scroll-trigger" eventKey={1} href="#portfolio">Portfolio</NavItem>
              <NavItem className="js-scroll-trigger" eventKey={1} href="#contact">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <header className="masthead text-center text-white d-flex">
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h1 className="text-uppercase">
                  <strong>Your Favorite Website Builder</strong>
                </h1>
                <hr />
              </div>
              <div className="col-lg-8 mx-auto">
                <p className="text-faded mb-5">Digital Builder can get your stories up on the internet and spread your influences</p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-primary" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading text-white">We've got what you need!</h2>
                <hr className="light my-4" />
                <p className="text-faded mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!</p>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PageContainer;
