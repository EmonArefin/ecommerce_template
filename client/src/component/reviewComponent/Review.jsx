import React from 'react';
import "../reviewComponent/review.css"

const Review = () => {
  return (
    <>
  {/* feedback start */}
  <section id="feedback">
    <div className="feedback-section-title mt-5">
      <p className="text-center">PROFESSIONALS</p>
      <h3 className="text-center">Reviews &amp; Cases</h3>
      <p className="text-center">
        My believers are my biggest ambassadors, and I treat them that way. Take
        a look at some of their testimonies. Their words are reflections of the
        quality of support I provided them{" "}
      </p>
      <hr
        className="hr-style"
        style={{ borderColor: "#0d6efd", margin: "auto" }}
      />
    </div>
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={3}
          aria-label="Slide 4"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="cards">
              <div className="feedback-card red">
                <img
                  className="rounded-pill feedback-img mb-2"
                  src="images/1.png"
                  alt=""
                />
                <strong className="tip">Syeda Rabeya Sultana Riya</strong>
                <p style={{ fontWeight: "lighter" }}>
                  Digital Marketing Consultant
                </p>
                <p className="second-text">
                  Mr. Arefin is the most energetic person I’ve ever worked with.
                  He has the right mindset to get things done in an organized
                  manner and draw the required results out. He also has a
                  particular set of skills in leadership and building up new
                  teams.
                </p>
              </div>
              <div className="feedback-card blue">
                <img
                  className="rounded-pill feedback-img mb-2"
                  src="images/7.png"
                  alt=""
                />
                <strong className="tip">Alicia Audrey</strong>
                <p style={{ fontWeight: "lighter" }}>
                  Founder &amp; CEO at Tidal Wave
                </p>
                <p className="second-text">
                  Emon Arefin created a killer SEO strategy for my project that
                  gave me an idea to present my business in a whole new way. He
                  is a very talented guy with an overall solid knowledge of SEO
                  and Digital Marketing. I highly recommend for him with any of
                  your endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="cards">
              <div className="feedback-card red">
                <img
                  className="rounded-pill feedback-img mb-2"
                  src="images/8.png"
                  alt=""
                />
                <strong className="tip">Sofía Bárbara Lía</strong>
                <p style={{ fontWeight: "lighter" }}>
                  Founder &amp; CEO at Hora &amp; Lía
                </p>
                <p className="second-text">
                  Building full-scale E-commerce business development strategies
                  would not be possible unless I had Emon Arefin do that for me.
                  He helped me develop my business from scratch and gave me a
                  precious consultancy. He is a professional with robust
                  business knowledge.
                </p>
              </div>
              <div className="feedback-card green">
                <img
                  className="rounded-pill feedback-img mb-2"
                  src="images/4.png"
                  alt=""
                />
                <strong className="tip">Akabana Akari (アカバナ)</strong>
                <p style={{ fontWeight: "lighter" }}>
                  Managing Director (理事) at Kaiju Digital
                </p>
                <p className="second-text">
                  Under the guidance of Emon, my project benefitted from a new
                  strategy that reformed the way I presented my business. Emon's
                  impressive talent and comprehensive expertise in SEO and
                  Digital Marketing sparked new ideas and opened doors to
                  unparalleled opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="cards">
              <div className="feedback-card blue">
                <img
                  className="rounded-pill feedback-img mb-2"
                  src="images/Untitled design.png"
                  alt=""
                />
                <strong className="tip">Grace Charlotte</strong>
                <p style={{ fontWeight: "lighter" }}>
                  Business Analyst at Overt
                </p>
                <p className="second-text">
                  The task of assemble complete E-commerce business development
                  strategies would have been an impossible challenge without the
                  invaluable assistance of Arefin. His consultancy was
                  instrumental in nurturing my business from its inception,
                  providing me with a wealth of expertise.
                </p>
              </div>
              <div className="feedback-card green">
                <img
                  className="rounded-pill feedback-img mb-2"
                  src="images/6.png"
                  alt=""
                />
                <strong className="tip">Abeni Zuri Akua</strong>
                <p style={{ fontWeight: "lighter" }}>
                  Chartered accountants at Sapphire Africa
                </p>
                <p className="second-text">
                  Any organization would be lucky to have Emon Arefin as their
                  manager. In my career, I have worked with a lot of
                  professionals, but Emon Arefin was different from the others.
                  His work ethics are impeccable, and he can effortlessly adapt
                  to any circumstance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="cards">
              {/* <div class="feedback-card red">
                      <img class="rounded-pill feedback-img mb-2" src="images/2.png" alt="">
                      <strong class="tip">Dalia Amani</strong>
                      <p style="font-weight: lighter;">Target Evaluator at Nooshe jân</p>
                      <p class="second-text">All of my ongoing projects have greatly benefited from the expertise of Emon, who organized the SEO strategies behind them. I place my trust in his works for 2 reasons: his understanding of SEO and his analytical skills that allow him to optimize projects for optimal results.</p>
                  </div> */}
              <div className="feedback-card blue">
                <img
                  className="rounded-pill feedback-img mb-2"
                  src="images/3.png"
                  alt=""
                />
                <strong className="tip">Saanvi Aarna</strong>
                <p style={{ fontWeight: "lighter" }}>
                  Marketing Head at Bill Express
                </p>
                <p className="second-text">
                  Mr. Arefin possesses an unparalleled level of energy, making
                  him the most dynamic individual I've ever collaborated with.
                  His approach to tasks is methodical, ensuring efficient
                  outcomes are achieved. Moreover, he has a remarkable talent
                  for assembling and nurturing teams.
                </p>
              </div>
              <div className="feedback-card green">
                <img
                  className="rounded-pill feedback-img mb-2"
                  src="images/5.png"
                  alt=""
                />
                <strong className="tip">Yù míng</strong>
                <p style={{ fontWeight: "lighter" }}>
                  Co-founder and Project Manager
                </p>
                <p className="second-text">
                  Mr. Emon Arefin developed the SEO strategies for all the
                  projects I’m working on. I rely on his predictions for two
                  obvious reasons: His thorough SEO knowledge, and his deep
                  analytical ability to evaluate a project and refining it for a
                  better outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  {/* feedback end */}
</>

  );
};

export default Review;
