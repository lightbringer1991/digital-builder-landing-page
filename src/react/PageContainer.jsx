import React from 'react';

const projects = [
  {
    imgFullSize: require('../images/portfolio/fullsize/kinder-garten.jpg'),
    imgThumbnail: require('../images/portfolio/thumbnails/kinder-garten.jpg'),
    category: 'Management',
    name: 'Kinder garten lookup for parents',
  },
  {
    imgFullSize: require('../images/portfolio/fullsize/kinder-garten-management.jpg'),
    imgThumbnail: require('../images/portfolio/thumbnails/kinder-garten-management.jpg'),
    category: 'Management',
    name: 'Kinder garten management for school',
  },
  {
    imgFullSize: require('../images/portfolio/fullsize/check-exam-grade.jpg'),
    imgThumbnail: require('../images/portfolio/thumbnails/check-exam-grade.jpg'),
    category: 'Utilities',
    name: 'Check Exam grade',
  },
  {
    imgFullSize: require('../images/portfolio/fullsize/shopping-search.jpg'),
    imgThumbnail: require('../images/portfolio/thumbnails/shopping-search.jpg'),
    category: 'E-commerce',
    name: 'Online Shopping discount hunt',
  },
];

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="page-container">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-container">Digital Builder</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="masthead text-center text-white d-flex">
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h1 className="text-uppercase">
                  <strong>Your favourite source of resolving digital problems.</strong>
                </h1>
                <hr />
              </div>
              <div className="col-lg-8 mx-auto">
                <p className="text-faded mb-5">
                  Digital Builder can help you bring your products to the digital world!
                  <br />
                  Just send an email or call us and you will have your products online in no time.
                </p>
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
                <p className="text-faded mb-4">
                  Digital Builder has everything you need to get your new website up and running.
                  <br />
                  We have experts in web-development world who can help you designs, create and maintain your website.
                </p>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">At Your Service</h2>
                <hr className="my-4" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x fa-diamond text-primary mb-3 sr-icons" />
                  <h3 className="mb-3">Experts</h3>
                  <p className="text-muted mb-0">Our developers are screened properly to ensure that they have proper skills to develop your website.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons" />
                  <h3 className="mb-3">Fast to ship</h3>
                  <p className="text-muted mb-0">A dashing progress from your idea to an actual website. We can get your website up in no time.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons" />
                  <h3 className="mb-3">Maintenance</h3>
                  <p className="text-muted mb-0">
                    We update your website regularly to keep things fresh.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x fa-heart text-primary mb-3 sr-icons" />
                  <h3 className="mb-3">Made with Love</h3>
                  <p className="text-muted mb-0">
                    All websites managed by us are done with love and great care from our team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-0" id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters popup-gallery">
              {projects.map((project) => (
                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href={project.imgFullSize}>
                    <img className="img-fluid" src={project.imgThumbnail} alt="" />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-category text-faded">
                          {project.category}
                        </div>
                        <div className="project-name">
                          {project.name}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading">Let's Get In Touch!</h2>
                <hr className="my-4" />
                <p className="mb-5">Ready to start your next project with us? That's great! Give us a call or send us
                  an email and we will get back to you as soon as possible!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center">
                <i className="fa fa-phone fa-3x mb-3 sr-contact" />
                <p>+61-413-759-032</p>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fa fa-envelope-o fa-3x mb-3 sr-contact" />
                <p>
                  <a href="mailto:tuanmnguyen91@gmail.com">tuanmnguyen91@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PageContainer;
