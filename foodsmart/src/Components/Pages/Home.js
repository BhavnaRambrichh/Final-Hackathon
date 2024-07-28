import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero-section" id="section_1">
        <div className="section-overlay"></div>

        <svg className="hero-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#188933"
            d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-5 mb-lg-0 text-content">
              <h2 className="text-white">Welcome to Foodsmart</h2>
              <h1 className="cd-headline rotate-1 text-white mb-4 pb-2">
                <span>Fight</span>
                <span className="cd-words-wrapper">
                  <b className="is-visible">Against Food Waste!</b>
                </span>
              </h1>
              <div className="custom-btn-group">
                <a href="#section_2" className="btn custom-btn smoothscroll me-3">Story</a>
                <Link to="Pages/Membership" className="btn custom-btn smoothscroll">Become a member</Link>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="ratio ratio-16x9">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ChKmsli4gok"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </section>

      <section className="about-section section-padding" id="section_2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center">
              <h2 className="mb-lg-5 mb-4">About Foodsmart</h2>
            </div>

            <div className="col-lg-5 col-12 me-auto mb-4 mb-lg-0">
              <h3 className="mb-3">Foodsmart History</h3>
              <p>
                <strong>2024: The Beginning</strong>, With the rise in global food production and consumption, the amount of food wasted has reached alarming levels. We recognized the need for a dedicated platform to address this issue, and thus, Foodsmart was born.
              </p>
              <p>
                At Foodsmart, education and awareness are at the heart of our mission. We provide a wealth of resources to inform and inspire action against food waste. Our blog features articles on food preservation techniques, smart shopping habits, and the environmental impact of food waste. Through these resources, we aim to empower individuals and businesses with the knowledge they need to make sustainable choices and reduce food waste effectively. Join us in spreading awareness and making a positive impact on our environment.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="member-block">
                <div className="member-block-image-wrap">
                  <img
                    src="/images/FoodWarrior.jpg"
                    className="member-block-image img-fluid"
                    alt="Food Warrior"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="member-block">
                <div className="member-block-image-wrap">
                  <img
                    src="/images/WASTEFUL.jpg"
                    className="member-block-image img-fluid"
                    alt="Wasteful"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bg-image">
        <svg viewBox="0 0 1265 144" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(255, 255, 255, 1)" d="M 0 40 C 164 40 164 20 328 20 L 328 20 L 328 0 L 0 0 Z" strokeWidth="0"></path>
          <path fill="rgba(255, 255, 255, 1)" d="M 327 20 C 445.5 20 445.5 89 564 89 L 564 89 L 564 0 L 327 0 Z" strokeWidth="0"></path>
          <path fill="rgba(255, 255, 255, 1)" d="M 563 89 C 724.5 89 724.5 48 886 48 L 886 48 L 886 0 L 563 0 Z" strokeWidth="0"></path>
          <path fill="rgba(255, 255, 255, 1)" d="M 885 48 C 1006.5 48 1006.5 67 1128 67 L 1128 67 L 1128 0 L 885 0 Z" strokeWidth="0"></path>
          <path fill="rgba(255, 255, 255, 1)" d="M 1127 67 C 1196 67 1196 0 1265 0 L 1265 0 L 1265 0 L 1127 0 Z" strokeWidth="0"></path>
        </svg>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="section-bg-image-block">
                <h2 className="mb-lg-3">Get our newsletter</h2>
                <p>Stay informed and inspired with our Foodsmart newsletter! Sign up to receive the latest updates on food waste reduction, tips for sustainable living, and exclusive content from our blog. By joining our newsletter, you'll be the first to know about new initiatives, events, and success stories. Together, we can make a difference—one email at a time.</p>
                <form action="#" method="get" className="custom-form mt-lg-4 mt-2">
                  <div className="input-group input-group-lg">
                    <span className="input-group-text bi-envelope" id="basic-addon1"></span>
                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required="" />
                    <button type="submit" className="form-control">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <svg viewBox="0 0 1265 144" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(255, 255, 255, 1)" d="M 0 40 C 164 40 164 20 328 20 L 328 20 L 328 0 L 0 0 Z" strokeWidth="0"></path>
          <path fill="rgba(255, 255, 255, 1)" d="M 327 20 C 445.5 20 445.5 89 564 89 L 564 89 L 564 0 L 327 0 Z" strokeWidth="0"></path>
          <path fill="rgba(255, 255, 255, 1)" d="M 563 89 C 724.5 89 724.5 48 886 48 L 886 48 L 886 0 L 563 0 Z" strokeWidth="0"></path>
          <path fill="rgba(255, 255, 255, 1)" d="M 885 48 C 1006.5 48 1006.5 67 1128 67 L 1128 67 L 1128 0 L 885 0 Z" strokeWidth="0"></path>
          <path fill="rgba(255, 255, 255, 1)" d="M 1127 67 C 1196 67 1196 0 1265 0 L 1265 0 L 1265 0 L 1127 0 Z" strokeWidth="0"></path>
        </svg>
      </section>

      <section className="contact-section section-padding" id="section_5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12">
              <form action="#" method="post" className="custom-form contact-form">
                <h2 className="mb-4 pb-2">Contact Foodsmart</h2>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating">
                      <input type="text" name="full-name" id="full-name" className="form-control" placeholder="Full Name" required="" />
                      <label htmlFor="full-name">Full Name</label>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating">
                      <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required="" />
                      <label htmlFor="email">Email address</label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-12">
                    <div className="form-floating">
                      <textarea className="form-control" id="message" name="message" placeholder="Describe message here"></textarea>
                      <label htmlFor="message">Message</label>
                    </div>

                    <button type="submit" className="form-control">Submit Form</button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-6 col-12">
              <div className="contact-info mt-5">
                <div className="contact-info-item">
                  <div className="contact-info-body">
                    <strong>Riviere du Rempart, Mauritius.</strong>
                    <p className="mt-2 mb-1">
                      <a href="tel:51020034" className="contact-link">
                        (+230) 5 102 0034
                      </a>
                    </p>
                    <p className="mb-0">
                      <a href="mailto:info.foodsmart@outlook.com" className="contact-link">
                        info.foodsmart@outlook.com
                      </a>
                    </p>
                  </div>
                  <div className="contact-info-footer">
                    <a href="/directions" className="btn btn-link">Directions</a>
                  </div>
                </div>
                <img src="images/Fingerprint.png" className="img-fluid" alt="World Map" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
