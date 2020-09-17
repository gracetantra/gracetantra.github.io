import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/proj-1.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Personal Website</a></h3>
											<span style={{fontStyle: 'italic', color: 'rgba(255, 255, 255, 1)'}}>ReactJS, HTML5/CSS5, hosted with GitHub Pages</span>
                      <span style={{color: 'rgba(255, 255, 255, 1)'}}>I built this personal portfolio website to have a place to show my resume and my work. Though the template was sourced from Colorlib, I rendered the different parts into ReactJS components myself and changed a lot of the CSS and JSX to make this website my own.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/proj-2.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 02</a></h3>
                      <span>Description</span>
											<p className="icon">
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
            <div className="row">
              <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
                <div className="project" style={{backgroundImage: 'url(images/proj-3.png)'}}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work.html">Work 03</a></h3>
                      <span>Description</span>
                      <p className="icon">
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
                <div className="project" style={{backgroundImage: 'url(images/proj-4.png)'}}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work.html">Work 04</a></h3>
                      <span>Description</span>
                      <p className="icon">
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Click Here To See More On My Github Page!</a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
