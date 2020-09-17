import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="skills">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Skills</span>
					<h2 className="colorlib-heading">Here's What I Can Do</h2>
					</div>
				</div>
        <div className="colorlib-narrow-content">

            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1" style={{background: '#fff7e8'}}>
                <span className="icon">
                    <i className="icon-code" style={{fontSize:'50px'}}/>
                </span>
                <div className="desc">
                    <h3>Languages </h3>
                    <p>C++ | Java | Python | JavaScript | HTML5/CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2" style={{background: '#fff7e8'}}>
                <span className="icon">
                    <i className="icon-spanner" style={{fontSize:'50px'}}/>
                </span>
                <div className="desc">
                    <h3>Protocols and Libraries</h3>
                    <p>ReactJS | Experience working with different libraries for APIs, such as Twitter4J</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3" style={{background: '#fff7e8'}}>
                <span className="icon">
                    <i className="icon-cog" style={{fontSize:'50px'}}/>
                </span>
                <div className="desc">
                    <h3>Learning Now</h3>
                    <p>I'm currently playing around with Django and Unity! </p>
                </div>
                </div>
            </div>
            </div>
        </div>
			</div>
			</section>
      </div>
    )
  }
}
