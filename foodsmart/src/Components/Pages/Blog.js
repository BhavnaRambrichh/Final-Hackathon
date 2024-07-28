import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Blog.css';

const Blog = () => {
  const [liked, setLiked] = useState({});

  const handleSendClick = (event) => {
    const message = event.target.previousElementSibling.value;
    console.log('Message:', message);
    // Add your send logic here (e.g., API call)
  };

  const handleLikeClick = (id) => {
    setLiked((prevLiked) => ({ ...prevLiked, [id]: !prevLiked[id] }));
  };

  return (
    <div className="blog">
      <section className="hero-section hero-50 d-flex justify-content-center align-items-center" id="section_1">
        <div className="section-overlay"></div>
        <svg viewBox="0 0 1962 178" xmlns="http://www.w3.org/2000/svg">
          <path fill="#188933" d="M 0 114 C 118.5 114 118.5 167 237 167 L 237 167 L 237 0 L 0 0 Z" strokeWidth="0"></path>
          <path fill="#188833" d="M 236 167 C 373 167 373 128 510 128 L 510 128 L 510 0 L 236 0 Z" strokeWidth="0"></path>
          <path fill="#188833" d="M 509 128 C 607 128 607 153 705 153 L 705 153 L 705 0 L 509 0 Z" strokeWidth="0"></path>
          <path fill="#188833" d="M 704 153 C 812 153 812 113 920 113 L 920 113 L 920 0 L 704 0 Z" strokeWidth="0"></path>
          <path fill="#188833" d="M 919 113 C 1048.5 113 1048.5 148 1178 148 L 1178 148 L 1178 0 L 919 0 Z" strokeWidth="0"></path>
          <path fill="#188833" d="M 1177 148 C 1359.5 148 1359.5 129 1542 129 L 1542 129 L 1542 0 L 1177 0 Z" strokeWidth="0"></path>
          <path fill="#188833" d="M 1541 129 C 1751.5 129 1751.5 138 1962 138 L 1962 138 L 1962 0 L 1541 0 Z" strokeWidth="0"></path>
        </svg>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h1 className="text-white mb-4 pb-2">The No Waste Blog</h1>
              <a href="#section_3" className="btn custom-btn custom-border-btn">Recipes & Tips</a>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1962 178" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path fill="#ffffff" d="M 0 114 C 118.5 114 118.5 167 237 167 L 237 167 L 237 0 L 0 0 Z" strokeWidth="0"></path>
          <path fill="#ffffff" d="M 236 167 C 373 167 373 128 510 128 L 510 128 L 510 0 L 236 0 Z" strokeWidth="0"></path>
          <path fill="#ffffff" d="M 509 128 C 607 128 607 153 705 153 L 705 153 L 705 0 L 509 0 Z" strokeWidth="0"></path>
          <path fill="#ffffff" d="M 704 153 C 812 153 812 113 920 113 L 920 113 L 920 0 L 704 0 Z" strokeWidth="0"></path>
          <path fill="#ffffff" d="M 919 113 C 1048.5 113 1048.5 148 1178 148 L 1178 148 L 1178 0 L 919 0 Z" strokeWidth="0"></path>
          <path fill="#ffffff" d="M 1177 148 C 1359.5 148 1359.5 129 1542 129 L 1542 129 L 1542 0 L 1177 0 Z" strokeWidth="0"></path>
          <path fill="#ffffff" d="M 1541 129 C 1751.5 129 1751.5 138 1962 138 L 1962 138 L 1962 0 L 1541 0 Z" strokeWidth="0"></path>
        </svg>
      </section>

      <section className="events-section section-padding" id="section_2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h2 className="mb-lg-5 mb-4">Latest events</h2>
            </div>

            <div className="col-lg-6 col-12 mb-5 mb-lg-0">
              <div className="custom-block-image-wrap">
                <img src="/images/RottenFood.jpg" className="custom-block-image img-fluid" alt="" />
                <i className="custom-block-icon bi-link"></i>
                <div className="custom-block-date-wrap">
                  <strong className="text-white">08 June 2024</strong>
                </div>
                <div className="custom-btn-wrap">
                  <a href="event-detail.html" className="custom-btn btn">Detail</a>
                </div>
              </div>

              <div className="custom-block-info mt-3">
                <h5 className="mb-2">
                  <a href="event-detail.html">How to reduce food waste?</a>
                </h5>
                <p>Food waste can be reduced through various measures. It is important to understand the best practices to minimize waste.</p>
                <div className="d-flex flex-wrap border-top mt-4 pt-3">
                  <span
                    className={`custom-block-span ${liked['event1'] ? 'liked' : ''}`}
                    onClick={() => handleLikeClick('event1')}
                  >
                    <i className="bi bi-heart"></i>
                  </span>
                  <div className="d-flex align-items-center">
                    <div className="comment-box">
                      <textarea className="form-control me-2" id="message1" name="message" placeholder="Leave a comment here"></textarea>
                      <i className="bi bi-send" onClick={handleSendClick} style={{ cursor: 'pointer', fontSize: '24px' }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 mb-5 mb-lg-0">
              <div className="custom-block-image-wrap">
                <img src="/images/FoodWaste.jpg" className="custom-block-image img-fluid" alt="" />
                <i className="custom-block-icon bi-link"></i>
                <div className="custom-block-date-wrap">
                  <strong className="text-white">16 July 2024</strong>
                </div>
                <div className="custom-btn-wrap">
                  <a href="event-detail.html" className="custom-btn btn">Detail</a>
                </div>
              </div>

              <div className="custom-block-info mt-3">
                <h5 className="mb-2">
                  <a href="event-detail.html">Creative uses for food scraps</a>
                </h5>
                <p>Learn how to creatively use food scraps to reduce waste and create delicious meals.</p>
                <div className="d-flex flex-wrap border-top mt-4 pt-3">
                  <span
                    className={`custom-block-span ${liked['event2'] ? 'liked' : ''}`}
                    onClick={() => handleLikeClick('event2')}
                  >
                    <i className="bi bi-heart"></i>
                  </span>
                  <div className="d-flex align-items-center">
                    <div className="comment-box">
                      <textarea className="form-control me-2" id="message2" name="message" placeholder="Leave a comment here"></textarea>
                      <i className="bi bi-send" onClick={handleSendClick} style={{ cursor: 'pointer', fontSize: '24px' }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="events-section events-listing-section section-bg section-padding" id="section_3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h2 className="mb-3">Upcoming Events</h2>
            </div>

            <div className="row custom-block mb-3">
              <div className="col-lg-2 col-md-4 col-12 order-2 order-md-0 order-lg-0">
                <div className="custom-block-date-wrap d-flex d-lg-block d-md-block align-items-center mt-3 mt-lg-0 mt-md-0">
                  <h6 className="custom-block-date mb-lg-1 mb-0 me-3 me-lg-0 me-md-0">12</h6>
                  <strong className="text-white">August 2024</strong>
                </div>
              </div>

              <div className="col-lg-4 col-md-8 col-12 order-1 order-lg-0">
                <div className="custom-block-image-wrap">
                  <a href="event-detail.html">
                    <img src="/images/Cheese.jpg" className="custom-block-image img-fluid" alt="" />
                    <i className="custom-block-icon bi-link"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 col-12 order-3 order-lg-0">
                <div className="custom-block-info mt-3 mt-lg-0 mt-md-0">
                  <h5 className="mb-2">
                    <a href="event-detail.html">Date Labels in Mauritius: The Nuances of "Best Before" and "Expiry Date"</a>
                  </h5>
                  <p>In the vibrant aisles of our local shops and supermarkets, you'll find a little mystery hiding behind the labels of "Best Before" and "Expiry Date." What are they?</p>
                  <div className="d-flex flex-wrap border-top mt-4 pt-3">
                    <span
                      className={`custom-block-span ${liked['event3'] ? 'liked' : ''}`}
                      onClick={() => handleLikeClick('event3')}
                    >
                      <i className="bi bi-heart"></i>
                    </span>
                    <div className="d-flex align-items-center">
                      <div className="comment-box">
                        <textarea className="form-control me-2" id="message3" name="message" placeholder="Leave a comment here"></textarea>
                        <i className="bi bi-send" onClick={handleSendClick} style={{ cursor: 'pointer', fontSize: '24px' }}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row custom-block">
              <div className="col-lg-2 col-md-4 col-12 order-2 order-md-0 order-lg-0">
                <div className="custom-block-date-wrap d-flex d-lg-block d-md-block align-items-center mt-3 mt-lg-0 mt-md-0">
                  <h6 className="custom-block-date mb-lg-1 mb-0 me-3 me-lg-0 me-md-0">24</h6>
                  <strong className="text-white">August 2024</strong>
                </div>
              </div>

              <div className="col-lg-4 col-md-8 col-12 order-1 order-lg-0">
                <div className="custom-block-image-wrap">
                  <a href="event-detail.html">
                    <img src="/images/cook.jpg" className="custom-block-image img-fluid" alt="" />
                    <i className="custom-block-icon bi-link"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 col-12 order-3 order-lg-0">
                <div className="custom-block-info mt-3 mt-lg-0 mt-md-0">
                  <h5 className="mb-2">
                    <a href="event-detail.html">Cooking Beyond 'Best Before': Reducing Food Waste, Saving Money, and Protecting the Planet 18 Oct 2023</a>
                  </h5>
                  <p>OMG the Best Before Date of these canned tomatoes was yesterday, we can’t use that anymore”. Can't we really?</p>
                  <div className="d-flex flex-wrap border-top mt-4 pt-3">
                    <span
                      className={`custom-block-span ${liked['event4'] ? 'liked' : ''}`}
                      onClick={() => handleLikeClick('event4')}
                    >
                      <i className="bi bi-heart"></i>
                    </span>
                    <div className="d-flex align-items-center">
                      <div className="comment-box">
                        <textarea className="form-control me-2" id="message4" name="message" placeholder="Leave a comment here"></textarea>
                        <i className="bi bi-send" onClick={handleSendClick} style={{ cursor: 'pointer', fontSize: '24px' }}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
